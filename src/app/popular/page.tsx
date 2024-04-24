import AnimeListCard from "@/components/AnimeListCard";
import NavTop from "@/components/Nav/NavTop";
import TopHitsAnime from "@/components/TopHitsAnime";
import UpcomingAnime from "@/components/UpcomingAnime";
import React from "react";

const Page = () => {
  return (
    <div className="h-full flex flex-col">
      <NavTop/>
      <UpcomingAnime />
    </div>
  );
};

export default Page;
