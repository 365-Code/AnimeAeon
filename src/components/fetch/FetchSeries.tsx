"use client";
import { ISearchResult, seriesList } from "@/utils";
import React, { useEffect, useState } from "react";
import DisplayCards from "../list/DisplayCards";

const FetchSeries = ({ title }: { title?: string }) => {
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
    // fetchSeries();
    setSeries(seriesList)
  }, []);

  return (
    // <section className="w-full space-y-4 overflow-hidden">
      <DisplayCards animeList={series} title="Series" />
    // </section>
  );
};

export default FetchSeries;
