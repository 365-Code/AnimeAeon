import { ANIME, ITitle, META } from "@consumet/extensions";
import { ApiError } from "next/dist/server/api-utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const anime = new META.Anilist();
    const animeId = params.id;
    const result = await anime.fetchAnilistInfoById(animeId);
    const animeSlug = toAnimeId(result.title as ITitle);
    const episodes = [...Array(result.totalEpisodes || 0)].map((_, ep) => ({
      id: `${animeSlug}-episode-${ep + 1}`,
      title: `EP ${ep + 1}`,
      number: ep + 1,
      image: result.image,
    }));
    const animeInfo = { episodes, ...result };
    return NextResponse.json({
      success: true,
      result: animeInfo,
    });
  } catch (error) {
    if (error instanceof ApiError) {
      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        {
          status: 500,
        },
      );
    }
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      {
        status: 500,
      },
    );
  }
}

const removeChars = (aName: string, characters: string[]) => {
  let animeId = aName;
  characters.forEach((element) => {
    if (animeId) animeId = animeId.replaceAll(element, "");
  });
  return animeId;
};

const toAnimeId = (animeTitle: ITitle) => {
  // const animId = (animeTitle?.romaji || animeTitle?.english || animeTitle?.userPreferred)?.toLowerCase().replaceAll(' ', '-');
  const animId = (
    animeTitle.english?.includes("Hunter")
      ? animeTitle.english
      : animeTitle?.romaji || animeTitle?.english || animeTitle?.userPreferred
  )
    ?.toLowerCase()
    .replaceAll("-", " ")
    .replaceAll("-", " ");
  return removeChars(animId as string, [
    ",",
    ":",
    "?",
    "!",
    ".",
    "(",
    ")",
    "{",
    "}",
    "[",
    "]",
    "/",
    "\\",
  ])
    ?.replace(/\s+/g, " ")
    .replaceAll(" ", "-");
};
