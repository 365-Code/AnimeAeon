"use client";
import { Bookmark, PlayCircle, Star } from "lucide-react";
import React from "react";
import { Swiper, SwiperProps, SwiperSlide, useSwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IAnimeResult, ITitle } from "@consumet/extensions";
import { toAnimeTitle } from "@/utils";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { Skeleton } from "../ui/skeleton";

interface CarouselProps extends SwiperProps {
  animeList: IAnimeResult[];
  title?: string;
  modifier?: number;
  sliderHeight?: number;
}

const VerticalCarousel = ({
  animeList,
  title,
  modifier,
  ...props
}: CarouselProps) => {
  return (
    <div className="mx-auto max-w-7xl">
      {title && (
        <h1 className="bg-gradient-to-br from-red-600 to-blue-600 bg-clip-text text-left text-2xl text-transparent sm:text-3xl md:text-5xl">
          {title}
        </h1>
      )}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        direction={props.direction}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: modifier || 1.2,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="relative max-h-[400px]"
      >
        {!animeList || animeList.length == 0
          ? Array(10)
              .fill(0)
              .map((_, i) => (
                <SwiperSlide key={i} className="mx-auto h-fit max-w-[300px]">
                  <SkeletonSlide />
                </SwiperSlide>
              ))
          : animeList.map((anime, i) => (
              <SwiperSlide key={i} className="mx-auto h-fit max-w-[300px]">
                <AnimeSlide anime={anime} />
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
};

export default VerticalCarousel;

const AnimeSlide = ({ anime }: { anime: IAnimeResult }) => {
  const swiperSlide = useSwiperSlide();

  return (
    <Card className="relative h-[300px] w-full overflow-hidden border-none transition-all">
      <img
        src={anime?.image || ""}
        loading="lazy"
        alt="slide_image"
        className="h-full w-full object-cover object-center"
      />
      <div className="absolute bottom-0 left-0 mx-auto h-fit w-full">
        <Card className="mx-auto w-full border-none bg-primary-foreground/80">
          <CardHeader>
            <div className="flex items-center gap-2 text-sm text-muted">
              {anime.rating && (
                <Badge className="flex w-fit items-center gap-1 rounded-full font-medium">
                  <Star
                    fill="#eab308"
                    stroke="#eab308"
                    className="yellow"
                    size={15}
                  />{" "}
                  {anime.rating ? anime.rating + "%" : "N/A"}
                </Badge>
              )}
              {anime.status && (
                <Badge className="flex w-fit items-center gap-1 rounded-full font-medium">
                  {anime.status}
                </Badge>
              )}
            </div>
            <CardTitle className="line-clamp-2 text-lg sm:text-xl md:text-2xl">
              {toAnimeTitle(anime.title as ITitle)}
            </CardTitle>
            <CardDescription>
              {anime.status && anime.status == "Not yet aired" ? (
                <Button className={``}>
                  BookMark
                  <Bookmark size={20} className="ml-2" />
                </Button>
              ) : (
                <Link
                  href={"/anime/" + anime.id}
                  className={cn(
                    swiperSlide.isActive ? "opacity-100" : "opacity-0",
                    "transition-all",
                  )}
                >
                  <Button className={``}>
                    Watch Now
                    <PlayCircle size={20} className="ml-2" />
                  </Button>
                </Link>
              )}
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </Card>
  );
};

const SkeletonSlide = () => {
  const images = ["bg.jpeg", "bg1.jpg", "bg2.jpg", "placeholder.jpg"];

  return (
    <Card className="relative h-[300px] w-full overflow-hidden border-none transition-all">
      <img
        // src={"/placeholder/bg.jpeg"}
        src={"/placeholder/" + images[Math.floor(Math.random() * 4)]}
        loading="lazy"
        alt="slide_image"
        className="h-full w-full object-cover object-center opacity-20"
      />
      <div className="absolute bottom-0 left-0 mx-auto h-fit w-full p-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-stretch gap-2">
            <Skeleton className="h-4 w-[40px] rounded-full bg-black" />
            <Skeleton className="flex h-4 w-[80px] rounded-full bg-black" />
          </div>
          <Skeleton className="h-6 w-[80%] bg-black" />
          <Skeleton className="h-6 w-[120px] bg-black" />
        </div>
      </div>
    </Card>
  );
};
