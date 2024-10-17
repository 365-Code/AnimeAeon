import { useEffect, useState } from "react";
import Player from "./Player";
import { useParams, useSearchParams } from "next/navigation";
import { IAnimeEpisode, ITitle } from "@consumet/extensions";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import EpisodeHandler from "./EpisodeHandler";
import { LoaderPinwheel } from "lucide-react";
import { toast } from "sonner";
import { toAnimeTitle } from "@/utils";
import { useMutation } from "@tanstack/react-query";

const VideoPlayer = ({
  episodes,
  totalEpisodes,
  animeTitle,
}: {
  episodes?: IAnimeEpisode[];
  totalEpisodes?: number;
  animeTitle: ITitle | string;
}) => {
  const searchParams = useSearchParams();
  const episode = searchParams.get("episode") as string;
  const params = useParams();
  const animeId = Number(params["id"]);
  // const [isLoading, setIsLoading] = useState(true);
  const [epSources, setEpSources] = useState<
    { quality: string; url: string }[]
  >([]);

  // const fetchEpisode = async () => {
  //   setIsLoading(true);
  //   try {
  //     const response = await fetch(
  //       "/api/anilist/episode-sources?episodeId=" + episode,
  //     );

  //     if (!response.ok) {
  //       toast.error("Couldn't Fetch The episode");
  //       return;
  //     }
  //     const res = await response.json();
  //     if (res.success) {
  //       setEpSources(res.sources);
  //     }
  //   } catch (error: any) {
  //     throw new Error(error.message);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

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
    if (episode) {
      fetchEpisode();
    }
  }, [episode]);

  return (
    <div className="relative my-auto flex h-fit w-full flex-col">
      <div className="mb-2 flex w-full flex-wrap items-center justify-between gap-1">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                className="line-clamp-1"
                href={"/anime/" + animeId}
              >
                {/* {animeId} */}
                {toAnimeTitle(animeTitle as ITitle)}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="line-clamp-1">
                {episode}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <EpisodeHandler
          episode={episode}
          episodes={episodes}
          totalEpisodes={totalEpisodes}
        />
      </div>
      {/* <div className="max-h-fit overflow-hidden min-w-fit rounded-xl"> */}
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
