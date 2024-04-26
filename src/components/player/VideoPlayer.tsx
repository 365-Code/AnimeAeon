import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import Player from "./Player";
import { episodeInfo } from "@/utils";
import { useParams, useSearchParams } from "next/navigation";

const VideoPlayer = ({
  setWatch,
}: {
  setWatch: Dispatch<SetStateAction<boolean>>;
}) => {
  const searchParams = useSearchParams();
  const episode = searchParams.get("episode") as string;
  const params = useParams();
  const animeId = Number(params["id"]);
  const [epSources, setEpSources] = useState([
    {
      quality: "default",
      url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    },
  ]);

  const fetchEpisode = async () => {
    try {
      const res = await (
        await fetch("/api/anilist/episode-sources?episodeId=" + episode)
      ).json();
      if (res.success) {
        setEpSources(res.sources);
      }
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    if (episode) {
      fetchEpisode();
      const data = localStorage.getItem("continueList");
      if (data) {
        let list = JSON.parse(data) as Array<any>;
        const exist = list.findIndex((v) => v.id == animeId) || -1;
        if (exist != -1) {
          list[exist].episodeId = episode;
          list[exist].episodeNumber = Number(episode.split("episode-").at(-1));
          localStorage.setItem("continueList", JSON.stringify(list));
        }
      }
    } else {
      setWatch(false);
    }
  }, [episode]);

  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden rounded-xl bg-black/100 shadow-sm shadow-black/80 backdrop-blur-xl">
      {/* <div className="ml-auto w-fit">
        <select name="subDub" id="subDub" className="text-black w-[150px] outline-none p-1">
          <option value="sub">Subbed</option>
          {
            isDubbed &&
            <option value="dub">Dubbed</option>
          }
        </select>
      </div> */}

      <div>
        <Player
          source={epSources.find((e) => e.quality == "default")?.url || ""}
        />
      </div>
      <div className=" absolute left-0 top-0 flex items-start gap-1">
        <button
          onClick={() => setWatch(false)}
          className="group/back flex w-fit items-center gap-2 bg-white/20 px-4 py-2 backdrop-blur-xl hover:bg-white/30"
        >
          <i className="fi fi-ss-arrow-left transition-all group-hover/back:-translate-x-1" />
          <span>Overview</span>
        </button>
        <select
          name="subDub"
          id="subDub"
          className="flex w-fit items-center gap-2 bg-white/20 px-4 py-2 outline-none backdrop-blur-xl hover:bg-white/30"
        >
          <option value="sub">Subbed</option>
        </select>
      </div>
    </div>
  );
};

export default VideoPlayer;
