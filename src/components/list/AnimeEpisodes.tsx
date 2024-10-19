"use client";
import { IAnimeEpisode } from "@consumet/extensions";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const AnimeEpisodes = ({
  episodeList,
  episodeId,
}: {
  episodeList: IAnimeEpisode[];
  episodeId: string;
}) => {


  return (
    <Card className="relative w-full overflow-hidden shadow-md backdrop-blur-md md:h-full md:max-h-[512px]">
      <CardHeader>
        <CardTitle>Episodes</CardTitle>
      </CardHeader>

      {/* Scrollable List of Episodes */}
      <CardContent className="mr-4 h-full flex-1 overflow-auto custom-scrollbar sm:m-auto">
        <div className="flex flex-row items-start gap-3 pb-2 md:flex-wrap">
          {episodeList?.map((ep, i) => (
            <Link href={"?episode=" + ep.id} key={i}>
              <Button
                type="button"
                variant={episodeId == ep.id ? "default" : "secondary"}
                // className="hover:bg-primary hover:text-primary-foreground"
              >
                {ep.title}
              </Button>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AnimeEpisodes;
