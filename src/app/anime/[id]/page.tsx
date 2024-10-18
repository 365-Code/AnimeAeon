// "use client";
// import DisplayAnimeCards from "@/components/list/DisplayAnimeCards";
// import AnimeInfoCard from "@/components/cards/AnimeInfoCard";
// import { IAnimeInfoAnilit } from "@/utils";
// import React, { useEffect, useState } from "react";
// import DisplayCharacters from "@/components/list/DisplayCharacters";
// import Watch from "@/components/player/Watch";
// import { Skeleton } from "@/components/ui/skeleton";
// import StCardSkeleton from "@/components/skeletons/StCardSkeleton";
// import { toast } from "sonner";
// import { notFound } from "next/navigation";

// interface PageProps {
//   params: { id: string };
//   searchParams: { episode: string };
// }

// const Page = ({
//   params: { id: animeId },
//   searchParams: { episode },
// }: PageProps) => {

//   const [animeInfo, setAnimeInfo] = useState<IAnimeInfoAnilit>(
//     {} as IAnimeInfoAnilit,
//   );

//   const [loading, setLoading] = useState(false);

//   const fetchAnimeInfo = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch("/api/anilist/info?id=" + animeId);

//       if (!response.ok) {
//         const response = await fetch("/api/anilist/info/" + animeId);
//         const res = await response.json();
//         if (!response.ok) {
//           toast.error("Couldn't Fetch Anime");
//           return notFound();
//         }
//         setAnimeInfo(res.result);
//       } else {
//         const res = await response.json();
//         if (res.success) {
//           setAnimeInfo(res.result);
//         }
//       }
//     } catch (error) {
//       toast("Error Occured");
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     const debounce = setTimeout(() => {
//       animeId && fetchAnimeInfo();
//     }, 100);
//     return () => clearTimeout(debounce);
//   }, [animeId]);

//   if (loading) {
//     return (
//       <div className="mx-auto flex w-full max-w-7xl flex-col gap-4">
//         <AnimeBannerSkeleton />
//         <div className="grid grid-cols-2 flex-wrap items-center gap-4 overflow-x-scroll no-scrollbar sm:grid-cols-3 xl:grid-cols-4">
//           {Array(6)
//             .fill(0)
//             .map((_, i) => (
//               <StCardSkeleton key={i} />
//             ))}
//         </div>
//       </div>
//     );
//   }

//   if (!loading && !animeInfo) {
//     return notFound();
//   }

//   return (
//     <section className="mx-auto mt-4 flex w-full max-w-7xl flex-col gap-4 overflow-y-scroll no-scrollbar">
//       {episode ? (
//         <Watch anime={animeInfo} episode={episode} />
//       ) : (
//         <AnimeInfoCard anime={animeInfo} />
//       )}
//       {animeInfo.recommendations && animeInfo.recommendations.length != 0 && (
//         <div className="mb-4 mt-2">
//           <DisplayAnimeCards
//             title="You Might Like"
//             animeList={animeInfo.recommendations}
//           />
//         </div>
//       )}
//       {animeInfo.characters && animeInfo.characters?.length != 0 && (
//         <div className="mb-4">
//           <DisplayCharacters characterList={animeInfo.characters} />
//         </div>
//       )}
//     </section>
//   );
// };

// export default Page;

// const AnimeBannerSkeleton = () => {
//   return (
//     <section
//       className={`relative h-[412px] w-full max-w-7xl overflow-hidden rounded-xl bg-black/20 shadow-sm shadow-black/80 backdrop-blur-sm`}
//     >
//       {/* Image Skeleton */}
//       <Skeleton className="h-full w-full object-cover object-center" />

//       <div className="absolute bottom-0 left-0 flex w-full flex-col gap-4 p-8">
//         {/* Genre Badges Skeleton */}
//         <div className="flex flex-wrap items-center gap-2">
//           <Skeleton className="h-6 w-16 rounded-full" />
//           <Skeleton className="h-6 w-16 rounded-full" />
//           <Skeleton className="h-6 w-16 rounded-full" />
//         </div>

//         {/* Title Skeleton */}
//         <Skeleton className="h-10 w-3/4 sm:h-14 md:h-16" />

//         {/* Studio and Info Skeleton */}
//         <div className="flex max-w-[50%] flex-col gap-2">
//           <Skeleton className="h-6 w-32" />
//           <Skeleton className="h-6 w-48" />
//         </div>

//         {/* Rating Skeleton */}
//         <div className="flex flex-wrap items-center gap-1">
//           <Skeleton className="h-6 w-6 rounded-full" />
//           <Skeleton className="h-6 w-12" />
//         </div>

//         {/* Action Buttons Skeleton */}
//         <div className="flex flex-wrap items-center justify-between gap-4">
//           <div className="flex flex-wrap items-center gap-4">
//             <Skeleton className="h-10 w-32 rounded-md" />
//             <Skeleton className="h-10 w-48 rounded-md" />
//           </div>

//           {/* Arrow Buttons Skeleton */}
//           <div className="flex flex-wrap items-center gap-4">
//             <Skeleton className="h-[2.3rem] w-[2.3rem] rounded-full" />
//             <Skeleton className="h-[2.3rem] w-[2.3rem] rounded-full" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

import DisplayAnimeCards from "@/components/list/DisplayAnimeCards";
import AnimeInfoCard from "@/components/cards/AnimeInfoCard";
import { IAnimeInfoAnilit, toAnimeTitle } from "@/utils";
import React from "react";
import DisplayCharacters from "@/components/list/DisplayCharacters";
import Watch from "@/components/player/Watch";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ITitle } from "@consumet/extensions";

interface PageProps {
  params: { id: string };
  searchParams: { episode: string };
}

const fetchAnimeInfo = async (id: string) => {
  try {
    const response = await fetch(
      "https://animeaeon.vercel.app/api/anilist/info?id=" + id,
    );

    if (!response.ok) {
      const response = await fetch(
        "https://animeaeon.vercel.app/api/anilist/info/" + id,
      );
      const res = await response.json();
      if (!response.ok) {
        return notFound();
      }
      return res.result;
    } else {
      const res = await response.json();
      if (res.success) {
        return res.result;
      }
    }
  } catch (error) {
    throw error;
  }
};

export async function generateMetadata({
  params,
  searchParams,
}: PageProps): Promise<Metadata> {
  const animeInfo = (await fetchAnimeInfo(params.id)) as IAnimeInfoAnilit;
  const animeTitle = animeInfo.title as ITitle;
  const metaTitle =
    toAnimeTitle(animeInfo.title as ITitle) +
    (searchParams.episode ? searchParams.episode : "");
  const metaUrl =
    "https://animeaeon.vercel.app/anime/" +
    animeInfo.id +
    (searchParams.episode ? "?episode=" + searchParams.episode : "");
  const animeGenres = animeInfo.genres as string[];

  // Build keywords array, filtering out any empty strings
  const keywords = [
    animeInfo.title.toString(),
    animeTitle.english || "",
    animeTitle.romaji || "",
    animeTitle.userPreferred || "",
    animeTitle.native || "",
    ...animeGenres,
  ].filter(Boolean); // Filter to remove empty strings

  return {
    title: metaTitle,
    description: animeInfo.description,
    openGraph: {
      title:
        animeTitle.english ||
        animeTitle.romaji ||
        animeTitle.userPreferred ||
        animeTitle.native,
      description: animeInfo.description
        ?.slice(0, 180)
        .replaceAll("<", "")
        .replaceAll(">", ""),
      url: metaUrl,
      images: [
        {
          url: animeInfo.image || "/assets/logo.jpg", // Replace with your actual logo or promotional image
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title:
        animeTitle.english ||
        animeTitle.romaji ||
        animeTitle.userPreferred ||
        animeTitle.native,
      description: animeInfo.description?.slice(0, 180),
      images: {
        url: animeInfo.image || "/assets/logo.jpg", // Replace with your actual logo or promotional image
      },
    },
    keywords,
  };
}

const Page = async ({
  params: { id: animeId },
  searchParams: { episode },
}: PageProps) => {
  // await pauseFunction(1000);

  const animeInfo = (await fetchAnimeInfo(animeId)) as IAnimeInfoAnilit;
  if (!animeInfo) notFound();

  return (
    <section className="mx-auto mt-4 flex w-full max-w-7xl flex-col gap-4 overflow-y-scroll no-scrollbar">
      {episode ? (
        <Watch anime={animeInfo} episode={episode} />
      ) : (
        <AnimeInfoCard anime={animeInfo} />
      )}
      {animeInfo.recommendations && animeInfo.recommendations.length != 0 && (
        <div className="mb-4 mt-2">
          <DisplayAnimeCards
            title="You Might Like"
            animeList={animeInfo.recommendations}
          />
        </div>
      )}
      {animeInfo.characters && animeInfo.characters?.length != 0 && (
        <div className="mb-4">
          <DisplayCharacters characterList={animeInfo.characters} />
        </div>
      )}
    </section>
  );
};

export default Page;
