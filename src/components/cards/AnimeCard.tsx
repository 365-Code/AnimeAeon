"use client";
import { IAnimeInfoAnilit, toAnimeTitle } from "@/utils";
import { ITitle } from "@consumet/extensions";
import Link from "next/link";
import React from "react";

const AnimeCard = ({ anime }: { anime: IAnimeInfoAnilit }) => {
  return (
    <div className="snap-start pl-3 pt-3">
      <div className="anime-card">
        <img
          width={400}
          height={400}
          src={anime?.image || ""}
          alt={toAnimeTitle(anime.title as ITitle)}
          className="absolute left-0 top-0 -z-10 h-full w-full object-cover object-center opacity-50 sm:opacity-10 sm:blur-sm"
        />
        <div className="anime-tag">
          {anime.genres && anime.genres.length > 0 ? (
            anime.genres?.map(
              (g, i) =>
                (i < 2 ? g : "") +
                (anime?.genres?.length && anime?.genres?.length > 1 && i < 1
                  ? ", "
                  : ""),
            )
          ) : (
            <span className="invisible">Genres: N/A</span>
          )}
        </div>
        <div className="anime-card-detail">
          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-2 text-xs">
              {anime.season && (
                <>
                  <span>{anime.season}</span>
                  <span className="h-1 w-1 rounded-full" />
                </>
              )}
              {anime.releaseDate && (
                <>
                  <span>{anime.releaseDate}</span>
                  <span className="h-1 w-1 rounded-full" />
                </>
              )}
              <span>{anime.type}</span>
              {!anime.season && (
                <>
                  <span className="h-1 w-1 rounded-full" />
                  <span>{String(anime?.episodes)} - Episodes</span>
                </>
              )}
            </p>
            <Link href={"/anime/" + anime.id}>
              <h3
                id="anime-card-title"
                className="line-clamp-1 hyphens-auto text-lg font-semibold sm:text-3xl"
              >
                {toAnimeTitle(anime.title as ITitle)}
              </h3>
            </Link>
            <p className="text-sm font-medium text-orange-500">
              {(anime.studios && anime.studios[0]) ||
                anime.status ||
                "Studio: N/A"}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-2 font-semibold">
              <i className="fi fi-ss-star text-lg text-orange-500 sm:text-2xl" />
              <span className="text-lg sm:text-3xl">
                {anime.rating ? anime.rating + "%" : "Rating: N/A"}
              </span>
            </p>
            <ul className="flex flex-wrap items-center gap-2 text-xs font-medium">
              {anime.genres?.slice(0, 4).map((g, i) => (
                <li key={i} className="rounded-full bg-white/20 px-2 py-1">
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="anime-card-img ">
          <img
            width={500}
            height={500}
            src={anime.image || ""}
            alt={toAnimeTitle(anime.title as ITitle)}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
