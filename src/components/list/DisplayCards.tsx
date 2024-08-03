import React from "react";
import { ISearchResult } from "@/utils";
import StCard from "../cards/StCard";
import StCardSkeleton from "../skeletons/StCardSkeleton";

const DisplayCards = ({
  title,
  animeList,
}: {
  title?: string;
  animeList: ISearchResult[];
}) => {
  return (
    <section>
      {title && <h3 className="heading capitalize">{title}</h3>}
      <div className="no-scrollbar flex w-full snap-x snap-mandatory items-start gap-4 overflow-x-scroll">
        {animeList?.map((anime) => <StCard key={anime.id} anime={anime} />)}
        {animeList.length == 0 && [...Array(5)].map((x, i) => <StCardSkeleton key={i} />)}
      </div>
    </section>
  );
};

export default DisplayCards;
