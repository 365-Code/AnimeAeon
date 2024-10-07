import React from "react";

const UpcomingSkeleton = () => {
  return (
    <section className="relative flex h-[50vh] w-full animate-pulse items-start overflow-hidden rounded-xl bg-black/20 shadow-sm shadow-black/80 backdrop-blur-sm">
      <div className="absolute h-full w-full" />
      <div className="h-full w-[500px] bg-black" />
      <div className="flex w-full flex-col gap-4 p-8">
        <div className="flex flex-wrap items-center gap-2">
          {[...Array(3)]?.map((g, i) => (
            <span
              key={i}
              className="rounded-full px-10 py-4 text-sm font-medium"
            />
          ))}
        </div>
        <div className="space-y-2">
          <h2 className="h-16 w-[80%] rounded-xl bg-gray-200 text-5xl font-semibold dark:bg-gray-700"></h2>
          <div className="flex max-w-[90%] items-center gap-2">
            <h2 className="h-14 w-[80%] rounded-xl bg-gray-200 text-5xl font-semibold dark:bg-gray-700"></h2>
            <h2 className="h-14 w-[80%] rounded-xl bg-gray-200 text-5xl font-semibold dark:bg-gray-700"></h2>
          </div>
        </div>

        <div role="status" className="max-w-lg animate-pulse space-y-2.5">
          <div className="flex w-full items-center">
            <div className="h-2.5 w-32 rounded-full bg-gray-200 dark:bg-gray-700" />
            <div className="ms-2 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600" />
            <div className="ms-2 h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600" />
          </div>
          <div className="flex w-full max-w-[480px] items-center">
            <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700" />
            <div className="ms-2 h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600" />
            <div className="ms-2 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600" />
          </div>
          <div className="flex w-full max-w-[400px] items-center">
            <div className="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600" />
            <div className="ms-2 h-2.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700" />
            <div className="ms-2 h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600" />
          </div>
          <div className="flex w-full max-w-[480px] items-center">
            <div className="ms-2 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700" />
            <div className="ms-2 h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600" />
            <div className="ms-2 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600" />
          </div>
          <div className="flex w-full max-w-[440px] items-center">
            <div className="ms-2 h-2.5 w-32 rounded-full bg-gray-300 dark:bg-gray-600" />
            <div className="ms-2 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600" />
            <div className="ms-2 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700" />
          </div>
          <div className="flex w-full max-w-[360px] items-center">
            <div className="ms-2 h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600" />
            <div className="ms-2 h-2.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700" />
            <div className="ms-2 h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600" />
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </section>
  );
};

export default UpcomingSkeleton;
