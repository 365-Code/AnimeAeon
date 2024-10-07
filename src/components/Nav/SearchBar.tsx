"use client";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

const SearchBar = () => {
  const nav = useRouter();
  const [searchInput, setSearchInput] = useState("");
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    nav.push("/search/results?query=" + searchInput);
    setSearchInput("");
  };

  return (
    <search className="flex items-center rounded-full bg-black/30 pl-4 shadow-inner shadow-black/80">
      <Search />
      <form onSubmit={handleSubmit} className="w-full">
        <Input
          value={searchInput}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearchInput(e.target.value)
          }
          type="search"
          placeholder="Search"
          className="border-none py-6 text-lg focus-visible:ring-0"
        />
      </form>
    </search>
  );
};

export default SearchBar;
