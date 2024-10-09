"use client";
import {
  Clapperboard,
  Flame,
  Home,
  List,
  ListVideo,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const SideNav = ({ closeNav }: { closeNav?: () => void }) => {
  const pathanme = usePathname();

  const logo = pathanme.includes("trending")
    ? "/assets/trending.png"
    : pathanme.includes("popular")
      ? "/assets/topRated.png"
      : pathanme.includes("series")
        ? "/assets/series.png"
        : pathanme.includes("movies")
          ? "/assets/movies.png"
          : "/assets/anizone.png";

  return (
    <div className="mt-4">
      <Image
        width={500}
        height={300}
        className="mb-4 block h-fit max-w-[60%] object-center invert dark:invert-0 sm:hidden"
        src={logo}
        alt="logo.png"
      />

      <nav>
        {navLinks.map((link, i) => (
          <Link
            key={i}
            onClick={closeNav}
            title={link.title}
            href={link.url}
          >
            <Button
              type="button"
              variant={pathanme == link.url ? "default" : "outline"}
              className={cn(
                "w-full justify-start gap-2 rounded-none border-none text-left text-base capitalize outline-none py-6",
              )}
            >
              <link.icon
                size={20}
                fill={link.fill || "transparent"}
                stroke={link.stroke || "transparent"}
              />
              <span>{link.title}</span>
            </Button>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default SideNav;

const navLinks = [
  {
    icon: Home,
    title: "Home",
    url: "/",
    fill: "transparent",
    stroke: "#78716c",
  },
  {
    icon: TrendingUp,
    title: "Trending",
    url: "/trending",
    stroke: "#3b82f6",
  },
  {
    icon: Flame,
    title: "Popular",
    url: "/popular",
    fill: "#ef4444",
  },
  {
    icon: List,
    title: "Series",
    url: "/series",
    stroke: "#f97316",
  },
  {
    icon: Clapperboard,
    title: "Movies",
    url: "/movies",
    fill: "#8b5cf6",
  },
  {
    icon: ListVideo,
    title: "watchlist",
    url: "/watchlist",
    stroke: "#10b981",
  },
];
