"use client";
import { ISearchResult } from "@/utils";
import React, { useEffect, useState } from "react";
import DisplayCards from "../list/DisplayCards";

const FetchPopular = () => {
  const [popular, setPopular] = useState<ISearchResult[]>([]);

  const fetchPopular = async () => {
    try {
      const res = await (await fetch(`/api/anilist/trending?page=1`)).json();
      if (res.success) {
        setPopular(res.results);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPopular();
  }, []);

  return <DisplayCards animeList={popular} title="Popular" />;
};

export default FetchPopular;
