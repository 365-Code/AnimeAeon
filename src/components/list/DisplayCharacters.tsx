import { IAnimeCharacter } from "@/utils";
import React from "react";
import CharacterCard from "../cards/CharacterCard";
import StCardSkeleton from "../skeletons/StCardSkeleton";

const DisplayCharacters = ({
  characterList,
}: {
  characterList: IAnimeCharacter[];
}) => {
  if (characterList.length == 0) {
    return (
      <div className="no-scrollbar flex items-center gap-4 overflow-x-scroll">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <StCardSkeleton key={i} />
          ))}
      </div>
    );
  }

  return (
    <section className="w-full space-y-4 overflow-hidden">
      <h2 className="gradient-text from-red-500 to-blue-500 text-xl sm:text-2xl md:text-3xl">
        Characters
      </h2>
      <div className="no-scrollbar relative flex w-full items-start gap-2 overflow-x-scroll">
        {characterList?.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </section>
  );
};

export default DisplayCharacters;
