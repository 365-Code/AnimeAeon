"use client";
import { IAnimeEpisode } from "@consumet/extensions";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

const AnimeEpisodes = ({ episodeList }: { episodeList: IAnimeEpisode[] }) => {
  const searchParams = useSearchParams();
  const episodeId = searchParams.get("episode") as string;

  return (
    <section className="relative flex max-h-[300px] w-full flex-col overflow-hidden rounded-xl bg-muted p-4 shadow-md backdrop-blur-md md:h-full md:max-h-[512px]">
      <h3 className="mb-4 text-lg font-semibold text-muted-foreground">
        Episodes
      </h3>

      {/* Scrollable List of Episodes */}
      <div className="no-scrollbar flex h-full flex-1 flex-row gap-4 overflow-y-auto md:flex-wrap">
        {episodeList?.map((ep, i) => (
          <Link href={"?episode=" + ep.id} key={i} className="group w-fit">
            <Button
              type="button"
              variant={episodeId == ep.id ? "default" : "secondary"}
              className="text-sm font-medium"
            >
              {ep.title}
            </Button>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AnimeEpisodes;
