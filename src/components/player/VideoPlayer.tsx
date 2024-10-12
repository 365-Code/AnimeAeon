import { useEffect, useState } from "react";
import Player from "./Player";
import { useParams, useSearchParams } from "next/navigation";
import { IAnimeEpisode } from "@consumet/extensions";
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

const VideoPlayer = ({
  episodes,
  totalEpisodes,
}: {
  episodes?: IAnimeEpisode[];
  totalEpisodes?: number;
}) => {
  const searchParams = useSearchParams();
  const episode = searchParams.get("episode") as string;
  const params = useParams();
  const animeId = Number(params["id"]);
  const [loading, setLoading] = useState(true);
  const [epSources, setEpSources] = useState([
    {
      quality: "default",
      url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    },
  ]);

  const fetchEpisode = async () => {
    setLoading(true);
    try {
      const res = await (
        await fetch("/api/anilist/episode-sources?episodeId=" + episode)
      ).json();
      if (res.success) {
        setEpSources(res.sources);
      }
    } catch (error: any) {
      throw new Error(error.message);
    } finally {
      setLoading(false);
    }
  };

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
              <BreadcrumbLink href={"/anime/" + animeId}>
                {animeId}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{episode}</BreadcrumbPage>
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
          source={epSources.find((e) => e.quality == "default")?.url || ""}
        />
        {loading && (
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
