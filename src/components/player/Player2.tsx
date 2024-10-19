import React, { useEffect, useRef } from "react";
import Hls, { HlsConfig } from "hls.js";
import Plyr, { Options } from "plyr";
import "plyr/dist/plyr.css";

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

const Player: React.FC<{ source: string }> = ({ source }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<Plyr | null>(null);
  const hlsRef = useRef<Hls | null>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const defaultOptions = {} as Options;

    if (!Hls.isSupported()) {
      // Fallback for browsers that do not support HLS
      video.src = source;
      playerRef.current = new Plyr(video, defaultOptions);
    } else {
      // Initialize Hls.js
      hlsRef.current = new Hls(hlsConfig);
      hlsRef.current.loadSource(source);

      hlsRef.current.on(Hls.Events.MANIFEST_PARSED, () => {
        // Transform available levels into an array of integers (height values)
        const availableQualities = hlsRef.current!.levels.map((l) => l.height);
        availableQualities.unshift(0); // Prepend 0 to quality array

        // Dynamically adjust controls based on window size
        const controls = [
          "play-large",
          "play",
          "progress",
          "current-time",
          "mute",
          "captions",
          "settings",
          "rewind",
          "fast-forward",
          "fullscreen",
        ];

        if (window.innerWidth < 600) {
          const filteredControls = controls.filter(
            (control) => control !== "volume",
          );
          defaultOptions.controls = filteredControls; // Remove volume if window is small
        } else {
          defaultOptions.controls = controls; // Use all controls for larger windows
        }

        // Add new qualities to options
        defaultOptions.quality = {
          default: 0, // Default - AUTO
          options: availableQualities,
          forced: true,
          onChange: (newQuality: number) => updateQuality(newQuality),
        };
        // Add Auto Label
        defaultOptions.i18n = {
          qualityLabel: {
            0: "Auto",
          },
        };

        // Update quality label on level switch
        hlsRef.current!.on(Hls.Events.LEVEL_SWITCHED, (event, data) => {
          const span = document.querySelector(
            ".plyr__menu__container [data-plyr='quality'][value='0'] span",
          ) as HTMLSpanElement;
          if (hlsRef.current!.autoLevelEnabled) {
            span.innerHTML = `AUTO (${hlsRef.current!.levels[data.level].height}p)`;
          } else {
            span.innerHTML = `AUTO`;
          }
        });

        // Initialize new Plyr player with quality options
        playerRef.current = new Plyr(video, defaultOptions);
      });

      hlsRef.current.attachMedia(video);
      (window as any).hls = hlsRef.current; // For debugging if needed
    }

    // Cleanup function to destroy player and Hls instance
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };
  }, [source]);

  const updateQuality = (newQuality: number) => {
    if (hlsRef.current) {
      if (newQuality === 0) {
        hlsRef.current.currentLevel = -1; // Enable AUTO quality
      } else {
        hlsRef.current.levels.forEach((level, levelIndex) => {
          if (level.height === newQuality && hlsRef.current) {
            hlsRef.current.currentLevel = levelIndex;
          }
        });
      }
    }
  };

  return (
    <div className="wrapper h-full w-full overflow-hidden rounded-xl object-scale-down">
      <video ref={videoRef} preload="auto" className="plyr-react plyr" />
    </div>
  );
};

export default Player;
