"use client";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";

const SearchTop = () => {
  const nav = useRouter();
  const [searchInput, setSearchInput] = useState("");
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    nav.push("/anime/search?query=" + searchInput);
    setSearchInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <search className="mx-auto mb-4 flex h-[60px] md:w-[60%] max-w-full items-center dark:bg-transparent">
        <button className="h-full rounded-l-lg bg-black/40 p-4 outline-none">
          <i className="fi fi-sr-search" />
        </button>
        <input
          value={searchInput}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearchInput(e.target.value)
          }
          type="search"
          placeholder="Search Your Anime"
          className="h-full w-full border bg-transparent px-4 py-2 text-lg font-medium text-[#181a20] outline-none dark:text-white"
        />
      </search>
    </form>
  );
};

export default SearchTop;
