import React from 'react'
import Rating from './Rating'
import Image from 'next/image'

const AnimePreview = ({image, title}: {image: string, title: string}) => {
  return (
    <div className='relative min-w-fit h-full'>
        <Image width={400} height={400} className='anime-image' src={image} alt={title} />
        <Rating rate={9.2}/>
    </div>
  )
}

export default AnimePreview