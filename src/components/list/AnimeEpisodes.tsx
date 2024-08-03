"use client";
import { IAnimeEpisode } from "@consumet/extensions";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const AnimeEpisodes = ({ episodeList }: { episodeList: IAnimeEpisode[] }) => {
  const searchParams = useSearchParams();
  const episodeId = searchParams.get("episode") as string;

  return (
    <section className="relative flex max-h-[300px] w-full flex-col overflow-hidden rounded-xl bg-black/20 p-4 shadow-sm shadow-black/80 backdrop-blur-sm md:h-full md:max-h-none">
      <h3 className="sub-heading">Episodes</h3>
      <div className="custom-scrollbar flex flex-1 flex-row gap-4 overflow-y-scroll md:flex-col ">
        {episodeList?.map((ep, i) => (
          <Link href={"?episode=" + ep.id} key={i}>
            <div
              className={`relative flex w-fit items-center gap-4 rounded-lg bg-white/10 p-4 shadow-sm backdrop-blur-sm transition-all md:w-full ${episodeId == ep.id ? "bg-white/20" : "hover:bg-white/20"}`}
            >
              <div className="h-[70px] w-[70px]">
                <img
                  src={ep.image}
                  alt=""
                  className="cover-img rounded-xl opacity-40 md:opacity-100"
                />
              </div>
              <div className="md:hidden absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center">
                <span className="">{ep.title}</span>
              </div>
              <div className="hidden md:inline-block">
                <span className="">{ep.title}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AnimeEpisodes;
