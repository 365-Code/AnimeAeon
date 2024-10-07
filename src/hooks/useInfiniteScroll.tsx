import React, { Dispatch, SetStateAction, useCallback, useRef } from "react";

interface ScrollProps {
  loading: boolean;
  hasMore: boolean;
  setPage: Dispatch<SetStateAction<number>>;
}

const useInfiniteScroll = ({ loading, hasMore, setPage }: ScrollProps) => {
  const observer = useRef<IntersectionObserver | null>(null);

  const lastEleRef = useCallback(
    (node: HTMLDivElement) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((enteries) => {
        if (enteries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [loading, hasMore],
  );
  return {
    observer,
    lastEleRef,
  };
};

export default useInfiniteScroll;
