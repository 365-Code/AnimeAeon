import { Genres, IAnimeInfo, ITitle } from "@consumet/extensions";

export const perPage = 18;
export const animeGenres = Object.values(Genres);
export interface IArtWork {
  img: string;
  type: string;
  providerId: string;
}

export interface IActorWithCharacter extends IVoiceActor {
  character: string;
}

export interface IVoiceActor {
  id: number;
  language: string;
  name: {
    first?: string;
    last?: string;
    full?: string;
    native?: string;
    userPreferred?: string;
  };
  image: string;
  imageHash: string;
}

export interface IAnimeCharacter {
  id: number;
  role: string;
  name: {
    first?: string;
    last?: string;
    full?: string;
    native?: string;
    userPreferred?: string;
  };
  image: string;
  imageHash: string;
  voiceActors: IVoiceActor[];
}
export interface IAnimeInfoAnilit extends IAnimeInfo {
  artwork?: IArtWork[];
  currentEpisode?: number;
  characters?: IAnimeCharacter[];
}

export interface ISearchResult {
  id: string;
  malId: number;
  title: {
    romaji: string;
    english: string;
    native: string;
  };
  image: string;
  imageHash: string;
  status: string;
  cover: string;
  coverHash: string;
  popularity: number;
  countryOfOrigin: string;
  totalEpisodes: number;
  currentEpisode: number | null;
  description: string;
  genres: string[];
  rating: number;
  color: string;
  type: string;
  releaseDate: number;
}
export interface IRecentEpisode {
  id: string;
  malId: string | string;
  title: {
    romaji: string;
    english: string;
    native: string;
  };
  image: string;
  imageHash: string;
  episodeId: string;
  episodeTitle: string;
  episodeNumber: number;
  type: string;
}

export const toAnimeTitle = (animeTitle: ITitle) => {
  return (
    animeTitle?.english ||
    animeTitle?.romaji ||
    animeTitle?.userPreferred ||
    animeTitle?.native
  );
};

export const removeChar = (str: string, char: string) => {
  let x = "";
  let n = str.length;
  for (let i = 0; i < n; i++) {
    if (str[i] != char) {
      x += str[i];
    } else {
      x += " ";
    }
  }
  return x;
};

export const getWords = (str: string, count: number) => {
  let ans = "";
  let index = 0;
  for (var i = 0; i < str.length && count; i++) {
    if (str[i] == " ") {
      ans += str.slice(index, i) + " ";
      index = i;
      count--;
    }
  }
  if (count) {
    ans += str.slice(index, i);
  }

  return ans.trim();
};

export default function pauseFunction(delay: number) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, delay);
  });
  return promise;
}

const removeChars = (aName: string, characters: string[]) => {
  let animeId = aName;
  characters.forEach((element) => {
    if (animeId) animeId = animeId.replaceAll(element, "");
  });
  return animeId;
};

export const toAnimeId = (animeTitle: ITitle) => {
  // const animId = (animeTitle?.romaji || animeTitle?.english || animeTitle?.userPreferred)?.toLowerCase().replaceAll(' ', '-');
  const animId = (
    animeTitle.english?.includes("Hunter")
      ? animeTitle.english
      : animeTitle?.romaji || animeTitle?.english || animeTitle?.userPreferred
  )
    ?.toLowerCase()
    .replaceAll("-", " ")
    .replaceAll("-", " ");
  return removeChars(animId as string, [
    ",",
    ":",
    "?",
    "!",
    ".",
    "(",
    ")",
    "{",
    "}",
    "[",
    "]",
    "/",
    "\\",
  ])
    ?.replace(/\s+/g, " ")
    .replaceAll(" ", "-");
};
