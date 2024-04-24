import { infoAnime } from "@/utils";
import React from "react";

const TestPlayer = () => {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl bg-black/20 shadow-sm shadow-black/80 backdrop-blur-sm">
      <div>
        <img
          src={infoAnime.image}
          alt=""
          className="h-full w-full object-contain object-center"
        />
      </div>
    </div>
  );
};

export default TestPlayer;
