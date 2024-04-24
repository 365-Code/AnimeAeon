"use client"
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Player from "./Player";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { IAnimeResult, IVideo } from "@consumet/extensions";
import TestPlayer from "./TestPlayer";
import TestEpisodes from "./TestEpisodes";
import { IAnimeInfoAnilit, episodeInfo, infoAnime } from "@/utils";
import VideoPlayer from "./VideoPlayer";
import AnimeEpisodes from "../list/AnimeEpisodes";

const Watch = ({anime, setWatch}: {anime: IAnimeInfoAnilit, setWatch: Dispatch<SetStateAction<boolean>>}) => {
  // React
  const params = useParams();
  const nav = useRouter();
  const searchParams = useSearchParams();
  const paramsEpId = (searchParams.get("episode") || 0) as number;
  const paramsSubDub = (searchParams.get("subDub") || false) as boolean;

  console.log(paramsEpId);
  

  // UseStates Variables
  const [ep, setEp] = useState<number>(0);
  const [epId, setEpId] = useState<string>("episode-1");
  const [epLoading, setEpLoading] = useState(true);
  const [epSources, setEpSources] = useState<IVideo[]>([
    {
      url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
      quality: "default",
    },
  ]);
  const [epFailed, setEpFailed] = useState<boolean>(false);
  const [isDubbed, setIsDubbed] = useState<boolean>(false);
  const [subDub, setSubDub] = useState<boolean>(false);

  // Handles
  // const handleEpBackup = () => {
  //   const data = localStorage.getItem("animeEp");
  //   // const epRoute = "/anime/" + (params["animeId"] as string) + "?episode=";
  //   if (data) {
  //     const animeEp = JSON.parse(data);
  //     localStorage.setItem(
  //       "animeEp",
  //       // JSON.stringify({ ...animeEp, [animId]: ep || 1 }),
  //       JSON.stringify({
  //         ...animeEp,
  //         [animId]: { episode: ep || 1, subDub: subDub },
  //       }),
  //     );
  //   }
  // };

  // FetchApi
  // const fetchEpisode = async () => {
  //   try {
  //     const data = await fetch(
  //       `/api/gogo/fetchEpSource?epId=${animeId + "-" + epId}`,
  //     );
  //     const res = await data.json();
  //     setEpLoading(false);
  //     if (res.success) {
  //       setEpSources(res.sources);
  //       const epHeader = res.headers;
  //     } else {
  //       if (subDub == true) {
  //         setSubDub(false);
  //       } else {
  //         setEpFailed(true);
  //       }
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const checkDubbed = async () => {
  //   try {
  //     const data = await fetch(
  //       "/api/gogo/searchAnime?anime=" + animeId + "-dub",
  //     );
  //     const res = await data.json();
  //     if (res.success) {
  //       const resResults = res.result as IAnimeResult[];
  //       resResults.forEach((element) => {
  //         if (element.id == animeId + "-dub") {
  //           setIsDubbed(true);
  //           handleEpBackup();
  //         } else {
  //           setIsDubbed(false);
  //         }
  //       });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // UseEffects
  // useEffect(() => {
  //   if (paramsEpId) {
  //     setEp(Number(paramsEpId));
  //     setSubDub(paramsSubDub == false ? false : true);
  //   } else {
  //     const data = localStorage.getItem("animeEp");
  //     const epRoute = "/anime/" + (params["animeId"] as string) + "?episode=";
  //     if (data) {
  //       const animeEp = JSON.parse(data);
  //       if (!animeEp[animId]) {
  //         handleEpBackup();
  //       }
  //       // setEp((animeEp[animId] as number) || 1);
  //       setEp((animeEp[animId]?.episode as number) || 1);
  //       setSubDub((animeEp[animId]?.subDub as boolean) || false);
  //       nav.push(
  //         epRoute +
  //           Number(animeEp[animId]?.episode || 1) +
  //           "&subDub=" +
  //           animeEp[animId]?.subDub,
  //       );
  //     } else {
  //       // localStorage.setItem("animeEp", JSON.stringify({ [animId]: 1 }));
  //       localStorage.setItem(
  //         "animeEp",
  //         JSON.stringify({ [animId]: { episode: 1, subDub: 0 } }),
  //       );
  //       setEp(1);
  //     }
  //   }
  // }, [paramsEpId]);

  // useEffect(() => {
  //   if (ep) {
  //     setEpId((subDub ? "dub-" : "") + "episode-" + ep);
  //     handleEpBackup();
  //   }
  // }, [ep, subDub]);

  // useEffect(() => {
  //   const debounce = setTimeout(() => {
  //     if (epId && animeId) {
  //       setEpLoading(true);
  //       fetchEpisode();
  //     }
  //   }, 1000);
  //   return () => clearTimeout(debounce);
  // }, [epId, animeId]);

  // useEffect(() => {
  //   checkDubbed();
  // }, []);

  // useEffect(() => {
  //   fetchEpisode()
  // }, [])
  
  return (
    <section
      style={{
        display: "grid",
        gap: "1.5rem",
        gridTemplateColumns: "65% 30%",
      }}
      className="relative h-[70vh] w-full"
    >
      <VideoPlayer setWatch={setWatch} />
      {/* <Player /> */}
      <AnimeEpisodes episodeList={anime.episodes || []} />
      {/* <div className="absolute right-0 top-0 z-10 "></div>
      {epFailed && <p>Couldn&apos;t Fetch Episode</p>}
      <Player
        source={String(epSources.find((s) => s.quality == "default")?.url)}
      /> */}
    </section>
  );
};

export default Watch;
