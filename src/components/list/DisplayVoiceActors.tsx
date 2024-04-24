import { IActorWithCharacter, IAnimeCharacter, IVoiceActor } from "@/utils";
import React, { useState } from "react";
import CharacterCard from "../cards/CharacterCard";
import ActorCard from "../cards/ActorCard";


const DisplayVoiceActors = ({
  voiceActorList,
}: {
  voiceActorList: IActorWithCharacter[];
}) => {
  const [active, setActive] = useState(0);
  return (
    <section className="w-full overflow-hidden">
      <div className="no-scrollbar flex w-full items-start gap-2 overflow-x-scroll">
        {voiceActorList.map((actor, i) => (
          <ActorCard
            key={actor.id}
            active={active}
            setActive={setActive}
            index={i}
            actor={actor}
          />
        ))}
      </div>
    </section>
  );
};

export default DisplayVoiceActors;
