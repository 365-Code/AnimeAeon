import { IActorWithCharacter, IAnimeCharacter } from "@/utils";
import React, { useState } from "react";
import DisplayVoiceActors from "./DisplayVoiceActors";

const DisplayCharacterActors = ({
  charActorList,
}: {
  charActorList: IAnimeCharacter[];
}) => {
  
  const voiceActorList = (characterList: IAnimeCharacter[]) => {
    let langMap = {} as { [x: string]: IActorWithCharacter[] };
    characterList?.forEach((character) => {
      const characterName = character.name;
      const actors = character.voiceActors.map((char) => ({
        ...char,
        character:
          characterName.full ||
          String(characterName.first) + String(characterName.last) ||
          characterName.userPreferred,
      })) as IActorWithCharacter[];
      actors.forEach((actor) => {
        const lang = actor.language as string;
        let actorImage = actor.image;
        if (
          actor.image ==
          "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg"
        ) {
          actorImage = character.image;
        }
        if (langMap[lang]) {
          // if(actor.image == "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg"){
          langMap[lang].push({
            ...actor,
            image: actorImage,
          } as IActorWithCharacter);
        } else {
          langMap[lang] = [{ ...actor, image: actorImage }];
        }
      });
    });

    return Object.keys(langMap).map((i) => ({
      language: i,
      list: langMap[i],
    }));
  };

  return (
    <section className="space-y-4">
      <h3 className="heading">Voice Actors</h3>
      <div className="space-y-4">
        {voiceActorList(charActorList as IAnimeCharacter[])?.map((data, i) => (
          <div key={i}>
            <h3 className="sub-heading">{data.language}</h3>
            <DisplayVoiceActors voiceActorList={data.list} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default DisplayCharacterActors;
