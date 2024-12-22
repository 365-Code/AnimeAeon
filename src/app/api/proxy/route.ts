import { NextRequest } from "next/server";

// app/api/proxy/route.js
export async function GET(request: NextRequest) {
  // Extract URL and referer from the request query parameters
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");
  const referer = searchParams.get("referer") || ""; // Default to empty if no referer

  if (!url) {
    return new Response(
      JSON.stringify({ error: "URL parameter is required" }),
      { status: 400 },
    );
  }

  try {
    // Fetch the M3U8 file using fetch
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Referer: referer, // Pass the Referer header if provided
      },
    });

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: "Failed to fetch the video file" }),
        { status: 500 },
      );
    }

    // Set the correct Content-Type based on the response headers
    const contentType =
      response.headers.get("Content-Type") || "application/octet-stream";    

    // Return the stream to the client with the correct Content-Type header
    return new Response(response.body, {
      status: 200,
      headers: {
        "Content-Type": contentType, // Set the correct content type
      },
    });
  } catch (error) {
    console.error("Error fetching the video:", error);
    return new Response(JSON.stringify({ error: "Error fetching the video" }), {
      status: 500,
    });
  }
}
