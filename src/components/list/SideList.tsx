"use client";
import React, { useState } from "react";

const SideList = ({ list }: { list: { title: string; component: any }[] }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="flex h-full w-full flex-1 flex-col overflow-hidden rounded-xl bg-black/30 backdrop-blur-sm">
      {list?.map((lst, i) => (
        <div key={i}>
          <button
            onClick={() => setActive((prev) => (prev != i ? i : -1))}
            className={`flex w-full items-center justify-between bg-black/20 px-4 py-2 `}
          >
            <span>{lst.title}</span>
            <span
              className={`transition-all ${active == i ? "-rotate-180" : ""}`}
            >
              <i className="fi fi-ss-angle-down" />
            </span>
          </button>
          <div
            className={` ${
              active == i
                ? "h-[300px] py-4 flex-1 overflow-y-scroll"
                : "h-0 overflow-hidden"
            } no-scrollbar bg-black/20 px-4 transition-all`}
          >
            {lst.component}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideList;
