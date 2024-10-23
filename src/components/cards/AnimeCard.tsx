"use client";
import { IAnimeInfoAnilit, toAnimeTitle } from "@/utils";
import { ITitle } from "@consumet/extensions";
import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";
import { Bookmark, BookmarkCheck, Star } from "lucide-react";
import useWatchList from "@/hooks/useWatchList";
import { Button } from "../ui/button";

const colors = [
  "#ef4444",
  "#f97316",
  "#f59e0b",
  "#84cc16",
  "#10b981",
  "#0ea5e9",
  "#3b82f6",
  "#d946ef",
  "#ec4899",
  "#f43f5e",
];

const AnimeCard = ({ anime }: { anime: IAnimeInfoAnilit }) => {
  const animeTitle = toAnimeTitle(anime.title as ITitle);
  const color = colors[Math.floor(Math.random() * 10) % 10];

  const { inWatch, handleWatchList } = useWatchList({ anime });

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
          alt={animeTitle}
          loading="lazy"
          className="absolute left-0 top-0 -z-10 h-full w-full object-cover object-center opacity-50 sm:opacity-10 sm:blur-sm"
        />
        <div className="absolute -left-3 -top-3 z-10 flex h-fit w-[250px] items-center gap-2 rounded-lg rounded-br-[60px] bg-secondary-foreground p-3 text-xs font-semibold text-secondary">
          <Button
            className="h-fit p-1 hover:bg-secondary hover:text-secondary-foreground"
            onClick={handleWatchList}
          >
            {inWatch ? <BookmarkCheck size={15} /> : <Bookmark size={15} />}
          </Button>
          {anime.season && <span className="h-fit w-fit">{anime.season}</span>}
          {anime.releaseDate && (
            <span className="h-fit w-fit">{anime.releaseDate}</span>
          )}
          <span className="h-fit w-fit">{anime.type}</span>
          {!anime.season && (
            <span className="flex h-fit w-fit items-center gap-1">
              {String(anime?.episodes)}
              <span className="h-1 w-1 rounded-full bg-secondary" />
              Episodes
            </span>
          )}
        </div>
        <div className="relative flex flex-col justify-between px-2 pb-6 pl-4 pt-10 text-left sm:flex-1 sm:pl-6">
          <div className="flex flex-col gap-2">
            <Link href={"/anime/" + anime.id}>
              <h3 className=" line-clamp-3 text-lg font-semibold sm:text-3xl">
                {animeTitle}
              </h3>
            </Link>
            <Badge className="w-fit text-orange-500">
              {(anime.studios && anime.studios[0]) ||
                anime.status ||
                "Studio: N/A"}
            </Badge>
          </div>
          <div className="flex flex-col gap-2">
            <Badge
              style={{
                color: color,
              }}
              className="w-fit gap-2 text-sm sm:text-lg md:text-xl"
            >
              <Star stroke={color} fill={color} />
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
            loading="lazy"
            width={500}
            height={500}
            src={anime.image || ""}
            alt={animeTitle}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
