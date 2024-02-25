export type animeUpcomingType = {
  airingAt: string;
  episode: number;
  media: {
    id: number;
    description: string;
    idMal: number;
    title: {
      romaji: string;
      english: string;
      userPreferred: string;
      native: string;
    };
    countryOfOrigin: string;
    popularity: number;
    bannerImage: string;
    coverImage: {
      extraLarge: string;
      large: string;
      medium: string;
      color: string;
    };
    genres: Array<string>;
    averageScore: number;
    seasonYear: number;
    format: string;
  };
};

export type animeListCardType = {
  id: string;
  image : string;
  title: string;
  link?: string
  releaseDate?: string;
  release_year?: number;
  release_country?: string;
  genres?: Array<string>;
};

export type animePreviewType = {
  id: string;
  image : string;
  title: string;
};

export const anime1 = {
  id: crypto.randomUUID(),
  title: "Attack on titan final Season Part 2",
  image: "https://wallpapercave.com/wp/wp9556400.jpg",
  release_year: 2023,
  release_country: "Japan",
  genres: ["Action fiction", "Dark Fantasy", "Apocalyptic", "Shounen"],
};

/*
export const animeList = [
  anime1,
  {
    id: crypto.randomUUID(),
    image: "https://wallpapercave.com/wp/wp6746192.jpg",
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
  },
  {
    id: crypto.randomUUID(),
    image: "https://wallpapercave.com/wp/wp5051795.jpg",
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
  },
  {
    id: crypto.randomUUID(),
    image: "https://wallpapercave.com/wp/wp4478803.jpg",
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
  },
  {
    id: crypto.randomUUID(),
    image: "https://wallpapercave.com/wp/wp6983484.jpg",
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
  },
  {
    id: crypto.randomUUID(),
    image: "https://wallpapercave.com/wp/wp10443628.jpg",
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
  },
  {
    id: crypto.randomUUID(),
    image: "https://wallpapercave.com/wp/wp4947862.jpg",
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
  },
  {
    id: crypto.randomUUID(),
    image: "https://wallpapercave.com/wp/wp9514085.jpg",
    title: "The hidden dungeon only i can enter",
    release_year: 2023,
    release_country: "Japan",
    genres: [
      "Action fiction",
      "Dark Fantasy",
      "Apocalyptic",
      "Shounen",
      "Adventure",
    ],
  },
  {
    id: crypto.randomUUID(),
    image: "https://wallpapercave.com/wp/wp5981278.jpg",
    title: "Reincarnatted as a slime",
    release_year: 2023,
    release_country: "Japan",
    genres: [
      "Action fiction",
      "Dark Fantasy",
      "Apocalyptic",
      "Shounen",
      "Adventure",
    ],
  },
  {
    id: crypto.randomUUID(),
    image: "https://wallpapercave.com/wp/wp1976013.jpg",
    title: "Overlord",
    release_year: 2023,
    release_country: "Japan",
    genres: [
      "Action fiction",
      "Dark Fantasy",
      "Apocalyptic",
      "Shounen",
      "Adventure",
    ],
  },
  {
    id: crypto.randomUUID(),
    image: "https://wallpapercave.com/wp/wp6887419.jpg",
    title: "Daily life of the immortal king",
    release_year: 2023,
    release_country: "Japan",
    genres: [
      "Action fiction",
      "Dark Fantasy",
      "Apocalyptic",
      "Shounen",
      "Adventure",
    ],
  },
  {
    id: crypto.randomUUID(),
    image: "https://wallpapercave.com/wp/wp10893932.jpg",
    title: "The strongest sage with the weakest crest",
    release_year: 2023,
    release_country: "Japan",
    genres: [
      "Action fiction",
      "Dark Fantasy",
      "Apocalyptic",
      "Shounen",
      "Adventure",
    ],
  },
  {
    id: crypto.randomUUID(),
    image: "https://wallpapercave.com/wp/wp3963549.jpg",
    title: "Rising of the shield hero",
    release_year: 2023,
    release_country: "Japan",
    genres: [
      "Action fiction",
      "Dark Fantasy",
      "Apocalyptic",
      "Shounen",
      "Adventure",
    ],
  },
  {
    id: crypto.randomUUID(),
    image: "https://wallpapercave.com/wp/wp10757297.jpg",
    title: "Shikimori not just a cutie",
    release_year: 2023,
    release_country: "Japan",
    genres: [
      "Action fiction",
      "Dark Fantasy",
      "Apocalyptic",
      "Shounen",
      "Adventure",
    ],
  },
  {
    id: crypto.randomUUID(),
    image: "https://wallpapercave.com/wp/wp10386763.jpg",
    title: "Your name",
    release_year: 2023,
    release_country: "Japan",
    genres: [
      "Action fiction",
      "Dark Fantasy",
      "Apocalyptic",
      "Shounen",
      "Adventure",
    ],
  },
]; */


export const animeList = [
  {
    "title": "Dungeon Meshi",
    "releaseDate": "2024",
    "image": "https://gogocdn.net/cover/dungeon-meshi-1708405352.png",
    "link": "https://gogoanime3.co/category/dungeon-meshi",
    "id": "dungeon-meshi"
  },
  {
    "title": "Ore dake Level Up na Ken",
    "releaseDate": "2024",
    "image": "https://gogocdn.net/cover/ore-dake-level-up-na-ken-1704247746.png",
    "link": "https://gogoanime3.co/category/ore-dake-level-up-na-ken",
    "id": "ore-dake-level-up-na-ken"
  },
  {
    "title": "Detective Conan",
    "releaseDate": "1996",
    "image": "https://gogocdn.net/cover/detective-conan.png",
    "link": "https://gogoanime3.co/category/detective-conan",
    "id": "detective-conan"
  },
  {
    "title": "Dosanko Gal wa Namara Menkoi",
    "releaseDate": "2024",
    "image": "https://gogocdn.net/cover/dosanko-gal-wa-namara-menkoi-1708569614.png",
    "link": "https://gogoanime3.co/category/dosanko-gal-wa-namara-menkoi",
    "id": "dosanko-gal-wa-namara-menkoi"
  },
  {
    "title": "Ao no Exorcist: Shimane Illuminati-hen",
    "releaseDate": "2024",
    "image": "https://gogocdn.net/cover/ao-no-exorcist-shimane-illuminati-hen-1704168077.png",
    "link": "https://gogoanime3.co/category/ao-no-exorcist-shimane-illuminati-hen",
    "id": "ao-no-exorcist-shimane-illuminati-hen"
  },
  {
    "title": "Kusuriya no Hitorigoto",
    "releaseDate": "2023",
    "image": "https://gogocdn.net/cover/kusuriya-no-hitorigoto-1696009733.png",
    "link": "https://gogoanime3.co/category/kusuriya-no-hitorigoto",
    "id": "kusuriya-no-hitorigoto"
  },
  {
    "title": "One Piece",
    "releaseDate": "1999",
    "image": "https://gogocdn.net/cover/one-piece-1708412053.png",
    "link": "https://gogoanime3.co/category/one-piece",
    "id": "one-piece"
  },
  {
    "title": "Undead Unluck",
    "releaseDate": "2023",
    "image": "https://gogocdn.net/cover/undead-unluck-1708403714.png",
    "link": "https://gogoanime3.co/category/undead-unluck",
    "id": "undead-unluck"
  },
  {
    "title": "Tsuki ga Michibiku Isekai Douchuu 2nd Season",
    "releaseDate": "2024",
    "image": "https://gogocdn.net/cover/tsuki-ga-michibiku-isekai-douchuu-2nd-season-1708569353.png",
    "link": "https://gogoanime3.co/category/tsuki-ga-michibiku-isekai-douchuu-2nd-season",
    "id": "tsuki-ga-michibiku-isekai-douchuu-2nd-season"
  },
  {
    "title": "Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e 3rd Season",
    "releaseDate": "2023",
    "image": "https://gogocdn.net/cover/youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e-tv-3rd-season-1704252258.png",
    "link": "https://gogoanime3.co/category/youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e-tv-3rd-season",
    "id": "youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e-tv-3rd-season"
  }
]

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
  let animes = [];
  let m = animeList.length;
  let x = getRandom(m);
  for (let i = 0; i < n; i++) {
    animes.push(animeList[x]);
    let y = getRandom(m);
    while (x == y) {
      y = getRandom(m);
    }
    x = y;
  }

  return animeList;
};

export const getWords = (str: string, count: number) => {
  let ans = ""
  let index = 0;
  for(var i=0; i<str.length && count; i++){
      if(str[i] == " "){
          ans += str.slice(index, i) + " ";
          index = i;
          count--;
      }
  }
  if(count){
      ans += str.slice(index, i)
  }

  return ans.trim();
}