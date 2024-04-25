import { META } from "@consumet/extensions";
import { ApiError } from "next/dist/server/api-utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const anilist = new META.Anilist();
    const {searchParams} = new URL(req.url)
    const animeId = searchParams.get("id") as string
    const result = await anilist.fetchAnimeInfo(animeId);
    return NextResponse.json({ success: true, result }, { status: 200 });
  } catch (error: any) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 },
      );
  }
}
