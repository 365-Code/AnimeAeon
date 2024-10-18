import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Providers from "@/components/Providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Your Anime Destination | AnimeAeon",
    template: "%s | AnimeAeon",
  },
  description:
    "An anime streaming app featuring a vast collection of anime shows and movies.",
  openGraph: {
    title: "AnimeAeon",
    description:
      "An anime streaming app featuring a vast collection of anime shows and movies.",
    url: "https://animeaeon.vercel.com", // Replace with your actual website URL
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AnimeAeon",
    description:
      "An anime streaming app featuring a vast collection of anime shows and movies.",
    images: "/assets/logo.jpg", // Replace with your actual logo or promotional image
  },
  keywords: [
    "anime",
    "streaming",
    "anime shows",
    "anime movies",
    "animeAeon",
    "anime aeon",
    "aeon",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <Header />
          <main className="flex flex-1 flex-col px-4 sm:px-6">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
