import BackButton from "@/components/BackButton";
import { Mail } from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col items-center h-full justify-between">
      <BackButton />
      <img
        width={300}
        height={300}
        src="/assets/animeaeon.png"
        className="h-[200px] w-[200px] border rounded-full"
        alt="logo"
      />
      <h1 className="text-center text-3xl font-medium">Create Your Account</h1>
      <div className="flex flex-col justify-center items-center gap-3">
        <div className="w-full rounded-lg bg-[#1f222a] flex items-center h-fit overflow-hidden">
          <Mail size={20} />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="w-full px-2 py-3 dark:text-white bg-transparent outline-none"
          />
        </div>
        <div className="w-full rounded-lg bg-[#1f222a] flex items-center h-fit overflow-hidden">
          <i className="fi fi-sr-lock px-4" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full px-2 py-3 dark:text-white bg-transparent outline-none"
          />
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" name="remember" id="remember" />
          <span>Remember Me</span>
        </div>

      <button className="bg-[#06b149] w-full p-3 rounded-full font-normal">
        Sign up
      </button>
      </div>

      <div className="flex w-full whitespace-nowrap items-center gap-2">
        <hr className="w-full" />
        <span>or continue with</span>
        <hr className="w-full" />
      </div>

      <div>
        <div className="w-[50px] h-[50px] border bg-white rounded-lg"></div>
      </div>
    </div>
  );
};

export default Page;
