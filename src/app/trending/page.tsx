import AnimeListCard from "@/components/AnimeListCard";
import NavTop from "@/components/Nav/NavTop";
import TopHitsAnime from "@/components/TopHitsAnime";
import { getAnime } from "@/utils";
import React from "react";

const Page = () => {
  return (
    <div className="h-full flex flex-col">
      <NavTop title="top hits anime" />
      {/* <div className="flex-1 overflow-y-scroll space-y-3 custom-scrollbar">
        
      </div> */}
      <TopHitsAnime />
    </div>
  );
};

export default Page;
