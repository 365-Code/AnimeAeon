import { IAnimeEpisode } from "@consumet/extensions";
import EpisodeHandler from "./EpisodeHandler";
import { toast } from "sonner";
import PlayerSkeleton from "../skeletons/PlayerSkeleton";
import dynamic from "next/dynamic";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const DynamicPlayer = dynamic(() => import("./Player2"), {
  ssr: false,
});

const VideoPlayer = ({
  episodes,
  totalEpisodes,
  episode,
}: {
  episodes?: IAnimeEpisode[];
  totalEpisodes?: number;
  episode: string;
}) => {
  const [epSource, setEpSource] = useState(" ");

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
          setEpSource("");
          return;
        }
        const res = await response.json();
        if (res.success) {
          const epSources = res.sources as { quality: string; url: string }[];
          const source =
            epSources.find((e) => e.quality == "default")?.url ||
            epSources.find((e) => e.quality == "360")?.url ||
            epSources.find((e) => e.quality == "480")?.url ||
            epSources.find((e) => e.quality == "720")?.url ||
            "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";
          setEpSource(source);
        } else {
          setEpSource("");
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

  if (!isLoading && !epSource) return <PlayerSkeleton />;

  return (
    <div className="relative my-auto flex h-fit w-full flex-col">
      <div className="mb-2 flex w-full flex-wrap items-center justify-between gap-1">
        <EpisodeHandler
          episode={episode}
          episodes={episodes}
          totalEpisodes={totalEpisodes}
        />
      </div>
      {isLoading ? (
        <PlayerSkeleton loading={isLoading} />
      ) : (
        <div className="relative">
          <DynamicPlayer source={String(epSource)} />
        </div>
      )}
      {/* </div> */}
    </div>
  );
};

export default VideoPlayer;
