import React from "react";
import Rating from "./Rating";
import Image from "next/image";
import Link from "next/link";

const AnimePreview = ({
  image,
  title,
  rating,
  id,
}: {
  image: string;
  id: string;
  title?: string;
  rating?: number;
}) => {
  return (
    <div className="min-h-fit max-h-[250px]">
    <Link href={`/anime/${id}`}>
      <div className="relative min-w-fit h-[200px]">
        <Image
          width={400}
          height={400}
          className="anime-image"
          src={image || "/logo2.png"}
          alt={id}
          />
        {rating && <Rating rate={rating} />}
      </div>
      {title && (
        <p className="text-base">{title?.slice(0, 25) + (title?.length > 25 ? "..." : "")}</p>
        )}
    </Link>
    </div>
  );
};

export default AnimePreview;
