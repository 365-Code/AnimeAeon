import HomeAnimeList from "@/components/home/HomeAnimeList";
import Image from "next/image";
import React from "react";
import MyListButton from "@/components/MyListButton";
import Link from "next/link";
import BottomNav from "@/components/Nav/BottomNav";
import HomeUpcoming from "@/components/home/HomeUpcoming";
import Carousell from "@/components/Carousel";
import HomeAnime from "@/components/home/HomeAnime";

const Page = () => {
  return (
    <div className="">
      
      <div className="absolute left-0 top-0 -z-10 h-[340px] w-full">
        {/* <Image
          width={400}
          height={400}
          src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx161645-7I8Cip7XRDhV.jpg"
          alt="cover-image"
          className="h-full w-full object-cover object-center"
        /> */}
      </div>
      <HomeAnime />

      {/* <div className="mb-4 flex h-[308px] w-full flex-col justify-between pb-4">
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

        <div className="space-y-1">
          <h1 className="text-2xl font-medium">The Apothecary Diaries</h1>
          <p className="text-sm font-normal">Drama, Mystery</p>
          <div className="flex items-center gap-4">
            <button className="btn flex items-center">
              <i className="fi fi-rr-play-circle text-white" /> Play
            </button>
            <MyListButton
              id="MyListButton"
              image="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx161645-7I8Cip7XRDhV.jpg"
            />
          </div>
        </div>
      </div> */}


      <HomeAnimeList
        title="Top Hits Anime"
        type="topHits"
        linkTo="/top-hits-anime"
      />
      <HomeAnimeList title="Recents" type="recents" linkTo="/recents" />
      <HomeUpcoming />
      <BottomNav />
    </div>
  );
};

export default Page;
