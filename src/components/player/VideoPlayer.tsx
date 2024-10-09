import React, { useEffect, useState } from "react";
import Player from "./Player";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { Button } from "../ui/button";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { IAnimeEpisode } from "@consumet/extensions";
import Link from "next/link";

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
    }
  }, [episode]);

  const nav = useRouter();
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
          onClick={() => nav.push("/anime/" + animeId)}
          className="group/back flex w-fit items-center gap-2 px-4 py-2 backdrop-blur-xl"
        >
          <ArrowLeft
            size={15}
            className="transition-all group-hover/back:-translate-x-1"
          />
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
      {/* <div className="max-h-fit overflow-hidden min-w-fit rounded-xl"> */}
      <Player
        source={epSources.find((e) => e.quality == "default")?.url || ""}
      />
      {/* </div> */}
    </div>
  );
};

export default VideoPlayer;
