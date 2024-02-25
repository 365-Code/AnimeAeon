"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { animeListCardType, animePreviewType, getAnime } from "@/utils";
import AnimePreview from "../AnimePreview";
import Carousell from "../Carousel";
import HomeTop from "./HomeTop";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

const HomeAnime = () => {
  type carouselType = {
    image: string;
    title: string;
  };

  const [animeImages, setAnimeImages] = useState<Array<animeListCardType>>([]);

  const fetchAnimeList = async () => {
    try {
      const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home`);
      if (result.ok) {
        const { results } = await result.json();
        const { gogoPopular } = results;
        let imgs = [] as Array<animeListCardType>;
        gogoPopular.forEach((e: animeListCardType) => {
          imgs.push(e);
        });

        setAnimeImages(gogoPopular);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAnimeList();
  }, []);

  return (
    <>
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div className={"h-[390px]"}>
          <Image
            width={500}
            height={500}
            src={animeImages[0]?.image || ""}
            alt={animeImages[0]?.title}
            className="h-full md:w-1/2 w-full object-scale-down object-center"
          />
            <HomeTop key={animeImages[0]?.id} id={animeImages[0]?.id} />

        </div>
        <div className={"h-[390px]"}>
          <Image
            width={500}
            height={500}
            src={animeImages[1]?.image || ""}
            alt={animeImages[1]?.title}
            className="h-full md:w-1/2 w-full object-cover object-center"
          />
            <HomeTop key={animeImages[1]?.id} id={animeImages[1]?.id} />
        </div>
        <div className={"h-[390px]"}>
          <Image
            width={500}
            height={500}
            src={animeImages[2]?.image || ""}
            alt={animeImages[2]?.title}
            className="h-full md:w-1/2 w-full object-cover object-center"
          />
            <HomeTop key={animeImages[2]?.id} id={animeImages[2]?.id} />

        </div>
        <div className={"h-[390px]"}>
          <Image
            width={500}
            height={500}
            src={animeImages[3]?.image || ""}
            alt={animeImages[3]?.title}
            className="h-full md:w-1/2 w-full object-cover object-center"
          />
            <HomeTop key={animeImages[3]?.id} id={animeImages[3]?.id} />
        </div>
        <div className={"h-[390px]"}>
          <Image
            width={500}
            height={500}
            src={animeImages[4]?.image || ""}
            alt={animeImages[4]?.title}
            className="h-full md:w-1/2 w-full object-cover object-center"
          />
          <HomeTop key={animeImages[4]?.id} id={animeImages[4]?.id} />
        </div>
        <div className={"h-[390px]"}>
          <Image
            width={500}
            height={500}
            src={animeImages[5]?.image || ""}
            alt={animeImages[5]?.title}
            className="h-full md:w-1/2 w-full object-cover object-center"
          />
        <HomeTop key={animeImages[5]?.id} id={animeImages[5]?.id} />

        </div>
      </Carousel>
    </>
  );
};

export default HomeAnime;
