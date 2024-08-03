"use client";
import InfiniteScroll from "@/components/InfiniteScroll";
import DisplayCards from "@/components/list/DisplayCards";
import { ISearchResult, perPage } from "@/utils";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [series, setSeries] = useState<ISearchResult[][]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState(1);

  const fetchSeries = async () => {
    try {
      setLoading(true);
      const res = await (
        await fetch(`/api/anilist/series?page=${page}&perPage=${perPage}`)
      ).json();
      if (res.success) {
        if (page % 2 == 1) {
          setPage(page + 1);
          setLoading(false);
        }
        if(!hasMore){
          setLoading(false)
        }
        setHasMore(res.hasNextPage);
        setSeries((prev) => [...prev, res.results]);
        setLoading(false);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      fetchSeries();
    }, 100);
    return () => clearTimeout(debounce);
  }, [page]);

  return (
    <section className="flex h-full flex-1 flex-col overflow-hidden rounded-xl">
      <h2 className="heading">Series</h2>
      <div id="series" className="flex-1 space-y-6 overflow-y-scroll no-scrollbar">
        {series?.map((seriesList, i) => (
          <DisplayCards key={i} animeList={seriesList} />
        ))}
      </div>
      <InfiniteScroll
        id="series"
        loading={loading}
        setLoading={setLoading}
        hasMore={hasMore}
        page={page}
        setPage={setPage}
      />
    </section>
  );
};

export default Page;
