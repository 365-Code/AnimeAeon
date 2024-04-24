import { IAnimeCharacter } from "@/utils";
import React from "react";

const CharacterCard = ({ character }: { character: IAnimeCharacter }) => {
  return (
    <div className="group/chCard delay-200 overflow-hidden relative rounded-xl h-[350px] min-w-[130px] transition-all hover:min-w-[250px]">
      <div className="h-full w-full transition-all opacity-100 group-hover/chCard:opacity-50">
        <img
          src={character.image}
          alt=""
          className="h-full w-full object-cover object-center transition-all"
        />
      </div>
      <div className="group-hover/chCard:opacity-100 group-hover/chCard:translate-y-0 translate-y-full opacity-0 transition-all p-2 absolute bottom-0 left-0 w-full h-fit text-white">
        <p className="text-xl font-medium">{character.name.full || (String(character.name.first) + String(character.name.last)) || character.name.userPreferred}</p>
        <p className="text-lg font-normal">{character.role}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
