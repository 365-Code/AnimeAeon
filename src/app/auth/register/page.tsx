import BackButton from "@/components/BackButton";
import { Mail } from "lucide-react";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="flex h-full flex-col items-center justify-between">
      <BackButton />
      <Image
        width={300}
        height={300}
        src="/assets/animeaeon.png"
        className="h-[200px] w-[200px] rounded-full border"
        alt="logo"
      />
      <h1 className="text-center text-3xl font-medium">Create Your Account</h1>
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="flex h-fit w-full items-center overflow-hidden rounded-lg bg-[#1f222a]">
          <Mail size={20} />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="w-full bg-transparent px-2 py-3 outline-none dark:text-white"
          />
        </div>
        <div className="flex h-fit w-full items-center overflow-hidden rounded-lg bg-[#1f222a]">
          <i className="fi fi-sr-lock px-4" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full bg-transparent px-2 py-3 outline-none dark:text-white"
          />
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" name="remember" id="remember" />
          <span>Remember Me</span>
        </div>

        <button className="w-full rounded-full bg-[#06b149] p-3 font-normal">
          Sign up
        </button>
      </div>

      <div className="flex w-full items-center gap-2 whitespace-nowrap">
        <hr className="w-full" />
        <span>or continue with</span>
        <hr className="w-full" />
      </div>

      <div>
        <div className="h-[50px] w-[50px] rounded-lg border bg-white"></div>
      </div>
    </div>
  );
};

export default Page;
