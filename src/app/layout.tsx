import type { Metadata } from "next";
import { Karla, Poppins } from "next/font/google";
import "./globals.css";
import { MyListState } from "@/context/MyListState";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import SideNav from "@/components/Nav/SideNav";
import SearchTop from "@/components/Nav/SearchTop";
import MainSection from "@/components/sections/MainSection";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

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
          <main id="main-screen">
            <SideNav />
            {children}
          </main>
        </body>
      </MyListState>
    </html>
  );
}
