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
      <h3 className="gradient-text from-slate-200 to-slate-400 mb-4 text-base sm:text-lg md:text-xl font-semibold">
        Episodes
      </h3>

      {/* Scrollable List of Episodes */}
      <div className="custom-scrollbar flex h-fit flex-row items-start gap-4 overflow-y-auto md:flex-wrap">
        {episodeList?.map((ep, i) => (
          <Link href={"?episode=" + ep.id} key={i}>
            <Button
              type="button"
              variant={episodeId == ep.id ? "default" : "secondary"}
              className="hover:bg-primary hover:text-primary-foreground"
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
