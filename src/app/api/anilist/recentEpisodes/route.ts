import { META } from "@consumet/extensions";
import { ApiError } from "next/dist/server/api-utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const anilist = new META.Anilist();
    const {results} = await anilist.fetchRecentEpisodes();

    return NextResponse.json({ success: true, results }, { status: 200 });
  } catch (error) {
    if (error instanceof ApiError)
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 },
      );
  }
}
