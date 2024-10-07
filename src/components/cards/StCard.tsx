import { ISearchResult, toAnimeTitle } from "@/utils";
import Link from "next/link";
import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Play } from "lucide-react";

const StCard = ({ anime }: { anime: ISearchResult }) => {
  return (
    <Card className="relative h-[450px] min-w-[320px] snap-start overflow-hidden rounded-xl">
      <div className="h-full w-full">
        <img src={anime.image} className="h-full w-full object-cover" alt="" />
      </div>
      <Card
        style={{
          backgroundColor: anime.color ? anime.color + "aa" : "#000000aa",
        }}
        className={`absolute bottom-0 left-0 z-[1] h-fit w-full space-y-1 p-4`}
      >
        <p className="flex items-center gap-1 text-2xl">
          <i className="fi fi-ss-star" />{" "}
          {anime.rating ? anime.rating + "%" : ""}
        </p>
        <p className="no-scrollbar flex items-center gap-2 overflow-x-scroll">
          {anime.genres?.map((g, i) => (
            <span
              key={i}
              className="text-nowrap rounded-full bg-black/30 px-3 py-1 text-sm font-medium"
            >
              {g}
            </span>
          ))}
        </p>
        <h2 className="line-clamp-1 max-h-[72px] overflow-hidden text-3xl">
          {toAnimeTitle(anime.title)}
        </h2>
        <div className="flex items-start justify-between">
          <p className="line-clamp-2 flex flex-wrap items-center hyphens-auto">
            <span
              className="prose line-clamp-2"
              dangerouslySetInnerHTML={{
                __html: anime.description.replaceAll("<br>", ""),
              }}
            >
              {/* {anime.description} */}
            </span>
          </p>
          <Link href={"/anime/" + anime.id}>
            <Button className="h-[2.3rem] w-[2.3rem] rounded-full p-0 transition-all">
              <Play size={15} className="m-0 p-0" />
            </Button>
          </Link>
        </div>
      </Card>
    </Card>
  );
};

export default StCard;
