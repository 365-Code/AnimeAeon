import Image from "next/image";

export default function Footer() {
  return (
    <footer className="">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
          <div className="max-w-[300px]">
            <Image
              width={500}
              height={300}
              src={"/assets/animeaeon.png"}
              alt="anizone"
              className="h-[75px] invert dark:invert-0"
            />
            <Image
              width={500}
              height={300}
              src={"/assets/tag.png"}
              alt="anizone"
              className="h-[35px] invert dark:invert-0"
            />
          </div>
          <p className="w-[300px] max-w-full text-sm">
            Your ultimate destination for anime streaming. Discover, watch, and
            fall in love with anime.
          </p>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <div className="flex flex-col items-center justify-between sm:flex-row">
            <p className="text-sm">
              &copy; 2023 AnimeAeon. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
