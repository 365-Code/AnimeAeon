"use client";
import InfiniteScroll from "@/components/InfiniteScroll";
import DisplayCards from "@/components/list/DisplayCards";
import { ISearchResult, perPage } from "@/utils";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [trending, setTrending] = useState<ISearchResult[][]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState(1);

  const fetchTrending = async () => {
    try {
      setLoading(true);
      const res = await (
        await fetch(`/api/anilist/trending?page=${page}&perPage=${perPage}`)
      ).json();
      if (res.success) {
        if (page % 2 == 1) {
          setPage(page + 1);
        }
        setHasMore(res.hasNextPage);
        setTrending((prev) => [...prev, res.results]);
        setLoading(false);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      fetchTrending();
    }, 100);
    return () => clearTimeout(debounce);
  }, [page]);

  return (
    <section className="flex h-full flex-1 flex-col overflow-hidden rounded-xl">
      <h2 className="heading">Trending</h2>
      <div id="trending" className="flex-1 space-y-6 overflow-y-scroll no-scrollbar">
        {trending?.map((trendingList, i) => (
          <DisplayCards key={i} animeList={trendingList} />
        ))}
      </div>
      <InfiniteScroll
        id="trending"
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
