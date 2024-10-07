// "use client";
// import {
//   ArrowLeft,
//   ChevronLeft,
//   ChevronRight,
//   Clapperboard,
//   Flame,
//   Home,
//   List,
//   ListVideo,
//   TrendingUp,
// } from "lucide-react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import React, { useState } from "react";
// import { Button } from "../ui/button";

// const SideNav = () => {
//   const [showNav, setShowNav] = useState(false);

//   const navLinks = [
//     {
//       icon: Home,
//       title: "Home",
//       url: "/",
//       fill: "transparent",
//       stroke: "#78716c",
//     },
//     {
//       icon: TrendingUp,
//       title: "Trending",
//       url: "/trending",
//       stroke: "#3b82f6",
//     },
//     {
//       icon: Flame,
//       title: "Popular",
//       url: "/popular",
//       fill: "#ef4444",
//     },
//     {
//       icon: List,
//       title: "Series",
//       url: "/series",
//       stroke: "#f97316",
//     },
//     {
//       icon: Clapperboard,
//       title: "Movies",
//       url: "/movies",
//       fill: "#8b5cf6",
//     },
//     {
//       icon: ListVideo,
//       title: "watchlist",
//       url: "/watchlist",
//       stroke: "#10b981",
//     },
//   ];

//   const pathanme = usePathname();
//   const nav = useRouter();

//   const logo = pathanme.includes("trending")
//     ? "/assets/trending.png"
//     : pathanme.includes("popular")
//       ? "/assets/topRated.png"
//       : pathanme.includes("series")
//         ? "/assets/series.png"
//         : pathanme.includes("movies")
//           ? "/assets/movies.png"
//           : "/assets/anizone.png";

//   return (
//     <div
//       onMouseEnter={() => setShowNav(true)}
//       onMouseLeave={() => setShowNav(false)}
//       className={`${showNav ? "translate-x-0" : "-translate-x-full"} side-nav z-20 w-fit`}
//     >
//       <img className="m-4 h-fit max-w-[60%] object-center" src={logo} />
//       <nav>
//         {navLinks.map((link, i) => (
//           <Link
//             key={i}
//             className={`flex w-full items-center gap-4 p-4 font-normal transition-all hover:bg-slate-200 ${pathanme == link.url ? "nav-li-active" : ""}`}
//             title={link.title}
//             href={link.url}
//           >
//             <link.icon
//               size={20}
//               fill={link.fill || "transparent"}
//               stroke={link.stroke || "transparent"}
//             />
//             <span>{link.title}</span>
//           </Link>
//         ))}
//       </nav>
//       <div
//         onMouseEnter={() => setShowNav(true)}
//         className="absolute left-full top-20 "
//       >
//         <Button
//           onMouseEnter={() => setShowNav(true)}
//           className={`z-10 w-fit rounded-r-xl px-2 py-6`}
//         >
//           <ChevronRight size={18} />
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default SideNav;

"use client";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Clapperboard,
  Flame,
  Home,
  List,
  ListVideo,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const SideNav = () => {
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
    <div>
      <Image
        width={500}
        height={300}
        className="m-4 h-fit max-w-[60%] object-center invert"
        src={logo}
        alt="logo.png"
      />
      <nav>
        {navLinks.map((link, i) => (
          <Link
            key={i}
            className={`flex w-full items-center gap-4 p-4 font-normal transition-all hover:bg-slate-200 ${pathanme == link.url ? "nav-li-active" : ""}`}
            title={link.title}
            href={link.url}
          >
            <link.icon
              size={20}
              fill={link.fill || "transparent"}
              stroke={link.stroke || "transparent"}
            />
            <span>{link.title}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default SideNav;
