"use client";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
  const nav = useRouter();
  return (
    <button onClick={() => nav.back()} className="flex w-full text-left">
      <i className="fi fi-sr-arrow-small-left text-2xl" />
    </button>
  );
};

export default BackButton;
