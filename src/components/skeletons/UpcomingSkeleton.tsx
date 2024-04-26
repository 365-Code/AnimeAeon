import React from "react";

const UpcomingSkeleton = () => {
  return (
    // <section className="relative h-full w-full overflow-hidden rounded-xl bg-black/20 shadow-sm shadow-black/80 backdrop-blur-sm">
    <section className="animate-pulse relative flex h-[50vh] w-full items-start overflow-hidden rounded-xl bg-black/20 shadow-sm shadow-black/80 backdrop-blur-sm">
      <div className="absolute h-full w-full"></div>
      <div className="h-full w-[500px] bg-black"></div>
      {/* <div className="absolute bottom-0 left-0 flex w-full flex-col gap-4 p-8"> */}
      <div className="flex w-full flex-col gap-4 p-8">
        <div className="flex flex-wrap items-center gap-2">
          {[...Array(3)]?.map((g, i) => (
            <span
              key={i}
              className="rounded-full bg-black/20 px-10 py-4 text-sm font-medium"
            ></span>
          ))}
        </div>
        <div className="space-y-2">
          <h2 className="text-5xl h-16 bg-gray-200 rounded-xl dark:bg-gray-700 w-[80%] font-semibold"></h2>
          <div className="flex gap-2 items-center max-w-[90%]">
          <h2 className="text-5xl h-14 bg-gray-200 rounded-xl dark:bg-gray-700 w-[80%] font-semibold"></h2>
          <h2 className="text-5xl h-14 bg-gray-200 rounded-xl dark:bg-gray-700 w-[80%] font-semibold"></h2>
          </div>
        </div>

        <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
          <div className="flex items-center w-full">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
            <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
            <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          </div>
          <div className="flex items-center w-full max-w-[480px]">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
            <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
          </div>
          <div className="flex items-center w-full max-w-[400px]">
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
            <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          </div>
          <div className="flex items-center w-full max-w-[480px]">
            <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
            <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
          </div>
          <div className="flex items-center w-full max-w-[440px]">
            <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
            <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
            <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
          </div>
          <div className="flex items-center w-full max-w-[360px]">
            <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
            <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </section>
  );
};

export default UpcomingSkeleton;
