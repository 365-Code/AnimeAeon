"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const GettingStarted = () => {``
  const [current, setCurrent] = useState(0);

  return (
    <div className="flex flex-col w-full justify-end h-full overflow-hidden">
      <img
        width={500}
        height={500}
        src={"/bg.jpeg"}
        alt="cover"
        className="absolute top-0 left-0 -z-10 opacity-50"
      />
      <div className="w-full text-center flex flex-col gap-4">
        <div className="flex overflow-x-scroll w-full no-scrollbar snap-x snap-mandatory">
          <div className="min-w-full snap-start">
            <h2 className="text-2xl font-medium">Welcome to AnimeAeon</h2>
            <p className="text-sm font-normal">
              The best streaming anime app of the century to entertain you every
              day
            </p>
          </div>

          <div className="min-w-full snap-start">
            <h2 className="text-2xl font-medium">Welcome to AnimeAeon</h2>
            <p className="text-sm font-normal">
              The best streaming anime app of the century to entertain you every
              day
            </p>
          </div>

          <div className="min-w-full snap-start">
            <h2 className="text-2xl font-medium">Welcome to AnimeAeon</h2>
            <p className="text-sm font-normal">
              The best streaming anime app of the century to entertain you every
              day
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-1">
          <span
            className={`w-2 h-2 rounded-full ${
              current == 0 ? "bg-[#06b149]" : "bg-white"
            }`}
          />
          <span
            className={`w-2 h-2 rounded-full ${
              current == 1 ? "bg-[#06b149]" : "bg-white"
            }`}
          />
          <span
            className={`w-2 h-2 rounded-full ${
              current == 2 ? "bg-[#06b149]" : "bg-white"
            }`}
          />
        </div>
        <Link href={'/'} className="neon shadow-sm shadow-[#06f149]/20 bg-[#06b149] w-full p-3 rounded-full font-normal">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default GettingStarted;
