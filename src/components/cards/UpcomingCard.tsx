"use client";
import { IAnimeInfoAnilit, ISearchResult, toAnimeTitle } from "@/utils";
import { ITitle } from "@consumet/extensions";
import React, {
  DetailedHTMLProps,
  Dispatch,
  HTMLAttributes,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

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
      <div className="z-10 overflow-hidden flex w-full flex-col gap-4 p-8">
        <div className="min-h-fit overflow-x-scroll no-scrollbar flex items-center gap-2">
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            {toAnimeTitle(anime.title as ITitle)}
          </h2>
        </div>
        <div className="flex-1 overflow-hidden flex max-w-[90%] flex-col gap-2">
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
            dangerouslySetInnerHTML={{ __html: (anime.description.replaceAll("<br>", "")) }}
            className="flex items-center gap-1 custom-scrollbar hyphens-auto whitespace-nowrap flex-wrap overflow-y-scroll text-pretty"
          />
        </div>
      </div>
    </section>
  );
};

export default UpcomingCard;
