"use client"
import { IAnimeEpisode } from "@consumet/extensions";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

const AnimeEpisodes = ({ episodeList }: { episodeList: IAnimeEpisode[] }) => {

  const searchParams = useSearchParams()
  const episodeId = searchParams.get("episode") as string

  return (
    <section className="relative flex h-full w-full flex-col overflow-hidden rounded-xl bg-black/20 p-4 shadow-sm shadow-black/80 backdrop-blur-sm">
      <h3 className="sub-heading">Episodes</h3>
      <div className="custom-scrollbar flex flex-1 flex-col gap-4 overflow-y-scroll ">
        {episodeList.map((ep, i) => (
          <Link href={"?episode=" + ep.id} key={i}>
            <div className={`w-full flex items-center gap-4 rounded-lg bg-white/10 p-4 shadow-sm backdrop-blur-sm transition-all ${episodeId == ep.id ? "bg-white/20" : "hover:bg-white/20"}`}>
              <div className="w-[64px] h-[64px]">
                <img src={ep.image} alt="" className="cover-img rounded-xl" />
              </div>
              <span>
              {ep.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AnimeEpisodes;
