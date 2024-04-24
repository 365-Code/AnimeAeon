import { META } from "@consumet/extensions";
import { ApiError } from "next/dist/server/api-utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const anilist = new META.Anilist();


    const {results} = await anilist.advancedSearch(
      undefined,
      "ANIME",
      1,
      10,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      "NOT_YET_RELEASED",
    )

    return NextResponse.json({success: true, results})

    // const today = new Date();
    // const nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate()+6);
    
    // const results = await anilist.fetchAiringSchedule(1 , 20, today.getTime(), nextweek.getTime(), true);
    // if(!results){
    //   return NextResponse.json({ success: false, results: "Nothing Found" }, { status: 404 });
    // }
    // return NextResponse.json({ success: true, results }, { status: 200 });

  } catch (error: any) {
    if (error instanceof ApiError)
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 },
      );
      else
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 },
      );
  }
}
