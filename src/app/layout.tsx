import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500"] });

export const metadata: Metadata = {
  title: "Anos.to",
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
        <main
          id="main-screen"
          className="h-full overflow-y-scroll no-scrollbar p-4 relative shadow-sm shadow-white/60 sm:shadow-none max-w-screen-sm mx-auto"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
