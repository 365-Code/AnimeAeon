import { IAnimeEpisode } from '@consumet/extensions'
import React from 'react'

const TestEpisodes = ({episodeList}: {episodeList: IAnimeEpisode[]}) => {
  
  return (
    <div className='w-full rounded-xl border h-full'>
      {
        episodeList.map((ep) => <div className='w-full h-fit p-2 bg-white'>
          <p>{ep.title}</p>

        </div>)
      }
    </div>
  )
}

export default TestEpisodes