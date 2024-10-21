"use client";

import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CustomSlider, Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  Settings,
  Loader2,
  Volume1,
  Volume,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Hls from "hls.js";
import Link from "next/link";
import { IAnimeEpisode } from "@consumet/extensions";

const formatTime = (value: number) => {
  if (isNaN(value)) {
    return "00:00";
  }
  let totalSeconds = value;
  const hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = String(Math.floor(totalSeconds / 60));
  let seconds = String(Math.floor(totalSeconds % 60));
  seconds = seconds.padStart(2, "0");
  if (hours > 0) {
    minutes = minutes.padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  } else {
    return `${minutes}:${seconds}`;
  }
};

const skipSecs = 5;
const CustomReactPlayer = ({
  source = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
  episodes,
  currentEpisode,
}: {
  episodes?: IAnimeEpisode[];
  source: string;
  currentEpisode?: string;
}) => {
  const [playing, setPlaying] = useState(false);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const [showPlayPauseIcon, setShowPlayPauseIcon] = useState(false);
  const [showVolumeIndicator, setShowVolumeIndicator] = useState("");
  const [showSkipIcon, setShowSkipIcon] = useState<
    "forward" | "backward" | null
  >(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hoverTime, setHoverTime] = useState<number | null>(null);
  const [qualities, setQualities] = useState<string[]>([
    "auto",
    "1080",
    "720",
    "480",
    "360",
  ]);
  const [currentQuality, setCurrentQuality] = useState("auto");
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [showControls, setShowControls] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const playerRef = useRef<ReactPlayer>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const skipRef = useRef<NodeJS.Timeout | null>(null);
  const volumeRef = useRef<NodeJS.Timeout | null>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handlePlayPause = () => {
    setPlaying(!playing);
    setShowPlayPauseIcon(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setShowPlayPauseIcon(false), 1000);
  };

  const [showMuteIcon, setShowMuteIcon] = useState("");
  const handleMute = () => {
    setMuted((prev) => !prev);
    setShowMuteIcon(muted ? "unmute" : "mute");
    setTimeout(() => setShowMuteIcon(""), 500);
  };

  const handleVolumeChange = (newVolume: number[] | number) => {
    let vol = 0;
    if (typeof newVolume == "number") {
      setVolume(() => newVolume);
      vol = newVolume;
    } else {
      setVolume(() => newVolume[0]);
      vol = newVolume[0];
    }
    setShowVolumeIndicator(vol > volume ? "up" : vol < volume ? "down" : "");
    if (volumeRef.current) clearTimeout(volumeRef.current);
    volumeRef.current = setTimeout(() => setShowVolumeIndicator(""), 500);
  };

  const handleSeekChange = (newProgress: number[]) => {
    setCurrentProgress(newProgress[0]);
    playerRef.current?.seekTo(newProgress[0]);
  };

  const handleSkip = (seconds: number) => {
    const newTime = currentProgress + seconds;
    setCurrentProgress(Math.min(Math.max(newTime, 0), duration));
    playerRef.current?.seekTo(newTime);
    setShowSkipIcon(seconds > 0 ? "forward" : "backward");
    if (skipRef.current) clearTimeout(skipRef.current);
    skipRef.current = setTimeout(() => setShowSkipIcon(null), 1000);
  };

  const handleDoubleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { left, width, top, height } =
      containerRef.current!.getBoundingClientRect();
    const clickPositionX = (clientX - left) / width;
    const clickPositionY = (clientY - top) / height;

    if (isMobile) {
      if (clickPositionX < 1 / 3) {
        handleSkip(-1 * skipSecs);
      } else if (clickPositionX > 2 / 3) {
        handleSkip(skipSecs);
      } else if (clickPositionY > 1 / 3 && clickPositionY < 2 / 3) {
        handleFullscreenToggle();
      }
    } else if (
      clickPositionY > 1 / 3 &&
      clickPositionY < 2 / 3 &&
      clickPositionX > 1 / 3 &&
      clickPositionX < 2 / 3
    ) {
      handleFullscreenToggle();
    }
  };

  const handleFullscreenToggle = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const handleProgressHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX } = e;
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const hoverPosition = (clientX - left) / width;
    setHoverTime(hoverPosition * duration);
  };

  const hlsRef = useRef<Hls | null>(null);

  const handleQualityChange = (quality: string) => {
    setCurrentQuality(() => quality);

    if (hlsRef.current) {
      if (quality === "auto") {
        hlsRef.current.currentLevel = -1; // Enable AUTO quality
      } else {
        const levelIndex = hlsRef.current.levels.findIndex(
          (level) => level.height === parseInt(quality),
        );
        if (levelIndex !== -1) {
          hlsRef.current.currentLevel = levelIndex;
        }
      }
    }
  };

  const [showPlayBackIcon, setShowPlayBackIcon] = useState<
    "fast" | "slow" | ""
  >("");
  const handlePlaybackSpeedChange = (speed: string) => {
    const newSpeed = parseFloat(speed);
    setPlaybackSpeed(() => newSpeed);
    if (playerRef.current) {
      const internalPlayer = playerRef.current.getInternalPlayer();
      if (internalPlayer && "playbackRate" in internalPlayer) {
        (internalPlayer as HTMLVideoElement).playbackRate = newSpeed;
        setShowPlayBackIcon(newSpeed > playbackSpeed ? "fast" : "slow");
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setShowPlayBackIcon(""), 1000);
      }
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    if (isFullscreen) {
      controlsTimeoutRef.current = setTimeout(
        () => setShowControls(false),
        3000,
      );
    }
  };

  useEffect(() => {
    if (Hls.isSupported() && playerRef.current) {
      const hls = new Hls();
      hlsRef.current = hls;
      hls.loadSource(source);
      hls.attachMedia(
        playerRef.current.getInternalPlayer() as HTMLVideoElement,
      );

      hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
        const availableQualities = data.levels.map((level) =>
          level.height.toString(),
        );
        setQualities(["auto", ...availableQualities]);
        setCurrentQuality("auto");
      });

      return () => {
        if (hlsRef.current) {
          hlsRef.current.destroy();
        }
      };
    }
  }, [source]);

  const adjustPlaybackSpeed = (increment: boolean) => {
    const speeds = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
    const currentIndex = speeds.indexOf(playbackSpeed);
    let newIndex = increment ? currentIndex + 1 : currentIndex - 1;
    newIndex = Math.max(0, Math.min(newIndex, speeds.length - 1));
    handlePlaybackSpeedChange(speeds[newIndex].toString());
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        containerRef.current &&
        containerRef.current.contains(document.activeElement)
      ) {
        switch (e.key) {
          case " ":
            e.preventDefault();
            handlePlayPause();
            break;
          case "ArrowUp":
            e.preventDefault();
            handleVolumeChange(Math.min(volume + 0.1, 1));
            break;
          case "ArrowDown":
            e.preventDefault();
            handleVolumeChange(Math.max(volume - 0.1, 0));
            break;
          case "ArrowRight":
            e.preventDefault();
            handleSkip(skipSecs);
            break;
          case "ArrowLeft":
            e.preventDefault();
            handleSkip(-1 * skipSecs);
            break;
          case "m":
            e.preventDefault();
            handleMute();
            break;
          case "f":
            e.preventDefault();
            handleFullscreenToggle();
            break;
          case ">":
            if (e.shiftKey) {
              e.preventDefault();
              adjustPlaybackSpeed(true);
            }
            break;
          case "<":
            if (e.shiftKey) {
              e.preventDefault();
              adjustPlaybackSpeed(false);
            }
            break;
        }
      }
    };

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Adjust this breakpoint as needed
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      window.removeEventListener("resize", handleResize);
    };
  }, [currentProgress, duration, muted, volume]);

  const [epNumber, setEpNumber] = useState(1);
  useEffect(() => {
    if (episodes && episodes.length > 1) {
      const index = episodes.findIndex((b) => b.id == currentEpisode);
      if (index != -1) setEpNumber(index + 1);
    }
  }, [episodes, currentEpisode]);

  const hasPrev = epNumber <= 1 ? false : true;
  const hasNext = episodes && epNumber >= episodes.length ? false : true;

  const [isLoading, setIsLoading] = useState(true);
  const handleReady = () => {
    setIsLoading(false);
  };

  const [isBuffering, setIsBuffering] = useState(false);
  const handleBuffer = () => {
    setIsBuffering(true);
  };

  const handleBufferEnd = () => {
    setIsBuffering(false);
  };

  return (
    <Card
      className="relative aspect-video w-full overflow-hidden rounded-xl border-none outline-none"
      ref={containerRef}
      tabIndex={0}
      onMouseMove={handleMouseMove}
    >
      <div
        className="absolute inset-0 z-10"
        onClick={handlePlayPause}
        onDoubleClick={handleDoubleClick}
      />
      <ReactPlayer
        ref={playerRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
        }}
        width="100%"
        height="100%"
        url={source}
        playing={playing}
        volume={volume}
        muted={muted}
        playbackRate={playbackSpeed}
        onDuration={setDuration}
        onProgress={({ playedSeconds }) => setCurrentProgress(playedSeconds)}
        onReady={handleReady}
        onBuffer={handleBuffer}
        onBufferEnd={handleBufferEnd}
      />
      <div className="absolute left-0 top-0 h-full w-full">
        <div className="flex h-full w-full flex-col">
          {(isLoading || isBuffering) && (
            <div className="absolute inset-0 flex items-center justify-center bg-transparent/50">
              <Loader2 className="h-12 w-12 animate-spin text-white" />
            </div>
          )}
          {showVolumeIndicator && (
            <div className="absolute inset-0 z-30 flex items-center justify-center bg-opacity-50">
              <div className="animate-ping rounded-xl bg-transparent/50 p-2">
                {showVolumeIndicator == "up" ? (
                  <Volume2 className="h-3 w-3 text-white sm:h-4 sm:w-4" />
                ) : (
                  <Volume1 className="h-3 w-3 text-white sm:h-4 sm:w-4" />
                )}
              </div>
            </div>
          )}
          {showMuteIcon && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                variant={"ghost"}
                className="h-12 w-12 animate-ping bg-transparent/50 p-0"
              >
                {showMuteIcon == "mute" ? (
                  <VolumeX className="animate-pulse text-white" />
                ) : (
                  <Volume2 className="animate-pulse text-white" />
                )}
              </Button>
            </div>
          )}
          {/* On Screen Actions */}
          <div className="absolute left-0 top-0 h-full w-full">
            <div className="pointer-events-none flex h-full w-full flex-1">
              <div className="inset-0 z-20 flex h-full flex-1 items-center justify-center">
                {showSkipIcon === "backward" && (
                  <Badge className="animate-ping rounded-full bg-transparent/50 p-4 sm:p-5">
                    <Rewind className="h-3 w-3 fill-white text-white sm:h-4 sm:w-4" />
                  </Badge>
                )}
              </div>
              <div className="inset-0 z-20 flex h-full flex-1 items-center justify-center">
                {showPlayPauseIcon && (
                  <Badge className="animate-ping rounded-full bg-transparent/50 p-4 sm:p-6">
                    {playing ? (
                      <Pause className="h-3 w-3 fill-white text-white sm:h-5 sm:w-5" />
                    ) : (
                      <Play className="h-3 w-3 fill-white text-white sm:h-5 sm:w-5" />
                    )}
                  </Badge>
                )}
                {showVolumeIndicator && (
                  <Button className="absolute top-4 animate-pulse items-center justify-center gap-2 bg-transparent/40 text-xs text-white sm:text-base md:text-lg md:font-medium">
                    {Math.floor(volume * 100)}%
                  </Button>
                )}
                {showPlayBackIcon && (
                  <Button className="absolute top-4 animate-pulse items-center justify-center gap-2 bg-transparent/40 text-xs text-white sm:text-base md:text-lg md:font-medium">
                    {playbackSpeed}x
                  </Button>
                )}
              </div>
              <div className="inset-0 z-20 flex h-full flex-1 items-center justify-center">
                {showSkipIcon === "forward" && (
                  <Badge className="animate-ping rounded-full bg-transparent/50 p-4 sm:p-5">
                    <FastForward className="h-3 w-3 fill-white text-white sm:h-4 sm:w-4" />
                  </Badge>
                )}
              </div>
            </div>
          </div>
          {/* Controls */}
          {(showControls || !isFullscreen) && (
            <div className="absolute bottom-0 left-0 z-20 w-full">
              <div className="bg-gradient-to-t from-black to-transparent p-2">
                <div
                  className="relative mb-2 w-full"
                  onMouseMove={handleProgressHover}
                  onMouseLeave={() => setHoverTime(null)}
                >
                  <CustomSlider
                    value={[currentProgress]}
                    max={duration}
                    trackHeight="3px"
                    thumbSize="12px"
                    step={0.1}
                    className="cursor-pointer"
                    onValueChange={handleSeekChange}
                  />
                  {hoverTime !== null && (
                    <Badge
                      className="absolute bottom-full mb-1 rounded px-1 py-0.5 text-xs  sm:mb-2 sm:px-2 sm:py-1"
                      style={{
                        left: `${(hoverTime / duration) * 100}%`,
                        transform: "translateX(-50%)",
                      }}
                    >
                      {formatTime(hoverTime)}
                    </Badge>
                  )}
                </div>
                <TooltipProvider>
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      {episodes && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link
                              href={
                                hasPrev
                                  ? "?episode=" + episodes[epNumber - 2].id
                                  : ""
                              }
                              className={!hasPrev ? "pointer-events-none" : ""}
                            >
                              <Button
                                variant="button"
                                size="icon"
                                className="h-8 w-8 sm:h-10 sm:w-10"
                                disabled={!hasPrev}
                                // onClick={() => handleSkip(-5)}
                              >
                                <SkipBack
                                  fill="white"
                                  className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
                                />
                              </Button>
                            </Link>
                          </TooltipTrigger>
                          {hasPrev && (
                            <TooltipContent className="text-xs font-medium">
                              Episode - {epNumber - 1}
                            </TooltipContent>
                          )}
                        </Tooltip>
                      )}

                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            size="icon"
                            variant="button"
                            className="h-8 w-8 sm:h-10 sm:w-10"
                            onClick={handlePlayPause}
                          >
                            {playing ? (
                              <Pause
                                fill="white"
                                className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
                              />
                            ) : (
                              <Play
                                fill="white"
                                className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
                              />
                            )}
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent className="text-xs font-medium">
                          {playing ? "Pause" : "Play"}
                        </TooltipContent>
                      </Tooltip>
                      {episodes && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link
                              href={
                                hasNext
                                  ? "?episode=" + episodes[epNumber].id
                                  : ""
                              }
                            >
                              <Button
                                variant="button"
                                size="icon"
                                className="h-8 w-8 sm:h-10 sm:w-10"
                                onClick={() => handleSkip(5)}
                              >
                                <SkipForward
                                  fill="white"
                                  className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
                                />
                              </Button>
                            </Link>
                          </TooltipTrigger>
                          {hasNext && (
                            <TooltipContent className="text-xs font-medium">
                              Episode - {epNumber}
                            </TooltipContent>
                          )}
                        </Tooltip>
                      )}

                      <div className="flex items-center space-x-1 sm:space-x-2">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="button"
                              size="icon"
                              className="h-8 w-8 sm:h-10 sm:w-10"
                              onClick={handleMute}
                            >
                              {muted ? (
                                <VolumeX
                                  fill="white"
                                  className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
                                />
                              ) : (
                                <Volume2
                                  fill="white"
                                  className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
                                />
                              )}
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent className="text-xs font-medium">
                            {muted ? "Unmute" : "Mute"}
                          </TooltipContent>
                        </Tooltip>

                        {/* volume */}
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <CustomSlider
                              value={[volume]}
                              max={1}
                              step={0.01}
                              thumbSize="10px"
                              trackHeight="4px"
                              onValueChange={handleVolumeChange}
                              className="hidden w-24 cursor-pointer sm:flex"
                            />
                          </TooltipTrigger>
                          <TooltipContent className="-translate-y-4">
                            Volume
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <span className="text-xs sm:text-sm">
                        {formatTime(currentProgress)} / {formatTime(duration)}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <VideoSettingsMenu
                        qualities={qualities}
                        onQualityChange={handleQualityChange}
                        currentQuality={currentQuality}
                        playbackSpeed={playbackSpeed}
                        onPlaybackSpeedChange={handlePlaybackSpeedChange}
                      />
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={handleFullscreenToggle}
                          >
                            {isFullscreen ? (
                              <Minimize className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                            ) : (
                              <Maximize className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                            )}
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent className="text-xs font-semibold">
                          {isFullscreen ? "Minimize" : "Fullscreen"}
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </div>
                </TooltipProvider>
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default CustomReactPlayer;

interface VideoSettingsMenuProps {
  qualities: string[];
  currentQuality: string;
  onQualityChange: (quality: string) => void;
  playbackSpeed: number;
  onPlaybackSpeedChange: (speed: string) => void;
}

const VideoSettingsMenu = ({
  qualities,
  currentQuality,
  onQualityChange,
  playbackSpeed,
  onPlaybackSpeedChange,
}: VideoSettingsMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <Button
        variant="button"
        size="icon"
        className="group/settings h-8 w-8 transition-colors hover:bg-white/10 sm:h-10 sm:w-10"
        onClick={toggleMenu}
      >
        {/* <p className="absolute bg-transparent text-[6px] sm:text-[10px] -top-3">
          {playbackSpeed}x
        </p> */}
        <Settings
          className={`${
            isOpen ? "rotate-45" : "rotate-0"
          } relative h-4 w-4 transition-all sm:h-5 sm:w-5 md:h-6 md:w-6`}
        />
        {/* <p className="absolute bg-transparent text-[6px] sm:text-[10px] -bottom-3">
          {currentQuality === "auto" ? "AUTO" : currentQuality + "p"}
        </p> */}
      </Button>
      <div
        className={`${
          isOpen
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        } absolute bottom-full right-0 mb-2 w-48 rounded-md bg-black bg-opacity-80 shadow-lg transition-all`}
      >
        <div className="space-y-2 p-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-white">Quality</span>
            <Select value={currentQuality} onValueChange={onQualityChange}>
              <SelectTrigger className="w-24 border-white/20 bg-transparent text-xs text-white">
                <SelectValue placeholder="Quality" />
              </SelectTrigger>
              <SelectContent className="border-white/20 bg-black bg-opacity-80 text-white">
                {qualities.map((quality) => (
                  <SelectItem
                    key={quality}
                    value={quality}
                    className="text-white hover:bg-white/10"
                  >
                    {quality === "auto" ? "Auto" : `${quality}p`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-white">Speed</span>
            <Select
              value={playbackSpeed.toString()}
              onValueChange={onPlaybackSpeedChange}
            >
              <SelectTrigger className="w-24 border-white/20 bg-transparent text-xs text-white">
                <SelectValue placeholder="Speed" />
              </SelectTrigger>
              <SelectContent className="border-white/20 bg-black bg-opacity-80 text-white">
                {[0.5, 0.75, 1, 1.25, 1.5, 1.75, 2].map((speed) => (
                  <SelectItem
                    key={speed}
                    value={String(speed)}
                    className="text-white hover:bg-white/10"
                  >
                    {speed}x
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import ReactPlayer from "react-player";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { CustomSlider, Slider } from "@/components/ui/slider";
// import { Badge } from "@/components/ui/badge";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import {
//   Play,
//   Pause,
//   Volume2,
//   VolumeX,
//   Maximize,
//   Minimize,
//   SkipBack,
//   SkipForward,
//   Rewind,
//   FastForward,
//   Settings,
//   Loader2,
// } from "lucide-react";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import Hls from "hls.js";
// import Link from "next/link";
// import { IAnimeEpisode } from "@consumet/extensions";

// const formatTime = (value: number) => {
//   if (isNaN(value)) {
//     return "00:00";
//   }
//   let totalSeconds = value;
//   const hours = Math.floor(totalSeconds / 3600);
//   totalSeconds %= 3600;
//   let minutes = String(Math.floor(totalSeconds / 60));
//   let seconds = String(Math.floor(totalSeconds % 60));
//   seconds = seconds.padStart(2, "0");
//   if (hours > 0) {
//     minutes = minutes.padStart(2, "0");
//     return `${hours}:${minutes}:${seconds}`;
//   } else {
//     return `${minutes}:${seconds}`;
//   }
// };

// const CustomReactPlayer = ({
//   source = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
//   episodes,
//   currentEpisode,
// }: {
//   episodes?: IAnimeEpisode[];
//   source: string;
//   currentEpisode?: string;
// }) => {
//   const [playing, setPlaying] = useState(false);
//   const [currentProgress, setCurrentProgress] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [volume, setVolume] = useState(1);
//   const [muted, setMuted] = useState(false);
//   const [showPlayPauseIcon, setShowPlayPauseIcon] = useState(false);
//   const [showSkipIcon, setShowSkipIcon] = useState<
//     "forward" | "backward" | null
//   >(null);
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [hoverTime, setHoverTime] = useState<number | null>(null);
//   const [qualities, setQualities] = useState<string[]>([
//     "auto",
//     "1080",
//     "720",
//     "480",
//     "360",
//   ]);
//   const [currentQuality, setCurrentQuality] = useState("auto");
//   const [playbackSpeed, setPlaybackSpeed] = useState(1);
//   const [showControls, setShowControls] = useState(true);
//   const [isMobile, setIsMobile] = useState(false);

//   const playerRef = useRef<ReactPlayer>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const timeoutRef = useRef<NodeJS.Timeout | null>(null);
//   const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

//   const handlePlayPause = () => {
//     setPlaying(!playing);
//     setShowPlayPauseIcon(true);
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     timeoutRef.current = setTimeout(() => setShowPlayPauseIcon(false), 1000);
//   };

//   const handleMute = () => setMuted(!muted);
//   const handleVolumeChange = (newVolume: number[]) => setVolume(newVolume[0]);
//   const handleSeekChange = (newProgress: number[]) => {
//     setCurrentProgress(newProgress[0]);
//     playerRef.current?.seekTo(newProgress[0]);
//   };

//   const handleSkip = (seconds: number) => {
//     const newTime = currentProgress + seconds;
//     setCurrentProgress(Math.min(Math.max(newTime, 0), duration));
//     playerRef.current?.seekTo(newTime);
//     setShowSkipIcon(seconds > 0 ? "forward" : "backward");
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     timeoutRef.current = setTimeout(() => setShowSkipIcon(null), 1000);
//   };

//   const handleDoubleClick = (e: React.MouseEvent<HTMLDivElement>) => {
//     const { clientX, clientY } = e;
//     const { left, width, top, height } =
//       containerRef.current!.getBoundingClientRect();
//     const clickPositionX = (clientX - left) / width;
//     const clickPositionY = (clientY - top) / height;

//     if (isMobile) {
//       if (clickPositionX < 1 / 3) {
//         handleSkip(-10);
//       } else if (clickPositionX > 2 / 3) {
//         handleSkip(10);
//       } else if (clickPositionY > 1 / 3 && clickPositionY < 2 / 3) {
//         handleFullscreenToggle();
//       }
//     } else if (
//       clickPositionY > 1 / 3 &&
//       clickPositionY < 2 / 3 &&
//       clickPositionX > 1 / 3 &&
//       clickPositionX < 2 / 3
//     ) {
//       handleFullscreenToggle();
//     }
//   };

//   const handleFullscreenToggle = () => {
//     if (!document.fullscreenElement) {
//       containerRef.current?.requestFullscreen();
//     } else {
//       document.exitFullscreen();
//     }
//   };

//   const handleProgressHover = (e: React.MouseEvent<HTMLDivElement>) => {
//     const { clientX } = e;
//     const { left, width } = e.currentTarget.getBoundingClientRect();
//     const hoverPosition = (clientX - left) / width;
//     setHoverTime(hoverPosition * duration);
//   };

//   const hlsRef = useRef<Hls | null>(null);
//   // ... (other refs remain the same)

//   const updateQuality = (newQuality: number) => {
//     if (hlsRef.current) {
//       if (newQuality === 0) {
//         hlsRef.current.currentLevel = -1; // Enable AUTO quality
//       } else {
//         hlsRef.current.levels.forEach((level, levelIndex) => {
//           if (level.height === newQuality && hlsRef.current) {
//             hlsRef.current.currentLevel = levelIndex;
//           }
//         });
//       }
//     }
//   };

//   const handleQualityChange = (quality: string) => {
//     setCurrentQuality(() => quality);

//     if (hlsRef.current) {
//       if (quality === "auto") {
//         hlsRef.current.currentLevel = -1; // Enable AUTO quality
//       } else {
//         const levelIndex = hlsRef.current.levels.findIndex(
//           (level) => level.height === parseInt(quality),
//         );
//         if (levelIndex !== -1) {
//           hlsRef.current.currentLevel = levelIndex;
//         }
//       }
//     }
//   };

//   const [showPlayBackIcon, setShowPlayBackIcon] = useState("");
//   const handlePlaybackSpeedChange = (speed: string) => {
//     const newSpeed = parseFloat(speed);
//     setPlaybackSpeed(() => newSpeed);
//     if (playerRef.current) {
//       const internalPlayer = playerRef.current.getInternalPlayer();
//       if (internalPlayer && "playbackRate" in internalPlayer) {
//         (internalPlayer as HTMLVideoElement).playbackRate = newSpeed;
//         setShowPlayBackIcon(newSpeed > playbackSpeed ? "fast" : "slow");
//         if (timeoutRef.current) clearTimeout(timeoutRef.current);
//         timeoutRef.current = setTimeout(() => setShowPlayBackIcon(""), 1000);
//       }
//     }
//   };

//   const handleMouseMove = () => {
//     setShowControls(true);
//     if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
//     if (isFullscreen) {
//       controlsTimeoutRef.current = setTimeout(
//         () => setShowControls(false),
//         3000,
//       );
//     }
//   };

//   useEffect(() => {
//     if (Hls.isSupported() && playerRef.current) {
//       const hls = new Hls();
//       hlsRef.current = hls;
//       hls.loadSource(source);
//       hls.attachMedia(
//         playerRef.current.getInternalPlayer() as HTMLVideoElement,
//       );

//       hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
//         const availableQualities = data.levels.map((level) =>
//           level.height.toString(),
//         );
//         setQualities(["auto", ...availableQualities]);
//         setCurrentQuality("auto");
//       });

//       return () => {
//         if (hlsRef.current) {
//           hlsRef.current.destroy();
//         }
//       };
//     }
//   }, [source]);

//   const adjustPlaybackSpeed = (increment: boolean) => {
//     const speeds = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
//     const currentIndex = speeds.indexOf(playbackSpeed);
//     let newIndex = increment ? currentIndex + 1 : currentIndex - 1;
//     newIndex = Math.max(0, Math.min(newIndex, speeds.length - 1));
//     handlePlaybackSpeedChange(speeds[newIndex].toString());
//   };

//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (
//         containerRef.current &&
//         containerRef.current.contains(document.activeElement)
//       ) {
//         switch (e.key) {
//           case " ":
//             e.preventDefault();
//             handlePlayPause();
//             break;
//           case "ArrowRight":
//             e.preventDefault();
//             handleSkip(5);
//             break;
//           case "ArrowLeft":
//             e.preventDefault();
//             handleSkip(-5);
//             break;
//           case "m":
//             e.preventDefault();
//             handleMute();
//             break;
//           case "f":
//             e.preventDefault();
//             handleFullscreenToggle();
//             break;
//           case ">":
//             if (e.shiftKey) {
//               e.preventDefault();
//               adjustPlaybackSpeed(true);
//             }
//             break;
//           case "<":
//             if (e.shiftKey) {
//               e.preventDefault();
//               adjustPlaybackSpeed(false);
//             }
//             break;
//         }
//       }
//     };

//     const handleFullscreenChange = () => {
//       setIsFullscreen(!!document.fullscreenElement);
//     };

//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 640); // Adjust this breakpoint as needed
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     document.addEventListener("fullscreenchange", handleFullscreenChange);
//     window.addEventListener("resize", handleResize);
//     handleResize(); // Initial check

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       document.removeEventListener("fullscreenchange", handleFullscreenChange);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [currentProgress, duration]);

//   const [epNumber, setEpNumber] = useState(1);
//   useEffect(() => {
//     if (episodes && episodes.length > 1) {
//       const index = episodes.findIndex((b) => b.id == currentEpisode);
//       if (index != -1) setEpNumber(index + 1);
//     }
//   }, [episodes, currentEpisode]);

//   const hasPrev = epNumber <= 1 ? false : true;
//   const hasNext = episodes && epNumber >= episodes.length ? false : true;

//   const [isLoading, setIsLoading] = useState(true);
//   const [isBuffering, setIsBuffering] = useState(false);

//   const handleReady = () => {
//     setIsLoading(false);
//   };

//   const handleBuffer = () => {
//     setIsBuffering(true);
//   };

//   const handleBufferEnd = () => {
//     setIsBuffering(false);
//   };

//   return (
//     <Card
//       className="relative aspect-video w-full overflow-hidden rounded-xl border-none outline-none"
//       ref={containerRef}
//       tabIndex={0}
//       onMouseMove={handleMouseMove}
//     >
//       <div
//         className="absolute inset-0 z-10"
//         onClick={handlePlayPause}
//         onDoubleClick={handleDoubleClick}
//       />
//       <ReactPlayer
//         ref={playerRef}
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//         }}
//         width="100%"
//         height="100%"
//         url={source}
//         playing={playing}
//         volume={volume}
//         muted={muted}
//         playbackRate={playbackSpeed}
//         onDuration={setDuration}
//         onProgress={({ playedSeconds }) => setCurrentProgress(playedSeconds)}
//         onReady={handleReady}
//         onBuffer={handleBuffer}
//         onBufferEnd={handleBufferEnd}
//       />
//       <div className="absolute left-0 top-0 h-full w-full">
//         <div className="flex h-full w-full flex-col">
//         {(isLoading || isBuffering) && (
//             <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30">
//               <Loader2 className="w-12 h-12 text-white animate-spin" />
//             </div>
//           )}
//           {/* On Screen Actions */}
//           <div className="pointer-events-none flex h-full w-full flex-1">
//             <div className="inset-0 z-20 flex h-full flex-1 items-center justify-center">
//               {showSkipIcon === "backward" && (
//                 <Badge className="rounded-full p-4 sm:p-6 md:p-8">
//                   <Rewind className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8" />
//                 </Badge>
//               )}
//             </div>
//             <div className="inset-0 z-20 flex h-full flex-1 items-center justify-center">
//               {showPlayPauseIcon && (
//                 <Badge className="rounded-full p-2 sm:p-3 md:p-4">
//                   {playing ? (
//                     <Pause className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
//                   ) : (
//                     <Play className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
//                   )}
//                 </Badge>
//               )}
//               {showPlayBackIcon && (
//                 <Button className="absolute top-4 animate-pulse items-center justify-center gap-2 bg-transparent/40 text-lg font-medium">
//                   {showPlayBackIcon == "slow" && <Rewind size={20} />}
//                   {playbackSpeed}x
//                   {showPlayBackIcon == "fast" && <FastForward size={20} />}
//                 </Button>
//               )}
//             </div>
//             <div className="inset-0 z-20 flex h-full flex-1 items-center justify-center">
//               {showSkipIcon === "forward" && (
//                 <Badge className="rounded-full p-4 sm:p-6 md:p-8">
//                   <FastForward className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8" />
//                 </Badge>
//               )}
//             </div>
//           </div>
//           {/* Controls */}
//           {(showControls || !isFullscreen) && (
//             <div className="z-20 bg-gradient-to-t from-black to-transparent p-2">
//               <div
//                 className="relative mb-2 w-full"
//                 onMouseMove={handleProgressHover}
//                 onMouseLeave={() => setHoverTime(null)}
//               >
//                 <CustomSlider
//                   value={[currentProgress]}
//                   max={duration}
//                   trackHeight="3px"
//                   thumbSize="12px"
//                   step={0.1}
//                   className="cursor-pointer"
//                   onValueChange={handleSeekChange}
//                 />
//                 {hoverTime !== null && (
//                   <div
//                     className="absolute bottom-full mb-1 rounded bg-black px-1 py-0.5 text-xs text-white sm:mb-2 sm:px-2 sm:py-1"
//                     style={{
//                       left: `${(hoverTime / duration) * 100}%`,
//                       transform: "translateX(-50%)",
//                     }}
//                   >
//                     {formatTime(hoverTime)}
//                   </div>
//                 )}
//               </div>
//               <TooltipProvider>
//                 <div className="flex items-center justify-between text-white">
//                   <div className="flex items-center space-x-1 sm:space-x-2">
//                     {episodes && (
//                       <Tooltip>
//                         <TooltipTrigger asChild>
//                           <Link
//                             href={
//                               hasPrev
//                                 ? "?episode=" + episodes[epNumber - 2].id
//                                 : ""
//                             }
//                             className={!hasPrev ? "pointer-events-none" : ""}
//                           >
//                             <Button
//                               variant="button"
//                               size="icon"
//                               className="h-8 w-8 sm:h-10 sm:w-10"
//                               disabled={!hasPrev}
//                               // onClick={() => handleSkip(-5)}
//                             >
//                               <SkipBack
//                                 fill="white"
//                                 className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
//                               />
//                             </Button>
//                           </Link>
//                         </TooltipTrigger>
//                         {hasPrev && (
//                           <TooltipContent className="text-xs font-medium">
//                             Episode - {epNumber - 1}
//                           </TooltipContent>
//                         )}
//                       </Tooltip>
//                     )}

//                     <Tooltip>
//                       <TooltipTrigger asChild>
//                         <Button
//                           size="icon"
//                           variant="button"
//                           className="h-8 w-8 sm:h-10 sm:w-10"
//                           onClick={handlePlayPause}
//                         >
//                           {playing ? (
//                             <Pause
//                               fill="white"
//                               className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
//                             />
//                           ) : (
//                             <Play
//                               fill="white"
//                               className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
//                             />
//                           )}
//                         </Button>
//                       </TooltipTrigger>
//                       <TooltipContent className="text-xs font-medium">
//                         {playing ? "Pause" : "Play"}
//                       </TooltipContent>
//                     </Tooltip>
//                     {episodes && (
//                       <Tooltip>
//                         <TooltipTrigger asChild>
//                           <Link
//                             href={
//                               hasNext ? "?episode=" + episodes[epNumber].id : ""
//                             }
//                           >
//                             <Button
//                               variant="button"
//                               size="icon"
//                               className="h-8 w-8 sm:h-10 sm:w-10"
//                               onClick={() => handleSkip(5)}
//                             >
//                               <SkipForward
//                                 fill="white"
//                                 className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
//                               />
//                             </Button>
//                           </Link>
//                         </TooltipTrigger>
//                         {hasNext && (
//                           <TooltipContent className="text-xs font-medium">
//                             Episode - {epNumber}
//                           </TooltipContent>
//                         )}
//                       </Tooltip>
//                     )}

//                     <div className="flex items-center space-x-1 sm:space-x-2">
//                       <Tooltip>
//                         <TooltipTrigger asChild>
//                           <Button
//                             variant="button"
//                             size="icon"
//                             className="h-8 w-8 sm:h-10 sm:w-10"
//                             onClick={handleMute}
//                           >
//                             {muted ? (
//                               <VolumeX
//                                 fill="white"
//                                 className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
//                               />
//                             ) : (
//                               <Volume2
//                                 fill="white"
//                                 className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
//                               />
//                             )}
//                           </Button>
//                         </TooltipTrigger>
//                         <TooltipContent className="text-xs font-medium">
//                           {muted ? "Unmute" : "Mute"}
//                         </TooltipContent>
//                       </Tooltip>

//                       <Slider
//                         value={[volume]}
//                         max={1}
//                         step={0.01}
//                         onValueChange={handleVolumeChange}
//                         className="hidden cursor-pointer sm:w-24"
//                       />
//                     </div>
//                     <span className="text-xs sm:text-sm">
//                       {formatTime(currentProgress)} / {formatTime(duration)}
//                     </span>
//                   </div>
//                   <div className="flex items-center space-x-1 sm:space-x-2">
//                     <VideoSettingsMenu
//                       qualities={qualities}
//                       onQualityChange={handleQualityChange}
//                       currentQuality={currentQuality}
//                       playbackSpeed={playbackSpeed}
//                       onPlaybackSpeedChange={handlePlaybackSpeedChange}
//                     />
//                     <Tooltip>
//                       <TooltipTrigger asChild>
//                         <Button
//                           variant="ghost"
//                           size="icon"
//                           onClick={handleFullscreenToggle}
//                         >
//                           {isFullscreen ? (
//                             <Minimize className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
//                           ) : (
//                             <Maximize className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
//                           )}
//                         </Button>
//                       </TooltipTrigger>
//                       <TooltipContent className="text-xs font-semibold">
//                         {isFullscreen ? "Minimize" : "Fullscreen"}
//                       </TooltipContent>
//                     </Tooltip>
//                   </div>
//                 </div>
//               </TooltipProvider>
//             </div>
//           )}
//         </div>
//       </div>
//     </Card>
//   );
// };

// export default CustomReactPlayer;

// interface VideoSettingsMenuProps {
//   qualities: string[];
//   currentQuality: string;
//   onQualityChange: (quality: string) => void;
//   playbackSpeed: number;
//   onPlaybackSpeedChange: (speed: string) => void;
// }

// const VideoSettingsMenu = ({
//   qualities,
//   currentQuality,
//   onQualityChange,
//   playbackSpeed,
//   onPlaybackSpeedChange,
// }: VideoSettingsMenuProps) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const menuRef = useRef<HTMLDivElement>(null);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   const handleClickOutside = (event: MouseEvent) => {
//     if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
//       setIsOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="relative" ref={menuRef}>
//       <Button
//         variant="button"
//         size="icon"
//         className="group/settings h-8 w-8 transition-colors hover:bg-white/10 sm:h-10 sm:w-10"
//         onClick={toggleMenu}
//       >
//         {/* <p className="absolute bg-transparent text-[6px] sm:text-[10px] -top-3">
//           {playbackSpeed}x
//         </p> */}
//         <Settings
//           className={`${
//             isOpen ? "rotate-45" : "rotate-0"
//           } relative h-4 w-4 transition-all sm:h-5 sm:w-5 md:h-6 md:w-6`}
//         />
//         {/* <p className="absolute bg-transparent text-[6px] sm:text-[10px] -bottom-3">
//           {currentQuality === "auto" ? "AUTO" : currentQuality + "p"}
//         </p> */}
//       </Button>
//       <div
//         className={`${
//           isOpen
//             ? "visible opacity-100"
//             : "pointer-events-none invisible opacity-0"
//         } absolute bottom-full right-0 mb-2 w-48 rounded-md bg-black bg-opacity-80 shadow-lg transition-all`}
//       >
//         <div className="space-y-2 p-2">
//           <div className="flex items-center justify-between">
//             <span className="text-sm text-white">Quality</span>
//             <Select value={currentQuality} onValueChange={onQualityChange}>
//               <SelectTrigger className="w-24 border-white/20 bg-transparent text-xs text-white">
//                 <SelectValue placeholder="Quality" />
//               </SelectTrigger>
//               <SelectContent className="border-white/20 bg-black bg-opacity-80 text-white">
//                 {qualities.map((quality) => (
//                   <SelectItem
//                     key={quality}
//                     value={quality}
//                     className="text-white hover:bg-white/10"
//                   >
//                     {quality === "auto" ? "Auto" : `${quality}p`}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>
//           <div className="flex items-center justify-between">
//             <span className="text-sm text-white">Speed</span>
//             <Select
//               value={playbackSpeed.toString()}
//               onValueChange={onPlaybackSpeedChange}
//             >
//               <SelectTrigger className="w-24 border-white/20 bg-transparent text-xs text-white">
//                 <SelectValue placeholder="Speed" />
//               </SelectTrigger>
//               <SelectContent className="border-white/20 bg-black bg-opacity-80 text-white">
//                 {[0.5, 0.75, 1, 1.25, 1.5, 1.75, 2].map((speed) => (
//                   <SelectItem
//                     key={speed}
//                     value={String(speed)}
//                     className="text-white hover:bg-white/10"
//                   >
//                     {speed}x
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
