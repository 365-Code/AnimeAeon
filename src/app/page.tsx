import SearchBar from "@/components/Nav/SearchBar";
import UpcomingAnime from "@/components/UpcomingAnime";
import FetchMovies from "@/components/fetch/FetchMovies";
import FetchPopular from "@/components/fetch/FetchPopular";
import FetchRecentEpisodes from "@/components/fetch/FetchRecentEpisodes";
import FetchSeries from "@/components/fetch/FetchSeries";
import FetchTrending from "@/components/fetch/FetchTrending";
import FetchUpcoming from "@/components/fetch/FetchUpcoming";
import FetchWatchList from "@/components/fetch/FetchWatchList";
import DisplayCharacters from "@/components/list/DisplayCharacters";
import DisplayRecentEpisode from "@/components/list/DisplayRecentEpisode";
import DisplayWatchList from "@/components/list/DisplayWatchList";
import NewList from "@/components/list/NewList";
import Watch from "@/components/player/Watch";
import MainSection from "@/components/sections/MainSection";
import SectionLeft from "@/components/sections/SectionLeft";
import { IAnimeCharacter, infoAnime, recentEpisodeList } from "@/utils";
import React from "react";

const Page = () => {
  return (
    // <section className="h-full">
    //   <SectionLeft />

    // </section>
    <MainSection>
      <div className="no-scrollbar h-full flex-1 space-y-4 overflow-y-scroll">
        <FetchUpcoming />
        <FetchPopular />
        <FetchTrending />
        <FetchMovies />
        <FetchSeries />
      </div>
    </MainSection>
    // <MainSection>
    //   {/* <Watch anime={infoAnime} /> */}
    //   <FetchUpcoming />
    //   <FetchMovies />
    //   <FetchSeries />
    //   <DisplayCharacters
    //     characterList={infoAnime.characters as IAnimeCharacter[]}
    //     />
    // </MainSection>
  );
};

export default Page;
