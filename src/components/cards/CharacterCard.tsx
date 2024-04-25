import { IAnimeCharacter } from "@/utils";
import React, { useEffect, useState } from "react";
import DisplayVoiceActors from "../list/DisplayVoiceActors";
import ActorCard from "./ActorCard";

const CharacterCard = ({ character }: { character: IAnimeCharacter }) => {
  const [active, setActive] = useState(0);
  const [current, setCurrent] = useState(false);

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (active == -1) {
        setCurrent(false);
      }
    }, 300);
    return () => clearTimeout(debounce);
  }, [active]);

  return (
    <>
      <div
        onMouseEnter={() => {
          setCurrent(true);
          setActive(0);
        }}
        onMouseLeave={() => setActive(-1)}
        className={`group/chCard relative h-[350px] min-w-[130px] max-w-[250px] overflow-hidden rounded-xl transition-all delay-200 ${current ? "min-w-[250px]" : ""}`}
      >
        <div
          className={`h-full w-full  transition-all ${current ? "opacity-50" : "opacity-100"}`}
        >
          <img
            src={character.image}
            alt=""
            className="h-full w-full object-cover object-center transition-all"
          />
        </div>
        <div
          className={`absolute bottom-0 left-0 h-fit w-full p-2 text-white transition-all ${current ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
        >
          <p className="text-xl font-medium">
            {character.name.full ||
              String(character.name.first) + String(character.name.last) ||
              character.name.userPreferred}
          </p>
          <p className="text-lg font-normal">{character.role}</p>

          {/* <DisplayVoiceActors voiceActorList={{character.voiceActors}} /> */}
        </div>
      </div>
      <div
        onMouseEnter={() => setActive(0)}
        onMouseLeave={() => {
          setCurrent(false);
        }}
        className={`${current ? "z-20 flex min-w-[400px] max-w-[400px] gap-2 overflow-x-scroll rounded-xl" : "hidden"} custom-scrollbar`}
      >
        {character.voiceActors.map(
          (actor, i) =>
            actor.image !=
              "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg" && (
              <ActorCard
                active={active}
                index={i}
                key={i}
                setActive={setActive}
                actor={{
                  character:
                    character.name.full ||
                    character.name.first + " " + character.name.last,
                  ...actor,
                }}
              />
            ),
        )}
      </div>
    </>
  );
};

export default CharacterCard;
