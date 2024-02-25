"use client";
import { useMyList } from "@/context/MyListState";
import React from "react";
import NotificationCard from "./NotificationCard";
import AnimePreview from "./AnimePreview";
import NavTop from "./Nav/NavTop";

const MyList = () => {
  const { myList } = useMyList();

  return (
    <div className="h-full flex-1">
        <NavTop title="my list" />
      {myList.length > 0 ? (
        <div className="flex-1 overflow-y-scroll custom-scrollbar grid-cards gap-2">
          {myList.map((l, ind) => (
            <div key={l.id + ind} className="w-full h-[280px] ">
              <AnimePreview id={l.id} image={l.image} title={l.id} />
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full h-full flex flex-col justify-center items-center">
          <h2 className="flex">No Items Yet</h2>
        </div>
      )}
    </div>
  );
};

export default MyList;
