"use client";
import { useMyList } from "@/context/MyListState";
import React, { useEffect, useState } from "react";

const MyListButton = ({
  id,
  image,
  icon,
}: {
  id: string;
  image: string;
  icon?: any;
}) => {
  const [inList, setInList] = useState(false);

  const { myList, addToMyList, removeFromMyList } = useMyList();

  useEffect(() => {
    const index = myList.findIndex((mid) => mid.id == id);
    index >= 0 ? setInList(true) : setInList(false);
  }, []);

  const handleInMyList = () => {
    if (inList) {
      removeFromMyList(id);
    } else {
      addToMyList({ id, image });
    }
    setInList((prev) => !prev);
  };

  return (
    <>
      {!icon ? (
        <button
          onClick={handleInMyList}
          className={`${
            inList
              ? "bg-transparent text-[#06b149] hover:text-white de-btn"
              : "btn"
          }`}
        >
          <i className={`fi fi-rr-plus  ${inList && "hidden"}`} />
          <i className={`fi fi-rr-check ${!inList && "hidden"}`} />
          <span>My list</span>
        </button>
      ) : (
        <button
          onClick={handleInMyList}
          className={`${
            inList
              ? "text-[#06b149]"
              : "text-white"
          }`}
        >
          {icon}
        </button>
      )}
    </>
  );
};

export default MyListButton;
