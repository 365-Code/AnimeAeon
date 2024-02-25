"use client"
import React, { useEffect, useState } from 'react'
import MyListButton from '../MyListButton'
import Link from 'next/link'
import Image from 'next/image'
import { animeListCardType } from '@/utils'

const HomeTop = ({id} : {id: string}) => {
    type animeShortDetailType = {
        name: string;
        image: string;
        id: string;
        genre: string;
        released: string;
        status: string;
      };
    
      const [animeDet, setAnimeDet] = useState<animeShortDetailType>({
        name: "",
        image: "",
        id: "",
        genre: "",
        released: "",
        status: "",
      });

    const fetchAnime = async () => {
        try {
          const result = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/anime/${id}`
          );
          if (result.ok) {
            const { results } = await result.json();
            setAnimeDet(results);
          }
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        fetchAnime();
      }, []);

  return (
    
    <div className="p-8 absolute z-10 top-0 left-0 mb-4 flex h-[308px] w-full flex-col justify-between pb-4">
    <div className="flex items-center justify-between">
      <div id="logo" className="rounded-full bg-white/50 p-1">
        <Image src={"/logo2.png"} width={40} height={40} alt="logo" />
      </div>
      <div className="flex items-center gap-6">
        <button>
          <i className="fi fi-rr-search text-xl" />
        </button>
        <Link href={"/notifications"}>
          <i className="fi fi-rr-bell text-xl" />
        </Link>
      </div>
    </div>

    <div className="space-y-1 text-left">
      <h1 className="text-2xl font-medium telef">{animeDet.name}</h1>
      <p className="text-sm font-normal">{animeDet.genre}</p>
      <div className="flex items-center gap-4">
        <button className="btn flex items-center">
          <i className="fi fi-rr-play-circle text-white" /> Play
        </button>
        <MyListButton
          id={animeDet.id}
          image={animeDet.image}
        />
      </div>
    </div>
  </div>
  )
}

export default HomeTop