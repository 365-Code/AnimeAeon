"use client";

import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CustomSlider } from "@/components/ui/slider";
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
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Hls from "hls.js";
import Link from "next/link";
import { IAnimeEpisode } from "@consumet/extensions";
import { Switch } from "../ui/switch";
import { cn } from "@/lib/utils";

type PlayerStorageType = {
  volume: number;
  quality: string;
  autoPlay: boolean;
};

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
  minutes = minutes.padStart(2, "0");
  if (hours > 0) {
    return `${hours}:${minutes}:${seconds}`;
  } else {
    return `${minutes}:${seconds}`;
  }
};

const skipSecs = 5;
const CustomReactPlayer = ({
  source = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
  episodes,
  referer,
  currentEpisode,
}: {
  episodes?: IAnimeEpisode[];
  source: string;
  currentEpisode?: string;
  referer: string;
}) => {
  const [autoPlayNext, setAutoPlayNext] = useState(true);
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
  const nextSourceRef = useRef<HTMLAnchorElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const skipRef = useRef<NodeJS.Timeout | null>(null);
  const volumeRef = useRef<NodeJS.Timeout | null>(null);
  const thumbnailRef = useRef<ReactPlayer | null>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [showMuteIcon, setShowMuteIcon] = useState("");
  const [doubleClicked, setDoubleClicked] = useState(false);
  const [showPlayBackIcon, setShowPlayBackIcon] = useState<
    "fast" | "slow" | ""
  >("");

  const [isLoading, setIsLoading] = useState(true);
  const [isBuffering, setIsBuffering] = useState(false);

  const [epNumber, setEpNumber] = useState(1);
  const hasPrev = epNumber <= 1 ? false : true;
  const hasNext = episodes && epNumber >= episodes.length ? false : true;

  const [playerState, setPlayerState] = useState<PlayerStorageType>({
    quality: "auto",
    volume: 1,
    autoPlay: true,
  });

  const updatePlayerState = ({
    updateState,
  }: {
    updateState: { [index: string]: any };
  }) => {
    const playerData = { ...playerState, ...updateState };
    setPlayerState((prev) => ({ ...prev, ...updateState }));
    localStorage.setItem("player-state", JSON.stringify(playerData));
  };

  const handlePlayPause = () => {
    setPlaying(!playing);
    setShowPlayPauseIcon(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setShowPlayPauseIcon(false), 1000);
  };

  const handleMute = () => {
    setMuted((prev) => !prev);
    setShowMuteIcon(muted ? "unmute" : "mute");
    setVolume(muted ? playerState.volume : 0);
    setTimeout(() => setShowMuteIcon(""), 500);
  };

  const handleVolumeChange = (newVolume: number[] | number) => {
    let vol = 1;
    if (typeof newVolume == "number") {
      setVolume(() => newVolume);
      vol = newVolume;
    } else {
      setVolume(() => newVolume[0]);
      vol = newVolume[0];
    }
    updatePlayerState({ updateState: { volume: vol } });
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
    skipRef.current = setTimeout(() => setShowSkipIcon(null), 500);
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

    setDoubleClicked(true);
    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    clickTimeoutRef.current = setTimeout(() => setDoubleClicked(false), 500);
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

  const handleQualityChange = (quality: string) => {
    updatePlayerState({ updateState: { quality } });
    setCurrentQuality(() => quality);
    const internalPlayer = playerRef.current?.getInternalPlayer("hls") as Hls;
    if (internalPlayer) {
      if (quality === "auto") {
        internalPlayer.currentLevel = -1; // Enable AUTO quality
      } else {
        internalPlayer.levels.forEach((level, levelIndex) => {
          if (level.height === parseInt(quality) && internalPlayer) {
            internalPlayer.currentLevel = levelIndex;
          }
        });
      }
    }
  };

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

  const adjustPlaybackSpeed = (increment: boolean) => {
    const speeds = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
    const currentIndex = speeds.indexOf(playbackSpeed);
    let newIndex = increment ? currentIndex + 1 : currentIndex - 1;
    newIndex = Math.max(0, Math.min(newIndex, speeds.length - 1));
    handlePlaybackSpeedChange(speeds[newIndex].toString());
  };

  const handleAutoPlayNext = () => {
    setAutoPlayNext(!autoPlayNext);
    updatePlayerState({ updateState: { autoPlay: !autoPlayNext } });
  };

  const handleReady = () => setIsLoading(false);
  const handleBuffer = () => setIsBuffering(true);
  const handleBufferEnd = () => setIsBuffering(false);

  useEffect(() => {
    let playerData = localStorage.getItem("player-state");
    if (playerData && !isLoading) {
      const plyrState = JSON.parse(playerData) as PlayerStorageType;
      setAutoPlayNext(() => plyrState.autoPlay);
      setPlayerState(() => plyrState);
      setVolume(plyrState.volume);
      setCurrentQuality(plyrState.quality);
    }
  }, [isLoading]);

  useEffect(() => {
    if (Hls.isSupported() && playerRef.current) {
      const internalPlayer = playerRef.current.getInternalPlayer("hls") as Hls;
      // For proxy
      // https://github.com/Sudhanshu-Bharti/hanime-frontend/blob/main/components/video.tsx
      if (internalPlayer) {
        const availableQualities = internalPlayer.levels.map((level) =>
          level.height.toString(),
        );
        setQualities(["auto", ...availableQualities]);
        setCurrentQuality("auto");
      }
    }
  }, [source]);

  useEffect(() => {
    if (episodes && episodes.length > 1) {
      const index = episodes.findIndex((b) => b.id == currentEpisode);
      if (index != -1) setEpNumber(index + 1);
    }
  }, [episodes, currentEpisode]);

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
      setIsMobile(window.innerWidth <= 768); // Adjust this breakpoint as needed
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
  }, [currentProgress, duration, muted, volume, playbackSpeed]);

  // const config = {
  //   file: {
  //     hlsOptions: {
  //       xhrSetup: (xhr: XMLHttpRequest) => {
  //         xhr.setRequestHeader("Referer", referer as string);
  //       },
  //     },
  //   },
  // };

  const proxyUrl = `/api/proxy?url=${encodeURIComponent(source)}&referer=${encodeURIComponent(referer)}`;

  return (
    <Card
      className="relative aspect-video w-full overflow-hidden rounded-xl border-none outline-none"
      ref={containerRef}
      tabIndex={0}
      onMouseMove={handleMouseMove}
    >
      <div
        className={cn("absolute inset-0 z-10", !showControls && "cursor-none")}
        onClick={!isMobile ? handlePlayPause : () => ""}
        onDoubleClick={handleDoubleClick}
        onMouseDown={doubleClicked ? (e) => handleDoubleClick(e) : () => ""}
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
        // url={source}
        // config={config}
        url={proxyUrl}
        playing={playing}
        volume={volume}
        muted={muted}
        playbackRate={playbackSpeed}
        onDuration={setDuration}
        onProgress={({ playedSeconds }) => setCurrentProgress(playedSeconds)}
        onReady={handleReady}
        onBuffer={handleBuffer}
        onBufferEnd={handleBufferEnd}
        onEnded={() => {
          if (hasNext && autoPlayNext) nextSourceRef.current?.click();
        }}
      />
      <div className=" absolute left-0 top-0 h-full w-full">
        <div className="flex h-full w-full flex-col">
          {(showControls || !isFullscreen) && (
            <div className="absolute inset-0 flex items-center justify-center ">
              <div className="z-30 flex h-fit w-fit items-center gap-4 md:hidden">
                {/* Prev */}
                <Link
                  href={
                    hasPrev && episodes
                      ? "?episode=" + episodes[epNumber - 2].id
                      : ""
                  }
                  className={cn(
                    !hasPrev ? "pointer-events-none" : "",
                    "md:hidden",
                  )}
                >
                  <Button
                    size="icon"
                    className="h-10 w-10 cursor-pointer rounded-full bg-transparent/50 hover:bg-transparent/30"
                    disabled={!hasPrev}
                  >
                    <SkipBack className="h-4 w-4 fill-white stroke-white sm:h-5 sm:w-5 md:h-6 md:w-6" />
                  </Button>
                </Link>
                {/* PlayPause */}
                <Button
                  onClick={handlePlayPause}
                  className=" z-20 h-12 w-12 cursor-pointer rounded-full bg-transparent/50 p-4 hover:bg-transparent/30 sm:p-4"
                >
                  {playing ? (
                    <Pause className="h-5 w-5 fill-white text-white sm:h-6 sm:w-6" />
                  ) : (
                    <Play className="h-5 w-5 fill-white text-white sm:h-6 sm:w-6" />
                  )}
                </Button>
                {/* Next */}
                <Link
                  ref={nextSourceRef}
                  href={
                    hasNext && episodes
                      ? "?episode=" + episodes[epNumber].id
                      : ""
                  }
                  className={cn(!hasNext ? "pointer-events-none" : "")}
                >
                  <Button
                    size="icon"
                    // className="h-8 w-8 sm:h-10 sm:w-10"
                    className="h-10 w-10 cursor-pointer rounded-full bg-transparent/50 hover:bg-transparent/30"
                    disabled={!hasNext}
                  >
                    <SkipForward className="h-4 w-4 fill-white stroke-white sm:h-5 sm:w-5 md:h-6 md:w-6" />
                  </Button>
                </Link>
              </div>
            </div>
          )}
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
                  <VolumeX className="h-3 w-3 animate-pulse text-white sm:h-4 sm:w-4" />
                ) : (
                  <Volume2 className="h-3 w-3 animate-pulse text-white sm:h-4 sm:w-4" />
                )}
              </Button>
            </div>
          )}
          {/* On Screen Actions */}
          <div className="absolute left-0 top-0 h-full w-full">
            <div className="pointer-events-none flex h-full w-full flex-1">
              <div className="inset-0 z-20 flex h-full flex-1 items-center justify-center">
                {showSkipIcon === "backward" && (
                  <Badge className="animate-ping rounded-full bg-transparent/50 p-2 sm:p-4">
                    <Rewind className="h-3 w-3 fill-white text-white sm:h-4 sm:w-4" />
                  </Badge>
                )}
              </div>
              <div className="inset-0 z-20 flex h-full flex-1 items-center justify-center">
                {showPlayPauseIcon && (
                  <Badge className="hidden animate-ping rounded-full bg-transparent/50 p-2 sm:inline-block sm:p-4">
                    {playing ? (
                      <Pause className="h-3 w-3 fill-white text-white sm:h-4 sm:w-4" />
                    ) : (
                      <Play className="h-3 w-3 fill-white text-white sm:h-4 sm:w-4" />
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
                  <Badge className="animate-ping rounded-full bg-transparent/50 p-2 sm:p-4">
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
                  className="relative mb-1 w-full"
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
                    <div
                      style={{
                        left: `${Math.max(12, Math.min(88, (hoverTime / duration) * 100))}%`,
                        transform: "translateX(-50%)",
                      }}
                      className="absolute bottom-full mb-1 flex w-fit flex-col sm:mb-2"
                    >
                      {/* <Card className="mb-1 hidden aspect-video w-[200px] overflow-hidden sm:mb-2 sm:block">
                        <ReactPlayer
                          pip={false}
                          ref={thumbnailRef}
                          playing={false}
                          onReady={() => {
                            (
                              thumbnailRef.current?.getInternalPlayer(
                                "hls",
                              ) as Hls
                            ).currentLevel = 2;
                          }}
                          onSeek={() => thumbnailRef.current?.seekTo(hoverTime)}
                          url={source}
                          muted={true}
                          width={"100%"}
                          height={"100%"}
                        />
                      </Card> */}
                      <Badge className="mx-auto rounded px-1 py-0.5 text-xs sm:px-2 sm:py-1">
                        {formatTime(Math.max(hoverTime, 0))}
                      </Badge>
                    </div>
                  )}
                </div>
                <TooltipProvider>
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      {/* Prev */}
                      {episodes && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link
                              href={
                                hasPrev
                                  ? "?episode=" + episodes[epNumber - 2].id
                                  : ""
                              }
                              className={cn(
                                !hasPrev ? "pointer-events-none" : "",
                                "hidden md:block",
                              )}
                            >
                              <Button
                                variant="button"
                                size="icon"
                                className={"h-8 w-8 sm:h-10 sm:w-10"}
                                disabled={!hasPrev}
                              >
                                <SkipBack className="h-4 w-4 fill-white stroke-white sm:h-5 sm:w-5 md:h-6 md:w-6" />
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
                      {/* PlayPause */}
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            size="icon"
                            variant="button"
                            className="hidden h-8 w-8 sm:h-10 sm:w-10 md:flex"
                            onClick={handlePlayPause}
                          >
                            {playing ? (
                              <Pause className="h-4 w-4 fill-white stroke-white sm:h-5 sm:w-5 md:h-6 md:w-6" />
                            ) : (
                              <Play className="h-4 w-4 fill-white stroke-white sm:h-5 sm:w-5 md:h-6 md:w-6" />
                            )}
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent className="text-xs font-medium">
                          {playing ? "Pause" : "Play"}
                        </TooltipContent>
                      </Tooltip>
                      {/* Next */}
                      {episodes && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link
                              ref={nextSourceRef}
                              href={
                                hasNext
                                  ? "?episode=" + episodes[epNumber].id
                                  : ""
                              }
                              className={cn(
                                !hasNext ? "pointer-events-none" : "",
                                "hidden md:block",
                              )}
                            >
                              <Button
                                variant="button"
                                size="icon"
                                className="h-8 w-8 sm:h-10 sm:w-10"
                                disabled={!hasNext}
                              >
                                <SkipForward className="h-4 w-4 fill-white stroke-white sm:h-5 sm:w-5 md:h-6 md:w-6" />
                              </Button>
                            </Link>
                          </TooltipTrigger>
                          {hasNext && (
                            <TooltipContent className="text-xs font-medium">
                              Episode - {epNumber + 1}
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
                              {muted || volume == 0 ? (
                                <VolumeX className="h-4 w-4 fill-white stroke-white sm:h-5 sm:w-5 md:h-6 md:w-6" />
                              ) : volume > 0.5 ? (
                                <Volume2 className="h-4 w-4 fill-white stroke-white sm:h-5 sm:w-5 md:h-6 md:w-6" />
                              ) : (
                                <Volume1 className="h-4 w-4 fill-white stroke-white sm:h-5 sm:w-5 md:h-6 md:w-6" />
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
                              sliderColor="#ef4444"
                              thumbVisibility="always"
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
                      <Tooltip>
                        <TooltipTrigger asChild className="bg-black">
                          <Switch
                            checked={autoPlayNext}
                            onCheckedChange={handleAutoPlayNext}
                            id="autoplay-toggle"
                            className={cn(
                              autoPlayNext ? "bg-primary" : "bg-input",
                              "mx-2",
                            )}
                            Icon={{
                              toggleOff: Pause,
                              toggleOn: Play,
                            }}
                          />
                        </TooltipTrigger>
                        <TooltipContent className="font-semibold">
                          Autoplay is {autoPlayNext ? "On" : "Off"}
                        </TooltipContent>
                      </Tooltip>
                      <VideoSettingsMenu
                        qualities={qualities}
                        fullScreen={isFullscreen}
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
  fullScreen?: boolean;
  onPlaybackSpeedChange: (speed: string) => void;
}

const VideoSettingsMenu = ({
  qualities,
  currentQuality,
  onQualityChange,
  playbackSpeed,
  onPlaybackSpeedChange,
  fullScreen,
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

  // <Settings size={48} color="#ffffff" strokeWidth={1} absoluteStrokeWidth />

  return (
    <div className="relative z-40" ref={menuRef}>
      <Button
        variant="button"
        size="icon"
        className="group/settings relative h-8 w-8 transition-colors hover:bg-white/10 sm:h-10 sm:w-10"
        onClick={toggleMenu}
      >
        <Settings
          className={`${
            isOpen ? "rotate-45" : "rotate-0"
          } relative h-4 w-4 fill-white transition-all sm:h-5 sm:w-5 md:h-6 md:w-6`}
        />
        <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black sm:h-2 sm:w-2" />
      </Button>
      <div
        className={`${
          isOpen ? "visible opacity-100" : "pointer-events-none invisible"
        } absolute bottom-full right-0 mb-2 w-48 rounded-md bg-black shadow-lg transition-all`}
      >
        <div className="space-y-2 p-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-white">Quality</span>
            <Select value={currentQuality} onValueChange={onQualityChange}>
              <SelectTrigger
                onClick={(e) => e.preventDefault()}
                className="w-24 border-white/20 bg-transparent text-xs text-white"
              >
                <SelectValue placeholder="Quality" />
              </SelectTrigger>
              <SelectContent
                side="top"
                className="border-white/20 bg-black bg-opacity-80 text-white"
              >
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
              <SelectContent
                side="top"
                className="max-h-[200px] border-white/20 bg-black bg-opacity-80 text-white"
              >
                <SelectGroup>
                  {[0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2].map((speed) => (
                    <SelectItem
                      key={speed}
                      value={String(speed)}
                      className="text-white hover:bg-white/10"
                    >
                      {speed}x
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};
