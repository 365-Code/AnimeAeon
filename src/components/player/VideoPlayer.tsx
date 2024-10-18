import { useEffect, useState } from "react";
import Player from "./Player";
import { useSearchParams } from "next/navigation";
import { IAnimeEpisode } from "@consumet/extensions";
import EpisodeHandler from "./EpisodeHandler";
import { LoaderPinwheel } from "lucide-react";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";

const VideoPlayer = ({
  episodes,
  totalEpisodes,
}: {
  episodes?: IAnimeEpisode[];
  totalEpisodes?: number;
}) => {
  const searchParams = useSearchParams();
  const episode = searchParams.get("episode") as string;
  const [epSources, setEpSources] = useState<
    { isM3U8: Boolean; quality: string; url: string }[]
  >([]);

  const { mutateAsync: fetchEpisode, isPending: isLoading } = useMutation({
    mutationKey: ["fetch-episode"],
    mutationFn: async () => {
      const response = await fetch(
        "/api/anilist/episode-sources?episodeId=" + episode,
      );

      if (!response.ok) {
        toast.error("Couldn't Fetch The episode");
        return;
      }
      const res = await response.json();
      if (res.success) {
        setEpSources(res.sources);
      }
    },
  });

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (episode) fetchEpisode();
    }, 1000);
    return () => clearTimeout(debounce);
  }, [episode]);

  return (
    <div className="relative my-auto flex h-fit w-full flex-col">
      <div className="mb-2 flex w-full flex-wrap items-center justify-between gap-1">
        <EpisodeHandler
          episode={episode}
          episodes={episodes}
          totalEpisodes={totalEpisodes}
        />
      </div>
      <div className="relative">
        <Player
          source={
            epSources.length > 0
              ? epSources.find((e) => e.quality == "default")?.url || ""
              : ""
          }
        />
        {isLoading && (
          <div className="absolute left-0 top-0 flex h-full w-full animate-pulse flex-col items-center justify-center rounded-xl bg-white/50">
            <LoaderPinwheel className="animate-spin" size={55} />
          </div>
        )}
      </div>
      {/* </div> */}
    </div>
  );
};

export default VideoPlayer;
