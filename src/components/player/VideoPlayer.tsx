import { IAnimeEpisode } from "@consumet/extensions";
import EpisodeHandler from "./EpisodeHandler";
import { toast } from "sonner";
import PlayerSkeleton from "../skeletons/PlayerSkeleton";
import dynamic from "next/dynamic";
import { useQuery } from "@tanstack/react-query";
import { LoaderPinwheel } from "lucide-react";

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
  const { data: epSource, isLoading } = useQuery({
    queryKey: ["fetch-episode"],
    queryFn: async () => {
      try {
        const response = await fetch(
          "/api/anilist/episode-sources?episodeId=" + episode,
        );
        if (!response.ok) {
          toast.error("Couldn't Fetch The episode");
          return null;
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
          return source;
        }
        return "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";
      } catch (error) {
        throw error;
      }
    },
  });

  console.log(isLoading , !epSource);
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
          {/* <Player source={String(epSource)} /> */}
          <DynamicPlayer source={String(epSource)} />
        </div>
      )}
      {/* </div> */}
    </div>
  );
};

export default VideoPlayer;
