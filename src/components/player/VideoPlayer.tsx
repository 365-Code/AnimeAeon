import { IAnimeEpisode } from "@consumet/extensions";
import { toast } from "sonner";
import PlayerSkeleton from "../skeletons/PlayerSkeleton";
import dynamic from "next/dynamic";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import VideoPlayerSkeleton from "../skeletons/ReactPlayerSkeleton";

const DynamicReactPlayer = dynamic(() => import("./ReactPlayer"), {
  ssr: false,
  loading: () => <VideoPlayerSkeleton />,
});

type EpisodeSource = {
  success: boolean;
  headers: { Referer: string };
  sources: {
    url: string;
    isM3U8: boolean;
    quality: string;
  }[];
  download: string;
};

const VideoPlayer = ({
  episodes,
  totalEpisodes,
  episode,
}: {
  episodes?: IAnimeEpisode[];
  totalEpisodes?: number;
  episode: string;
}) => {
  const [epData, setEpData] = useState({
    source: "",
    referer: "",
    download: "",
  });

  const { mutateAsync: fetchEpisode, isPending: isLoading } = useMutation({
    mutationKey: ["fetch-episode"],
    gcTime: 0,
    mutationFn: async () => {
      try {
        const response = await fetch(
          "/api/anilist/episode-sources?episodeId=" + episode,
        );
        if (!response.ok) {
          toast.error("Couldn't Fetch The episode");
          setEpData((prev) => ({
            referer: "",
            download: "",
            source: process.env.NEXT_PUBLIC_SOURCE || "",
          }));
          return;
        }
        const res = (await response.json()) as EpisodeSource;

        if (res.success) {
          const epSources = res.sources as { quality: string; url: string }[];
          const source =
            epSources.find((e) => e.quality == "default")?.url ||
            epSources.find((e) => e.quality == "360")?.url ||
            epSources.find((e) => e.quality == "480")?.url ||
            epSources.find((e) => e.quality == "720")?.url ||
            "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";
          setEpData(() => ({
            referer: res.headers.Referer,
            download: res.download,
            source: source,
          }));
        } else {
          setEpData(() => ({
            referer: "",
            download: "",
            source: process.env.NEXT_PUBLIC_SOURCE || "",
          }));
        }
      } catch (error) {
        throw error;
      }
    },
  });

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (episode) fetchEpisode();
    }, 1000);
    return () => clearTimeout(debounce);
  }, [episode]);

  if (!isLoading && !epData.source) return <PlayerSkeleton />;

  return (
    <div className="relative my-auto flex h-fit w-full flex-col">
      {isLoading ? (
        <VideoPlayerSkeleton />
      ) : (
        <div className="relative">
          <DynamicReactPlayer
            source={String(epData.source)}
            episodes={episodes}
            referer={epData.referer}
            currentEpisode={episode}
          />
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
