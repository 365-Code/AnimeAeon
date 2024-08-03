"use client";
import { ISearchResult, toAnimeTitle } from "@/utils";
import { ITitle } from "@consumet/extensions";
import React from "react";

const UpcomingCard = ({ anime }: { anime: ISearchResult }) => {
  return (
    <section className="relative flex h-[50vh] w-full items-start overflow-hidden rounded-xl bg-black/20 shadow-sm shadow-black/80 backdrop-blur-sm">
      <div className="absolute h-full w-full">
        <img
          id="carousel"
          src={anime.image || ""}
          alt={toAnimeTitle(anime.title as ITitle)}
          className={`h-full w-full object-cover object-center opacity-10`}
        />
      </div>
      <div className="h-full w-[500px]">
        <img src={anime.image} className="cover-img" alt="" />
      </div>
      <div className="z-10 flex w-full flex-col gap-4 overflow-hidden p-8">
        <div className="no-scrollbar flex min-h-fit items-center gap-2 overflow-x-scroll">
          {anime.genres?.map((g, i) => (
            <span
              key={i}
              className="rounded-full bg-black/20 px-3 py-1 text-sm font-medium"
            >
              {g}
            </span>
          ))}
        </div>
        <div className="">
          <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
            {toAnimeTitle(anime.title as ITitle)}
          </h2>
        </div>
        <div className="flex max-w-[90%] flex-1 flex-col gap-2 overflow-hidden">
          <p className="flex items-center gap-2">
            {anime.releaseDate ? (
              <>
                <span>{anime.releaseDate}</span>
                <span className="min-h-2 min-w-2 rounded-full bg-white"></span>
              </>
            ) : (
              ""
            )}
            {anime.type ? (
              <>
                <span>{anime.type}</span>
                <span className="min-h-2 min-w-2 rounded-full bg-white"></span>
              </>
            ) : (
              ""
            )}
            {anime.totalEpisodes || anime.currentEpisode ? (
              <>
                <span>{anime.totalEpisodes || anime.currentEpisode}</span>
                <span className="min-h-2 min-w-2 rounded-full bg-white"></span>
              </>
            ) : (
              ""
            )}
            {anime.status ? (
              <>
                <span>{anime.status}</span>
              </>
            ) : (
              ""
            )}
          </p>
          <p
            dangerouslySetInnerHTML={{
              __html: String(anime.description)?.replaceAll("<br>", ""),
            }}
            className="custom-scrollbar flex flex-wrap items-center gap-1 overflow-y-scroll hyphens-auto whitespace-nowrap text-pretty"
          />
        </div>
      </div>
    </section>
  );
};

export default UpcomingCard;
