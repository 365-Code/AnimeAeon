import { toAnimeTitle } from "@/utils";
import { IAnimeResult, ITitle } from "@consumet/extensions";
import Link from "next/link";
import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Star } from "lucide-react";

const StAnimeCard = ({ anime }: { anime: IAnimeResult }) => {
  return (
    <Link href={"/anime/" + anime.id} className="h-full w-full">
      <Card className="relative h-[200px] w-full max-w-[300px] overflow-hidden border-none transition-all min-[400px]:h-[400px]">
        <img
          src={anime?.image || ""}
          loading="lazy"
          alt="slide_image"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute bottom-0 left-0 mx-auto h-fit w-full">
          <div className="mx-auto w-full border-none bg-primary-foreground/80 p-2 min-[400px]:hidden">
            <p className="line-clamp-2 text-sm sm:text-base md:text-lg">
              {toAnimeTitle(anime.title as ITitle)}
            </p>
          </div>
          <Card className="mx-auto hidden w-full border-none bg-primary-foreground/80 min-[400px]:block">
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
              <CardTitle className=" line-clamp-2 text-lg sm:text-xl md:text-2xl">
                {toAnimeTitle(anime.title as ITitle)}
              </CardTitle>
              <CardDescription className="line-clamp-3 sm:line-clamp-none">
                <span className="line-clamp-3">{anime.description}</span>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </Card>
      {/* <div className="group/epCard st-anime-card h-full">
        <div className="h-full w-full">
          <img src={anime.image || ""} className="cover-img" alt="" />
        </div>
        <div className="st-anime-card-detail relative overflow-hidden group-hover/epCard:min-h-[50%] ">
          <h3 className="text-left font-semibold capitalize text-cyan-500 sm:text-2xl">
            {toAnimeTitle(anime.title as ITitle)}
          </h3>
          <p className="flex flex-wrap items-center gap-1 text-lg font-medium text-white md:text-xl">
            <span>{anime.type}</span>
            <span className="h-2 w-2 rounded-full bg-white" />
            <span>{anime.currentEpisode || anime.totalEpisodes}</span>
            <span className="h-2 w-2 rounded-full bg-white" />
            <span>{anime.status}</span>
          </p>
          <p
            dangerouslySetInnerHTML={{
              __html: String(anime.description)
                ?.replaceAll("<br>", "")
                ?.replaceAll("\n", ""),
            }}
            className="no-scrollbar flex h-0 flex-wrap overflow-hidden hyphens-auto text-pretty font-normal transition-all group-hover/epCard:h-[150px] group-hover/epCard:overflow-y-scroll"
          ></p>
        </div>
      </div> */}
    </Link>
  );
};

export default StAnimeCard;
