"use client";
import { myList } from "@/utils";
import React, { useState } from "react";

const MyListButton = ({ id }: { id: string }) => {
  const [inList, setInList] = useState(false);

  const handleInMyList = () => {
    if (inList) {
      myList.filter((v) => v != id);
    } else {
      myList.push(id);
    }
    setInList((prev) => !prev);
  };

  return (
    <button
      onClick={handleInMyList}
      className={`${
        inList ? "bg-transparent text-[#06b149] hover:text-white de-btn" : "btn"
      }`}
    >
      <i className={`fi fi-rr-plus  ${inList && "hidden"}`} />
      <i className={`fi fi-rr-check ${!inList && "hidden"}`} />
      <span>My list</span>
    </button>
  );
};

export default MyListButton;
