import React from "react";
import DisplayRecentEpisode from "../list/DisplayRecentEpisode";
import SearchBar from "../Nav/SearchBar";
import { recentEpisodeList } from "@/utils";
import DisplayWatchList from "../list/DisplayWatchList";
import NewList from "../list/NewList";
import FetchRecentEpisodes from "../fetch/FetchRecentEpisodes";
import FetchWatchList from "../fetch/FetchWatchList";
import SideList from "../list/SideList";
import FetchContinue from "../fetch/FetchContinue";

const SectionLeft = () => {
  return (
    <div className="flex h-full w-[350px] flex-col gap-6">
      <SearchBar />
      <div className="w-full flex-1">
        <SideList
          list={[
            {
              title: "Recent Episodes",
              component: <FetchRecentEpisodes />,
            },
            {
              title: "Continue Watching",
              component: <FetchContinue />,
            },
            {
              title: "WatchList",
              component: <FetchWatchList />,
            },
          ]}
        />
      </div>
      {/* <DisplayRecentEpisode animeList={recentEpisodeList} />
      <DisplayWatchList animeEpList={recentEpisodeList} /> */}
      {/* <FetchRecentEpisodes />
        <FetchWatchList /> */}
    </div>
  );
};

export default SectionLeft;

// <div className="h-full border flex flex-col gap-6">
//   <SearchBar />
//   <NewList
//     list={[
//       {
//         title: "Recent",
//         component: <DisplayRecentEpisode animeList={recentEpisodeList} />,
//       },
//       {
//         title: "WatchList",
//         component: <DisplayWatchList animeEpList={recentEpisodeList} />,
//       },
//     ]}
//   />
//   {/* <DisplayRecentEpisode animeList={recentEpisodeList} />
//   <DisplayWatchList animeEpList={recentEpisodeList} /> */}
//   {/* <FetchRecentEpisodes />
//     <FetchWatchList /> */}
// </div>
