"use client";
import React, { useState } from "react";
import NewCard from "../cards/NewCard";
import { IRecentEpisode, recentEpisode } from "@/utils";
import EpisodeCard2 from "../cards/EpisodeCard2";
import { title } from "process";

const NewList = ({ list }: { list: { title: string; component: any }[] }) => {
  const [active, setActive] = useState(-1);

  return (
    <div className="flex h-full flex-1 flex-col overflow-hidden rounded-xl border bg-black/30 px-2 backdrop-blur-sm">
      {list?.map((lst, i) => (
        <div key={i}>
          <button
            onClick={() => setActive((prev) => (prev != i ? i : -1))}
            className={`flex w-full items-center justify-between p-2 py-2 shadow-sm shadow-white/10 `}
          >
            <span>{lst.title}</span>
            <span
              className={`transition-all ${active == i ? "-rotate-180" : ""}`}
            >
              <i className="fi fi-ss-angle-down" />
            </span>
          </button>
          <div
            className={` ${active == i ? "h-[300px] flex-1 overflow-y-scroll" : "h-0 overflow-hidden"} no-scrollbar transition-all`}
          >
            {lst.component}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewList;
