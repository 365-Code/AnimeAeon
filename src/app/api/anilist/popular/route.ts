import { META } from "@consumet/extensions";
import { ApiError } from "next/dist/server/api-utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const anilist = new META.Anilist();
    const { searchParams } = new URL(req.url);
    const page = searchParams.get("page") || 1;
    const perPage = searchParams.get("perPage") || 20;
    const { results, currentPage, hasNextPage, totalPages } =
      await anilist.fetchPopularAnime(Number(page), Number(perPage));
    return NextResponse.json({ success: true, results }, { status: 200 });
  } catch (error: any) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 },
      );
  }
}
