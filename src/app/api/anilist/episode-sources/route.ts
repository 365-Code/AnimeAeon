import { META } from "@consumet/extensions";
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
    return NextResponse.json({
      success: true,
      headers: result.headers,
      sources: result.sources,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
