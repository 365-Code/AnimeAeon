"use client";
import { ISearchResult } from "@/utils";
import React, { useEffect, useState } from "react";
import DisplayCards from "../list/DisplayCards";

const FetchSeries = () => {
  const [series, setSeries] = useState<ISearchResult[]>([]);

  const fetchSeries = async () => {
    try {
      const res = await (await fetch(`/api/anilist/series?page=1`)).json();
      if (res.success) {
        setSeries(res.results);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSeries();
  }, []);

  return (
      <DisplayCards animeList={series} title="Series" />
  );
};

export default FetchSeries;
