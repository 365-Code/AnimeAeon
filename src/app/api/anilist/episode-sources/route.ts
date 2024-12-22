import { META } from "@consumet/extensions";
import { ApiError } from "next/dist/server/api-utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const anilist = new META.Anilist();
    const { searchParams } = new URL(req.url);
    const epId = searchParams.get("episodeId") as string;
    const result = await anilist.fetchEpisodeSources(epId);
    if (!result) {
      return NextResponse.json({ success: false }, { status: 404 });
    }
 
    return NextResponse.json(
      {
        success: true,
        // headers: result.headers,
        // sources: result.sources,
        ...result
      },
      { status: 200 },
    );
  } catch (error) {
    if (error instanceof ApiError) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 500 },
      );
    } else {
      return NextResponse.json(
        { success: false, message: "Internal Server Error" },
        { status: 500 },
      );
    }
  }
}
