import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Player from "./Player";
import { useParams, useRouter, useSearchParams } from "next/navigation";

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

  const nav = useRouter();
  const handleSubDub = (e: ChangeEvent<HTMLSelectElement>) => {
    const subDub = e.target.value as string;
    if (subDub == "sub") {
      setSubDub("sub");
      nav.push("?episode=" + String(episode)?.replace("-dub", ""));
    } else {
      setSubDub("dub");
      nav.push(
        "?episode=" + String(episode)?.replace("-episode-", "-dub-episode-"),
      );
    }
  };

  useEffect(() => {
    handleDubbed();
  }, [episode]);

  const handleDubbed = async () => {
    try {
      const res = await (
        await fetch(
          "/api/anilist/episode-sources?episodeId=" +
            String(episode)?.replace("-episode-", "-dub-episode-"),
        )
      ).json();
      if (res.success) {
        setIsDubbed(true);
      } else {
        setIsDubbed(false);
      }
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  const [subDub, setSubDub] = useState("sub");
  const [isDubbed, setIsDubbed] = useState(true);

  return (
    <div className="relative my-auto flex h-fit w-full flex-col overflow-hidden rounded-xl backdrop-blur-xl">
      <div className="max-h-fit">
        <Player
          source={epSources.find((e) => e.quality == "default")?.url || ""}
        />
      </div>
      <div className=" absolute left-0 top-0 flex w-full items-start justify-between gap-1">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setWatch(false)}
            className="group/back flex w-fit items-center gap-2 bg-black/20 px-4 py-2 backdrop-blur-xl hover:bg-black/30"
          >
            <i className="fi fi-ss-arrow-left transition-all group-hover/back:-translate-x-1" />
            <span>Overview</span>
          </button>
          <select
            onChange={handleSubDub}
            value={subDub}
            name="subDub"
            id="subDub"
            className="flex w-fit items-center gap-2 bg-black/20 px-4 py-2 outline-none backdrop-blur-xl hover:bg-black/30"
          >
            <option value="sub" className="bg-white text-black">
              Subbed
            </option>
            {isDubbed && (
              <option value="dub" className="bg-white text-black">
                Dubbed
              </option>
            )}
          </select>
        </div>

        <div className="flex items-center gap-1">
          <button className="flex w-fit items-center gap-2 bg-black/20 px-4 py-2 backdrop-blur-xl hover:bg-black/30">
            Prev
          </button>
          <button className="flex w-fit items-center gap-2 bg-black/20 px-4 py-2 backdrop-blur-xl hover:bg-black/30">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
