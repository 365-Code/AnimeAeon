import HomeAnimeList from "@/components/home/HomeAnimeList";
import Image from "next/image";
import React from "react";
import MyListButton from "@/components/MyListButton";
import Link from "next/link";
import BottomNav from "@/components/Nav/BottomNav";
import TopHitsAnime from "@/components/TopHitsAnime";
import HomeTopHits from "@/components/home/HomeTopHits";
import HomeUpcoming from "@/components/home/HomeUpcoming";

const Page = () => {
  return (
    <div className="">
      <div className="absolute top-0 left-0 h-[340px] w-full -z-10">
        <Image
          width={400}
          height={400}
          src="https://wallpapercave.com/wp/wp6067863.jpg"
          alt="cover-image"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="h-[308px] mb-4 w-full flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div id="logo" className="p-1 bg-white/50 rounded-full">
            <Image src={"/logo1.png"} width={40} height={40} alt="logo" />
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
          <h1 className="font-medium text-2xl">Demon slayer: Kimetsu...</h1>
          <p className="text-sm font-normal">
            Action, Shounen, Martial Arts, Adventure
          </p>
          <div className="flex items-center gap-4">
            <button className="flex btn items-center">
              <i className="fi fi-rr-play-circle text-white" /> Play
            </button>
            <MyListButton
              id="MyListButton"
              image="https://wallpapercave.com/wp/wp6067863.jpg"
            />
          </div>
        </div>
      </div>
      <HomeAnimeList title="Top Hits Anime" type="topHits" linkTo="/top-hits-anime" />
      <HomeAnimeList title="Recents" type="recents" linkTo="/recents" />
      <HomeUpcoming /> 
      <BottomNav />
    </div>
  );
};

export default Page;
