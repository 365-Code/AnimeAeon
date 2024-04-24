import { IActorWithCharacter, IAnimeCharacter, IVoiceActor } from "@/utils";
import React, { Dispatch, SetStateAction } from "react";

const ActorCard = ({
  actor,
  active,
  index,
  setActive,
}: {
  actor: IActorWithCharacter;
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
  index: number;
}) => {
  return (
    <div
      onClick={() => setActive(index)}
      className={`relative h-[350px] min-w-[130px] overflow-hidden rounded-xl transition-all ${active == index ? "min-w-[250px]" : ""} `}
    >
      <div
        className={`h-full w-full transition-all ${active == index ? "opacity-50" : "opacity-100"} `}
      >
        <img
          src={actor.image}
          alt=""
          className="h-full w-full object-cover object-center transition-all"
        />
      </div>
      <div
        className={`absolute bottom-0 left-0 h-fit w-full  p-2 text-white transition-all ${active == index ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
      >
        <p className="text-xl font-medium">
          {actor.name.full ||
            String(actor.name.first) + String(actor.name.last) ||
            actor.name.userPreferred}
        </p>
        <p className="text-lg font-normal">{actor.character}</p>
        <p className="text-lg font-normal">{actor.language}</p>
      </div>
    </div>
  );
};

export default ActorCard;
