import { toAnimeId } from "@/utils";
import { ITitle, META } from "@consumet/extensions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const anilist = new META.Anilist();
    const { searchParams } = new URL(req.url);
    const animeId = searchParams.get("id") as string;
    const result = await anilist.fetchAnimeInfo(animeId);

    let animeInfo = result;
    const animeSlug = toAnimeId(result.title as ITitle);
    if (result.episodes && result.episodes.length == 0) {
      let episodes = [...Array(result.totalEpisodes || 0)].map((_, ep) => ({
        id: `${animeSlug}-episode-${ep + 1}`,
        title: `EP ${ep + 1}`,
        number: ep + 1,
        image: result.image,
      }));

      animeInfo = { ...result, episodes };
    }

    return NextResponse.json(
      { success: true, result: animeInfo },
      { status: 200 },
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
