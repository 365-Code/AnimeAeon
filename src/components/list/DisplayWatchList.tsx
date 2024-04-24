import { IRecentEpisode, toAnimeTitle } from "@/utils";
import { IAnimeEpisode, ITitle } from "@consumet/extensions";
import React from "react";

const DisplayWatchList = ({
  animeEpList,
}: {
  animeEpList: IRecentEpisode[];
}) => {
  return (
    // <div className="flex h-[400px] w-[350px] flex-col gap-4 overflow-y-hidden rounded-xl bg-black/30 p-4 backdrop-blur-sm">
    <div className=" no-scrollbar flex flex-col gap-4 overflow-y-scroll">
      {animeEpList?.map((animeEp) => (
        <div
          key={animeEp?.id}
          className="flex items-center justify-between gap-2"
        >
          <div className="min-w-[64px] max-w-[64px]  overflow-hidden rounded-lg">
            <img src={animeEp.image} alt="" className="cover-img" />
          </div>
          <div className="flex-1">
            <p className="max-h-[52px] overflow-y-hidden">
              {toAnimeTitle(animeEp?.title as ITitle)}
            </p>
            <p>Episode - {animeEp?.episodeNumber}</p>
          </div>
          <button className="rounded-full bg-white/10 p-4 text-sm">
            <i className="fi fi-ss-play" />
          </button>
        </div>
      ))}
    </div>
    // <div className="flex h-full w-[350px] flex-col gap-4 overflow-y-hidden rounded-xl bg-black/30 p-4 backdrop-blur-sm">
    //   <h3 className="flex items-center gap-1 text-xl font-medium">
    //     Continue Watching
    //   </h3>
    //   <div className=" no-scrollbar flex flex-col gap-4 overflow-y-scroll">
    //     {animeEpList?.map((animeEp) => (
    //       <div
    //         key={animeEp?.id}
    //         className="flex items-center justify-between gap-2"
    //       >
    //         <div className="min-w-[64px] max-w-[64px]  overflow-hidden rounded-lg">
    //           <img src={animeEp.image} alt="" className="cover-img" />
    //         </div>
    //         <div className="flex-1">
    //           <p className="max-h-[52px] overflow-y-hidden">
    //             {toAnimeTitle(animeEp?.title as ITitle)}
    //           </p>
    //           <p>Episode - {animeEp?.episodeNumber}</p>
    //         </div>
    //         <button className="rounded-full bg-white/10 p-4 text-sm">
    //           <i className="fi fi-ss-play" />
    //         </button>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default DisplayWatchList;
