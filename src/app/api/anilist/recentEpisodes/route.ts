import { META } from "@consumet/extensions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const anilist = new META.Anilist();
    const currYear = new Date().getFullYear();

    const { results } = await anilist.advancedSearch(
      undefined,
      "ANIME",
      1,
      15,
      "OVA",
      ["UPDATED_AT_DESC", "UPDATED_AT"],
      undefined,
      undefined,
      currYear,
    );

    return NextResponse.json({ success: true, results }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
