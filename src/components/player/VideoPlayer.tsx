import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Player from "./Player";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { IAnimeEpisode } from "@consumet/extensions";
import Link from "next/link";

const VideoPlayer = ({
  setWatch,
  episodes,
  totalEpisodes,
}: {
  setWatch: Dispatch<SetStateAction<boolean>>;
  episodes?: IAnimeEpisode[];
  totalEpisodes?: number;
}) => {
  const searchParams = useSearchParams();
  const episode = searchParams.get("episode") as string;
  const params = useParams();
  const animeId = Number(params["id"]);
  const [epSources, setEpSources] = useState([
    {
      quality: "default",
      url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    },
  ]);

  const fetchEpisode = async () => {
    try {
      const res = await (
        await fetch("/api/anilist/episode-sources?episodeId=" + episode)
      ).json();
      if (res.success) {
        setEpSources(res.sources);
      }
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    if (episode) {
      fetchEpisode();
      const data = localStorage.getItem("continueList");
      if (data) {
        let list = JSON.parse(data) as Array<any>;
        const exist = list.findIndex((v) => v.id == animeId) || -1;
        if (exist != -1) {
          list[exist].episodeId = episode;
          list[exist].episodeNumber = Number(episode.split("episode-").at(-1));
          localStorage.setItem("continueList", JSON.stringify(list));
        }
      }
    } else {
      setWatch(false);
    }
  }, [episode]);

  // const nav = useRouter();
  // const handleSubDub = (e: ChangeEvent<HTMLSelectElement>) => {
  //   const subDub = e.target.value as string;
  //   if (subDub == "sub") {
  //     setSubDub("sub");
  //     nav.push("?episode=" + String(episode)?.replace("-dub", ""));
  //   } else {
  //     setSubDub("dub");
  //     nav.push(
  //       "?episode=" + String(episode)?.replace("-episode-", "-dub-episode-"),
  //     );
  //   }
  // };

  // useEffect(() => {
  //   handleDubbed();
  // }, [episode]);

  // const handleDubbed = async () => {
  //   try {
  //     const res = await (
  //       await fetch(
  //         "/api/anilist/episode-sources?episodeId=" +
  //           String(episode)?.replace("-episode-", "-dub-episode-"),
  //       )
  //     ).json();
  //     if (res.success) {
  //       setIsDubbed(true);
  //     } else {
  //       setIsDubbed(false);
  //     }
  //   } catch (error: any) {
  //     throw new Error(error.message);
  //   }
  // };

  // const [subDub, setSubDub] = useState("sub");
  // const [isDubbed, setIsDubbed] = useState(true);

  const [epNumber, setEpNumber] = useState(1);

  useEffect(() => {
    if (episodes && episodes.length > 1) {
      const index = episodes.findIndex((b) => b.id == episode);
      if (index != -1) setEpNumber(index + 1);
    }
  }, [episodes, episode]);

  return (
    <div className="relative my-auto flex h-fit w-full flex-col">
      <div className="mb-2 flex w-full flex-wrap items-start justify-between gap-1">
        <Button
          onClick={() => setWatch(false)}
          className="group/back flex w-fit items-center gap-2 px-4 py-2 backdrop-blur-xl"
        >
          <i className="fi fi-ss-arrow-left transition-all group-hover/back:-translate-x-1" />
          <span>Overview</span>
        </Button>

        {episodes &&
          episodes?.length != 0 &&
          totalEpisodes &&
          totalEpisodes > 1 && (
            <div className="flex items-center gap-1">
              <Link
                href={
                  epNumber > 1 ? "?episode=" + episodes[epNumber - 2].id : ""
                }
              >
                <Button disabled={epNumber <= 1}>
                  <ChevronLeft size={15} className="mr-2" />
                  Prev
                </Button>
              </Link>
              <Link href={"?episode=" + episodes[epNumber].id}>
                <Button disabled={epNumber >= totalEpisodes}>
                  Next
                  <ChevronRight size={15} className="ml-2" />
                </Button>
              </Link>
            </div>
          )}
      </div>
      <div className="max-h-fit overflow-hidden rounded-xl">
        <Player
          source={epSources.find((e) => e.quality == "default")?.url || ""}
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
