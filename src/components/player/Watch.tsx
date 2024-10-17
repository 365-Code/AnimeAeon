"use client";
import React, { useEffect } from "react";
import { IAnimeInfoAnilit, toAnimeTitle } from "@/utils";
import AnimeEpisodes from "../list/AnimeEpisodes";
import dynamic from "next/dynamic";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { ITitle } from "@consumet/extensions";

const DynamicVideoPlayer = dynamic(() => import("./VideoPlayer"), {
  ssr: false,
});

const Watch = ({
  anime,
  episode,
}: {
  anime: IAnimeInfoAnilit;
  episode: string;
}) => {
  useEffect(() => {
    if (episode) {
      const data = localStorage.getItem("continueList");
      if (data) {
        let list = JSON.parse(data) as Array<any>;
        const exist = list.findIndex((v) => v.id == anime.id);
        if (exist != -1) {
          list[exist].episodeId = episode;
          list[exist].episodeNumber = Number(episode.split("episode-").at(-1));
          localStorage.setItem("continueList", JSON.stringify(list));
        } else {
          localStorage.setItem(
            "continueList",
            JSON.stringify([
              ...list,
              {
                id: anime.id,
                episodeId: episode,
                image: anime.image,
                episodeNumber: 1,
                title: anime.title,
              },
            ]),
          );
        }
      } else {
        localStorage.setItem(
          "continueList",
          JSON.stringify([
            {
              id: anime.id,
              episodeId: episode,
              image: anime.image,
              episodeNumber: 1,
              title: anime.title,
            },
          ]),
        );
      }
    }
  }, [episode]);

  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbLink
              className="line-clamp-1"
              href={"/anime/" + anime.id}
            >
              {/* {animeId} */}
              {toAnimeTitle(anime.title as ITitle)}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbPage className="line-clamp-1">
              {"Episode " + episode.split("episode-")[1]}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <section className="relative flex flex-col gap-4 md:grid md:grid-cols-3">
        <div className="col-span-2">
          <DynamicVideoPlayer
            animeTitle={anime.title}
            episodes={anime.episodes}
            totalEpisodes={
              anime.currentEpisode ||
              anime.totalEpisodes ||
              anime.episodes?.length
            }
          />
        </div>
        <div className="col-span-1">
          <AnimeEpisodes episodeList={anime.episodes || []} />
        </div>
      </section>
    </>
  );
};

export default Watch;
