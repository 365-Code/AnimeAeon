"use client";

import { IAnimeEpisode } from "@consumet/extensions";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const EpisodeHandler = ({
  episode,
  episodes,
  totalEpisodes,
}: {
  totalEpisodes: number | undefined;
  episode: string;
  episodes: IAnimeEpisode[] | undefined;
}) => {
  const [epNumber, setEpNumber] = useState(1);

  useEffect(() => {
    if (episodes && episodes.length > 1) {
      const index = episodes.findIndex((b) => b.id == episode);
      if (index != -1) setEpNumber(index + 1);
    }
  }, [episodes, episode]);

  return (
    <>
      {episodes &&
        episodes?.length != 0 &&
        totalEpisodes &&
        totalEpisodes > 1 && (
          <div className="flex items-center gap-1">
            <Link
              href={epNumber > 1 ? "?episode=" + episodes[epNumber - 2].id : ""}
            >
              <Button disabled={epNumber <= 1}>
                <ChevronLeft size={15} className="mr-2" />
                Prev
              </Button>
            </Link>
            <Link
              href={
                epNumber < totalEpisodes
                  ? "?episode=" + episodes[epNumber].id
                  : ""
              }
            >
              <Button disabled={epNumber >= totalEpisodes}>
                Next
                <ChevronRight size={15} className="ml-2" />
              </Button>
            </Link> 
          </div>
        )}
    </>
  );
};

export default EpisodeHandler;
