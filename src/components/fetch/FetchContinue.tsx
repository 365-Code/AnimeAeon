"use client";
import React, { useEffect, useState } from "react";
import { IRecentEpisode } from "@/utils";
import DisplayContinue from "../list/DisplayContinue";

const FetchContinue = () => {
  const [continueList, setContinueList] = useState<IRecentEpisode[]>([]);

  const data = () => {
    const dta = localStorage.getItem("continueList");
    if (dta) {
      const list = JSON.parse(dta);
      setContinueList(list);
    }
  };

  useEffect(() => {
    data();
  }, []);

  return (
      <DisplayContinue animeEpList={continueList} />
  );
};

export default FetchContinue;
