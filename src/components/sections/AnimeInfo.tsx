import { IAnimeInfoAnilit } from '@/utils'
import React from 'react'
import AnimeInfoCard from '../cards/AnimeInfoCard'
import AnimeEpisodes from '../list/AnimeEpisodes'

const AnimeInfo = ({anime}: {anime: IAnimeInfoAnilit}) => {
  return (
    <section
      style={{
        display: "grid",
        gap: "1.5rem",
        justifyContent: "space-between",
        // gridTemplateColumns: "70% 28%",
        gridTemplateColumns: "minmax(70%,1fr) minmax(0%, 28%)",
      }}
      className="relative h-[70vh] w-full"
    >
        {/* <AnimeInfoCard anime={anime} /> */}
        <AnimeEpisodes episodeList={anime?.episodes || []} />
    </section>
  )
}

export default AnimeInfo