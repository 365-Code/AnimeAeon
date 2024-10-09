import { toAnimeTitle } from "@/utils";
import { IAnimeResult, ITitle } from "@consumet/extensions";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Star } from "lucide-react";

const StAnimeCard = ({ anime }: { anime: IAnimeResult }) => {
  const descRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (descRef.current && anime.description)
      descRef.current.innerHTML = anime.description;
  }, []);

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
          <Card className="mx-auto hidden w-full rounded-none border-none bg-primary-foreground/80 min-[400px]:block sm:rounded-xl">
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
                <span ref={descRef} className="line-clamp-3" />
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </Card>
    </Link>
  );
};

export default StAnimeCard;
