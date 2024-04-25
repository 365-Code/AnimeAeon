"use client";
import { IAnimeInfoAnilit, ISearchResult, toAnimeTitle } from "@/utils";
import { ITitle } from "@consumet/extensions";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

const UpcomingCard = ({ anime }: { anime: ISearchResult }) => {
  return (
    // <section className="relative h-full w-full overflow-hidden rounded-xl bg-black/20 shadow-sm shadow-black/80 backdrop-blur-sm">
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
      {/* <div className="absolute bottom-0 left-0 flex w-full flex-col gap-4 p-8"> */}
      <div className="flex w-full flex-col gap-4 p-8">
        <div className="flex flex-wrap items-center gap-2">
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
          <h2 className="text-5xl font-semibold">
            {toAnimeTitle(anime.title as ITitle)}
          </h2>
        </div>
        <div className="flex max-w-[85%] flex-col gap-2">
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
            typeof="html"
            className="description max-h-[100px] overflow-hidden"
          >
            {anime.description}
            {/* <code>
              {anime.description as string}
            </code> */}
          </p>
        </div>
      </div>
    </section>
  );
};

export default UpcomingCard;
