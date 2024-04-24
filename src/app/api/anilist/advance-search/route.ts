import { META } from "@consumet/extensions";
import { ApiError } from "next/dist/server/api-utils";
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
      searchParams.get("format") != "All"
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

    const status =
      searchParams.get("status") != "All"
        ? searchParams.get("status") || undefined
        : undefined;

    const season =
      searchParams.get("season") != "All"
        ? searchParams.get("season") || undefined
        : undefined;


    const {currentPage, hasNextPage, totalPages, results} = await anilist.advancedSearch(
      query,
      "ANIME",
      page,
      perPage,
      format,
      sort,
      genres,
      undefined,
      undefined,
      status,
      season,
    );

    return NextResponse.json({ success: true, results, currentPage, hasNextPage, totalPages }, { status: 200 });
  } catch (error: any) {
    if (error instanceof ApiError)
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 },
      );

    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
