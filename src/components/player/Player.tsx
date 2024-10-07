"use client";
import * as React from "react";
import { APITypes, PlyrProps, usePlyr } from "plyr-react";
import "plyr-react/plyr.css";
import Hls from "hls.js";
import { Options } from "plyr";
const videoOptions = null;
const videoSource = null;

/**
 * This is a custom hook in TypeScript React that loads and attaches an HLS video source to a Plyr
 * player, and sets the quality options for the player.
 * @param {string} src - The source URL of the video that will be played.
 * @param {Options | null} options - `options` is an object that contains optional configuration
 * options for the Plyr player. It can include properties such as `autoplay`, `controls`, `loop`,
 * `muted`, `seekTime`, `volume`, and more. This parameter is optional and can be `null`.
 * @returns The `useHls` function returns an object with a single property `options`, which is of type
 * `Options | null`. The `options` object contains information about the video quality and any other
 * custom event listeners that may have been added.
 */

const useHls = (src: string, options: Options | null) => {
  const hls = React.useRef<Hls>(new Hls());
  const hasQuality = React.useRef<boolean>(false);
  const [plyrOptions, setPlyrOptions] = React.useState<Options | null>(options);

  React.useEffect(() => {
    hasQuality.current = false;
  }, [options]);

  React.useEffect(() => {
    hls.current.loadSource(src);
    hls.current.attachMedia(document.querySelector(".plyr-react")!);
    hls.current.on(Hls.Events.MANIFEST_PARSED, () => {
      if (hasQuality.current) return; // early quit if already set
      const levels = hls.current.levels;
      const quality: Options["quality"] = {
        default: levels[levels.length - 1].height,
        options: levels.map((level) => level.height),
        forced: true,
        onChange: (newQuality: number) => {
          levels.forEach((level, levelIndex) => {
            if (level.height === newQuality) {
              hls.current.currentLevel = levelIndex;
            }
          });
        },
      };
      let plyrControls = [
        "play-large",
        "play",
        "progress",
        "current-time",
        "mute",
        "volume",
        "captions",
        "settings",
        "rewind",
        "fast-forward",
        "airplay",
        "fullscreen",
      ];

      if (window.innerWidth <= 600) {
        plyrControls = plyrControls.filter((c) => c != "volume");
      }

      setPlyrOptions({
        ...plyrOptions,
        controls: plyrControls,
        quality,
        seekTime: 5,
        keyboard: { global: true, focused: true },
        storage: { enabled: false },
      });
      hasQuality.current = true;
    });
  }, [src]);

  return { options: plyrOptions };
};

const CustomPlyrInstance = React.forwardRef<
  APITypes,
  PlyrProps & { hlsSource: string }
>((props, ref) => {
  const { source, options = null, hlsSource } = props;
  const raptorRef = usePlyr(ref, {
    ...useHls(hlsSource, options),
    source,
  }) as React.MutableRefObject<HTMLVideoElement>;
  return <video ref={raptorRef} className="plyr-react plyr" />;
});

const Player = ({ source }: { source: string }) => {
  const ref = React.useRef<APITypes>(null);
  const supported = Hls.isSupported();  
  
  return (
    <div className="wrapper w-full h-full object-scale-down">
      {supported ? (
        <CustomPlyrInstance
          ref={ref}
          source={videoSource}
          options={videoOptions}
          hlsSource={source}
        />
      ) : (
        "HLS is not supported in your browser"
      )}
    </div>
  );
};

export default Player;

CustomPlyrInstance.displayName = "PlayerInstance";
