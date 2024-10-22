import FetchSearch from "@/components/fetch/FetchSearch";
import { Metadata } from "next";
import React from "react";

type SearchType = {
  query: string;
  format: string;
  sort: string;
  genres: string;
  animeStatus: string;
  season: string;
};

export async function generateMetadata({
  searchParams,
}: {
  searchParams: SearchType;
}): Promise<Metadata> {
  const { query, format, sort, genres, animeStatus, season } = searchParams;
  const title = query ? `${query} - Search Results` : "Search Results";
  const filters = [
    format ? `format: ${format}` : null,
    sort ? `sorted by: ${sort}` : null,
    genres ? `genres: ${genres}` : null,
    animeStatus ? `status: ${animeStatus}` : null,
    season ? `season: ${season}` : null,
  ]
    .filter(Boolean)
    .join(", ");

  const description = `Search results for "${query || "anime"}"${
    filters ? ` (${filters})` : ""
  }.`;

  const keywords = [
    query,
    format,
    sort,
    genres,
    animeStatus,
    season,
    "anime",
    "anime search",
    "animeAeon",
  ].filter(Boolean); // Filter out any undefined or empty values

  return {
    title,
    description,
    keywords,
  };
}

const Page = async ({
  searchParams: queryParams,
}: {
  searchParams: SearchType;
}) => {
  return (
    <main className="mx-auto my-8 max-w-7xl">
      <FetchSearch searchParams={queryParams} />
    </main>
  );
};

export default Page;
