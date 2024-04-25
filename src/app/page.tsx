import FetchMovies from "@/components/fetch/FetchMovies";
import FetchPopular from "@/components/fetch/FetchPopular";
import FetchSeries from "@/components/fetch/FetchSeries";
import FetchTrending from "@/components/fetch/FetchTrending";
import FetchUpcoming from "@/components/fetch/FetchUpcoming";
import MainSection from "@/components/sections/MainSection";
import React from "react";

const Page = () => {
  return (
    <MainSection>
      <div className="no-scrollbar h-full flex-1 space-y-4 overflow-y-scroll">
        <FetchUpcoming />
        <FetchPopular />
        <FetchTrending />
        <FetchMovies />
        <FetchSeries />
      </div>
    </MainSection>
  );
};

export default Page;
