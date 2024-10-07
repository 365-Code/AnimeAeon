import FetchMovies from "@/components/fetch/FetchMovies";
import FetchPopular from "@/components/fetch/FetchPopular";
import FetchUpcoming from "@/components/fetch/FetchUpcoming";
import React from "react";

const Page = () => {
  return (
    <div className="mt-6 flex flex-col gap-6">
      <FetchUpcoming />
      <FetchPopular />
      <FetchMovies />
    </div>
  );
};

export default Page;
