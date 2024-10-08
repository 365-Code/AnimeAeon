"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IAnimeResult, ITitle } from "@consumet/extensions";
import { toAnimeTitle } from "@/utils";
import { Badge } from "../ui/badge";
import { Skeleton } from "../ui/skeleton";

interface HeroCarouselProps {
  animeList: IAnimeResult[];
  title?: string;
  modifier?: number;
}

const HeroCarousel = ({ animeList, title, modifier }: HeroCarouselProps) => {
  return (
    <div className="mx-auto w-full max-w-7xl">
      {title && (
        <h1 className="bg-gradient-to-br from-red-600 to-blue-600 bg-clip-text pb-4 text-left text-2xl text-transparent sm:text-3xl md:text-5xl">
          {title}
        </h1>
      )}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: modifier || 1,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="relative mt-2 h-fit"
      >
        {!animeList || animeList.length == 0
          ? Array(10)
              .fill(0)
              .map((_, i) => (
                <SwiperSlide key={i} className="mx-auto h-fit max-w-[70%]">
                  <SkeletonSlide />
                </SwiperSlide>
              ))
          : animeList.map((anime, i) => (
              <SwiperSlide key={i} className="mx-auto h-fit w-full max-w-[70%]">
                <HeroSlide anime={anime} />
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;

const HeroSlide = ({ anime }: { anime: IAnimeResult }) => {
  const descRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (descRef.current) {
      descRef.current.innerHTML = anime.description;
    }
  }, []);

  return (
    <Card className="group relative h-[400px] w-full overflow-hidden border-none transition-all">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <img
        src={anime.image}
        alt={toAnimeTitle(anime.title as ITitle)}
        className="absolute h-full w-full object-cover object-center opacity-20 transition-all"
      />
      <div className="absolute inset-0 flex items-end">
        <CardContent className="w-full space-y-4 p-6">
          <CardHeader className="p-0">
            <div className="flex items-center gap-2">
              {anime.status && (
                <Badge variant="secondary">{anime.status}</Badge>
              )}
            </div>
            <CardTitle className="mt-2 text-xl sm:text-2xl md:text-3xl font-bold text-white">
              {toAnimeTitle(anime.title as ITitle)}
            </CardTitle>
            <CardDescription
              ref={descRef}
              className="line-clamp-3 sm:line-clamp-2 md:text-lg text-gray-200"
            />
          </CardHeader>
        </CardContent>
      </div>
    </Card>
  );
};

const SkeletonSlide = () => {
  const images = ["bg.jpeg", "bg1.jpg", "bg2.jpg"];
  return (
    <Card className="group relative h-[400px] w-full overflow-hidden border-none transition-all">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <img
        src={"/placeholder/" + images[Math.floor(Math.random() * 3)]}
        alt={"anime-image-loader"}
        className="absolute h-full w-full object-cover object-center opacity-20 transition-all"
      />
      <div className="absolute inset-0 flex items-end">
        <CardContent className="w-full space-y-4 p-6">
          <CardHeader className="p-0">
            <Skeleton className="h-[20px] w-[150px] rounded-full bg-transparent/20 backdrop-blur-sm" />
            <Skeleton className="h-[30px] w-[300px] rounded-xl bg-transparent/20 backdrop-blur-sm" />
            <div className="flex gap-4">
              <Skeleton className="h-[25px] w-[500px] max-w-full basis-[15%] rounded-xl bg-transparent/20 backdrop-blur-sm" />
              <Skeleton className="h-[25px] w-[500px] max-w-full basis-[25%] rounded-xl bg-transparent/20 backdrop-blur-sm" />
              <Skeleton className="h-[25px] w-[500px] max-w-full basis-[45%] rounded-xl bg-transparent/20 backdrop-blur-sm" />
            </div>
          </CardHeader>
        </CardContent>
      </div>
    </Card>
    // <Card className="relative h-[400px] w-full max-w-[900px] overflow-hidden rounded-xl border-none shadow-lg">
    //   <div className="absolute inset-0">
    //     <img
    //       src="/assets/bg.jpeg"
    //       alt="Loading anime cover"
    //       className="h-full w-full object-cover object-center"
    //     />
    //   </div>
    //   <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
    //   <div className="absolute inset-0 flex items-end">
    //     <CardContent className="w-full space-y-4 p-6">
    //       <CardHeader className="p-0">
    //         <div className="flex items-center gap-2">
    //           <Skeleton className="h-6 w-16 rounded-full" />
    //           <Skeleton className="h-6 w-24 rounded-full" />
    //         </div>
    //         <Skeleton className="mt-2 h-9 w-3/4" />
    //       </CardHeader>
    //       <Skeleton className="h-6 w-full" />
    //       <Skeleton className="h-6 w-5/6" />
    //       <CardFooter className="p-0">
    //         <Skeleton className="h-12 w-36 rounded-md" />
    //       </CardFooter>
    //     </CardContent>
    //   </div>
    // </Card>
  );
};
