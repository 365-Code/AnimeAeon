import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

const NotFound = () => {
  return (
    <div className="-z-0 flex h-screen w-screen flex-col items-center justify-center overflow-hidden">
      <div className="absolute left-0 top-0 flex h-full w-full opacity-10">
        <img
          className="h-full w-full flex-1 object-center"
          src={"/placeholder/bg.jpeg"}
          alt="bg"
        />
        <img
          className="h-full w-full flex-1 object-center"
          src={"/placeholder/bg.jpeg"}
          alt="bg"
        />
        <img
          className="h-full w-full flex-1 object-center"
          src={"/placeholder/bg.jpeg"}
          alt="bg"
        />
      </div>
      <div className="z-[1] flex flex-col gap-4 text-center">
        <Image
          width={500}
          height={500}
          src={"/placeholder/404.png"}
          alt="404"
          className="h-[200px] w-[400px] max-w-full invert"
        />
        <BackButton text="Go Back" className="mx-auto" />
      </div>
    </div>
  );
};

export default NotFound;
