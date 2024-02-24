import NavTop from "@/components/Nav/NavTop";
import NotificationCard from "@/components/NotificationCard";
import { getAnime } from "@/utils";
import React from "react";

const Page = () => {
  return (
    <div className="h-full flex flex-col">
      <NavTop title="top hits anime" />
      <div className="flex-1 overflow-y-scroll custom-scrollbar space-y-3">
        {getAnime().map((anime) => (
          <NotificationCard key={anime.id} anime={anime} episode="Episode 10" type="update"/>
        ))}
      </div>
    </div>
  );
};

export default Page;
