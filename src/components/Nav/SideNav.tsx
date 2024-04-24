"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const SideNav = () => {
  const [showNav, setShowNav] = useState(false);

  const navLinks = [
    {
      icon: <i className="fi fi-sr-home" />,
      title: "Home",
      url: "/",
    },
    {
      icon: <i className="fi fi-sr-arrow-trend-up" />,
      title: "Trending",
      url: "/trending",
    },
    {
      icon: <i className="fi fi-sr-fire-flame-curved" />,
      title: "Popular",
      url: "/popular",
    },
    {
      icon: <i className="fi fi-sr-animated-icon" />,
      title: "Series",
      url: "/series",
    },
    {
      icon: <i className="fi fi-sr-clapperboard-play" />,
      title: "Movies",
      url: "/movies",
    },
    {
      icon: <i className="fi fi-sr-wishlist-star" />,
      title: "wishlist",
      url: "/wishlist",
    },
  ];

  const pathanme = usePathname();

  const logo = pathanme.includes("trending")
    ? "/trending.png"
    : pathanme.includes("popular")
      ? "/topRated.png" || "/popular.png"
      : pathanme.includes("series")
        ? "/series.png"
        : pathanme.includes("movies")
          ? "/movies.png"
          : "/anizone.png";

  return (
    <div
      onMouseEnter={() => setShowNav(true)}
      onMouseLeave={() => setShowNav(false)}
      className={`${showNav ? "translate-x-0" : "-translate-x-full"} side-nav z-20 w-fit`}
    >
      <div className="max-w-[60%] p-4">
        <img className="h-full w-full object-center" src={logo} />
      </div>
      <nav>
        {navLinks.map((link, i) => (
          <Link
            key={i}
            className={`nav-li ${pathanme == link.url ? "nav-li-active" : ""}`}
            title={link.title}
            href={link.url}
          >
            {link.icon}
            <span>{link.title}</span>
          </Link>
        ))}
      </nav>
      <div
        onMouseEnter={() => setShowNav(true)}
        className={`absolute left-full top-12 w-fit rounded-r-xl px-2 py-6  ${showNav ? "dark:bg-black" : "dark:bg-black/50"} transition-all`}
      >
        <i className="fi fi-sr-angle-small-right" />
      </div>
    </div>
  );
};

export default SideNav;
