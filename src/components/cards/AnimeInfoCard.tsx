"use client";
import { IAnimeInfoAnilit, toAnimeTitle } from "@/utils";
import { ITitle } from "@consumet/extensions";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

const AnimeInfoCard = ({
  anime,
  setWatch,
}: {
  anime: IAnimeInfoAnilit;
  setWatch: Dispatch<SetStateAction<boolean>>;
}) => {
  const banner = anime.artwork
    ? anime.artwork.filter((art) => art.type == "banner" && art.img)
    : [];

  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banner.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentBanner, banner]);

  const handleSlideShow = (n: 1 | -1) => {
    setCurrentBanner((prev) => (prev + n) % banner.length);
  };

  const handleWatchList = () => {
    const data = localStorage.getItem("watchList");
    if (data) {
      const list = JSON.parse(data) as Array<any>;
      const exist = list.findIndex((v) => v.id != anime.id);
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

  const handleWatch = () => {
    setWatch(true)
    const data = localStorage.getItem("continueList")
    const epData = {id: anime.id, title: anime.title, image: anime.image, episodeNumber: 1, episodeId: null};
    if(data){
      const list = JSON.parse(data) as Array<any>;
      const exist = list.findIndex((v) => v.id == anime.id);
      if(exist == -1){
        localStorage.setItem("continueList", JSON.stringify([...list, epData]))
      }
    }else{
      localStorage.setItem("continueList", JSON.stringify([epData]))
    }
  }

  return (
    // <section className="relative h-full w-full overflow-hidden rounded-xl bg-black/20 shadow-sm shadow-black/80 backdrop-blur-sm">
    <section className="relative h-[70vh] w-full overflow-hidden rounded-xl bg-black/20 shadow-sm shadow-black/80 backdrop-blur-sm">
      {banner?.map((b, i) => (
        <div
          key={i}
          className={`h-full w-full opacity-40 transition-all ${currentBanner == i ? "animate-fade block translate-x-0" : "hidden translate-x-10"}`}
        >
          <img
            id="carousel"
            src={banner[currentBanner]?.img || anime.image || ""}
            alt={toAnimeTitle(anime.title as ITitle)}
            className={`h-full w-full object-cover object-center`}
          />
        </div>
      ))}
      <div className="absolute bottom-0 left-0 flex w-full flex-col gap-4 p-8">
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
        <div className="max-w-[85%]">
          <h2 className="text-5xl font-semibold">
            {toAnimeTitle(anime.title as ITitle)}
          </h2>
        </div>
        <div className="flex max-w-[50%] flex-col gap-2">
          <p className="text-lg font-normal">
            {anime.studios?.map((studio, i) => (
              <span key={i} style={{ color: anime.color || "white" }}>
                {studio}
              </span>
            ))}
          </p>
          <p className="flex items-center gap-2">
            {anime.season ? (
              <>
                <span>{anime.season}</span>
                <span className="min-h-2 min-w-2 rounded-full bg-white"></span>
              </>
            ) : (
              ""
            )}

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
                <span>{anime.currentEpisode || anime.totalEpisodes}</span>
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
          <p className="flex items-center gap-1 text-xl font-medium">
            <i style={{ color: anime.color }} className="fi fi-ss-star" />
            <span>{anime.rating ? anime.rating + "%" : ""}</span>
          </p>
          <p className="no-scrollbar max-h-[145px] overflow-y-scroll">
            {anime.description?.replaceAll("<br>", "")}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={handleWatch} className="btn btn-primary">
              <span>
                <i className="fi fi-sr-play" />
              </span>
              <span>Watch</span>
            </button>
            <button onClick={handleWatchList} className="btn btn-secondary">
              <span>
                {/* <i className="fi fi-sr-download" /> */}
                <i className="fi fi-sr-wishlist-star" />
              </span>
              {/* <span>Download</span> */}
              <span>Add to WatchList</span>
            </button>
          </div>
          <div className="flex items-center gap-4">
            <button
              className="rounded-full bg-black/30 p-4 transition-all hover:bg-black/40"
              onClick={() => handleSlideShow(-1)}
            >
              <i className="fi fi-sr-angle-left" />
            </button>
            <button
              className="rounded-full bg-black/30 p-4 transition-all hover:bg-black/40"
              onClick={() => handleSlideShow(1)}
            >
              <i className="fi fi-sr-angle-right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimeInfoCard;
