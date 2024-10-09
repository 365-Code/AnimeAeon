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
