import { META } from "@consumet/extensions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const anilist = new META.Anilist();
    const { searchParams } = new URL(req.url);
    const query =
      searchParams.get("query") != "All"
        ? searchParams.get("query") || undefined
        : undefined;

    const page = Number(searchParams.get("page")) || 1;
    const perPage = Number(searchParams.get("perPage")) || 20;

    const format =
      searchParams.get("format") != "ALL"
        ? searchParams.get("format") || undefined
        : undefined;

    const genres =
      searchParams.get("genres") != "All"
        ? (searchParams.get("genres") as string)?.split(",")
        : undefined;

    const sort =
      searchParams.get("sort") != "All"
        ? (searchParams.get("sort") as string)?.split(",")
        : undefined;

    const animeStatus =
      searchParams.get("animeStatus") != "All"
        ? searchParams.get("animeStatus") || undefined
        : undefined;

    const season =
      searchParams.get("season") != "All"
        ? searchParams.get("season") || undefined
        : undefined;

    const { currentPage, hasNextPage, totalPages, results } =
      await anilist.advancedSearch(
        query,
        "ANIME",
        page,
        perPage,
        // undefined,
        format,
        sort,
        genres,
        undefined,
        undefined,
        animeStatus,
        season,
      );

    return NextResponse.json(
      { success: true, results, currentPage, hasNextPage, totalPages },
      { status: 200 },
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
