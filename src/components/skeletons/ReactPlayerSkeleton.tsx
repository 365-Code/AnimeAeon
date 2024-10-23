"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Play,
  Maximize,
  SkipBack,
  SkipForward,
  Settings,
  Loader2,
  Volume,
} from "lucide-react";
import { Skeleton } from "../ui/skeleton";

const CustomReactPlayer = () => {
  return (
    <Card
      className="relative aspect-video w-full overflow-hidden rounded-xl border-none bg-primary outline-none"
      tabIndex={0}
    >
      <div className="absolute inset-0 flex items-center justify-center gap-4 bg-transparent/50">
        <SkipBack
          fill="white"
          className="h-4 w-4 sm:h-5 sm:w-5 md:hidden md:h-6 md:w-6 "
        />
        <Loader2 size={50} className="animate-spin text-white" />
        <SkipForward
          fill="white"
          className="h-4 w-4 sm:h-5 sm:w-5 md:hidden md:h-6 md:w-6 "
        />
      </div>
      {/* Controls */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="bg-gradient-to-t from-black to-transparent p-2">
          <Skeleton className="mb-2 h-[4px] w-full bg-primary" />
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center gap-6 px-2">
              <SkipBack
                fill="white"
                className="hidden h-4 w-4 sm:h-5 sm:w-5 md:block md:h-6 md:w-6"
              />

              <Play
                fill="white"
                className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
              />
              <SkipForward
                fill="white"
                className="hidden h-4 w-4 sm:h-5 sm:w-5 md:block md:h-6 md:w-6"
              />

              <div className="flex items-center space-x-1 sm:space-x-2">
                <Volume
                  fill="white"
                  className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
                />

                {/* volume */}
                <Skeleton className="relative hidden h-2 w-24 sm:flex" />
              </div>
              <span className="text-xs sm:text-sm">00:00 / 00:00</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Button
                variant="button"
                size="icon"
                className="group/settings h-8 w-8 transition-colors hover:bg-white/10 sm:h-10 sm:w-10"
              >
                <Settings
                  className={`relative h-4 w-4 transition-all sm:h-5 sm:w-5 md:h-6 md:w-6`}
                />
              </Button>
              <Button variant="ghost" size="icon">
                <Maximize className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CustomReactPlayer;
