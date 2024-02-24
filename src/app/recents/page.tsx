import NavTop from "@/components/Nav/NavTop";
import RecentsAnime from "@/components/RecentsAnime";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col">
      <NavTop title="recent" />
      <RecentsAnime />
    </div>
  );
};

export default Page;
