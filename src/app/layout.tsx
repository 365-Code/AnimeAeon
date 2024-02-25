import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { MyListState } from "@/context/MyListState";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500"] });

// AstraAnime
export const metadata: Metadata = {
  title: "AnimeAeon",
  description: "An anime streaming app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <MyListState>
        <body className={poppins.className}>
          <main
            id="main-screen"
            className=""
          >
            {children}
          </main>
        </body>
      </MyListState>
    </html>
  );
}
