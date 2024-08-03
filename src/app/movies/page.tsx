"use client";
import InfiniteScroll from "@/components/InfiniteScroll";
import DisplayCards from "@/components/list/DisplayCards";
import { ISearchResult, perPage } from "@/utils";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [movies, setMovies] = useState<Array<ISearchResult[]>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState(1);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const res = await (
        await fetch(`/api/anilist/movies?page=${page}&perPage=${perPage}`)
      ).json();
      if (res.success) {
        if (page % 2 == 1) {
          setPage(page + 1);
          setLoading(false);
        }
        setHasMore(res.hasNextPage);
        setMovies((prev) => [...prev, res.results]);
        setLoading(false);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      fetchMovies();
    }, 100);
    return () => clearTimeout(debounce);
  }, [page]);

  return (
    <section className="flex h-full flex-1 flex-col overflow-hidden rounded-xl">
      <h2 className="heading">Movies</h2>
      <div
        id="movies"
        className="no-scrollbar flex-1 space-y-6 overflow-y-scroll"
      >
        {movies?.map((movieList, i) => (
          <DisplayCards key={i} animeList={movieList} />
        ))}
      </div>
      <InfiniteScroll
        id="movies"
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
