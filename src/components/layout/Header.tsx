"use client";

import { useState, useEffect, FormEvent } from "react";
import Link from "next/link";
import { Menu, Search, TvMinimal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import FetchRecentEpisodes from "../fetch/FetchRecentEpisodes";
import FetchContinue from "../fetch/FetchContinue";
import SideNav from "./SideNav";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import ThemeToggle from "../ThemeToggle";
import { ScrollArea } from "../ui/scroll-area";
import { CardTitle } from "../ui/card";

export default function Header() {
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
    if (typeof window === undefined) return;
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
            : pathanme.includes("watchlist")
              ? "/assets/watchlist.png"
              : "/assets/animeaeon.png";

  return (
    <header
      className={`sticky top-0 z-50 mx-auto w-full py-4 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-14 items-center gap-2 px-4 sm:px-0">
        <Link href="/" className="hidden sm:inline-block">
          <Image
            width={500}
            height={300}
            alt="animeaeon"
            src={logo}
            className="my-auto h-[30px] w-[140px] object-fill invert dark:invert-0"
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
            <SheetHeader className="sr-only">
              <SheetTitle>AnimeAeon</SheetTitle>
              <SheetDescription>Your Only Anime Destination</SheetDescription>
            </SheetHeader>
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
            )}
          />
        </form>
        <Playlist />
        <ThemeToggle />
      </div>
    </header>
  );
}

const Playlist = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="ml-auto">
          <TvMinimal className={`h-6 w-6`} />
          <span className="sr-only">Playlist</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="h-full w-full max-w-[400px]">
        <SheetHeader className="sr-only">
          <SheetTitle>Your Playlist</SheetTitle>
          <SheetDescription>Your Favourite Anime</SheetDescription>
        </SheetHeader>
        <Accordion
          type="single"
          defaultValue="item-1"
          collapsible
          className="mt-4 flex h-full w-full flex-col overflow-hidden"
        >
          {sectionList.map((section, index) => (
            <AccordionItem
              key={index}
              value={"item-" + index + 1}
              className="max-h-full overflow-hidden"
            >
              <AccordionTrigger className="text-lg font-medium">
                <CardTitle>{section.title}</CardTitle>
              </AccordionTrigger>
              <AccordionContent className="flex-1">
                {section.component}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SheetContent>
    </Sheet>
  );
};

const sectionList = [
  {
    title: "Recent Episodes",
    component: <FetchRecentEpisodes />,
  },
  {
    title: "Continue Watching",
    component: (
      <ScrollArea className="h-[calc(100vh-200px)]">
        <FetchContinue />,
      </ScrollArea>
    ),
  },
];
