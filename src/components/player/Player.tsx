"use client";
import * as React from "react";
import { APITypes, PlyrProps, usePlyr } from "plyr-react";
import "plyr-react/plyr.css";
import Hls, { HlsConfig } from "hls.js";
import { Options } from "plyr";
const videoOptions = null;
const videoSource = null;

const hlsConfig = {
  maxBufferLength: 20, // Reduce buffer size to improve loading time
  maxMaxBufferLength: 60, // Limit the max buffer length
  maxBufferSize: 60 * 1000 * 1000, // Cap buffer size at 60MB
  maxBufferHole: 0.5, // Manage buffer gaps better
  lowLatencyMode: true, // Enable low-latency streaming for faster start
  startLevel: 1, // Start with a lower quality level
  autoStartLoad: true, // Auto start loading the stream
  startFragPrefetch: true, // Prefetch the next fragment to avoid buffering
  capLevelOnFPSDrop: true, // Adjust quality if FPS drops
} as HlsConfig;

const useHls = (src: string, options: Options | null) => {
  const hls = React.useRef<Hls>(new Hls(hlsConfig));
  // const hasQuality = React.useRef<boolean>(false);
  const hasQuality = React.useRef<boolean>(false);
  const [plyrOptions, setPlyrOptions] = React.useState<Options | null>(options);

  React.useEffect(() => {
    hasQuality.current = false;
  }, [options]);

  React.useEffect(() => {
    if (!src) return;
    hls.current.loadSource(src);
    hls.current.attachMedia(document.querySelector(".plyr-react")!);
    hls.current.on(Hls.Events.MANIFEST_PARSED, () => {
      if (hasQuality.current) return; // early quit if already set
      const levels = hls.current.levels;
      const availableQualities = hls.current!.levels.map((l) => l.height);
      availableQualities.unshift(0); // Prepend 0 to quality array
      const quality: Options["quality"] = {
        default: 0,
        options: availableQualities,
        forced: true,
        onChange: (newQuality: number) => updateQuality(newQuality),
      };

      // Update quality label on level switch
      hls.current!.on(Hls.Events.LEVEL_SWITCHED, (event, data) => {
        const span = document.querySelector(
          ".plyr__menu__container [data-plyr='quality'][value='0'] span",
        ) as HTMLSpanElement;
        if (hls.current!.autoLevelEnabled) {
          span.innerHTML = `AUTO (${hls.current!.levels[data.level].height}p)`;
        } else {
          span.innerHTML = `AUTO`;
        }
      });

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
        "fullscreen",
      ];

      if (typeof window !== undefined && window.innerWidth < 640) {
        plyrControls = plyrControls.filter((c) => c != "volume");
      }

      setPlyrOptions({
        ...plyrOptions,
        controls: plyrControls,
        quality,
        i18n: {
          qualityLabel: {
            0: "Auto",
          },
        },
        seekTime: 5,
        keyboard: { global: true, focused: true },
        storage: { enabled: false },
      });
      hasQuality.current = true;
    });

    return () => {
      if (hls.current) {
        hls.current.destroy();
      }
    };
  }, [src]);

  const updateQuality = (newQuality: number) => {
    if (hls.current) {
      if (newQuality === 0) {
        hls.current.currentLevel = -1; // Enable AUTO quality
      } else {
        hls.current.levels.forEach((level, levelIndex) => {
          if (level.height === newQuality && hls.current) {
            hls.current.currentLevel = levelIndex;
          }
        });
      }
    }
  };

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
  return <video ref={raptorRef} preload="auto" className="plyr-react plyr" />;
});

const Player = ({ source }: { source: string }) => {
  const ref = React.useRef<APITypes>(null);
  const supported = Hls.isSupported();
  const mountRef = React.useRef<boolean>(false);

  React.useEffect(() => {
    if (!mountRef.current) mountRef.current = true;
  }, [source]);

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
