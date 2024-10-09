"use client";
import { IAnimeInfoAnilit, toAnimeTitle } from "@/utils";
import { ITitle } from "@consumet/extensions";
import { useRouter } from "next/navigation";
import React, {
  useEffect,
  useRef,
  useState,
} from "react";
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

const AnimeInfoCard = ({
  anime,
  // setWatch,
  loading,
}: {
  anime: IAnimeInfoAnilit;
  // setWatch: Dispatch<SetStateAction<boolean>>;
  loading?: boolean;
}) => {
  const banner = anime.artwork
    ? anime.artwork.filter((art) => art.type == "banner" && art.img)
    : [];

  const [currentBanner, setCurrentBanner] = useState(0);
  const [inWatch, setInWatch] = useState(false);

  const handleSlideShow = (n: 1 | -1) => {
    setCurrentBanner((prev) => (prev + n) % banner.length);
  };

  const nav = useRouter();

  const handleWatch = () => {
    if (anime?.episodes && anime.episodes?.length != 0) {
      // setTimeout(() => {
      //   setWatch(true);
      // }, 500);
      nav.push("/anime/" + anime.id + "?episode=" + anime.episodes[0].id);
    }
    const data = localStorage.getItem("continueList");
    const epData = {
      id: anime.id,
      title: anime.title,
      image: anime.image,
      episodeNumber: 1,
      episodeId: null,
    };
    if (data) {
      const list = JSON.parse(data) as Array<any>;
      const exist = list.findIndex((v) => v.id == anime.id);
      if (exist == -1) {
        localStorage.setItem("continueList", JSON.stringify([...list, epData]));
      }
    } else {
      localStorage.setItem("continueList", JSON.stringify([epData]));
    }
  };

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
            { id: anime.id, image: anime.image, title: anime.title },
          ]),
        );
      }
    } else {
      localStorage.setItem(
        "watchList",
        JSON.stringify([
          { id: anime.id, image: anime.image, title: anime.title },
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

  const screenSize =
    typeof window != undefined && window.innerWidth <= 500 ? true : false;

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
              alt={toAnimeTitle(anime.title as ITitle)}
              className={`h-full w-full object-cover object-center`}
            />
          </div>
        ))}
        <div className="z-[1] flex-1 justify-between gap-6 overflow-hidden sm:flex">
          <div className="mb-4 mt-auto flex flex-col gap-4 sm:basis-1/2">
            <div className="flex flex-wrap items-center gap-2">
              {anime.genres?.map((g, i) => (
                <Badge key={i} className="rounded-full bg-primary/50">
                  {g}
                </Badge>
              ))}
            </div>
            <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
              {toAnimeTitle(anime.title as ITitle)}
            </h2>
            <div className="flex flex-col gap-2">
              {anime.studios?.map((studio, i) => (
                <Badge
                  className="w-fit text-base sm:text-lg md:text-xl"
                  key={i}
                  style={{ color: anime.color || "white" }}
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
              <Badge className="w-fit gap-1 text-sm font-medium sm:text-lg">
                <Star
                  fill={anime.color}
                  stroke={anime.color}
                  className="h-[20px] w-[20px]"
                />
                <span
                  style={{ color: anime.color || "white" }}
                  className="text-white"
                >
                  {anime.rating ? anime.rating + "%" : ""}
                </span>
              </Badge>
            </div>
          </div>
          {/* <div className="custom-scrollbar mb-2 mt-auto hidden overflow-y-auto sm:block sm:basis-1/2 md:max-h-[250px]"> */}
          <Card
            className={cn(
              "border-none",
              "mb-2 mt-auto hidden overflow-hidden scroll-smooth custom-scrollbar sm:block sm:basis-1/2 md:max-h-[250px]",
            )}
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
          {/* </div> */}
        </div>

        <div className="z-[1] flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <Button
              onClick={handleWatch}
              className="flex items-center gap-1 sm:p-6"
            >
              <PlayCircle size={15} className="m-0 p-0" />
              Watch Now
            </Button>
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

// const AnimeBannerSkeleton = () => {
//   return (
//     <section
//       className={`relative h-[412px] w-full max-w-7xl overflow-hidden rounded-xl bg-black/20 shadow-sm shadow-black/80 backdrop-blur-sm`}
//     >
//       {/* Image Skeleton */}
//       <Skeleton className="h-full w-full object-cover object-center" />

//       <div className="absolute bottom-0 left-0 flex w-full flex-col gap-4 p-8">
//         {/* Genre Badges Skeleton */}
//         <div className="flex flex-wrap items-center gap-2">
//           <Skeleton className="h-6 w-16 rounded-full" />
//           <Skeleton className="h-6 w-16 rounded-full" />
//           <Skeleton className="h-6 w-16 rounded-full" />
//         </div>

//         {/* Title Skeleton */}
//         <Skeleton className="h-10 w-3/4 sm:h-14 md:h-16" />

//         {/* Studio and Info Skeleton */}
//         <div className="flex max-w-[50%] flex-col gap-2">
//           <Skeleton className="h-6 w-32" />
//           <Skeleton className="h-6 w-48" />
//         </div>

//         {/* Rating Skeleton */}
//         <div className="flex flex-wrap items-center gap-1">
//           <Skeleton className="h-6 w-6 rounded-full" />
//           <Skeleton className="h-6 w-12" />
//         </div>

//         {/* Action Buttons Skeleton */}
//         <div className="flex flex-wrap items-center justify-between gap-4">
//           <div className="flex flex-wrap items-center gap-4">
//             <Skeleton className="h-10 w-32 rounded-md" />
//             <Skeleton className="h-10 w-48 rounded-md" />
//           </div>

//           {/* Arrow Buttons Skeleton */}
//           <div className="flex flex-wrap items-center gap-4">
//             <Skeleton className="h-[2.3rem] w-[2.3rem] rounded-full" />
//             <Skeleton className="h-[2.3rem] w-[2.3rem] rounded-full" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
