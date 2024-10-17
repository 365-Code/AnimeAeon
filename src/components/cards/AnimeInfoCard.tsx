"use client";
import { IAnimeInfoAnilit, toAnimeTitle } from "@/utils";
import { ITitle } from "@consumet/extensions";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import {
  Bookmark,
  BookmarkCheck,
  ChevronLeft,
  ChevronRight,
  PlayCircle,
  Star,
} from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

const screenSize =
  typeof window != undefined && window.innerWidth <= 500 ? true : false;

const AnimeInfoCard = ({ anime }: { anime: IAnimeInfoAnilit }) => {
  const animeTitle = toAnimeTitle(anime.title as ITitle);
  const banner = anime.artwork
    ? anime.artwork.filter(
        (art) => art.type == "banner" && art.img && art.providerId != "kitsu",
      )
    : [];

  const [currentBanner, setCurrentBanner] = useState(0);
  const [inWatch, setInWatch] = useState(false);

  const handleSlideShow = (n: 1 | -1) => {
    setCurrentBanner((prev) => (prev + n) % banner.length);
  };

  const [currEpisode, setCurrEpisode] = useState({
    number: 0,
    continue: false,
  });
  useEffect(() => {
    const data = localStorage.getItem("continueList");
    if (data) {
      const continueList = JSON.parse(data) as Array<{
        id: string;
        episodeId: string;
        episodeNumber: number;
      }>;
      const continueEpisode = continueList.findIndex(
        (conti) => conti.id == anime.id,
      );
      if (continueEpisode != -1) {
        setCurrEpisode({
          number: continueList[continueEpisode].episodeNumber - 1,
          continue: true,
        });
      }
    }
  }, []);

  const handleWatchList = () => {
    const data = localStorage.getItem("watchList");
    if (inWatch) {
      setInWatch(false);
      if (data) {
        const list = JSON.parse(data) as Array<any>;
        localStorage.setItem(
          "watchList",
          JSON.stringify(list.filter((v) => v.id != anime.id)),
        );
      }
      return;
    }

    setInWatch(true);
    if (data) {
      const list = JSON.parse(data) as Array<any>;
      const exist = list.findIndex((v) => v.id == anime.id);
      if (exist == -1) {
        localStorage.setItem(
          "watchList",
          JSON.stringify([
            ...list,
            {
              id: anime.id,
              image: anime.image,
              title: anime.title,
              genres: anime.genres,
            },
          ]),
        );
      }
    } else {
      localStorage.setItem(
        "watchList",
        JSON.stringify([
          {
            id: anime.id,
            image: anime.image,
            title: anime.title,
            genres: anime.genres,
          },
        ]),
      );
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (banner.length > 1) {
        setCurrentBanner((prev) => (prev + 1) % banner.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentBanner, banner]);

  useEffect(() => {
    const data = localStorage.getItem("watchList");
    if (data && anime) {
      const list = JSON.parse(data) as Array<any>;
      const exist = list.findIndex((v) => v.id == anime.id);
      if (exist != -1) {
        setInWatch(true);
      }
    }
  }, [anime]);

  const paraRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (paraRef.current && anime.description) {
      paraRef.current.innerHTML = anime.description;
    }
  }, [anime.description]);

  return (
    <>
      <section
        className={`relative flex w-full flex-col overflow-hidden rounded-xl bg-gradient-to-tr from-black/60 to-transparent p-2 shadow-lg backdrop-blur-lg sm:max-h-[512px] sm:p-6`}
      >
        {banner?.map((b, i) => (
          <div
            key={i}
            className={`absolute left-0 top-0 -z-0 h-full w-full opacity-40 transition-all ${
              currentBanner == i
                ? "animate-fade block translate-x-0"
                : "hidden translate-x-10"
            }`}
          >
            <img
              id="carousel"
              src={
                banner[currentBanner]?.img ||
                anime.image ||
                "/placeholder/bg.jpeg"
              }
              alt={animeTitle}
              className={`absolute left-0 top-0 -z-0 h-full w-full object-cover object-center opacity-40 transition-all`}
            />
          </div>
        ))}
        {banner.length == 0 && (
          <div
            className={
              "absolute left-0 top-0 -z-0 h-full w-full opacity-40 transition-all"
            }
          >
            <img
              id="carousel"
              src={anime.image || "/placeholder/bg.jpeg"}
              alt={animeTitle}
              className={`absolute left-0 top-0 -z-0 h-full w-full object-cover object-center opacity-40 transition-all`}
            />
          </div>
        )}
        <div className="z-[1] flex-1 justify-between gap-6 overflow-hidden sm:flex">
          <div className="mb-4 flex h-fit max-w-full flex-col gap-4 text-wrap sm:basis-1/2">
            <div className="flex flex-wrap items-center gap-2">
              {anime.genres?.map((g, i) => (
                <Badge key={i} className="rounded-full bg-primary/50">
                  {g}
                </Badge>
              ))}
            </div>
            {/* <h2 className={`text-3xl font-semibold sm:text-4xl md:text-[5rem]`}> */}
            <h2 className={`text-3xl font-semibold sm:text-4xl`}>
              {animeTitle}
            </h2>
            {/* <div className="flex flex-col gap-2">
              {anime.studios?.map((studio, i) => (
                <Badge
                  className={`w-fit text-base sm:text-lg md:text-xl ${!anime.color && "text-rose-600"} `}
                  key={i}
                  style={{ color: anime.color }}
                >
                  {studio}
                </Badge>
              ))}
              <div className="flex flex-wrap items-center gap-2">
                {anime.season && <Badge>{anime.season}</Badge>}

                {anime.releaseDate && (
                  <>
                    <span className="min-h-2 min-w-2 rounded-full bg-white" />
                    <Badge>{anime.releaseDate}</Badge>
                  </>
                )}
                {anime.type && (
                  <>
                    <span className="min-h-2 min-w-2 rounded-full bg-white" />
                    <Badge>{anime.type}</Badge>
                  </>
                )}
                {(anime.totalEpisodes || anime.currentEpisode) && (
                  <>
                    <span className="min-h-2 min-w-2 rounded-full bg-white" />
                    <Badge>{anime.currentEpisode || anime.totalEpisodes}</Badge>
                  </>
                )}
                {anime.status && (
                  <>
                    <span className="min-h-2 min-w-2 rounded-full bg-white" />
                    <Badge>{anime.status}</Badge>
                  </>
                )}
              </div>
              <Badge
                className={`w-fit gap-1 text-sm font-medium sm:text-lg ${anime.color && "fill-rose-600 stroke-rose-600 text-rose-600"}`}
              >
                <Star
                  fill={anime.color}
                  stroke={anime.color}
                  className={`h-[20px] w-[20px] ${!anime.color && "fill-rose-600 text-rose-600"}`}
                />
                <span style={{ color: anime.color }} className="font-semibold">
                  {anime.rating ? anime.rating + "%" : ""}
                </span>
              </Badge>
            </div> */}
          </div>
          <div className="w-fit">
            <div className="mb-2 flex flex-col gap-2">
              <div className="flex flex-wrap items-center gap-2">
                {anime.studios?.map((studio, i) => (
                  <Badge
                    className={`w-fit text-base sm:text-lg md:text-xl ${!anime.color && "text-rose-600"} `}
                    key={i}
                    style={{ color: anime.color }}
                  >
                    {studio}
                  </Badge>
                ))}

                <Badge
                  className={`w-fit gap-1 text-sm font-medium sm:text-lg ${anime.color && "fill-rose-600 stroke-rose-600 text-rose-600"}`}
                >
                  <Star
                    fill={anime.color}
                    stroke={anime.color}
                    className={`h-[20px] w-[20px] ${!anime.color && "fill-rose-600 text-rose-600"}`}
                  />
                  <span
                    style={{ color: anime.color }}
                    className="font-semibold"
                  >
                    {anime.rating ? anime.rating + "%" : ""}
                  </span>
                </Badge>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {anime.season && <Badge>{anime.season}</Badge>}

                {anime.releaseDate && (
                  <>
                    <span className="min-h-2 min-w-2 rounded-full bg-white" />
                    <Badge>{anime.releaseDate}</Badge>
                  </>
                )}
                {anime.type && (
                  <>
                    <span className="min-h-2 min-w-2 rounded-full bg-white" />
                    <Badge>{anime.type}</Badge>
                  </>
                )}
                {(anime.totalEpisodes || anime.currentEpisode) && (
                  <>
                    <span className="min-h-2 min-w-2 rounded-full bg-white" />
                    <Badge>{anime.currentEpisode || anime.totalEpisodes}</Badge>
                  </>
                )}
                {anime.status && (
                  <>
                    <span className="min-h-2 min-w-2 rounded-full bg-white" />
                    <Badge>{anime.status}</Badge>
                  </>
                )}
              </div>
            </div>
            <Card
              className={
                "mb-2 mt-auto hidden overflow-hidden scroll-smooth border-none custom-scrollbar sm:block sm:basis-1/2 md:max-h-[250px]"
              }
            >
              <CardHeader className="max-h-[260px] flex-1 overflow-hidden">
                <CardTitle>Description</CardTitle>
                <CardDescription
                  className="h-full overflow-y-auto custom-scrollbar"
                  ref={paraRef}
                >
                  {!anime.description && "Description Not Available"}
                  {/* {anime.description} */}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        <div className="z-[1] flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            {anime.episodes && anime.episodes?.length != 0 ? (
              <Link
                href={
                  "/anime/" +
                  anime.id +
                  "?episode=" +
                  anime.episodes[currEpisode.number].id
                }
              >
                <Button
                  // onClick={handleWatch}
                  className="flex items-center gap-1 sm:p-6"
                >
                  <PlayCircle size={15} className="m-0 p-0" />
                  {currEpisode.continue ? "Continue Watching" : "Watch Now"}
                </Button>
              </Link>
            ) : (
              <Button
                // onClick={handleWatch}
                className="flex items-center gap-1 sm:p-6"
              >
                Not Available Now
              </Button>
            )}
            <Button
              onClick={handleWatchList}
              className="flex items-center gap-1 sm:p-6"
            >
              {inWatch ? <BookmarkCheck size={15} /> : <Bookmark size={15} />}
              Add to WatchList
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <Button
              onClick={() => handleSlideShow(-1)}
              className="h-[2.3rem] w-[2.3rem] rounded-full p-0"
            >
              <ChevronLeft size={25} className="m-0 p-0" />
            </Button>
            <Button
              onClick={() => handleSlideShow(1)}
              className="h-[2.3rem] w-[2.3rem] rounded-full p-0"
            >
              <ChevronRight size={25} className="m-0 p-0" />
            </Button>
          </div>
        </div>
      </section>
      {screenSize && (
        <Card>
          <CardHeader>
            <CardTitle>Description</CardTitle>
            <CardDescription ref={paraRef}>
              {!anime.description && "Description Not Available"}
            </CardDescription>
          </CardHeader>
        </Card>
      )}
    </>
  );
};

export default AnimeInfoCard;
