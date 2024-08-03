"use client";
import React, { useEffect, useState } from "react";
import { IRecentEpisode } from "@/utils";
import DisplayWatchList from "../list/DisplayWatchList";

const FetchWatchList = () => {
  const [watchList, setWatchList] = useState<IRecentEpisode[]>([]);

  const data = () => {
    const dta = localStorage.getItem("watchList");
    if (dta) {
      const list = JSON.parse(dta);
      setWatchList(list);
    }
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <section>
      <DisplayWatchList animeEpList={watchList} />
    </section>
  );
};

export default FetchWatchList;
