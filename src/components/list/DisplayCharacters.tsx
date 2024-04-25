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
      <h3 className="heading">Characters</h3>
      <div className="no-scrollbar relative flex w-full items-start gap-2 overflow-x-scroll">
        {characterList?.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </section>
  );
};

export default DisplayCharacters;
