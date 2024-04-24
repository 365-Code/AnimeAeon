"use client";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";

const SearchBar = () => {
  const nav = useRouter();
  const [searchInput, setSearchInput] = useState("");
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    nav.push("/anime/search?query=" + searchInput);
    setSearchInput("");
  };

  return (
    <search className="flex items-center gap-2 overflow-hidden rounded-full bg-black/30 py-4 px-8 shadow-inner shadow-black/80">
      <i className="fi fi-ss-search" />
      <form onSubmit={handleSubmit} className="w-full">
        <input
          value={searchInput}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearchInput(e.target.value)
          }
          type="search"
          placeholder="Search"
          className="h-full w-full bg-transparent text-lg font-normal outline-none"
        />
      </form>
    </search>
  );
};

export default SearchBar;
