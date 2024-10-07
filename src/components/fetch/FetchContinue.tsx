"use client";
import React, { useEffect, useState } from "react";
import { IRecentEpisode } from "@/utils";
import DisplayContinue from "../list/DisplayContinue";

const FetchContinue = () => {
  const [continueList, setContinueList] = useState<IRecentEpisode[]>([]);

  const loadContinue = () => {
    const data = localStorage.getItem("continueList");
    if (data) {
      const list = JSON.parse(data);
      setContinueList(list);
    }
  };

  useEffect(() => {
    loadContinue();
  }, []);

  return <DisplayContinue animeEpList={continueList} />;
};

export default FetchContinue;
