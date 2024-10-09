"use client";

import { useState, useEffect, FormEvent } from "react";
import Link from "next/link";
import { Menu, Search, Play, Tv, TvMinimal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import FetchRecentEpisodes from "../fetch/FetchRecentEpisodes";
import FetchContinue from "../fetch/FetchContinue";
import FetchWatchList from "../fetch/FetchWatchList";
import SideNav from "./SideNav";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import ThemeToggle from "../ThemeToggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const nav = useRouter();
  const [searchInput, setSearchInput] = useState("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    nav.push("/search/results?query=" + searchInput);
    setSearchInput("");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pathanme = usePathname();

  const logo = pathanme.includes("trending")
    ? "/assets/trending.png"
    : pathanme.includes("popular")
      ? "/assets/topRated.png"
      : pathanme.includes("search")
        ? "/assets/results.png"
        : pathanme.includes("series")
          ? "/assets/series.png"
          : pathanme.includes("movies")
            ? "/assets/movies.png"
            : "/assets/anizone.png";

  return (
    <header
      className={`sticky top-0 z-50 mx-auto w-full py-4 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-14 items-center gap-2 px-4 sm:px-0">
        <Link href="/" className="mr-4 hidden sm:inline-block">
          <Image
            width={500}
            height={300}
            alt="animeaeon"
            src={logo}
            className="h-[30px] w-[140px] invert dark:invert-0"
          />
        </Link>
        <Sheet open={isNavOpen} onOpenChange={setIsNavOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="ml-auto">
              <Menu className={`h-6 w-6`} />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SideNav closeNav={() => setIsNavOpen(false)} />
          </SheetContent>
        </Sheet>
        <form
          onSubmit={handleSubmit}
          className="flex flex-1 items-center gap-2 rounded-xl pl-4 ring-slate-900 transition-all focus-within:ring-1"
        >
          <Search />
          <Input
            type="search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search anime..."
            className={cn(
              "w-full border-none bg-transparent text-base outline-none focus-visible:ring-0",
              // isScrolled ? "bg-background" : "bg-background/20",
            )}
          />
        </form>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="ml-auto">
              <TvMinimal className={`h-6 w-6`} />
              <span className="sr-only">Playlist</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full max-w-[400px]">
            <Accordion
              type="single"
              defaultValue="item-1"
              collapsible
              className="mt-4 h-full w-full"
            >
              {sectionList.map((section, index) => (
                <AccordionItem
                  key={index}
                  value={"item-" + index + 1}
                  className="overflow-hidden px-2"
                >
                  <AccordionTrigger className="gradient-text flex w-full items-center justify-between from-red-600 to-blue-600 py-2 text-left text-lg font-medium">
                    {section.title}
                  </AccordionTrigger>
                  <AccordionContent className="max-h-[400px] overflow-y-auto custom-scrollbar">
                    {section.component}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </SheetContent>
        </Sheet>
        <ThemeToggle />
      </div>
    </header>
  );
}

const sectionList = [
  {
    title: "Recent Episodes",
    component: <FetchRecentEpisodes />,
  },
  {
    title: "Continue Watching",
    component: <FetchContinue />,
  },
  {
    title: "WatchList",
    component: <FetchWatchList />,
  },
];
