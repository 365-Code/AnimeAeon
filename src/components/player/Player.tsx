"use client";
import * as React from "react";
import { APITypes, PlyrProps, usePlyr } from "plyr-react";
import "plyr-react/plyr.css";
import Hls from "hls.js";
import { Options } from "plyr";
const videoOptions = null;
const videoSource = null;

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
        default: levels[levels.length - 2].height,
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
    <div className="wrapper h-full w-full overflow-hidden rounded-xl object-scale-down">
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
