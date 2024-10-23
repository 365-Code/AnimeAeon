"use client";
import React from "react";
import Combobox from "./ui/combo-box";
import { IAnimeEpisode } from "@consumet/extensions";
import { useRouter } from "next/navigation";

const EpisodesCombo = ({
  episodeId,
  episodeList,
}: {
  episodeId: string;
  episodeList: IAnimeEpisode[];
}) => {
  const nav = useRouter();
  return (
    <div className="sm:hidden">
      <Combobox
        className="sm:hidden"
        placeholder="Select Episode"
        title="Episode"
        defaultValue={episodeId}
        comboList={episodeList.map((episode) => ({
          label: "Episode - " + episode.number,
          value: episode.id,
        }))}
        onClick={(episode) => nav.push("?episode=" + episode)}
      />
    </div>
  );
};

export default EpisodesCombo;
