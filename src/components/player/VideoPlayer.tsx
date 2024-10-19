import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { IAnimeEpisode } from "@consumet/extensions";
import EpisodeHandler from "./EpisodeHandler";
import { LoaderPinwheel } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import { toast } from "sonner";

const DynamicPlayer = dynamic(() => import("./Player"), {
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
  const [epSources, setEpSources] = useState<
    { isM3U8: Boolean; quality: string; url: string }[]
  >([]);
  const [epSource, setEpSource] = useState<string>("");

  const { mutateAsync: fetchEpisode, isPending: isLoading } = useMutation({
    mutationKey: ["fetch-episode"],
    mutationFn: async () => {
      try {
        const response = await fetch(
          "/api/anilist/episode-sources?episodeId=" + episode,
        );
        if (!response.ok) {
          toast.error("Couldn't Fetch The episode");
          setEpSource("");
          setEpSources([]);
          return;
        }
        const res = await response.json();
        if (res.success) {
          setEpSources(res.sources);
          const source =
            epSources.find((e) => e.quality == "default")?.url ||
            epSources.find((e) => e.quality == "360")?.url ||
            epSources.find((e) => e.quality == "480")?.url ||
            epSources.find((e) => e.quality == "720")?.url ||
            "";
          setEpSource(source);
        }
      } catch (error) {
        toast.error("Couldn't Fetch Episode");
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
        {!isLoading && !epSource && (
          <div className="my-6 text-center text-3xl text-white">
            Couldn&apos;t Fetch Episode
          </div>
        )}
        <DynamicPlayer source={epSource} />
        {/* <Player source={epSources.length > 0 ? epSource : ""} /> */}
        {isLoading && (
          <div className="plyr-react absolute left-0 top-0 flex h-full w-full animate-pulse flex-col items-center justify-center rounded-xl bg-transparent/50">
            <LoaderPinwheel className="animate-spin" size={55} />
          </div>
        )}
      </div>
      {/* </div> */}
    </div>
  );
};

export default VideoPlayer;
