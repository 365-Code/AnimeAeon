import { randomInt } from "crypto";

export type animeListCardType = {
  id: string;
  thumbnail: string;
  title: string;
  release_year: number;
  release_country: string;
  genres: Array<string>;
};


export const anime1 = {
  id: crypto.randomUUID(),
  title: "Attack on titan final Season Part 2",
  thumbnail: "https://wallpapercave.com/wp/wp9556400.jpg",
  release_year: 2023,
  release_country: "Japan",
  genres: ["Action fiction", "Dark Fantasy", "Apocalyptic", "Shounen"],
};

const anime2 = {
  id: crypto.randomUUID(),
  thumbnail: "https://wallpapercave.com/wp/wp6746192.jpg",
  title: "The misfit of demon king academy",
  release_year: 2023,
  release_country: "Japan",
  genres: [
    "Action fiction",
    "Dark Fantasy",
    "Apocalyptic",
    "Shounen",
    "Adventure",
  ],
};

const anime3 = {
  id: crypto.randomUUID(),
  thumbnail: "https://wallpapercave.com/wp/wp5051795.jpg",
  title: "Classroom of the elite",
  release_year: 2023,
  release_country: "Japan",
  genres: [
    "Action fiction",
    "Dark Fantasy",
    "Apocalyptic",
    "Shounen",
    "Adventure",
  ],
};

const anime4 = {
  id: crypto.randomUUID(),
  thumbnail: "https://wallpapercave.com/wp/wp4478803.jpg",
  title: "Arifureta: From Common place to world strongest",
  release_year: 2023,
  release_country: "Japan",
  genres: [
    "Action fiction",
    "Dark Fantasy",
    "Apocalyptic",
    "Shounen",
    "Adventure",
  ],
};

const anime5 = {
  id: crypto.randomUUID(),
  thumbnail: "https://wallpapercave.com/wp/wp6983484.jpg",
  title: "Horimiya",
  release_year: 2023,
  release_country: "Japan",
  genres: [
    "Action fiction",
    "Dark Fantasy",
    "Apocalyptic",
    "Shounen",
    "Adventure",
  ],
};

const anime6 = {
  id: crypto.randomUUID(),
  thumbnail: "https://wallpapercave.com/wp/wp10443628.jpg",
  title: "tonikawa: Over the moon for you",
  release_year: 2023,
  release_country: "Japan",
  genres: [
    "Action fiction",
    "Dark Fantasy",
    "Apocalyptic",
    "Shounen",
    "Adventure",
  ],
};

const anime7 = {
  id: crypto.randomUUID(),
  thumbnail: "https://wallpapercave.com/wp/wp4947862.jpg",
  title: "A silent voice",
  release_year: 2023,
  release_country: "Japan",
  genres: [
    "Action fiction",
    "Dark Fantasy",
    "Apocalyptic",
    "Shounen",
    "Adventure",
  ],
};

export const animeList = [
  anime1,
  anime2,
  anime3,
  anime4,
  anime5,
  anime6,
  anime7,
];

const getRandom = (n: number = 1) => {
  return Math.floor(Math.random() * n);
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

export const getAnime = (n: number = 10) => {
  // let animes = [];
  // let m = animeList.length;
  // let x = getRandom(m);
  // for (let i = 0; i < n; i++) {
  //   animes.push(animeList[x]);
  //   let y = getRandom(m);
  //   while (x == y) {
  //     y = getRandom(m);
  //   }
  //   x = y;
  // }

  return animeList;
};

export let myList = [] as Array<string>;
