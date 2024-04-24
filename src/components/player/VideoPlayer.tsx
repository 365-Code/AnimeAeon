import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import Player from "./Player";
import { episodeInfo } from "@/utils";
import { useSearchParams } from "next/navigation";

const VideoPlayer = ({
  setWatch,
}: {
  setWatch: Dispatch<SetStateAction<boolean>>;
}) => {
  const searchParams = useSearchParams();
  const episode = searchParams.get("episode") as string;

  const [epSources, setEpSources] = useState([
    {
      quality: "default",
      url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    },
  ]);

  const fetchEpisode = async () => {
    try {
      console.log("working");

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
    episode && fetchEpisode();
  }, [episode]);

  return (
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-xl bg-black/100 shadow-sm shadow-black/80 backdrop-blur-xl">
      {/* <div className="ml-auto w-fit">
        <select name="subDub" id="subDub" className="text-black w-[150px] outline-none p-1">
          <option value="sub">Subbed</option>
          {
            isDubbed &&
            <option value="dub">Dubbed</option>
          }
        </select>
      </div> */}
      <div className="flex gap-1">
        <button
          onClick={() => setWatch(false)}
          className="group/back flex w-fit items-center gap-2 bg-white/20 px-4 py-2 backdrop-blur-xl hover:bg-white/30"
        >
          <i className="fi fi-ss-arrow-left transition-all group-hover/back:-translate-x-1" />
          <span>Overview</span>
        </button>
        <select name="subDub" id="subDub" className="outline-none flex w-fit items-center gap-2 bg-white/20 px-4 py-2 backdrop-blur-xl hover:bg-white/30">
          <option value="sub">Subbed</option>
        </select>
      </div>
      <div>
        {/* <Player
          source={epSources.find((e) => e.quality == "default")?.url || ""}
        /> */}
      </div>
    </div>
  );
};

export default VideoPlayer;
