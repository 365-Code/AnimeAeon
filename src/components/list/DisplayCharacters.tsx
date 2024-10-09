import { IAnimeCharacter } from "@/utils";
import React from "react";
import CharacterCard from "../cards/CharacterCard";

const DisplayCharacters = ({
  characterList,
}: {
  characterList: IAnimeCharacter[];
}) => {
  return (
    <section className="w-full space-y-4 overflow-hidden">
      <h2 className="gradient-text from-red-500 to-blue-500 text-xl sm:text-2xl md:text-3xl">
        Characters
      </h2>
      <div className="relative flex w-full items-start gap-2 overflow-x-scroll no-scrollbar">
        {characterList?.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </section>
  );
};

export default DisplayCharacters;
