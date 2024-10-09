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
          <Card className="relative mb-2 flex w-full items-center gap-4 overflow-hidden pr-4">
            <CardHeader className="flex-1 p-4">
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
            <h2 className="gradient-text from-slate-200 to-slate-800 p-4 text-center text-xl">
              Nothing To Continue
            </h2>
          )}
    </>
  );
};

export default DisplayContinue;
