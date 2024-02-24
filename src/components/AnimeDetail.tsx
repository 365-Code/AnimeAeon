"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import MyListButton from "./MyListButton";
import NavTop from "./Nav/NavTop";
import Episode from "./Episode";
import MoreLikeThis from "./MoreLikeThis";
import { getWords, removeChar } from "@/utils";

const AnimeDetail = () => {
  const { id: animeId } = useParams();

  type animeDetailType = {
    name: string;
    image: string;
    id: string;
    type: string;
    plot_summary: string;
    genre: string;
    released: string;
    status: string;
    other_name: string;
    episodes: Array<Array<string>>;
    source: string;
  };

  const initialValue = {
    name: "",
    image: "",
    id: "",
    type: "",
    plot_summary: "",
    genre: "",
    released: "",
    status: "",
    other_name: "",
    episodes: [],
    source: "",
  };

  const [loading, setLoading] = useState(true);
  const [anime, setAnime] = useState<animeDetailType>(initialValue);
  const fetchAnime = async () => {
    try {
      const result = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/anime/${animeId}`
      );
      if (result.ok) {
        const { results } = await result.json();
        const res = results as animeDetailType;
        setAnime(res);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAnime();
  }, []);

  return (
    <div>
      {!loading ? (
        <>
          <div className="absolute top-0 left-0 opacity-70 h-[300px] rounded-none w-full -z-10">
            <Image
              width={500}
              height={500}
              src={anime?.image || ""}
              alt={anime?.id || ""}
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="h-[284px] mb-4 w-full flex flex-col justify-between">
            {/* <div className="flex items-center justify-between">
              <div id="logo" className="p-1 bg-white/50 rounded-full">
                <Image src={"/logo1.png"} width={40} height={40} alt="logo" />
              </div>
              <div className="flex items-center gap-6">
                <button>
                  <i className="fi fi-rr-search text-xl" />
                </button>
                <Link href={"/notifications"}>
                  <i className="fi fi-rr-bell text-xl" />
                </Link>
              </div>
            </div> */}
            <NavTop title="false" />
          </div>

          <div className="text-xs flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="font-medium text-xl capitalize">
                {anime?.name.slice(0, 21) +
                  (anime?.name?.length > 21 ? " ..." : "")}
              </h2>
              <div className="flex gap-4 items-center">
              <MyListButton
                id={anime.id}
                image={anime.image}
                icon={<i className="fi fi-ss-bookmark" />}
                />
              <i className="fi fi-sr-right" />
                </div>
            </div>

            <div className="flex items-center gap-2 text-[#06c149] font-medium">
              <p className="flex items-center gap-1">
                <i className="fi fi-ss-star" />
                <span>9.2</span>
              </p>
              <i className="fi fi-sr-angle-small-right" />
              <span className="text-white">{anime.released}</span>
              <button className="border border-[#06c149] rounded-lg py-1 px-2">
                {" "}
                {anime.type}{" "}
              </button>
              <button className="border border-[#06c149] rounded-lg py-1 px-2">
                {" "}
                {anime.status}{" "}
              </button>
            </div>

            <p className="font-normal">Genre: {anime.genre}</p>
            <p>
              <span className="font-medium">Other Names</span>
              <br />
              {anime.other_name}
            </p>
            <p>{anime.plot_summary}</p>

            <div>
              <h3 className="text-lg font-medium">Episodes</h3>
              <div className="py-2 flex items-center gap-4 overflow-x-scroll custom-scrollbar">
                {anime.episodes.map((ep) => (
                  <Episode key={ep[0]} episode={{ id: ep[0], name: ep[1] }} />
                ))}
              </div>
            </div>

            <div className="flex items-center text-base">
              <button className="basis-1/2 border-b-4 p-2 border-[#06c149]">
                More like this
              </button>
              <button className="basis-1/2 border-b-4 p-2">Comments</button>
            </div>
            <MoreLikeThis like={getWords(anime.name, 2).replaceAll(" ", "+").toLowerCase()} />
            <MoreLikeThis like={getWords(anime.other_name, 10).replaceAll(",", "+").toLowerCase()} />
          </div>
        </>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
};

export default AnimeDetail;
