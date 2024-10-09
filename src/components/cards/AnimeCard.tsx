"use client";
import { IAnimeInfoAnilit, toAnimeTitle } from "@/utils";
import { ITitle } from "@consumet/extensions";
import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";
import { Star } from "lucide-react";

const AnimeCard = ({ anime }: { anime: IAnimeInfoAnilit }) => {
  return (
    <div className="snap-start pl-3 pt-3">
      {/* <div className="anime-card"> */}
      <div
        className="relative flex h-[320px] w-[90vw] max-w-[580px] rounded-br-3xl bg-black/40 backdrop-blur-sm 
  sm:min-w-[380px]
  sm:rounded-none
  md:min-h-fit
  md:min-w-[580px]"
      >
        <img
          width={400}
          height={400}
          src={anime?.image || ""}
          alt={toAnimeTitle(anime.title as ITitle)}
          className="absolute left-0 top-0 -z-10 h-full w-full object-cover object-center opacity-50 sm:opacity-10 sm:blur-sm"
        />
        <div className="absolute -left-3 -top-3 z-10 flex h-fit w-[250px] items-center gap-2 rounded-lg rounded-br-[60px] bg-secondary-foreground p-3 font-semibold">
          {anime.season && (
            <Badge className="h-fit w-fit">{anime.season}</Badge>
          )}
          {anime.releaseDate && (
            <Badge className="h-fit w-fit">{anime.releaseDate}</Badge>
          )}
          <Badge className="h-fit w-fit">{anime.type}</Badge>
          {!anime.season && (
            <Badge className="h-fit w-fit gap-1">
              {String(anime?.episodes)}
              <span className="h-1 w-1 rounded-full bg-primary-foreground" />
              Episodes
            </Badge>
          )}
          {/* </div> */}
          {/* {anime.genres && anime.genres.length > 0 ? (
            anime.genres?.map(
              (g, i) =>
                (i < 2 ? g : "") +
                (anime?.genres?.length && anime?.genres?.length > 1 && i < 1
                  ? ", "
                  : ""),
            )
          ) : (
            <span className="invisible">Genres: N/A</span>
          )} */}
        </div>
        {/* <div className="anime-card-detail"> */}
        <div className="relative flex flex-col justify-between px-2 pb-6 pl-4 pt-10 text-left sm:flex-1 sm:pl-6">
          <div className="flex flex-col gap-2">
            <Link href={"/anime/" + anime.id}>
              <h3 className="gradient-text line-clamp-3 from-slate-200 to-slate-400 text-lg font-semibold sm:text-3xl">
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
            <Badge className="w-fit gap-2 text-sm sm:text-lg md:text-xl">
              <Star stroke="#f97316" fill="#f97316" />
              {anime.rating ? anime.rating + "%" : "Rating: N/A"}
            </Badge>
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
              {anime.genres?.slice(0, 4).map((g, i) => (
                <Badge key={i} className="bg-primary/50">
                  {g}
                </Badge>
              ))}
            </div>
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
