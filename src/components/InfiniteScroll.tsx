"use client";
import React, { useEffect, useState } from "react";
import AnimeCardSkeleton from "./AnimeCardSkeleton";
import { animePreviewType } from "@/utils";
import { randomUUID } from "crypto";

const InfiniteScroll = ({
  page,
  setPage,
  loading,
  setLoading,
  hasMore,
}: {
  page: number;
  setPage: any;
  loading: boolean;
  setLoading: any;
  hasMore: any;
}) => {
  const handleInfiniteScroll = async () => {
    try {
      const upScroll = document.getElementById("upcoming-scroll");
      if (upScroll) {
        if (
          upScroll.clientHeight + upScroll.scrollTop + 1 >=
            upScroll.scrollHeight &&
          hasMore
        ) {
          setPage(page + 1);
          setLoading(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const upScroll = document.getElementById("upcoming-scroll");
    if (upScroll) {
      upScroll.addEventListener("scroll", handleInfiniteScroll);
    }
    return () => upScroll?.removeEventListener("scroll", handleInfiniteScroll);
  });
  return (
    <div>
      {loading && [...Array(8)].map((v, ind) => <AnimeCardSkeleton key={ind} />)}
    </div>
  );
};

export default InfiniteScroll;
