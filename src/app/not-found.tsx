import BackButton from "@/components/BackButton";
import Image from "next/image";
import React from "react";

const NotFound = () => {
  return (
    <div className="-z-0 flex h-screen flex-col items-center justify-center overflow-hidden">
      <div className="absolute left-0 top-0 flex h-full w-full opacity-10">
        <img
          className="h-full w-full flex-1 object-center"
          src={"/placeholder/bg.jpg"}
          alt="bg"
        />
      </div>
      <div className="z-[1] flex flex-col gap-4 text-center">
        <Image
          width={500}
          height={500}
          src={"/assets/404.png"}
          alt="404"
          className="h-[150px] w-[350px] max-w-full invert dark:invert-0"
        />
        <BackButton text="Go Back" className="mx-auto" />
      </div>
    </div>
  );
};

export default NotFound;
