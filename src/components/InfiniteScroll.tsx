"use client";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";

const InfiniteScroll = ({
  page,
  setPage,
  loading,
  setLoading,
  hasMore,
  id,
}: {
  page: number;
  setPage: any;
  loading: boolean;
  setLoading: any;
  hasMore: any;
  id: string;
}) => {
  const handleInfiniteScroll = async () => {
    try {
      const upScroll = document.getElementById(id);
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
    const upScroll = document.getElementById(id);

    if (upScroll) {
      upScroll.addEventListener("scroll", handleInfiniteScroll);
    }
    return () => {
      page > 2 && upScroll?.scrollBy({ top: 40, behavior: "smooth" });
      upScroll?.removeEventListener("scroll", handleInfiniteScroll);
    };
  });
  return (
    <>
      {loading && (
        <div className="fixed left-0 top-0 z-10 flex h-screen w-screen flex-col items-center justify-center bg-black/40 bg-opacity-25">
          <Loader />
          <h3 className="py-2 text-2xl font-bold text-[#09f]">
            Please Wait for a few...
          </h3>
        </div>
      )}
    </>
  );
};

export default InfiniteScroll;
