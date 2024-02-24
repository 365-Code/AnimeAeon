import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { MyListState } from "@/context/MyListState";

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
            className="h-full no-scrollbar overflow-y-scroll p-4 relative shadow-sm shadow-white/60 sm:shadow-none"
          >
            {children}
          </main>
        </body>
      </MyListState>
    </html>
  );
}
