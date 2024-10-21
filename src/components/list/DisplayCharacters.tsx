import { IAnimeCharacter } from "@/utils";
import React from "react";
import CharacterCard from "../cards/CharacterCard";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Badge } from "../ui/badge";

const DisplayCharacters = ({
  characterList,
}: {
  characterList: IAnimeCharacter[];
}) => {
  return (
    <section className="w-full space-y-4 overflow-hidden">
      <h2 className="text-xl sm:text-2xl md:text-3xl">Characters</h2>
      <div className="relative mx-auto flex w-fit flex-wrap justify-center gap-2 overflow-x-scroll no-scrollbar">
        {characterList?.map(
          (character, i) =>
            // <CharacterCard key={character.id} character={character} />
            character.image !=
              "https://s4.anilist.co/file/anilistcdn/character/large/default.jpg" && (
              <RoundCharacterCard key={character.id} character={character} />
            ),
        )}
      </div>
    </section>
  );
};

export default DisplayCharacters;

const RoundCharacterCard = ({ character }: { character: IAnimeCharacter }) => {
  const charName =
    character.name.full ||
    String(character.name.first) + String(character.name.last) ||
    character.name.userPreferred;
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className="">
            <img
              width={400}
              height={400}
              alt={charName}
              src={character.image}
              className="h-[7rem] w-[7rem] overflow-hidden rounded-full object-cover object-center"
            />
            <div className="text-center sm:hidden">
              <Badge className="block text-center">{charName}</Badge>
              <Badge className="text-center text-xs">{character.role}</Badge>
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-center">{charName}</p>
          <p className="text-center text-xs">{character.role}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
