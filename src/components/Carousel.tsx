"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Carousel } from "react-responsive-carousel";

const Carousell = ({
  images,
  height,
}: {
  images: Array<{ image: string; title: string }>;
  height?: string;
}) => {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      <div className={height ? height : "h-[340px]"}>
        <img
          width={500}
          height={500}
          src={images[0]?.image || ""}
          alt={images[0]?.title}
          className="h-[340px] w-[230px] object-cover object-top"
        />
      </div>
      <div className={height ? height : "h-[340px]"}>
        <img
          width={500}
          height={500}
          src={images[1]?.image || ""}
          alt={images[1]?.title}
          className="h-[340px] w-[230px] object-cover object-top"
        />
        <p>asdfl</p>
      </div>
      <div className={height ? height : "h-[340px]"}>
        <img
          width={500}
          height={500}
          src={images[2]?.image || ""}
          alt={images[2]?.title}
          className="h-[340px] w-[230px] object-cover object-top"
        />
        <p className="bg-black p-4">asdfl</p>
      </div>
      <div className={height ? height : "h-[340px]"}>
        <img
          width={500}
          height={500}
          src={images[3]?.image || ""}
          alt={images[3]?.title}
          className="h-[340px] w-[230px] object-cover object-top"
        />
      </div>
      <div className={height ? height : "h-[340px]"}>
        <img
          width={500}
          height={500}
          src={images[4]?.image || ""}
          alt={images[4]?.title}
          className="h-[340px] w-[230px] object-cover object-top"
        />
      </div>
      <div className={height ? height : "h-[340px]"}>
        <img
          width={500}
          height={500}
          src={images[5]?.image || ""}
          alt={images[5]?.title}
          className="h-[340px] w-[230px] object-cover object-top"
        />
      </div>
      {/* <>
        {images.forEach((image, ind) => (
          <div key={ind} className={height ? height : "h-[340px]"  + "absolute top-0 left-0"}>
            <img src={image} alt={ind.toString()} />
          </div>
        ))}
      </> */}
    </Carousel>
  );
};

export default Carousell;
