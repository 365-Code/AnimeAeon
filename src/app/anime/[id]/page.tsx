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
