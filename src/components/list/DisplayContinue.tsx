"use client";
import { IRecentEpisode, toAnimeTitle } from "@/utils";
import { ITitle } from "@consumet/extensions";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ListCardSkeleton from "../skeletons/ListCardSkeleton";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Play } from "lucide-react";

const DisplayContinue = ({
  animeEpList,
}: {
  animeEpList: IRecentEpisode[];
}) => {
  const [avl, setAvl] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (animeEpList.length == 0) {
        setAvl(true);
      }
    }, 1000);
  }, []);

  return (
    <>
      {animeEpList?.map((animeEp) => (
        <Link
          href={"/anime/" + animeEp.id + "?episode=" + animeEp.episodeId}
          key={animeEp?.id}
        >
          <Card className="group/recent relative mb-2 flex w-full items-center gap-4 overflow-hidden pr-4">
            <img
              className="absolute left-0 top-0 -z-0 h-full w-full object-cover object-center opacity-0 group-hover/recent:opacity-25 transition-all"
              src={animeEp.image}
            />
            <CardHeader className="z-[1] flex-1 p-4">
              <CardTitle>{toAnimeTitle(animeEp?.title as ITitle)}</CardTitle>
              <CardDescription>
                Episode - {animeEp?.episodeNumber}
              </CardDescription>
            </CardHeader>
            <Button className="h-[2rem] w-[2rem] rounded-full p-0">
              <Play size={15} />
            </Button>
          </Card>
        </Link>
      ))}

      {!avl && animeEpList.length == 0
        ? [...Array(4)].map((x, i) => (
            <div
              key={i}
              style={{ animationDelay: `${(i + 1) * 0.25}s` }}
              className="animate-pulse"
            >
              <ListCardSkeleton />
            </div>
          ))
        : animeEpList.length == 0 && (
            <CardHeader>
              <CardTitle className="text-center text-xl">
                Nothing To Continue
              </CardTitle>
            </CardHeader>
          )}
    </>
  );
};

export default DisplayContinue;
