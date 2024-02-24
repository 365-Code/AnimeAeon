"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const BottomNav = () => {
  const pathname = usePathname();
  return (
    <div className="">
      <div className="w-full py-10" />
      <nav className="fixed dark:bg-[#181a20]/80 backdrop-blur-sm z-10 bottom-0 left-0 w-full px-6 pb-6 pt-4 flex justify-between items-center">
        <Link
          href={"/"}
          className={`${
            pathname == "/" && "text-[#06c149]"
          } hover:text-[#06c149] flex flex-col justify-center items-center gap-1`}
        >
          <i className="fi fi-ss-home text-base" />
          <span className="text-[10px] font-medium capitalize">Home</span>
        </Link>
        <Link
          href={"/release-calendar"}
          className={`${
            pathname == "/release-calender" && "text-[#06c149]"
          } hover:text-[#06c149] flex flex-col justify-center items-center gap-1`}
        >
          <i className="fi fi-rr-calendar text-base" />
          <span className="text-[10px] font-medium capitalize">Release Ca..</span>
        </Link>
        <Link
          href={"/my-list"}
          className={`${
            pathname == "/my-list" && "text-[#06c149]"
          } hover:text-[#06c149] flex flex-col justify-center items-center gap-1`}
        >
          <i className="fi fi-ss-bookmark text-base" />
          <span className="text-[10px] font-medium capitalize">my list</span>
        </Link>
        <Link
          href={"/downloads"}
          className={`${
            pathname == "/downloads" && "text-[#06c149]"
          } hover:text-[#06c149] flex flex-col justify-center items-center gap-1`}
        >
          <i className="fi fi-rr-download text-base" />
          <span className="text-[10px] font-medium capitalize">downloads</span>
        </Link>
        <Link
          href={"/profile"}
          className={`${
            pathname == "/profile" && "text-[#06c149]"
          } hover:text-[#06c149] flex flex-col justify-center items-center gap-1`}
        >
          <i className="fi fi-rr-user text-base" />
          <span className="text-[10px] font-medium capitalize">profile</span>
        </Link>
      </nav>
    </div>
  );
};

export default BottomNav;
