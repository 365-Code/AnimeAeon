import { IAnimeInfo, IAnimeResult, ITitle } from "@consumet/extensions";
import {
  IAnimeEpisode,
  IAnimeEpisodeV2,
} from "@consumet/extensions/dist/models/types";

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

export const recentEpisodeList = [
  {
    id: "164702",
    malId: "55265",
    title: {
      romaji: "Tensei Kizoku, Kantei Skill de Nariagaru",
      english:
        "As a Reincarnated Aristocrat, I'll Use My Appraisal Skill to Rise in the World",
      native: "転生貴族、鑑定スキルで成り上がる",
    },
    image:
      "https://artworks.thetvdb.com/banners/v4/series/434704/posters/64592baf30759.jpg",
    imageHash: "hash",
    episodeId: "/tensei-kizoku-kantei-skill-de-nariagaru-episode-3",
    episodeTitle: "Episode 3",
    episodeNumber: 3,
    type: "TV",
  },
  {
    id: "158898",
    malId: "53865",
    title: {
      romaji: "Yozakura-san Chi no Daisakusen",
      english: "Mission: Yozakura Family",
      native: "夜桜さんちの大作戦",
    },
    image:
      "https://artworks.thetvdb.com/banners/v4/series/424019/posters/66131d582f232.jpg",
    imageHash: "hash",
    episodeId: "/yozakura-san-chi-no-daisakusen-episode-3",
    episodeTitle: "Episode 3",
    episodeNumber: 3,
    type: "TV",
  },
  {
    id: "160181",
    malId: "54233",
    title: {
      romaji: "Sasayaku You ni Koi wo Utau",
      english: "Whisper Me a Love Song",
      native: "ささやくように恋を唄う",
    },
    image:
      "https://artworks.thetvdb.com/banners/v4/series/429626/posters/6414799b9b5d0.jpg",
    imageHash: "hash",
    episodeId: "/sasayaku-you-ni-koi-wo-utau-episode-2",
    episodeTitle: "Episode 2",
    episodeNumber: 2,
    type: "TV",
  },
  {
    id: "170890",
    malId: "57100",
    title: {
      romaji: "THE NEW GATE",
      english: "THE NEW GATE",
      native: "THE NEW GATE",
    },
    image:
      "https://artworks.thetvdb.com/banners/v4/series/442045/posters/654ca2644a6a5.jpg",
    imageHash: "hash",
    episodeId: "/the-new-gate-episode-2",
    episodeTitle: "Episode 2",
    episodeNumber: 2,
    type: "TV",
  },
  {
    id: "153288",
    malId: "52588",
    title: {
      romaji: "Kaijuu 8-gou",
      english: "Kaiju No.8",
      native: "怪獣８号",
    },
    image:
      "https://media.kitsu.io/anime/46300/poster_image/c8a7d985608494c388e9aa1a5fa66428.jpg",
    imageHash: "hash",
    episodeId: "/kaijuu-8-gou-episode-2",
    episodeTitle: "Episode 2",
    episodeNumber: 2,
    type: "TV",
  },
  {
    id: "169927",
    malId: "56838",
    title: {
      romaji: "One Room, Hi Atari Futsuu, Tenshi Tsuki.",
      english: "Studio Apartment, Good Lighting, Angel Included",
      native: "ワンルーム、日当たり普通、天使つき。",
    },
    image:
      "https://artworks.thetvdb.com/banners/v4/series/440450/posters/65c8872040ed2.jpg",
    imageHash: "hash",
    episodeId: "/one-room-hiatari-futsuu-tenshi-tsuki-episode-4",
    episodeTitle: "Episode 4",
    episodeNumber: 4,
    type: "TV",
  },
  {
    id: "152302",
    title: {
      romaji: "HIGHSPEED Étoile",
      english: "HIGHSPEED Étoile",
      native: "HIGHSPEED Étoile",
    },
    image:
      "https://artworks.thetvdb.com/banners/v4/series/422432/posters/62d26c32b23f6.jpg",
    imageHash: "hash",
    episodeId: "/highspeed-etoile-episode-3",
    episodeTitle: "Episode 3",
    episodeNumber: 3,
    type: "TV",
  },
  {
    id: "153518",
    title: {
      romaji: "Dungeon Meshi",
      english: "Delicious in Dungeon",
      native: "ダンジョン飯",
    },
    image:
      "https://artworks.thetvdb.com/banners/v4/series/423257/posters/646f60a7ccc26.jpg",
    imageHash: "hash",
    episodeId: "/dungeon-meshi-episode-16",
    episodeTitle: "Episode 16",
    episodeNumber: 16,
    type: "TV",
  },
  {
    id: "163270",
    title: {
      romaji: "WIND BREAKER",
      english: "WIND BREAKER",
      native: "WIND BREAKER",
    },
    image:
      "https://artworks.thetvdb.com/banners/v4/series/433088/posters/65f29e6108b43.jpg",
    imageHash: "hash",
    episodeId: "/wind-breaker-episode-3",
    episodeTitle: "Episode 3",
    episodeNumber: 3,
    type: "TV",
  },
  {
    id: "155645",
    malId: "54829",
    title: {
      romaji: "Urusei Yatsura (2022) 2nd Season",
      english: "Urusei Yatsura (2022) Season 3",
      native: "うる星やつら (2022) 第2期",
    },
    image:
      "https://media.kitsu.io/anime/46620/poster_image/e9046c040ac0831eeca84c24aa54048f.jpg",
    imageHash: "hash",
    episodeId: "/urusei-yatsura-2022-2nd-season-episode-14",
    episodeTitle: "Episode 37",
    episodeNumber: 37,
    type: "TV",
  },
  {
    id: "165855",
    title: {
      romaji: "Hananoi-kun to Koi no Yamai",
      english: "A Condition Called Love",
      native: "花野井くんと恋の病",
    },
    image:
      "https://artworks.thetvdb.com/banners/v4/series/435815/posters/64805425a21fc.jpg",
    imageHash: "hash",
    episodeId: "/hananoi-kun-to-koi-no-yamai-episode-3",
    episodeTitle: "Episode 3",
    episodeNumber: 3,
    type: "TV",
  },
  {
    id: "174653",
    title: {
      romaji: "Kenka Dokugaku",
      english: "Viral Hit",
      native: "喧嘩独学",
    },
    image:
      "https://artworks.thetvdb.com/banners/v4/series/445964/posters/65c7134577e62.jpg",
    imageHash: "hash",
    episodeId: "/kenka-dokugaku-episode-2",
    episodeTitle: "Episode 2",
    episodeNumber: 2,
    type: "TV",
  },
  {
    id: "136804",
    malId: "49458",
    title: {
      romaji: "Kono Subarashii Sekai ni Shukufuku wo! 3",
      english: "KONOSUBA -God's Blessing on This Wonderful World! 3",
      native: "この素晴らしい世界に祝福を! 3",
    },
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx136804-7FVftG67FPBc.jpg",
    imageHash: "hash",
    episodeId: "/kono-subarashii-sekai-ni-shukufuku-wo-3-episode-2",
    episodeTitle: "Episode 2",
    episodeNumber: 2,
    type: "TV",
  },
  {
    id: "151380",
    malId: "52196",
    title: {
      romaji: "Date A Live V",
      english: "Date A Live V",
      native: "デート・ア・ライブV",
    },
    image:
      "https://media.kitsu.io/anime/46207/poster_image/ba7411b9386c069775ed4433fa5e6bb9.jpg",
    imageHash: "hash",
    episodeId: "/date-a-live-v-episode-2",
    episodeTitle: "Episode 2",
    episodeNumber: 2,
    type: "TV",
  },
  {
    id: "160090",
    malId: "54199",
    title: {
      romaji: "Kaii to Otome to Kamikakushi",
      english: "Mysterious Disappearances",
      native: "怪異と乙女と神隠し",
    },
    image:
      "https://artworks.thetvdb.com/banners/v4/series/429536/posters/63bee72be1ba9.jpg",
    imageHash: "hash",
    episodeId: "/kaii-to-otome-to-kamikakushi-episode-2",
    episodeTitle: "Episode 2",
    episodeNumber: 2,
    type: "TV",
  },
  {
    id: "158709",
    malId: "53835",
    title: {
      romaji: "Unnamed Memory",
      english: "Unnamed Memory",
      native: "Unnamed Memory",
    },
    image:
      "https://artworks.thetvdb.com/banners/v4/series/428352/posters/63987b259c7b8.jpg",
    imageHash: "hash",
    episodeId: "/unnamed-memory-episode-2",
    episodeTitle: "Episode 2",
    episodeNumber: 2,
    type: "TV",
  },
  {
    id: "145728",
    malId: "51122",
    title: {
      romaji: "Ookami to Koushinryou: MERCHANT MEETS THE WISE WOLF",
      english: "Spice and Wolf: MERCHANT MEETS THE WISE WOLF",
      native: "狼と香辛料 MERCHANT MEETS THE WISE WOLF",
    },
    image:
      "https://artworks.thetvdb.com/banners/v4/series/417147/posters/6601409b9a27f.jpg",
    imageHash: "hash",
    episodeId: "/ookami-to-koushinryou-merchant-meets-the-wise-wolf-episode-3",
    episodeTitle: "Episode 3",
    episodeNumber: 3,
    type: "TV",
  },
  {
    id: "156415",
    malId: "53516",
    title: {
      romaji:
        "Tensei Shitara Dai Nana Ouji Dattanode, Kimamani Majutsu wo Kiwamemasu",
      english:
        "I Was Reincarnated as the 7th Prince So I Can Take My Time Perfecting My Magical Ability",
      native: "転生したら第七王子だったので、気ままに魔術を極めます",
    },
    image:
      "https://artworks.thetvdb.com/banners/v4/series/426834/posters/65bd4e5607753.jpg",
    imageHash: "hash",
    episodeId:
      "/tensei-shitara-dainana-ouji-datta-node-kimama-ni-majutsu-wo-kiwamemasu-episode-3",
    episodeTitle: "Episode 3",
    episodeNumber: 3,
    type: "TV",
  },
  {
    id: "170130",
    malId: "56923",
    title: {
      romaji: "Lv2 Kara Cheat datta Moto Yuusha Kouho no Mattari Isekai Life",
      english: "Chillin' in Another World with Level 2 Super Cheat Powers",
      native: "Lv2からチートだった元勇者候補のまったり異世界ライフ",
    },
    image:
      "https://artworks.thetvdb.com/banners/v4/series/440897/posters/66159e60e7856.jpg",
    imageHash: "hash",
    episodeId:
      "/lv2-kara-cheat-datta-motoyuusha-kouho-no-mattari-isekai-life-episode-2",
    episodeTitle: "Episode 2",
    episodeNumber: 2,
    type: "TV",
  },
  {
    id: "144176",
    malId: "50869",
    title: {
      romaji: "Kami wa Game ni Ueteiru.",
      english: "Gods' Games We Play",
      native: "神は遊戯に飢えている。",
    },
    image:
      "https://artworks.thetvdb.com/banners/v4/series/414947/posters/65eb40b81fec3.jpg",
    imageHash: "hash",
    episodeId: "/kami-wa-game-ni-ueteiru-episode-3",
    episodeTitle: "Episode 3",
    episodeNumber: 3,
    type: "TV",
  },
  {
    id: "166873",
    malId: "55888",
    title: {
      romaji: "Mushoku Tensei II: Isekai Ittara Honki Dasu Part 2",
      english: "Mushoku Tensei: Jobless Reincarnation Season 2 Part 2",
      native: "無職転生 Ⅱ ～異世界行ったら本気だす～ 第2クール",
    },
    image:
      "https://media.kitsu.io/anime/47694/poster_image/3c442533034ef44885e22df064277d90.jpg",
    imageHash: "hash",
    episodeId: "/mushoku-tensei-ii-isekai-ittara-honki-dasu-part-2-episode-3",
    episodeTitle: "Episode 14",
    episodeNumber: 14,
    type: "TV",
  },
  {
    id: "169584",
    malId: "56738",
    title: {
      romaji: "Shinigami Bocchan to Kuro Maid 3rd Season",
      english: "The Duke of Death and His Maid Season 3",
      native: "死神坊ちゃんと黒メイド 第3期",
    },
    image:
      "https://media.kitsu.io/anime/47984/poster_image/4b774a629a15f6d58b7cb99a0acf4a16.jpg",
    imageHash: "hash",
    episodeId: "/shinigami-bocchan-to-kuro-maid-3rd-season-episode-3",
    episodeTitle: "Episode 26",
    episodeNumber: 26,
    type: "TV",
  },
  {
    id: "163024",
    malId: "54803",
    title: {
      romaji: "Captain Tsubasa: Season 2 - Junior Youth-hen",
      english: "Captain Tsubasa: Junior Youth Arc",
      native: "キャプテン翼シーズン2 ジュニアユース編",
    },
    image:
      "https://media.kitsu.io/anime/47229/poster_image/cab3e0f874416536412537ccea780f68.jpg",
    imageHash: "hash",
    episodeId: "/captain-tsubasa-season-2-junior-youth-hen-episode-29",
    episodeTitle: "Episode 28",
    episodeNumber: 28,
    type: "TV",
  },
  {
    id: "158417",
    malId: "53770",
    title: {
      romaji: "Sentai Daishikkaku",
      english: "Go, Go, Loser Ranger!",
      native: "戦隊大失格",
    },
    image:
      "https://artworks.thetvdb.com/banners/v4/series/428030/posters/65d620629b468.jpg",
    imageHash: "hash",
    episodeId: "/sentai-daishikkaku-episode-3",
    episodeTitle: "Episode 2",
    episodeNumber: 2,
    type: "TV",
  },
  {
    id: "171030",
    malId: "57390",
    title: {
      romaji: "Wonderful Precure!",
      english: "Wonderful Precure!",
      native: "わんだふるぷりきゅあ！",
    },
    image:
      "https://artworks.thetvdb.com/banners/v4/series/442938/posters/6599f3e46c800.jpg",
    imageHash: "hash",
    episodeId: "/wonderful-precure-episode-12",
    episodeTitle: "Episode 11",
    episodeNumber: 11,
    type: "TV",
  },
];

export const popularList = [
  {
    id: "16498",
    malId: 16498,
    title: {
      romaji: "Shingeki no Kyojin",
      english: "Attack on Titan",
      native: "進撃の巨人",
      userPreferred: "Shingeki no Kyojin",
    },
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-73IhOXpJZiMF.jpg",
    imageHash: "hash",
    trailer: {
      id: "luYOt2-c2TI",
      site: "youtube",
      thumbnail: "https://i.ytimg.com/vi/luYOt2-c2TI/hqdefault.jpg",
      thumbnailHash: "hash",
    },
    description:
      "Several hundred years ago, humans were nearly exterminated by titans. Titans are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for the pleasure rather than as a food source. A small percentage of humanity survived by walling themselves in a city protected by extremely high walls, even taller than the biggest of titans.<br><br>\r\nFlash forward to the present and the city has not seen a titan in over 100 years. Teenage boy Eren and his foster sister Mikasa witness something horrific as the city walls are destroyed by a colossal titan that appears out of thin air. As the smaller titans flood the city, the two kids watch in horror as their mother is eaten alive. Eren vows that he will murder every single titan and take revenge for all of mankind.<br><br>\r\n(Source: MangaHelpers) ",
    status: "Completed",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/16498-8jpFCOcDmneX.jpg",
    coverHash: "hash",
    rating: 84,
    releaseDate: 2013,
    color: "#f1a143",
    genres: ["Action", "Drama", "Fantasy", "Mystery"],
    totalEpisodes: 25,
    duration: 24,
    type: "TV",
  },
  {
    id: "101922",
    malId: 38000,
    title: {
      romaji: "Kimetsu no Yaiba",
      english: "Demon Slayer: Kimetsu no Yaiba",
      native: "鬼滅の刃",
      userPreferred: "Kimetsu no Yaiba",
    },
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101922-WBsBl0ClmgYL.jpg",
    imageHash: "hash",
    trailer: {
      id: "6vMuWuWlW4I",
      site: "youtube",
      thumbnail: "https://i.ytimg.com/vi/6vMuWuWlW4I/hqdefault.jpg",
      thumbnailHash: "hash",
    },
    description:
      "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a “demon slayer” so that he can turn his sister back into a human, and kill the demon that massacred his family.<br>\n<br>\n(Source: Crunchyroll)",
    status: "Completed",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/101922-YfZhKBUDDS6L.jpg",
    coverHash: "hash",
    rating: 83,
    releaseDate: 2019,
    color: "#e4bba1",
    genres: ["Action", "Adventure", "Drama", "Fantasy", "Supernatural"],
    totalEpisodes: 26,
    duration: 24,
    type: "TV",
  },
  {
    id: "1535",
    malId: 1535,
    title: {
      romaji: "DEATH NOTE",
      english: "Death Note",
      native: "DEATH NOTE",
      userPreferred: "DEATH NOTE",
    },
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1535-4r88a1tsBEIz.jpg",
    imageHash: "hash",
    trailer: {
      id: "NlJZ-YgAt-c",
      site: "youtube",
      thumbnail: "https://i.ytimg.com/vi/NlJZ-YgAt-c/hqdefault.jpg",
      thumbnailHash: "hash",
    },
    description:
      "Light Yagami is a genius high school student who is about to learn about life through a book of death. When a bored shinigami, a God of Death, named Ryuk drops a black notepad called a <i>Death Note</i>, Light receives power over life and death with the stroke of a pen. Determined to use this dark gift for the best, Light sets out to rid the world of evil… namely, the people he believes to be evil. Should anyone hold such power?<br>\n<br>\nThe consequences of Light’s actions will set the world ablaze.<br>\n<br>\n(Source: Viz Media)",
    status: "Completed",
    cover: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/1535.jpg",
    coverHash: "hash",
    rating: 84,
    releaseDate: 2006,
    color: null,
    genres: ["Mystery", "Psychological", "Supernatural", "Thriller"],
    totalEpisodes: 37,
    duration: 23,
    type: "TV",
  },
  {
    id: "21459",
    malId: 31964,
    title: {
      romaji: "Boku no Hero Academia",
      english: "My Hero Academia",
      native: "僕のヒーローアカデミア",
      userPreferred: "Boku no Hero Academia",
    },
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21459-RoPwgrZ32gM3.jpg",
    imageHash: "hash",
    trailer: {
      id: "AhqVltWDqFA",
      site: "youtube",
      thumbnail: "https://i.ytimg.com/vi/AhqVltWDqFA/hqdefault.jpg",
      thumbnailHash: "hash",
    },
    description:
      "What would the world be like if 80 percent of the population manifested extraordinary superpowers called “Quirks” at age four? Heroes and villains would be battling it out everywhere! Becoming a hero would mean learning to use your power, but where would you go to study? U.A. High's Hero Program of course! But what would you do if you were one of the 20 percent who were born Quirkless?<br><br>\n\nMiddle school student Izuku Midoriya wants to be a hero more than anything, but he hasn't got an ounce of power in him. With no chance of ever getting into the prestigious U.A. High School for budding heroes, his life is looking more and more like a dead end. Then an encounter with All Might, the greatest hero of them all gives him a chance to change his destiny…<br><br>\n\n(Source: Viz Media)",
    status: "Completed",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21459-yeVkolGKdGUV.jpg",
    coverHash: "hash",
    rating: 77,
    releaseDate: 2016,
    color: "#ffd600",
    genres: ["Action", "Adventure", "Comedy"],
    totalEpisodes: 13,
    duration: 24,
    type: "TV",
  },
  {
    id: "113415",
    malId: 40748,
    title: {
      romaji: "Jujutsu Kaisen",
      english: "JUJUTSU KAISEN",
      native: "呪術廻戦",
      userPreferred: "Jujutsu Kaisen",
    },
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113415-bbBWj4pEFseh.jpg",
    imageHash: "hash",
    trailer: {
      id: "pkKu9hLT-t8",
      site: "youtube",
      thumbnail: "https://i.ytimg.com/vi/pkKu9hLT-t8/hqdefault.jpg",
      thumbnailHash: "hash",
    },
    description:
      'A boy fights... for "the right death."<br>\n<br>\nHardship, regret, shame: the negative feelings that humans feel become Curses that lurk in our everyday lives. The Curses run rampant throughout the world, capable of leading people to terrible misfortune and even death. What\'s more, the Curses can only be exorcised by another Curse.<br>\n<br>\nItadori Yuji is a boy with tremendous physical strength, though he lives a completely ordinary high school life. One day, to save a friend who has been attacked by Curses, he eats the finger of the Double-Faced Specter, taking the Curse into his own soul. From then on, he shares one body with the Double-Faced Specter. Guided by the most powerful of sorcerers, Gojou Satoru, Itadori is admitted to the Tokyo Metropolitan Technical High School of Sorcery, an organization that fights the Curses... and thus begins the heroic tale of a boy who became a Curse to exorcise a Curse, a life from which he could never turn back.\n<br><br>\n(Source: Crunchyroll)<br>\n<br>\n<i>Note: The first episode received an early web premiere on September 19th, 2020. The regular TV broadcast started on October 3rd, 2020.</i>',
    status: "Completed",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/113415-jQBSkxWAAk83.jpg",
    coverHash: "hash",
    rating: 86,
    releaseDate: 2020,
    color: "#e45d5d",
    genres: ["Action", "Drama", "Supernatural"],
    totalEpisodes: 24,
    duration: 24,
    type: "TV",
  },
  {
    id: "11061",
    malId: 11061,
    title: {
      romaji: "HUNTER×HUNTER (2011)",
      english: "Hunter x Hunter (2011)",
      native: "HUNTER×HUNTER (2011)",
      userPreferred: "HUNTER×HUNTER (2011)",
    },
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx11061-NpIIobuQNbJW.png",
    imageHash: "hash",
    trailer: {
      id: "d6kBeJjTGnY",
      site: "youtube",
      thumbnail: "https://i.ytimg.com/vi/d6kBeJjTGnY/hqdefault.jpg",
      thumbnailHash: "hash",
    },
    description:
      "A new adaption of the manga of the same name by Togashi Yoshihiro.<br><br>\nA Hunter is one who travels the world doing all sorts of dangerous tasks. From capturing criminals to searching deep within uncharted lands for any lost treasures. Gon is a young boy whose father disappeared long ago, being a Hunter. He believes if he could also follow his father's path, he could one day reunite with him.<br><br>\nAfter becoming 12, Gon leaves his home and takes on the task of entering the Hunter exam, notorious for its low success rate and high probability of death to become an official Hunter. He befriends the revenge-driven Kurapika, the doctor-to-be Leorio and the rebellious ex-assassin Killua in the exam, with their friendship prevailing throughout the many trials and threats they come upon taking on the dangerous career of a Hunter.",
    status: "Completed",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/11061-8WkkTZ6duKpq.jpg",
    coverHash: "hash",
    rating: 89,
    releaseDate: 2011,
    color: "#f1d65d",
    genres: ["Action", "Adventure", "Fantasy"],
    totalEpisodes: 148,
    duration: 24,
    type: "TV",
  },
  {
    id: "21087",
    malId: 30276,
    title: {
      romaji: "One Punch Man",
      english: "One-Punch Man",
      native: "ワンパンマン",
      userPreferred: "One Punch Man",
    },
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21087-2OkAdgfnQown.jpg",
    imageHash: "hash",
    trailer: {
      id: "RzmFKUDOUgw",
      site: "youtube",
      thumbnail: "https://i.ytimg.com/vi/RzmFKUDOUgw/hqdefault.jpg",
      thumbnailHash: "hash",
    },
    description:
      "Saitama has a rather peculiar hobby, being a superhero, but despite his heroic deeds and superhuman abilities, a shadow looms over his life. He's become much too powerful, to the point that every opponent ends up defeated with a single punch.\n<br><br>\nThe lack of challenge has driven him into a state of apathy, as he watches his life pass by having lost all enthusiasm, at least until he's unwillingly thrust in the role of being a mentor to the young and revenge-driven Genos.   \n\n",
    status: "Completed",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21087-sHb9zUZFsHe1.jpg",
    coverHash: "hash",
    rating: 83,
    releaseDate: 2015,
    color: "#e4ae5d",
    genres: ["Action", "Comedy", "Sci-Fi", "Supernatural"],
    totalEpisodes: 12,
    duration: 24,
    type: "TV",
  },
  {
    id: "20605",
    malId: 22319,
    title: {
      romaji: "Tokyo Ghoul",
      english: "Tokyo Ghoul",
      native: "東京喰種 トーキョーグール",
      userPreferred: "Tokyo Ghoul",
    },
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx20605-fmnHdfurM7m6.jpg",
    imageHash: "hash",
    trailer: {
      id: "XfQUjYsVBrE",
      site: "youtube",
      thumbnail: "https://i.ytimg.com/vi/XfQUjYsVBrE/hqdefault.jpg",
      thumbnailHash: "hash",
    },
    description:
      'The suspense horror/dark fantasy story is set in Tokyo, which is haunted by mysterious "ghouls" who are devouring humans. People are gripped by the fear of these ghouls whose identities are masked in mystery. An ordinary college student named Kaneki encounters Rize, a girl who is an avid reader like him, at the café he frequents. Little does he realize that his fate will change overnight.\n<br><br>\n(Source: Anime News Network)',
    status: "Completed",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20605-RCJ7M71zLmrh.jpg",
    coverHash: "hash",
    rating: 75,
    releaseDate: 2014,
    color: "#35DDFF",
    genres: [
      "Action",
      "Drama",
      "Horror",
      "Mystery",
      "Psychological",
      "Supernatural",
    ],
    totalEpisodes: 12,
    duration: 24,
    type: "TV",
  },
  {
    id: "20958",
    malId: 25777,
    title: {
      romaji: "Shingeki no Kyojin 2",
      english: "Attack on Titan Season 2",
      native: "進撃の巨人２",
      userPreferred: "Shingeki no Kyojin 2",
    },
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20958-HuFJyr54Mmir.jpg",
    imageHash: "hash",
    trailer: {
      id: "zLaVP8IhIuc",
      site: "youtube",
      thumbnail: "https://i.ytimg.com/vi/zLaVP8IhIuc/hqdefault.jpg",
      thumbnailHash: "hash",
    },
    description:
      "Eren Jaeger swore to wipe out every last Titan, but in a battle for his life he wound up becoming the thing he hates most. With his new powers, he fights for humanity's freedom facing the monsters that threaten his home. After a bittersweet victory against the Female Titan, Eren finds no time to rest—a horde of Titans is approaching Wall Rose and the battle for humanity continues!<br><br>\n\n(Source: Funimation)",
    status: "Completed",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20958-Y7eQdz9VENBD.jpg",
    coverHash: "hash",
    rating: 84,
    releaseDate: 2017,
    color: "#6AA66F",
    genres: ["Action", "Drama", "Fantasy", "Mystery"],
    totalEpisodes: 12,
    duration: 25,
    type: "TV",
  },
  {
    id: "11757",
    malId: 11757,
    title: {
      romaji: "Sword Art Online",
      english: "Sword Art Online",
      native: "ソードアート・オンライン",
      userPreferred: "Sword Art Online",
    },
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx11757-Q9P2zjCPICq5.jpg",
    imageHash: "hash",
    trailer: {
      id: "C8Jl_-b7ju0",
      site: "youtube",
      thumbnail: "https://i.ytimg.com/vi/C8Jl_-b7ju0/hqdefault.jpg",
      thumbnailHash: "hash",
    },
    description:
      "In the near future, a Virtual Reality Massive Multiplayer Online Role-Playing Game (VRMMORPG) called Sword Art Online has been released where players control their avatars with their bodies using a piece of technology called Nerve Gear. One day, players discover they cannot log out, as the game creator is holding them captive unless they reach the 100th floor of the game's tower and defeat the final boss. However, if they die in the game, they die in real life. Their struggle for survival starts now...<br><br>\n(Source: Crunchyroll)",
    status: "Completed",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/11757-TlEEV9weG4Ag.jpg",
    coverHash: "hash",
    rating: 69,
    releaseDate: 2012,
    color: "#5DC0E4",
    genres: ["Action", "Adventure", "Fantasy", "Romance"],
    totalEpisodes: 25,
    duration: 23,
    type: "TV",
  },
  {
    id: "5114",
    malId: 5114,
    title: {
      romaji: "Hagane no Renkinjutsushi: FULLMETAL ALCHEMIST",
      english: "Fullmetal Alchemist: Brotherhood",
      native: "鋼の錬金術師 FULLMETAL ALCHEMIST",
      userPreferred: "Hagane no Renkinjutsushi: FULLMETAL ALCHEMIST",
    },
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx5114-Dilr312jctdJ.jpg",
    imageHash: "hash",
    trailer: {
      thumbnailHash: "hash",
    },
    description:
      "\"In order for something to be obtained, something of equal value must be lost.\"\n<br><br>\nAlchemy is bound by this Law of Equivalent Exchange—something the young brothers Edward and Alphonse Elric only realize after attempting human transmutation: the one forbidden act of alchemy. They pay a terrible price for their transgression—Edward loses his left leg, Alphonse his physical body. It is only by the desperate sacrifice of Edward's right arm that he is able to affix Alphonse's soul to a suit of armor. Devastated and alone, it is the hope that they would both eventually return to their original bodies that gives Edward the inspiration to obtain metal limbs called \"automail\" and become a state alchemist, the Fullmetal Alchemist.\n<br><br>\nThree years of searching later, the brothers seek the Philosopher's Stone, a mythical relic that allows an alchemist to overcome the Law of Equivalent Exchange. Even with military allies Colonel Roy Mustang, Lieutenant Riza Hawkeye, and Lieutenant Colonel Maes Hughes on their side, the brothers find themselves caught up in a nationwide conspiracy that leads them not only to the true nature of the elusive Philosopher's Stone, but their country's murky history as well. In between finding a serial killer and racing against time, Edward and Alphonse must ask themselves if what they are doing will make them human again... or take away their humanity.\n<br><br>\n(Source: MAL Rewrite)",
    status: "Completed",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/5114-q0V5URebphSG.jpg",
    coverHash: "hash",
    rating: 90,
    releaseDate: 2009,
    color: "#e4c993",
    genres: ["Action", "Adventure", "Drama", "Fantasy"],
    totalEpisodes: 64,
    duration: 25,
    type: "TV",
  },
  {
    id: "20",
    malId: 20,
    title: {
      romaji: "NARUTO",
      english: "Naruto",
      native: "NARUTO -ナルト-",
      userPreferred: "NARUTO",
    },
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20-LxrhhIQyiE60.jpg",
    imageHash: "hash",
    trailer: {
      thumbnailHash: "hash",
    },
    description:
      "Naruto Uzumaki, a hyperactive and knuckle-headed ninja, lives in Konohagakure, the Hidden Leaf village. Moments prior to his birth, a huge demon known as the Kyuubi, the Nine-tailed Fox, attacked Konohagakure and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the 4th Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto. <br><br>\nShunned because of the presence of the Kyuubi inside him, Naruto struggles to find his place in the village. He strives to become the Hokage of Konohagakure, and he meets many friends and foes along the way. <br><br>\n(Source: MAL Rewrite)",
    status: "Completed",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20-HHxhPj5JD13a.jpg",
    coverHash: "hash",
    rating: 79,
    releaseDate: 2002,
    color: "#e47850",
    genres: [
      "Action",
      "Adventure",
      "Comedy",
      "Drama",
      "Fantasy",
      "Supernatural",
    ],
    totalEpisodes: 220,
    duration: 23,
    type: "TV",
  },
  {
    id: "21519",
    malId: 32281,
    title: {
      romaji: "Kimi no Na wa.",
      english: "Your Name.",
      native: "君の名は。",
      userPreferred: "Kimi no Na wa.",
    },
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21519-fPhvy69vnQqS.png",
    imageHash: "hash",
    trailer: {
      id: "k4xGqY5IDBE",
      site: "youtube",
      thumbnail: "https://i.ytimg.com/vi/k4xGqY5IDBE/hqdefault.jpg",
      thumbnailHash: "hash",
    },
    description:
      "Mitsuha Miyamizu, a high school girl, yearns to live the life of a boy in the bustling city of Tokyo—a dream that stands in stark contrast to her present life in the countryside. Meanwhile in the city, Taki Tachibana lives a busy life as a high school student while juggling his part-time job and hopes for a future in architecture.<br>\n<br>\nOne day, Mitsuha awakens in a room that is not her own and suddenly finds herself living the dream life in Tokyo—but in Taki's body! Elsewhere, Taki finds himself living Mitsuha's life in the humble countryside. In pursuit of an answer to this strange phenomenon, they begin to search for one another.<br>\n<br>\n<i>Kimi no Na wa.</i> revolves around Mitsuha and Taki's actions, which begin to have a dramatic impact on each other's lives, weaving them into a fabric held together by fate and circumstance.<br>\n<br>\n(Source: MAL Rewrite)",
    status: "Completed",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21519-1ayMXgNlmByb.jpg",
    coverHash: "hash",
    rating: 85,
    releaseDate: 2016,
    color: "#0da1e4",
    genres: ["Drama", "Romance", "Supernatural"],
    totalEpisodes: 1,
    duration: 107,
    type: "MOVIE",
  },
  {
    id: "21",
    malId: 21,
    title: {
      romaji: "ONE PIECE",
      english: "ONE PIECE",
      native: "ONE PIECE",
      userPreferred: "ONE PIECE",
    },
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21-YCDoj1EkAxFn.jpg",
    imageHash: "hash",
    trailer: {
      thumbnailHash: "hash",
    },
    description:
      "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.<br><br>\nEnter Monkey D. Luffy, a 17-year-old boy that defies your standard definition of a pirate. Rather than the popular persona of a wicked, hardened, toothless pirate who ransacks villages for fun, Luffy’s reason for being a pirate is one of pure wonder; the thought of an exciting adventure and meeting new and intriguing people, along with finding One Piece, are his reasons of becoming a pirate. Following in the footsteps of his childhood hero, Luffy and his crew travel across the Grand Line, experiencing crazy adventures, unveiling dark mysteries and battling strong enemies, all in order to reach One Piece.<br><br>\n<b>*This includes following special episodes:</b><br>\n- Chopperman to the Rescue! Protect the TV Station by the Shore! (Episode 336)<br>\n- The Strongest Tag-Team! Luffy and Toriko's Hard Struggle! (Episode 492)<br>\n- Team Formation! Save Chopper (Episode 542)<br>\n- History's Strongest Collaboration vs. Glutton of the Sea (Episode 590)<br>\n- 20th Anniversary! Special Romance Dawn (Episode 907)",
    status: "Ongoing",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21-wf37VakJmZqs.jpg",
    coverHash: "hash",
    rating: 88,
    releaseDate: 1999,
    color: "#e49335",
    genres: ["Action", "Adventure", "Comedy", "Drama", "Fantasy"],
    totalEpisodes: 1101,
    duration: 24,
    type: "TV",
  },
  {
    id: "21856",
    malId: 33486,
    title: {
      romaji: "Boku no Hero Academia 2",
      english: "My Hero Academia Season 2",
      native: "僕のヒーローアカデミア２",
      userPreferred: "Boku no Hero Academia 2",
    },
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21856-gutauxhWAwn6.png",
    imageHash: "hash",
    trailer: {
      id: "tEPneR3KFK8",
      site: "youtube",
      thumbnail: "https://i.ytimg.com/vi/tEPneR3KFK8/hqdefault.jpg",
      thumbnailHash: "hash",
    },
    description:
      "Taking off right after the last episode of the first season. The school is temporarily closed due to security. When U.A. restarts, it is announced that the highly anticipated School Sports Festival will soon be taking place. All classes: Hero, Support, General and Business will be participating. Tournaments all round will decide who is the top Hero in training.<br><br>(Source: Anime News Network)",
    status: "Completed",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21856-wtSHgeHFmzdG.jpg",
    coverHash: "hash",
    rating: 79,
    releaseDate: 2017,
    color: "#e48643",
    genres: ["Action", "Adventure", "Comedy"],
    totalEpisodes: 25,
    duration: 24,
    type: "TV",
  },
  {
    id: "99147",
    malId: 35760,
    title: {
      romaji: "Shingeki no Kyojin 3",
      english: "Attack on Titan Season 3",
      native: "進撃の巨人３",
      userPreferred: "Shingeki no Kyojin 3",
    },
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx99147-AiPDD8cwlCfi.jpg",
    imageHash: "hash",
    trailer: {
      id: "EHzBhrncmac",
      site: "youtube",
      thumbnail: "https://i.ytimg.com/vi/EHzBhrncmac/hqdefault.jpg",
      thumbnailHash: "hash",
    },
    description:
      "Eren and his companions in the 104th are assigned to the newly-formed Levi Squad, whose assignment is to keep Eren and Historia safe given Eren's newly-discovered power and Historia's knowledge and pedigree. Levi and Erwin have good reason to be concerned, because the priest of the Church that Hanji had hidden away was found tortured to death, making it clear that the Military Police are involved with the cover-up. Things get more harrowing when the MPs make a move on Erwin and the Levi Squad narrowly avoids capture. Eren is also having problems with his Titan transformation, and a deadly killer has been hired to secure Eren and Historia, one Levi knows all too well from his youth.<br>\n<br>\n(Source: Anime News Network)",
    status: "Completed",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/99147-HACsFVrynFf5.jpg",
    coverHash: "hash",
    rating: 85,
    releaseDate: 2018,
    color: "#4386e4",
    genres: ["Action", "Drama", "Fantasy", "Mystery"],
    totalEpisodes: 12,
    duration: 24,
    type: "TV",
  },
  {
    id: "20954",
    malId: 28851,
    title: {
      romaji: "Koe no Katachi",
      english: "A Silent Voice",
      native: "聲の形",
      userPreferred: "Koe no Katachi",
    },
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20954-UMb6Kl7ZL8Ke.jpg",
    imageHash: "hash",
    trailer: {
      id: "Sy4bPCuzfiQ",
      site: "youtube",
      thumbnail: "https://i.ytimg.com/vi/Sy4bPCuzfiQ/hqdefault.jpg",
      thumbnailHash: "hash",
    },
    description:
      "After transferring into a new school, a deaf girl, Shouko Nishimiya, is bullied by the popular Shouya Ishida. As Shouya continues to bully Shouko, the class turns its back on him. Shouko transfers and Shouya grows up as an outcast. Alone and depressed, the regretful Shouya finds Shouko to make amends.\n<br><br>\n(Source: Eleven Arts)",
    status: "Completed",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20954-f30bHMXa5Qoe.jpg",
    coverHash: "hash",
    rating: 88,
    releaseDate: 2016,
    color: "#5dbbe4",
    genres: ["Drama", "Romance", "Slice of Life"],
    totalEpisodes: 1,
    duration: 130,
    type: "MOVIE",
  },
  {
    id: "101759",
    malId: 37779,
    title: {
      romaji: "Yakusoku no Neverland",
      english: "The Promised Neverland",
      native: "約束のネバーランド",
      userPreferred: "Yakusoku no Neverland",
    },
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101759-G9I2ymYrFS8o.jpg",
    imageHash: "hash",
    trailer: {
      id: "ApLudqucq-s",
      site: "youtube",
      thumbnail: "https://i.ytimg.com/vi/ApLudqucq-s/hqdefault.jpg",
      thumbnailHash: "hash",
    },
    description:
      "Emma, Norman and Ray are the brightest kids at the Grace Field House orphanage. And under the care of the woman they refer to as “Mom,” all the kids have enjoyed a comfortable life. Good food, clean clothes and the perfect environment to learn—what more could an orphan ask for? One day, though, Emma and Norman uncover the dark truth of the outside world they are forbidden from seeing.\n<br><br>\n(Source: Viz Media)",
    status: "Completed",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/101759-MhlCoeqnODso.jpg",
    coverHash: "hash",
    rating: 83,
    releaseDate: 2019,
    color: "#e4ae50",
    genres: [
      "Drama",
      "Fantasy",
      "Horror",
      "Mystery",
      "Psychological",
      "Thriller",
    ],
    totalEpisodes: 12,
    duration: 23,
    type: "TV",
  },
  {
    id: "20755",
    malId: 24833,
    title: {
      romaji: "Ansatsu Kyoushitsu",
      english: "Assassination Classroom",
      native: "暗殺教室",
      userPreferred: "Ansatsu Kyoushitsu",
    },
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20755-q0b3Ok1cAbPd.jpg",
    imageHash: "hash",
    trailer: {
      id: "vAuTJFzjNLs",
      site: "youtube",
      thumbnail: "https://i.ytimg.com/vi/vAuTJFzjNLs/hqdefault.jpg",
      thumbnailHash: "hash",
    },
    description:
      "The students of class 3-E have a mission: kill their teacher before graduation. He has already destroyed the moon, and has promised to destroy the Earth if he can not be killed within a year. But how can this class of misfits kill a tentacled monster, capable of reaching Mach 20 speed, who may be the best teacher any of them have ever had?",
    status: "Completed",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20755-D4ipww9U8YkC.jpg",
    coverHash: "hash",
    rating: 79,
    releaseDate: 2015,
    color: "#e4d650",
    genres: ["Action", "Comedy", "Drama", "Supernatural"],
    totalEpisodes: 22,
    duration: 23,
    type: "TV",
  },
  {
    id: "110277",
    malId: 40028,
    title: {
      romaji: "Shingeki no Kyojin: The Final Season",
      english: "Attack on Titan Final Season",
      native: "進撃の巨人 The Final Season",
      userPreferred: "Shingeki no Kyojin: The Final Season",
    },
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx110277-8KkJy3Cvj9aO.jpg",
    imageHash: "hash",
    trailer: {
      id: "MUCN-JwUvbY",
      site: "youtube",
      thumbnail: "https://i.ytimg.com/vi/MUCN-JwUvbY/hqdefault.jpg",
      thumbnailHash: "hash",
    },
    description:
      "It’s been four years since the Scout Regiment reached the shoreline, and the world looks different now. Things are heating up as the fate of the Scout Regiment—and the people of Paradis—are determined at last. However, Eren is missing. Will he reappear before age-old tensions between Marleyans and Eldians result in the war of all wars?<br>\n<br>\n(Source: Crunchyroll)",
    status: "Completed",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/110277-iuGn6F5bK1U1.jpg",
    coverHash: "hash",
    rating: 86,
    releaseDate: 2021,
    color: "#ae6b35",
    genres: ["Action", "Drama", "Fantasy", "Mystery"],
    totalEpisodes: 16,
    duration: 24,
    type: "TV",
  },
];

export const trendingList = [
  {
    id: "139518",
    malId: 49889,
    title: {
      romaji: "Tsuki ga Michibiku Isekai Douchuu 2nd Season",
      english: "TSUKIMICHI -Moonlit Fantasy- Season 2",
      native: "月が導く異世界道中 第二幕",
      userPreferred: "Tsuki ga Michibiku Isekai Douchuu 2nd Season",
    },
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx139518-GZWYKM8Kg1S2.png",
    imageHash: "hash",
    trailer: {
      id: "bJaTrqUGXXU",
      site: "youtube",
      thumbnail: "https://i.ytimg.com/vi/bJaTrqUGXXU/hqdefault.jpg",
      thumbnailHash: "hash",
    },
    description:
      "The second season of <i>Tsuki ga Michibiku Isekai Douchuu</i>.<br>\n<br>\nAfter Makoto Misumi defeats Mitsurugi and Sofia Bulga, humanity is saved from the attacking demon army—for the time being. The goddess is aware of Makoto’s growing power, and she sees him as less of a nuisance and more of a rival. Makoto continues his journey to further expand his community of outcasts and connect with more hyumans. But will he be strong enough to hold off the coming storm?<br>\n<br>\n(Source: Crunchyroll)",
    status: "Ongoing",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/139518-OxLRGjPm9Tms.jpg",
    coverHash: "hash",
    rating: 76,
    releaseDate: 2024,
    color: "#f17843",
    genres: ["Action", "Adventure", "Comedy", "Fantasy"],
    totalEpisodes: 25,
    duration: 24,
    type: "TV",
  },
  {
    id: "169417",
    malId: 56690,
    title: {
      romaji: "Re:Monster",
      english: "Re:Monster",
      native: "Re:Monster",
      userPreferred: "Re:Monster",
    },
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx169417-izsfKg0hasRd.png",
    imageHash: "hash",
    trailer: {
      id: "Eks6OyQNoEU",
      site: "youtube",
      thumbnail: "https://i.ytimg.com/vi/Eks6OyQNoEU/hqdefault.jpg",
      thumbnailHash: "hash",
    },
    description:
      "After meeting an untimely death, Tomokui Kanata is reincarnated as a lowly goblin, but he’s worked up a monstrous appetite. Thanks to his new ability that allows him to grow stronger the more he feeds, his feeble status quickly changes, and he rises to become the goblin leader. With a mix of his past memories, new body, and strong stomach, he’s taking a bite out of this new fantastical world! <br><br>\n(Source: Crunchyroll)<br><br>\n<i>The episodes were streamed several days ahead than the TV broadcast on U-NEXT, Anime Houdai, and Crunchyroll beginning on April 2nd, 2024 at 0:00 JST. The regular TV broadcast begins on April 5th, 2024.",
    status: "Ongoing",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/169417-NaD0wR83gTbm.jpg",
    coverHash: "hash",
    rating: 68,
    releaseDate: 2024,
    color: null,
    genres: ["Action", "Adventure", "Fantasy"],
    totalEpisodes: 12,
    duration: 24,
    type: "TV",
  },
  {
    id: "170130",
    malId: 56923,
    title: {
      romaji: "Lv2 Kara Cheat datta Moto Yuusha Kouho no Mattari Isekai Life",
      english: "Chillin' in Another World with Level 2 Super Cheat Powers",
      native: "Lv2からチートだった元勇者候補のまったり異世界ライフ",
      userPreferred:
        "Lv2 Kara Cheat datta Moto Yuusha Kouho no Mattari Isekai Life",
    },
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx170130-tvhn13WYQ2qM.jpg",
    imageHash: "hash",
    trailer: {
      id: "MUn_fypkCfU",
      site: "youtube",
      thumbnail: "https://i.ytimg.com/vi/MUn_fypkCfU/hqdefault.jpg",
      thumbnailHash: "hash",
    },
    description:
      "The Magical Kingdom of Klyrode summons hundreds of heroes from other worlds every year to fight in their war against the Dark One and his army of powerful demons. Banaza is one of those heroes, summoned from the Royal Capital Paluma, but something’s not right—Banaza is only an average merchant. He has no magic, no fighting ability, and his stats are abysmal. Worse, a mishap leaves him unable to return home! Rejected as a hero and stranded in another world, abandoned to the far reaches of the kingdom by a cruel king who just wants him gone, Banaza’s fate looks pretty bleak. But what will happen once the failed hero candidate finds himself with super cheat powers once he hits level two?<br>\n<br>\n(Source: J-Novel Club)",
    status: "Ongoing",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx170130-tvhn13WYQ2qM.jpg",
    coverHash: "hash",
    rating: 67,
    releaseDate: 2024,
    color: "#50a1e4",
    genres: ["Adventure", "Fantasy", "Romance"],
    totalEpisodes: 12,
    duration: 24,
    type: "TV",
  },
  {
    id: "166873",
    malId: 55888,
    title: {
      romaji: "Mushoku Tensei II: Isekai Ittara Honki Dasu Part 2",
      english: "Mushoku Tensei: Jobless Reincarnation Season 2 Part 2",
      native: "無職転生 Ⅱ ～異世界行ったら本気だす～ 第2クール",
      userPreferred: "Mushoku Tensei II: Isekai Ittara Honki Dasu Part 2",
    },
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx166873-JC56ExYSC2YB.jpg",
    imageHash: "hash",
    trailer: {
      id: "wwKZYTsxIhk",
      site: "youtube",
      thumbnail: "https://i.ytimg.com/vi/wwKZYTsxIhk/hqdefault.jpg",
      thumbnailHash: "hash",
    },
    description:
      "The second cour of <i>Mushoku Tensei II: Isekai Ittara Honki Dasu</i>.",
    status: "Ongoing",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/166873-GTi5imE5skM2.jpg",
    coverHash: "hash",
    rating: 81,
    releaseDate: 2024,
    color: "#e4ae78",
    genres: ["Adventure", "Drama", "Ecchi", "Fantasy"],
    totalEpisodes: 12,
    duration: 24,
    type: "TV",
  },
  {
    id: "21",
    malId: 21,
    title: {
      romaji: "ONE PIECE",
      english: "ONE PIECE",
      native: "ONE PIECE",
      userPreferred: "ONE PIECE",
    },
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21-YCDoj1EkAxFn.jpg",
    imageHash: "hash",
    trailer: {
      thumbnailHash: "hash",
    },
    description:
      "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.<br><br>\nEnter Monkey D. Luffy, a 17-year-old boy that defies your standard definition of a pirate. Rather than the popular persona of a wicked, hardened, toothless pirate who ransacks villages for fun, Luffy’s reason for being a pirate is one of pure wonder; the thought of an exciting adventure and meeting new and intriguing people, along with finding One Piece, are his reasons of becoming a pirate. Following in the footsteps of his childhood hero, Luffy and his crew travel across the Grand Line, experiencing crazy adventures, unveiling dark mysteries and battling strong enemies, all in order to reach One Piece.<br><br>\n<b>*This includes following special episodes:</b><br>\n- Chopperman to the Rescue! Protect the TV Station by the Shore! (Episode 336)<br>\n- The Strongest Tag-Team! Luffy and Toriko's Hard Struggle! (Episode 492)<br>\n- Team Formation! Save Chopper (Episode 542)<br>\n- History's Strongest Collaboration vs. Glutton of the Sea (Episode 590)<br>\n- 20th Anniversary! Special Romance Dawn (Episode 907)",
    status: "Ongoing",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21-wf37VakJmZqs.jpg",
    coverHash: "hash",
    rating: 88,
    releaseDate: 1999,
    color: "#e49335",
    genres: ["Action", "Adventure", "Comedy", "Drama", "Fantasy"],
    totalEpisodes: 1101,
    duration: 24,
    type: "TV",
  },
  {
    id: "155657",
    malId: 53356,
    title: {
      romaji: "Shuumatsu Train Doko e Iku?",
      english: "Train to the End of the World",
      native: "終末トレインどこへいく？",
      userPreferred: "Shuumatsu Train Doko e Iku?",
    },
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx155657-qZo0UNx6rEN0.jpg",
    imageHash: "hash",
    trailer: {
      id: "WP1HMeFxJoM",
      site: "youtube",
      thumbnail: "https://i.ytimg.com/vi/WP1HMeFxJoM/hqdefault.jpg",
      thumbnailHash: "hash",
    },
    description:
      "In a seemingly ordinary rural town, something strange is happening to the residents. But Shizuru Chikura is more concerned for her missing friend. Determined to find her, Shizuru and three other girls board an abandoned train and travel to the outside world, unsure if they’ll make it back alive. As they venture toward the unknown, the question looms: What awaits them at the final stop?<br><br>\n\n(Source: Crunchyroll)",
    status: "Ongoing",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/155657-lidTkLw8dgWc.jpg",
    coverHash: "hash",
    rating: 71,
    releaseDate: 2024,
    color: "#e4c95d",
    genres: ["Adventure", "Comedy", "Sci-Fi"],
    totalEpisodes: 12,
    duration: 24,
    type: "TV",
  },
  {
    id: "153288",
    malId: 52588,
    title: {
      romaji: "Kaijuu 8-gou",
      english: "Kaiju No.8",
      native: "怪獣８号",
      userPreferred: "Kaijuu 8-gou",
    },
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx153288-tD2OmKy5CJab.jpg",
    imageHash: "hash",
    trailer: {
      id: "7n_mFVPeApw",
      site: "youtube",
      thumbnail: "https://i.ytimg.com/vi/7n_mFVPeApw/hqdefault.jpg",
      thumbnailHash: "hash",
    },
    description:
      "With the highest kaiju-emergence rates in the world, Japan is no stranger to attack by deadly monsters. Enter the Japan Defense Force, a military organization tasked with the neutralization of kaiju. Kafka Hibino, a kaiju-corpse cleanup man, has always dreamed of joining the force. But when he gets another shot at achieving his childhood dream, he undergoes an unexpected transformation. How can he fight kaiju now that he’s become one himself?!<br>\n<br>\n(Source: VIZ Media)",
    status: "Ongoing",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/153288-JNsWuMPMAuJL.jpg",
    coverHash: "hash",
    rating: 79,
    releaseDate: 2024,
    color: "#f1e4c9",
    genres: ["Action", "Adventure", "Sci-Fi"],
    totalEpisodes: 12,
    duration: 24,
    type: "TV",
  },
  {
    id: "144176",
    malId: 50869,
    title: {
      romaji: "Kami wa Game ni Ueteiru.",
      english: "Gods' Games We Play",
      native: "神は遊戯に飢えている。",
      userPreferred: "Kami wa Game ni Ueteiru.",
    },
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx144176-xM8XAC3oUn5C.jpg",
    imageHash: "hash",
    trailer: {
      id: "dtWHRG3FzQ8",
      site: "youtube",
      thumbnail: "https://i.ytimg.com/vi/dtWHRG3FzQ8/hqdefault.jpg",
      thumbnailHash: "hash",
    },
    description:
      "In a world of idle gods, humans are forced into brain challenges with them. With three defeats, gods lose their right to challenge, while 10 victories spell human triumph. Fay, determined to achieve the impossible, enters the ultimate test of wits against the gods. Will he defy divinity or is he just another loss in the making?<br><br>\n(Source: Crunchyroll)",
    status: "Ongoing",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/144176-pI0FHoCJ5Rxc.jpg",
    coverHash: "hash",
    rating: 59,
    releaseDate: 2024,
    color: "#5093e4",
    genres: ["Comedy", "Drama", "Ecchi", "Fantasy", "Romance"],
    totalEpisodes: 13,
    duration: 24,
    type: "TV",
  },
  {
    id: "156415",
    malId: 53516,
    title: {
      romaji:
        "Tensei Shitara Dai Nana Ouji Dattanode, Kimamani Majutsu wo Kiwamemasu",
      english:
        "I Was Reincarnated as the 7th Prince So I Can Take My Time Perfecting My Magical Ability",
      native: "転生したら第七王子だったので、気ままに魔術を極めます",
      userPreferred:
        "Tensei Shitara Dai Nana Ouji Dattanode, Kimamani Majutsu wo Kiwamemasu",
    },
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx156415-zwP9deA786S1.jpg",
    imageHash: "hash",
    trailer: {
      id: "aK8Gtxw-9bE",
      site: "youtube",
      thumbnail: "https://i.ytimg.com/vi/aK8Gtxw-9bE/hqdefault.jpg",
      thumbnailHash: "hash",
    },
    description:
      "The qualities valued most in the study of magic are bloodline, aptitude, and effort. There was one sorcerer who, despite his deep love for magic, was born a commoner and thus lacked the bloodline and aptitude for it. As he died an unnatural death, he wished he had studied magic more while he had the chance. Then, he was reincarnated as Lloyd, the seventh prince of the Kingdom of Saloum and one blessed with a strong magical bloodline. Reborn with all his memories intact, along with the perfect bloodline and immense talent, he was determined to enjoy his new life, using his extraordinary magical abilities to master the study of magic that was beyond his reach in his previous life!\n<br>\n<br>\n(Source: Crunchyroll)",
    status: "Ongoing",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx156415-zwP9deA786S1.jpg",
    coverHash: "hash",
    rating: 68,
    releaseDate: 2024,
    color: "#50e493",
    genres: ["Adventure", "Fantasy", "Slice of Life"],
    totalEpisodes: 4,
    duration: 24,
    type: "TV",
  },
  {
    id: "156822",
    malId: 53580,
    title: {
      romaji: "Tensei Shitara Slime Datta Ken 3rd Season",
      english: "That Time I Got Reincarnated as a Slime Season 3",
      native: "転生したらスライムだった件 第3期",
      userPreferred: "Tensei Shitara Slime Datta Ken 3rd Season",
    },
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx156822-Jzo2ITWgm4kM.jpg",
    imageHash: "hash",
    trailer: {
      id: "gqrkjNpoeQM",
      site: "youtube",
      thumbnail: "https://i.ytimg.com/vi/gqrkjNpoeQM/hqdefault.jpg",
      thumbnailHash: "hash",
    },
    description:
      "The third season of <i>Tensei Shitara Slime Datta Ken</i>.<br><br>\nRimuru has officially become a Demon Lord after defeating Clayman. Following Walpurgis, the Demon Lords' banquet, Rimuru's domain is expanded to include the entire Great Forest of Jura. Anticipating a flood of representatives from all races showing up to pay their respects, Rimuru decides to throw a festival to commemorate the opening of Tempest, using it as an opportunity to gain new citizens and present Demon Lord Rimuru to the world. Meanwhile, in the Holy Empire of Lubelius, home base of the monster-hating cult of Luminism, Holy Knight Captain Hinata receives a message from Rimuru. But the message is actually a fabricated declaration of war sent by some unknown party. Upon learning that Hinata is heading for Tempest, Rimuru makes a decision... Thus begins a new challenge for Rimuru, striving to distinguish friend from foe in his pursuit of the ideal nation where humans and monsters can prosper together. <br><br>\n(Source: Crunchyroll)\n",
    status: "Ongoing",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/156822-y0wPQIl3AHDA.jpg",
    coverHash: "hash",
    rating: 82,
    releaseDate: 2024,
    color: "#e4785d",
    genres: ["Action", "Adventure", "Comedy", "Fantasy"],
    totalEpisodes: 24,
    duration: 24,
    type: "TV",
  },
  {
    id: "164702",
    malId: 55265,
    title: {
      romaji: "Tensei Kizoku, Kantei Skill de Nariagaru",
      english:
        "As a Reincarnated Aristocrat, I'll Use My Appraisal Skill to Rise in the World",
      native: "転生貴族、鑑定スキルで成り上がる",
      userPreferred: "Tensei Kizoku, Kantei Skill de Nariagaru",
    },
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx164702-FjpM96MPdzVm.jpg",
    imageHash: "hash",
    trailer: {
      id: "9-wiCnir-xQ",
      site: "youtube",
      thumbnail: "https://i.ytimg.com/vi/9-wiCnir-xQ/hqdefault.jpg",
      thumbnailHash: "hash",
    },
    description:
      "Our protagonist, Ars Louvent, was reincarnated in another world as the young son of a minor noble who owns a small domain. Ars was not particularly strong or intelligent, but he was born with the Appraisal Skill that's able to see others' abilities and statuses. He uses his skill to find the best hidden talents in the world to make their small, weak domain into the best. An isekai tale about unification is about to start, featuring the kind-hearted Ars and the unique talents he manages to find!<br><br>\n(Source: Crunchyroll)",
    status: "Ongoing",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx164702-FjpM96MPdzVm.jpg",
    coverHash: "hash",
    rating: 67,
    releaseDate: 2024,
    color: "#f1d6bb",
    genres: ["Adventure", "Fantasy"],
    totalEpisodes: 12,
    duration: 24,
    type: "TV",
  },
  {
    id: "158417",
    malId: 53770,
    title: {
      romaji: "Sentai Daishikkaku",
      english: "GO! GO! Loser Ranger!",
      native: "戦隊大失格",
      userPreferred: "Sentai Daishikkaku",
    },
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx158417-2jUaUdiGBZQ8.jpg",
    imageHash: "hash",
    trailer: {
      id: "CUiUxP1p7hI",
      site: "youtube",
      thumbnail: "https://i.ytimg.com/vi/CUiUxP1p7hI/hqdefault.jpg",
      thumbnailHash: "hash",
    },
    description:
      "When the Monster Army invaded Earth thirteen years ago, the Divine Dragon Rangers rose up to stop them! With the war raging on, these great heroes are mankind’s last hope!<br>\n<br>\n<i>...or are they?</i><br>\n<br>\nIn truth, the invaders were subjugated within a year, forced to continue to crank out a monster a week for the Rangers to crush in front of their adoring fans! But one monster has had enough. Something has to change! He’ll rebel against the might of the Dragon Rangers and destroy them all...from the inside!<br>\n<br>\n(Source: Kodansha USA)",
    status: "Ongoing",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/158417-9oit16KQM4l7.jpg",
    coverHash: "hash",
    rating: 72,
    releaseDate: 2024,
    color: "#f1bb50",
    genres: ["Action", "Comedy", "Drama", "Sci-Fi"],
    totalEpisodes: 12,
    duration: 24,
    type: "TV",
  },
  {
    id: "163270",
    malId: 54900,
    title: {
      romaji: "WIND BREAKER",
      english: "WIND BREAKER",
      native: "WIND BREAKER",
      userPreferred: "WIND BREAKER",
    },
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx163270-oxwgbe43Cpog.jpg",
    imageHash: "hash",
    trailer: {
      id: "62r_G9bEPlU",
      site: "youtube",
      thumbnail: "https://i.ytimg.com/vi/62r_G9bEPlU/hqdefault.jpg",
      thumbnailHash: "hash",
    },
    description:
      "Where the average scores are the lowest, but the fights are the strongest. Furin High School is renowned as a super school of delinquents. Haruka Sakura, a first-year student, came from outside the city to fight to the top. However, Furin High School has become a group that protects the town called the “Chime of the Wind Breaker” – Bofurin. The heroic legend of high school delinquent Sakura begins here!\n<br><br>\n(Source: Crunchyroll)",
    status: "Ongoing",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/163270-QshLCttd04s6.jpg",
    coverHash: "hash",
    rating: 77,
    releaseDate: 2024,
    color: "#288643",
    genres: ["Action", "Comedy", "Drama"],
    totalEpisodes: 13,
    duration: 24,
    type: "TV",
  },
  {
    id: "154587",
    malId: 52991,
    title: {
      romaji: "Sousou no Frieren",
      english: "Frieren: Beyond Journey’s End",
      native: "葬送のフリーレン",
      userPreferred: "Sousou no Frieren",
    },
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-gHSraOSa0nBG.jpg",
    imageHash: "hash",
    trailer: {
      id: "qgQunxD0qCk",
      site: "youtube",
      thumbnail: "https://i.ytimg.com/vi/qgQunxD0qCk/hqdefault.jpg",
      thumbnailHash: "hash",
    },
    description:
      "The adventure is over but life goes on for an elf mage just beginning to learn what living is all about. Elf mage Frieren and her courageous fellow adventurers have defeated the Demon King and brought peace to the land. But Frieren will long outlive the rest of her former party. How will she come to understand what life means to the people around her? Decades after their victory, the funeral of one her friends confronts Frieren with her own near immortality. Frieren sets out to fulfill the last wishes of her comrades and finds herself beginning a new adventure…\n<br><br>\n(Source: Crunchyroll)",
    status: "Completed",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/154587-ivXNJ23SM1xB.jpg",
    coverHash: "hash",
    rating: 92,
    releaseDate: 2023,
    color: "#aee493",
    genres: ["Adventure", "Drama", "Fantasy"],
    totalEpisodes: 28,
    duration: 24,
    type: "TV",
  },
  {
    id: "153518",
    malId: 52701,
    title: {
      romaji: "Dungeon Meshi",
      english: "Delicious in Dungeon",
      native: "ダンジョン飯",
      userPreferred: "Dungeon Meshi",
    },
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx153518-LEK6pAXtI03D.jpg",
    imageHash: "hash",
    trailer: {
      id: "RtpYObV4c1Y",
      site: "youtube",
      thumbnail: "https://i.ytimg.com/vi/RtpYObV4c1Y/hqdefault.jpg",
      thumbnailHash: "hash",
    },
    description:
      "When young adventurer Laios and his company are attacked and soundly thrashed by a dragon deep in a dungeon, the party loses all its money and provisions...and a member! They're eager to go back and save her, but there is just one problem: If they set out with no food or coin to speak of, they're sure to starve on the way! But Laios comes up with a brilliant idea: \"Let's eat the monsters!\" Slimes, basilisks, and even dragons...none are safe from the appetites of these dungeon-crawling gourmands! <br>\n<br>\n(Source: Yen Press)\n<br><br>\n<i>Note: A world premiere screening of Episode 1 was shown in the Studio TRIGGER panel at Anime Expo on July 1, 2023.</i>",
    status: "Ongoing",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/153518-7uRvV7SLqmHV.jpg",
    coverHash: "hash",
    rating: 80,
    releaseDate: 2024,
    color: "#f18650",
    genres: ["Adventure", "Comedy", "Fantasy"],
    totalEpisodes: 24,
    duration: 25,
    type: "TV",
  },
  {
    id: "168138",
    malId: 56230,
    title: {
      romaji: "Jii-san Baa-san Wakagaeru",
      english: "Grandpa and Grandma Turn Young Again",
      native: "じいさんばあさん若返る",
      userPreferred: "Jii-san Baa-san Wakagaeru",
    },
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx168138-jgMSP1rDkJhs.jpg",
    imageHash: "hash",
    trailer: {
      id: "wYVCjd51T8U",
      site: "youtube",
      thumbnail: "https://i.ytimg.com/vi/wYVCjd51T8U/hqdefault.jpg",
      thumbnailHash: "hash",
    },
    description:
      "The story of <i>Jii-san Baa-san Wakagaeru</i> follows Shouzou and Ine, an elderly couple who are living a quiet life in a farming village in Aomori Prefecture. After eating a mysterious apple that they discover on their apple farm, Shozo and Ine spontaneously regain their youth, but even after being reinvigorated they continue to live life at a grandparent-ly pace.<br>\n<br>\n(Source: Crunchyroll News, edited)",
    status: "Ongoing",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx168138-jgMSP1rDkJhs.jpg",
    coverHash: "hash",
    rating: 66,
    releaseDate: 2024,
    color: "#e46b35",
    genres: ["Comedy", "Fantasy", "Romance"],
    totalEpisodes: 11,
    duration: 24,
    type: "TV",
  },
  {
    id: "151639",
    malId: 56285,
    title: {
      romaji: "Ninja Kamui",
      english: "Ninja Kamui",
      native: "Ninja Kamui",
      userPreferred: "Ninja Kamui",
    },
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx151639-7KqJ7BgaM9Mx.png",
    imageHash: "hash",
    trailer: {
      id: "Sjs6MkX9ASU",
      site: "youtube",
      thumbnail: "https://i.ytimg.com/vi/Sjs6MkX9ASU/hqdefault.jpg",
      thumbnailHash: "hash",
    },
    description:
      "Higan is a Nukenin - a former ninja who escaped his clan and is hiding from his violent past in rural America with his family. One night, he is ambushed by a team of assassins from his former organization who exact a bloody retribution on Joe and his family for betraying their ancient code. Rising from his seeming “death,” Joe will re-emerge as his former self - Ninja Kamui - to avenge his family and friends. Kamui is a 21st century ninja, a shadowy anachronism who pits his ancient skills against high-tech weaponry with brutal finesse. He must face off against trained assassins, combat cyborgs, and rival ninjas to bring down the very clan that made him.\n<br><br>\n(Source: Warner Bros. Discovery)",
    status: "Ongoing",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/151639-6tcLh08KSsmJ.jpg",
    coverHash: "hash",
    rating: 75,
    releaseDate: 2024,
    color: "#e4351a",
    genres: ["Action", "Adventure", "Drama", "Sci-Fi"],
    totalEpisodes: 12,
    duration: 23,
    type: "TV",
  },
  {
    id: "145728",
    malId: 51122,
    title: {
      romaji: "Ookami to Koushinryou: MERCHANT MEETS THE WISE WOLF",
      english: "Spice and Wolf: MERCHANT MEETS THE WISE WOLF",
      native: "狼と香辛料 MERCHANT MEETS THE WISE WOLF",
      userPreferred: "Ookami to Koushinryou: MERCHANT MEETS THE WISE WOLF",
    },
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx145728-YUKXjN2E81Pq.jpg",
    imageHash: "hash",
    trailer: {
      id: "Fr50ydw5H_Q",
      site: "youtube",
      thumbnail: "https://i.ytimg.com/vi/Fr50ydw5H_Q/hqdefault.jpg",
      thumbnailHash: "hash",
    },
    description:
      "Lawrence is a traveling merchant selling various goods from a horse-drawn cart. One day, he arrives at a village and meets a beautiful girl with the ears and tail of an animal! Her name is Holo the Wisewolf and she brings bountiful harvests. She wishes to return to her homeland, and Lawrence offers to take her. Now, the once-lonely merchant and the once-lonely wisewolf begin their journey north.<br>\n<br>\n(Source: Crunchyroll)",
    status: "Ongoing",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/145728-v6NGBJOQs8Kh.jpg",
    coverHash: "hash",
    rating: 79,
    releaseDate: 2024,
    color: "#5093f1",
    genres: ["Adventure", "Fantasy", "Romance"],
    totalEpisodes: 25,
    duration: 24,
    type: "TV",
  },
  {
    id: "163078",
    malId: 54839,
    title: {
      romaji: "Yoru no Kurage wa Oyogenai",
      english: "Jellyfish Can’t Swim in the Night",
      native: "夜のクラゲは泳げない",
      userPreferred: "Yoru no Kurage wa Oyogenai",
    },
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx163078-kIhCmQARcoOD.jpg",
    imageHash: "hash",
    trailer: {
      id: "54-oOvimVeE",
      site: "youtube",
      thumbnail: "https://i.ytimg.com/vi/54-oOvimVeE/hqdefault.jpg",
      thumbnailHash: "hash",
    },
    description:
      '<i>"I want to find what I enjoy."</i>\n<br><br>\nShibuya is a city full of identity. It is here on Shibuya’s late night streets that illustrator Mahiru Kozuki, former idol Kano Yamanouchi, Vtuber Kiui Watase\u202fand composer Mei Kim Anouk Takanashi — four young women who are slightly outside the world — join together and form an anonymous artist group called JELEE. “I” also want to shine like someone else. If it\'s not me but “we” then we might be able to shine.<br>\n<br>\n(Source: Crunchyroll News, HIDIVE, edited)',
    status: "Ongoing",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/163078-T9ckx5LFHfbL.jpg",
    coverHash: "hash",
    rating: 78,
    releaseDate: 2024,
    color: "#e4c95d",
    genres: ["Drama"],
    totalEpisodes: 12,
    duration: 24,
    type: "TV",
  },
  {
    id: "169698",
    malId: 56768,
    title: {
      romaji: "Tadaima, Okaeri",
      english: "Tadaima, Okaeri",
      native: "ただいま、おかえり",
      userPreferred: "Tadaima, Okaeri",
    },
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx169698-pmIhuxlGufON.jpg",
    imageHash: "hash",
    trailer: {
      id: "NbZNsMP8StQ",
      site: "youtube",
      thumbnail: "https://i.ytimg.com/vi/NbZNsMP8StQ/hqdefault.jpg",
      thumbnailHash: "hash",
    },
    description:
      "Masaki Fujiyoshi is a stay-at-home spouse and parent. He has fought long and hard with feelings of being a burden to his loving husband, Hiromu, due to his status as an omega—and the difficulty they faced to achieve this domesticity. When their son, Hikari, was born, the family moved to an area better suited for raising children.<br>\n<br>\nDespite their newfound domestic bliss, the family's ties to their past are in tatters. There are people they left behind to pursue the creation of their happy family, and when they begin to return, Masaki and Hiromu aren't quite sure they have good intentions.\n<br><br>\n(Source: Crunchyroll)",
    status: "Ongoing",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/169698-bMhXndCIlAOu.jpg",
    coverHash: "hash",
    rating: 66,
    releaseDate: 2024,
    color: "#e4e4ae",
    genres: ["Drama", "Romance", "Slice of Life"],
    totalEpisodes: 12,
    duration: 24,
    type: "TV",
  },
];

export const moviesList = [
  {
    id: "21519",
    malId: 32281,
    title: {
      romaji: "Kimi no Na wa.",
      english: "Your Name.",
      native: "君の名は。",
      userPreferred: "Kimi no Na wa.",
    },
    status: "Completed",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21519-fPhvy69vnQqS.png",
    imageHash: "hash",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21519-1ayMXgNlmByb.jpg",
    coverHash: "hash",
    popularity: 515637,
    totalEpisodes: 1,
    currentEpisode: null,
    countryOfOrigin: "JP",
    description:
      "Mitsuha Miyamizu, a high school girl, yearns to live the life of a boy in the bustling city of Tokyo—a dream that stands in stark contrast to her present life in the countryside. Meanwhile in the city, Taki Tachibana lives a busy life as a high school student while juggling his part-time job and hopes for a future in architecture.<br>\n<br>\nOne day, Mitsuha awakens in a room that is not her own and suddenly finds herself living the dream life in Tokyo—but in Taki's body! Elsewhere, Taki finds himself living Mitsuha's life in the humble countryside. In pursuit of an answer to this strange phenomenon, they begin to search for one another.<br>\n<br>\n<i>Kimi no Na wa.</i> revolves around Mitsuha and Taki's actions, which begin to have a dramatic impact on each other's lives, weaving them into a fabric held together by fate and circumstance.<br>\n<br>\n(Source: MAL Rewrite)",
    genres: ["Drama", "Romance", "Supernatural"],
    rating: 85,
    color: "#0da1e4",
    type: "MOVIE",
    releaseDate: 2016,
  },
  {
    id: "20954",
    malId: 28851,
    title: {
      romaji: "Koe no Katachi",
      english: "A Silent Voice",
      native: "聲の形",
      userPreferred: "Koe no Katachi",
    },
    status: "Completed",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20954-UMb6Kl7ZL8Ke.jpg",
    imageHash: "hash",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20954-f30bHMXa5Qoe.jpg",
    coverHash: "hash",
    popularity: 502915,
    totalEpisodes: 1,
    currentEpisode: null,
    countryOfOrigin: "JP",
    description:
      "After transferring into a new school, a deaf girl, Shouko Nishimiya, is bullied by the popular Shouya Ishida. As Shouya continues to bully Shouko, the class turns its back on him. Shouko transfers and Shouya grows up as an outcast. Alone and depressed, the regretful Shouya finds Shouko to make amends.\n<br><br>\n(Source: Eleven Arts)",
    genres: ["Drama", "Romance", "Slice of Life"],
    rating: 88,
    color: "#5dbbe4",
    type: "MOVIE",
    releaseDate: 2016,
  },
  {
    id: "112151",
    malId: 40456,
    title: {
      romaji: "Kimetsu no Yaiba: Mugen Ressha-hen",
      english: "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train",
      native: "鬼滅の刃 無限列車編",
      userPreferred: "Kimetsu no Yaiba: Mugen Ressha-hen",
    },
    status: "Completed",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx112151-1qlQwPB1RrJe.png",
    imageHash: "hash",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/112151-eHCBz19nf2yC.jpg",
    coverHash: "hash",
    popularity: 364632,
    totalEpisodes: 1,
    currentEpisode: null,
    countryOfOrigin: "JP",
    description:
      "This Demon Slayer movie sees Tanjiro Kamado and friends from the Demon Slayer corps board the Infinity Train on a new mission to investigate a mysterious series of disappearances, perpetrated by a demon who has been tormenting people and killing the demon slayers who oppose it.",
    genres: [
      "Action",
      "Adventure",
      "Drama",
      "Fantasy",
      "Mystery",
      "Supernatural",
    ],
    rating: 84,
    color: "#5dc9f1",
    type: "MOVIE",
    releaseDate: 2020,
  },
  {
    id: "199",
    malId: 199,
    title: {
      romaji: "Sen to Chihiro no Kamikakushi",
      english: "Spirited Away",
      native: "千と千尋の神隠し",
      userPreferred: "Sen to Chihiro no Kamikakushi",
    },
    status: "Completed",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx199-ilRRfrty7HrJ.jpg",
    imageHash: "hash",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/199-Sm2RU5PSqw7T.jpg",
    coverHash: "hash",
    popularity: 349757,
    totalEpisodes: 1,
    currentEpisode: null,
    countryOfOrigin: "JP",
    description:
      "On the way to their new home, 10-year-old Chihiro Ogino's family stumbles upon a deserted theme park. Intrigued, the family investigates the park, though unbeknownst to them, it is secretly inhabited by spirits who sleep by day and appear at night. When Chihiro's mother and father eat food from a restaurant in the street, angry spirits turn them into pigs. Furthermore, a wide sea has appeared between the spirit world and the human one, trapping Chihiro, the sole human, in a land of spirits. Luckily for her though, a mysterious boy named Haku appears, claiming to know her from the past. Under his instructions, Chihiro secures a job in the bathhouse where Haku works. With only her courage and some new found friends to aid her, Chihiro embarks on a journey to turn her parents back to their original forms and return home.\n",
    genres: ["Adventure", "Drama", "Fantasy", "Supernatural"],
    rating: 86,
    color: "#e45d5d",
    type: "MOVIE",
    releaseDate: 2001,
  },
  {
    id: "131573",
    malId: 48561,
    title: {
      romaji: "Jujutsu Kaisen 0",
      english: "JUJUTSU KAISEN 0",
      native: "呪術廻戦 0",
      userPreferred: "Jujutsu Kaisen 0",
    },
    status: "Completed",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx131573-rpl82vDEDRm6.jpg",
    imageHash: "hash",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/131573-3veuVz5p0z2I.jpg",
    coverHash: "hash",
    popularity: 259433,
    totalEpisodes: 1,
    currentEpisode: null,
    countryOfOrigin: "JP",
    description:
      "Yuta Okkotsu is a nervous high school student who is suffering from a serious problem—his childhood friend Rika has turned into a curse and won't leave him alone. Since Rika is no ordinary curse, his plight is noticed by Satoru Gojo, a teacher at Jujutsu High, a school where fledgling exorcists learn how to combat curses. Gojo convinces Yuta to enroll, but can he learn enough in time to confront the curse that haunts him?\n<br><br>\n(Source: Viz Media)",
    genres: ["Action", "Supernatural"],
    rating: 84,
    color: "#f1c95d",
    type: "MOVIE",
    releaseDate: 2021,
  },
  {
    id: "106286",
    malId: 38826,
    title: {
      romaji: "Tenki no Ko",
      english: "Weathering With You",
      native: "天気の子",
      userPreferred: "Tenki no Ko",
    },
    status: "Completed",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx106286-5COcpd0J9VbL.png",
    imageHash: "hash",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/106286-3oKwiwjd7Wkm.jpg",
    coverHash: "hash",
    popularity: 255906,
    totalEpisodes: 1,
    currentEpisode: null,
    countryOfOrigin: "JP",
    description:
      "High school student Hodaka leaves his home on an isolated island and moves to Tokyo, but he immediately becomes broke. He lives his days in isolation, but finally finds a job as a writer for a shady occult magazine. After he starts his job, the weather has been rainy day after day. In a corner of the crowded and busy city, Hodaka meets a young woman named Hina. Due to certain circumstances, Hina and her younger brother live together, but have a cheerful and sturdy life. Hina also has a certain power: the power to stop the rain and clear the sky.\n<br><br>\n(Source: Anime News Network)",
    genres: ["Drama", "Romance", "Slice of Life", "Supernatural"],
    rating: 81,
    color: "#5dbbe4",
    type: "MOVIE",
    releaseDate: 2019,
  },
  {
    id: "431",
    malId: 431,
    title: {
      romaji: "Howl no Ugoku Shiro",
      english: "Howl‘s Moving Castle",
      native: "ハウルの動く城",
      userPreferred: "Howl no Ugoku Shiro",
    },
    status: "Completed",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx431-dDgk19xDZjVX.jpg",
    imageHash: "hash",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/431-fLBlvTgdqLCz.jpg",
    coverHash: "hash",
    popularity: 255004,
    totalEpisodes: 1,
    currentEpisode: null,
    countryOfOrigin: "JP",
    description:
      "Sophie, a quiet girl working in a hat shop, finds her life thrown into turmoil when she is literally swept off her feet by a handsome but mysterious wizard named Howl. The vain and vengeful Witch of the Waste, jealous of their friendship, puts a spell on Sophie. In a life-changing adventure, Sophie climbs aboard Howl's magnificent flying castle and enters a magical world on a quest to break the spell. <br><br>\r\n(Source: Disney)",
    genres: ["Adventure", "Drama", "Fantasy", "Romance"],
    rating: 84,
    color: "#0daee4",
    type: "MOVIE",
    releaseDate: 2004,
  },
  {
    id: "99750",
    malId: 36098,
    title: {
      romaji: "Kimi no Suizou wo Tabetai",
      english: "I Want to Eat Your Pancreas",
      native: "君の膵臓をたべたい",
      userPreferred: "Kimi no Suizou wo Tabetai",
    },
    status: "Completed",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx99750-NHafozHS8zRp.jpg",
    imageHash: "hash",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/99750-KPFW2Jv03b2B.jpg",
    coverHash: "hash",
    popularity: 254833,
    totalEpisodes: 1,
    currentEpisode: null,
    countryOfOrigin: "JP",
    description:
      'Spring time in April and the last of the cherry blossoms are still in bloom. The usually aloof bookworm with no interest in others comes across a book in a hospital waiting room. Handwritten on the cover are the words: "Living with Dying." He soon discovers that it is a diary kept by his very popular and genuinely cheerful classmate, Sakura Yamauchi, who reveals to him that she is secretly suffering from a pancreatic illness and only has a limited time left. It is at this moment that she gains just one more person to share her secret.<br>\n<br>\nTrying to maintain a normal life as much as possible, Sakura is determined to live her life to the fullest until the very last day. As her free spirit and unpredictable actions throw him for a loop, his heart begins to gradually change.\n<br><br>\n(Source: Aniplex USA)',
    genres: ["Drama", "Romance", "Slice of Life"],
    rating: 84,
    color: "#f1c9f1",
    type: "MOVIE",
    releaseDate: 2018,
  },
  {
    id: "164",
    malId: 164,
    title: {
      romaji: "Mononoke-hime",
      english: "Princess Mononoke",
      native: "もののけ姫",
      userPreferred: "Mononoke-hime",
    },
    status: "Completed",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx164-QYmGmG2k09pL.jpg",
    imageHash: "hash",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/164-Aj6MINy7VTfs.jpg",
    coverHash: "hash",
    popularity: 217838,
    totalEpisodes: 1,
    currentEpisode: null,
    countryOfOrigin: "JP",
    description:
      "A calm village residing in the mountains comes under attack from a demon-possessed boar one day.<br><br>\nAshitaka, a young man and prince of the tribe, engages the creature in an attempt to save his village. During the battle, the boar bites him on the arm, leaving it blackened and cursed. Following his village's traditions, Ashitaka is exiled and becomes a wanderer, looking for a solution to the curse before it engulfs him.<br><br>\nIron Town is a fortress under the leadership of Lady Eboshi. Through the clearing of the surrounding forests, Iron Town produces large amounts of Ironsand, used for gunpowder and other machinery. However, because of the forests destruction, nearby animal clans seek revenge led by a human girl of the Wolf clan called San.<br><br>\nWhen Ashitaka comes to Iron Town, he discovers the area consumed in battle. Horrified, he attempts to create peace and befriend the Wolf Clan. However, after the forest's eradication and the ongoing war between Human and Beast, will the Spirit of the Forest be forgiving and accept Ashitaka's request to expel his curse?<br><br>\n[Written by MAL Rewrite]",
    genres: ["Action", "Adventure", "Drama", "Fantasy"],
    rating: 84,
    color: null,
    type: "MOVIE",
    releaseDate: 1997,
  },
  {
    id: "523",
    malId: 523,
    title: {
      romaji: "Tonari no Totoro",
      english: "My Neighbor Totoro",
      native: "となりのトトロ",
      userPreferred: "Tonari no Totoro",
    },
    status: "Completed",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx523-hTtHgMXI9hLw.jpg",
    imageHash: "hash",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/523-rl12Q0av1fCr.jpg",
    coverHash: "hash",
    popularity: 203901,
    totalEpisodes: 1,
    currentEpisode: null,
    countryOfOrigin: "JP",
    description:
      "Follow the adventures of Satsuki and her four-year-old sister Mei when they move into a new home in the countryside. To their delight they discover that their new neighbor is a mysterious forest spirit called Totoro who can be seen only through the eyes of a child. Totoro introduces them to extraordinary characters, including a cat that doubles as a bus, takes them on a journey through the wonders of nature. <br><br>\n(Source: Disney) ",
    genres: ["Adventure", "Fantasy", "Slice of Life", "Supernatural"],
    rating: 80,
    color: "#f19335",
    type: "MOVIE",
    releaseDate: 1988,
  },
  {
    id: "16782",
    malId: 16782,
    title: {
      romaji: "Kotonoha no Niwa",
      english: "The Garden of Words",
      native: "言の葉の庭",
      userPreferred: "Kotonoha no Niwa",
    },
    status: "Completed",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16782-1AekGIzlPy8a.jpg",
    imageHash: "hash",
    cover: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/16782.jpg",
    coverHash: "hash",
    popularity: 191775,
    totalEpisodes: 1,
    currentEpisode: null,
    countryOfOrigin: "JP",
    description:
      "Some people revel and play in the rain; others dread it and hide at the first drop. For high school student Takao, a summer shower is a source of artistic inspiration… but when he skips school in order to sketch in a rainy garden, Takao finds an even greater muse in Yukino, an older woman who seems adrift in the world. Despite the difference in their ages and lives, they strike up a comfortable relationship that slowly evolves as they randomly meet in the same garden whenever it rains. But with the rainy season coming to a close, Takao wonders if there's enough time left to put his feelings into actions and words.<br><br>\n(Source: Sentai Filmworks)",
    genres: ["Drama", "Psychological", "Romance", "Slice of Life"],
    rating: 75,
    color: "#93e45d",
    type: "MOVIE",
    releaseDate: 2013,
  },
  {
    id: "1689",
    malId: 1689,
    title: {
      romaji: "Byousoku 5 Centimeter",
      english: "5 Centimeters per Second",
      native: "秒速５センチメートル",
      userPreferred: "Byousoku 5 Centimeter",
    },
    status: "Completed",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1689-k9lxlCgPU4Zb.jpg",
    imageHash: "hash",
    cover: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/1689.jpg",
    coverHash: "hash",
    popularity: 190226,
    totalEpisodes: 3,
    currentEpisode: null,
    countryOfOrigin: "JP",
    description:
      "Tohno Takaki and Shinohara Akari, two very close friends and classmates, are torn apart when Akari's family is transferred to another region of Japan due to her family's job. Despite separation, they continue to keep in touch through mail. When Takaki finds out that his family is also moving, he decides to meet with Akari one last time.<br><br>\nAs years pass by, they continue down their own paths, their distance slowly growing wider and their contact with one another fades. Yet, they keep remembering one another and the times they have shared together, wondering if they will have the chance to meet once again.\n",
    genres: ["Drama", "Romance", "Slice of Life"],
    rating: 71,
    color: "#d6a178",
    type: "MOVIE",
    releaseDate: 2007,
  },
  {
    id: "104157",
    malId: 38329,
    title: {
      romaji: "Seishun Buta Yarou wa Yumemiru Shoujo no Yume wo Minai",
      english: "Rascal Does Not Dream of a Dreaming Girl",
      native: "青春ブタ野郎はゆめみる少女の夢を見ない",
      userPreferred: "Seishun Buta Yarou wa Yumemiru Shoujo no Yume wo Minai",
    },
    status: "Completed",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx104157-rk99XI56PaIC.jpg",
    imageHash: "hash",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/104157-PS7tfPpvJKhk.jpg",
    coverHash: "hash",
    popularity: 185600,
    totalEpisodes: 1,
    currentEpisode: null,
    countryOfOrigin: "JP",
    description:
      "In Fujisawa, where the skies are bright and the seas glisten, Sakuta Azusagawa is in his second year of high school. His blissful days with his girlfriend and upperclassman, Mai Sakurajima, are interrupted with the appearance of his first crush, Shouko Makinohara. For reasons unknown, he encounters two Shouko's: one in middle school and another who has become an adult.\n<br>\n<br>\nAs Sakuta finds himself helplessly living with the Shouko's, the adult Shouko leads him around by the nose, causing a huge rift in his relationship with Mai.\n<br>\n<br>\nIn the midst of all of this, he discovers that the middle school Shouko is suffering from a grave illness and his scar begins to throb...\n<br>\n<br>\n(Source: Aniplex USA)",
    genres: ["Drama", "Psychological", "Romance", "Supernatural"],
    rating: 84,
    color: "#8643f1",
    type: "MOVIE",
    releaseDate: 2019,
  },
  {
    id: "32",
    malId: 32,
    title: {
      romaji: "Shin Seiki Evangelion Movie: Air / Magokoro wo, Kimi ni",
      english: "Neon Genesis Evangelion: The End of Evangelion",
      native: "新世紀エヴァンゲリオン劇場版 Air/まごころを、君に",
      userPreferred: "Shin Seiki Evangelion Movie: Air / Magokoro wo, Kimi ni",
    },
    status: "Completed",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx32-PMmJBerdDSma.jpg",
    imageHash: "hash",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n32-BH9yHJBQqeOa.jpg",
    coverHash: "hash",
    popularity: 180466,
    totalEpisodes: 1,
    currentEpisode: null,
    countryOfOrigin: "JP",
    description:
      "NERV faces a brutal attack from SEELE, but with Asuka in a coma, and Shinji in a nervous breakdown, things soon turn into the surreal. This movie provides a concurrent ending to the final two episodes of the show <b>Neon Genesis Evangelion</b>.<br>\n<br>\n(Source: IMDb)",
    genres: ["Action", "Drama", "Mecha", "Psychological", "Sci-Fi"],
    rating: 85,
    color: "#e46b50",
    type: "MOVIE",
    releaseDate: 1997,
  },
  {
    id: "21875",
    malId: 33674,
    title: {
      romaji: "No Game No Life Zero",
      english: "No Game, No Life Zero",
      native: "ノーゲーム・ノーライフ ゼロ",
      userPreferred: "No Game No Life Zero",
    },
    status: "Completed",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx21875-ybSgx75MgRMM.png",
    imageHash: "hash",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21875-WWkiWSnNcdbt.jpg",
    coverHash: "hash",
    popularity: 178898,
    totalEpisodes: 1,
    currentEpisode: null,
    countryOfOrigin: "JP",
    description:
      'A movie adaptation of the sixth volume of the light novel series announced at the MF Bunko J Summer School Festival 2016 event.\n<br><br>\nSix thousand years before Sora and Shiro were even a blink in the history of Disboard, war consumed the land, tearing apart the heavens, destroying stars, and even threatening to wipe out the human race. Amid the chaos and destruction, a young man named Riku leads humanity toward the tomorrow his heart believes in. One day, in the ruins of an Elf city, he meets Schwi, a female exiled "Ex Machina" android who asks him to teach her what it means to have a human heart.\n<br><br>(Source: Sentai Filmworks)',
    genres: ["Action", "Adventure", "Drama", "Fantasy", "Romance"],
    rating: 80,
    color: "#50aee4",
    type: "MOVIE",
    releaseDate: 2017,
  },
  {
    id: "102976",
    malId: 38040,
    title: {
      romaji: "Kono Subarashii Sekai ni Shukufuku wo! Kurenai Densetsu",
      english:
        "KONOSUBA -God's blessing on this wonderful world!- Legend of Crimson",
      native: "この素晴らしい世界に祝福を！紅伝説",
      userPreferred: "Kono Subarashii Sekai ni Shukufuku wo! Kurenai Densetsu",
    },
    status: "Completed",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx102976-WcNjDFdQbdCv.png",
    imageHash: "hash",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/102976-xv7fCzBwQ7GU.jpg",
    coverHash: "hash",
    popularity: 175047,
    totalEpisodes: 1,
    currentEpisode: null,
    countryOfOrigin: "JP",
    description:
      "A video game-loving shut-in, Satou Kazuma's life should've ended when he was hit by a truck, but through a twist of fate, he ends up reincarnating in another world--and dragging the troublemaking goddess, Aqua, the wildly dorky mage, Megumin, and the unrelentingly delusional lady knight, Darkness, with him.<br>\n<br>\nNow, the Crimson Demon village that Megumin and Yunyun are from is facing a threat that could mean its ending. Kazuma and his gang follow Yunyun, who returns to the Crimson Demon village intent on saving it... when they are faced with their greatest threat yet! What will become of the unremarkable adventurer Kazuma's life in another world?!<br>\n<br>\n(Source: Crunchyroll)",
    genres: [
      "Action",
      "Adventure",
      "Comedy",
      "Ecchi",
      "Fantasy",
      "Supernatural",
    ],
    rating: 83,
    color: "#5dbbe4",
    type: "MOVIE",
    releaseDate: 2019,
  },
  {
    id: "100723",
    malId: 36896,
    title: {
      romaji: "Boku no Hero Academia THE MOVIE: Futari no Hero",
      english: "My Hero Academia: Two Heroes",
      native: "僕のヒーローアカデミア THE MOVIE 〜2人の英雄〜",
      userPreferred: "Boku no Hero Academia THE MOVIE: Futari no Hero",
    },
    status: "Completed",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx100723-7f5e1BCTCDoB.jpg",
    imageHash: "hash",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/100723-B3tiFsddYmfF.jpg",
    coverHash: "hash",
    popularity: 173815,
    totalEpisodes: 1,
    currentEpisode: null,
    countryOfOrigin: "JP",
    description:
      "The first installment in the <i>Boku no Hero Academia</i> movie franchise.<br>\n<br>\nThe climactic finals are over, and U.A. is getting ready for the summer training camp. Deku and All Might receive an invitation from a certain person to go overseas to a giant artificial moving city called I-Island. This island, a kind of “science Hollywood” that gathers the knowledge of scientists from around the world, is holding an exhibition called I-Expo showcasing the results of Quirk and hero item research. In the midst of all this, Deku meets a Quirkless girl named Melissa and remembers his own Quirkless past. Out of the blue, the impregnable security system the island boasts is hacked by villains, and all the people on the island are taken as hostages! Now, a plan that could shake hero society has been put into motion! The man who holds the key to it all is the number one hero and Symbol of Peace, All Might.<br>\n<br>\n(Source: Funimation)",
    genres: ["Action", "Comedy", "Drama", "Sci-Fi"],
    rating: 74,
    color: "#5dbbe4",
    type: "MOVIE",
    releaseDate: 2018,
  },
  {
    id: "47",
    malId: 47,
    title: {
      romaji: "AKIRA",
      english: "Akira",
      native: "AKIRA",
      userPreferred: "AKIRA",
    },
    status: "Completed",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx47-Sjkc8RDBjqwT.jpg",
    imageHash: "hash",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/47-fof8HqtNDtvx.jpg",
    coverHash: "hash",
    popularity: 167264,
    totalEpisodes: 1,
    currentEpisode: null,
    countryOfOrigin: "JP",
    description:
      "It's the year 2019, thirty-one years have passed since the start of World War III. A top-secret child with amazing powers of the mind breaks free from custody and accidentally gets a motorcycle gang involved in the project. This incident triggers psychic powers within one of the gang members, Tetsuo, and he is taken by the army to be experimented on. His mind has been altered and is now on the path of war, seeking revenge on the society that once called him weak. <br><br>\n(Source: FUNimation) ",
    genres: [
      "Action",
      "Adventure",
      "Horror",
      "Psychological",
      "Sci-Fi",
      "Supernatural",
    ],
    rating: 79,
    color: "#e45d50",
    type: "MOVIE",
    releaseDate: 1988,
  },
  {
    id: "437",
    malId: 437,
    title: {
      romaji: "PERFECT BLUE",
      english: "Perfect Blue",
      native: "PERFECT BLUE",
      userPreferred: "PERFECT BLUE",
    },
    status: "Completed",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx437-moJoeSWPuAIS.jpg",
    imageHash: "hash",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/437-3yMVTyN7gl2A.jpg",
    coverHash: "hash",
    popularity: 166417,
    totalEpisodes: 1,
    currentEpisode: null,
    countryOfOrigin: "JP",
    description:
      "Rising pop star Mima has quit singing to pursue a career as an actress and model, but her fans aren’t ready to see her go... Encouraged by her managers, Mima takes on a recurring role on a popular TV show, when suddenly her handlers and collaborators begin turning up murdered. Harboring feelings of guilt and haunted by visions of her former self, Mima’s reality and fantasy meld into a frenzied paranoia. As her stalker closes in, in person and online, the threat he poses is more real than even Mima knows, in this iconic psychological thriller that has frequently been hailed as one of the most important animated films of all time.<br>\n<br>\n(Source: Shout! Factory)<br>\n<br>\n<i>Note: The film received an early premiere at the Fantasia Film Festival on August 5, 1997.</i>",
    genres: ["Drama", "Horror", "Psychological", "Thriller"],
    rating: 85,
    color: "#1a356b",
    type: "MOVIE",
    releaseDate: 1998,
  },
  {
    id: "10408",
    malId: 10408,
    title: {
      romaji: "Hotarubi no Mori e",
      english: "Into the Forest of Fireflies' Light",
      native: "蛍火の杜へ",
      userPreferred: "Hotarubi no Mori e",
    },
    status: "Completed",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx10408-PlKJ6DAyvMk2.png",
    imageHash: "hash",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/10408-kZhXe0uVrAd2.jpg",
    coverHash: "hash",
    popularity: 155623,
    totalEpisodes: 1,
    currentEpisode: null,
    countryOfOrigin: "JP",
    description:
      "The story of <i>Hotarubi no Mori e</i> centers around Hotaru, a little girl who gets lost in an enchanted forest where apparitions reside. A young boy, Gin, appears before Hotaru, but she cannot touch him for fear of making him disappear.",
    genres: ["Drama", "Fantasy", "Romance", "Supernatural"],
    rating: 79,
    color: "#93d678",
    type: "MOVIE",
    releaseDate: 2011,
  },
];

export const seriesList = [
  {
    id: "139518",
    malId: 49889,
    title: {
      romaji: "Tsuki ga Michibiku Isekai Douchuu 2nd Season",
      english: "TSUKIMICHI -Moonlit Fantasy- Season 2",
      native: "月が導く異世界道中 第二幕",
      userPreferred: "Tsuki ga Michibiku Isekai Douchuu 2nd Season",
    },
    status: "Ongoing",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx139518-GZWYKM8Kg1S2.png",
    imageHash: "hash",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/139518-OxLRGjPm9Tms.jpg",
    coverHash: "hash",
    popularity: 53522,
    totalEpisodes: 25,
    currentEpisode: 16,
    countryOfOrigin: "JP",
    description:
      "The second season of <i>Tsuki ga Michibiku Isekai Douchuu</i>.<br>\n<br>\nAfter Makoto Misumi defeats Mitsurugi and Sofia Bulga, humanity is saved from the attacking demon army—for the time being. The goddess is aware of Makoto’s growing power, and she sees him as less of a nuisance and more of a rival. Makoto continues his journey to further expand his community of outcasts and connect with more hyumans. But will he be strong enough to hold off the coming storm?<br>\n<br>\n(Source: Crunchyroll)",
    genres: ["Action", "Adventure", "Comedy", "Fantasy"],
    rating: 76,
    color: "#f17843",
    type: "TV",
    releaseDate: 2024,
  },
  {
    id: "169417",
    malId: 56690,
    title: {
      romaji: "Re:Monster",
      english: "Re:Monster",
      native: "Re:Monster",
      userPreferred: "Re:Monster",
    },
    status: "Ongoing",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx169417-izsfKg0hasRd.png",
    imageHash: "hash",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/169417-NaD0wR83gTbm.jpg",
    coverHash: "hash",
    popularity: 21482,
    totalEpisodes: 12,
    currentEpisode: 4,
    countryOfOrigin: "JP",
    description:
      "After meeting an untimely death, Tomokui Kanata is reincarnated as a lowly goblin, but he’s worked up a monstrous appetite. Thanks to his new ability that allows him to grow stronger the more he feeds, his feeble status quickly changes, and he rises to become the goblin leader. With a mix of his past memories, new body, and strong stomach, he’s taking a bite out of this new fantastical world! <br><br>\n(Source: Crunchyroll)<br><br>\n<i>The episodes were streamed several days ahead than the TV broadcast on U-NEXT, Anime Houdai, and Crunchyroll beginning on April 2nd, 2024 at 0:00 JST. The regular TV broadcast begins on April 5th, 2024.",
    genres: ["Action", "Adventure", "Fantasy"],
    rating: 68,
    color: null,
    type: "TV",
    releaseDate: 2024,
  },
  {
    id: "170130",
    malId: 56923,
    title: {
      romaji: "Lv2 Kara Cheat datta Moto Yuusha Kouho no Mattari Isekai Life",
      english: "Chillin' in Another World with Level 2 Super Cheat Powers",
      native: "Lv2からチートだった元勇者候補のまったり異世界ライフ",
      userPreferred:
        "Lv2 Kara Cheat datta Moto Yuusha Kouho no Mattari Isekai Life",
    },
    status: "Ongoing",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx170130-tvhn13WYQ2qM.jpg",
    imageHash: "hash",
    cover: null,
    coverHash: "hash",
    popularity: 22954,
    totalEpisodes: 12,
    currentEpisode: 3,
    countryOfOrigin: "JP",
    description:
      "The Magical Kingdom of Klyrode summons hundreds of heroes from other worlds every year to fight in their war against the Dark One and his army of powerful demons. Banaza is one of those heroes, summoned from the Royal Capital Paluma, but something’s not right—Banaza is only an average merchant. He has no magic, no fighting ability, and his stats are abysmal. Worse, a mishap leaves him unable to return home! Rejected as a hero and stranded in another world, abandoned to the far reaches of the kingdom by a cruel king who just wants him gone, Banaza’s fate looks pretty bleak. But what will happen once the failed hero candidate finds himself with super cheat powers once he hits level two?<br>\n<br>\n(Source: J-Novel Club)",
    genres: ["Adventure", "Fantasy", "Romance"],
    rating: 67,
    color: "#50a1e4",
    type: "TV",
    releaseDate: 2024,
  },
  {
    id: "166873",
    malId: 55888,
    title: {
      romaji: "Mushoku Tensei II: Isekai Ittara Honki Dasu Part 2",
      english: "Mushoku Tensei: Jobless Reincarnation Season 2 Part 2",
      native: "無職転生 Ⅱ ～異世界行ったら本気だす～ 第2クール",
      userPreferred: "Mushoku Tensei II: Isekai Ittara Honki Dasu Part 2",
    },
    status: "Ongoing",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx166873-JC56ExYSC2YB.jpg",
    imageHash: "hash",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/166873-GTi5imE5skM2.jpg",
    coverHash: "hash",
    popularity: 76936,
    totalEpisodes: 12,
    currentEpisode: 3,
    countryOfOrigin: "JP",
    description:
      "The second cour of <i>Mushoku Tensei II: Isekai Ittara Honki Dasu</i>.",
    genres: ["Adventure", "Drama", "Ecchi", "Fantasy"],
    rating: 81,
    color: "#e4ae78",
    type: "TV",
    releaseDate: 2024,
  },
  {
    id: "21",
    malId: 21,
    title: {
      romaji: "ONE PIECE",
      english: "ONE PIECE",
      native: "ONE PIECE",
      userPreferred: "ONE PIECE",
    },
    status: "Ongoing",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21-YCDoj1EkAxFn.jpg",
    imageHash: "hash",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21-wf37VakJmZqs.jpg",
    coverHash: "hash",
    popularity: 514602,
    totalEpisodes: 1101,
    currentEpisode: 1101,
    countryOfOrigin: "JP",
    description:
      "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.<br><br>\nEnter Monkey D. Luffy, a 17-year-old boy that defies your standard definition of a pirate. Rather than the popular persona of a wicked, hardened, toothless pirate who ransacks villages for fun, Luffy’s reason for being a pirate is one of pure wonder; the thought of an exciting adventure and meeting new and intriguing people, along with finding One Piece, are his reasons of becoming a pirate. Following in the footsteps of his childhood hero, Luffy and his crew travel across the Grand Line, experiencing crazy adventures, unveiling dark mysteries and battling strong enemies, all in order to reach One Piece.<br><br>\n<b>*This includes following special episodes:</b><br>\n- Chopperman to the Rescue! Protect the TV Station by the Shore! (Episode 336)<br>\n- The Strongest Tag-Team! Luffy and Toriko's Hard Struggle! (Episode 492)<br>\n- Team Formation! Save Chopper (Episode 542)<br>\n- History's Strongest Collaboration vs. Glutton of the Sea (Episode 590)<br>\n- 20th Anniversary! Special Romance Dawn (Episode 907)",
    genres: ["Action", "Adventure", "Comedy", "Drama", "Fantasy"],
    rating: 88,
    color: "#e49335",
    type: "TV",
    releaseDate: 1999,
  },
  {
    id: "155657",
    malId: 53356,
    title: {
      romaji: "Shuumatsu Train Doko e Iku?",
      english: "Train to the End of the World",
      native: "終末トレインどこへいく？",
      userPreferred: "Shuumatsu Train Doko e Iku?",
    },
    status: "Ongoing",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx155657-qZo0UNx6rEN0.jpg",
    imageHash: "hash",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/155657-lidTkLw8dgWc.jpg",
    coverHash: "hash",
    popularity: 14937,
    totalEpisodes: 12,
    currentEpisode: 4,
    countryOfOrigin: "JP",
    description:
      "In a seemingly ordinary rural town, something strange is happening to the residents. But Shizuru Chikura is more concerned for her missing friend. Determined to find her, Shizuru and three other girls board an abandoned train and travel to the outside world, unsure if they’ll make it back alive. As they venture toward the unknown, the question looms: What awaits them at the final stop?<br><br>\n\n(Source: Crunchyroll)",
    genres: ["Adventure", "Comedy", "Sci-Fi"],
    rating: 71,
    color: "#e4c95d",
    type: "TV",
    releaseDate: 2024,
  },
  {
    id: "153288",
    malId: 52588,
    title: {
      romaji: "Kaijuu 8-gou",
      english: "Kaiju No.8",
      native: "怪獣８号",
      userPreferred: "Kaijuu 8-gou",
    },
    status: "Ongoing",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx153288-tD2OmKy5CJab.jpg",
    imageHash: "hash",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/153288-JNsWuMPMAuJL.jpg",
    coverHash: "hash",
    popularity: 66995,
    totalEpisodes: 12,
    currentEpisode: 2,
    countryOfOrigin: "JP",
    description:
      "With the highest kaiju-emergence rates in the world, Japan is no stranger to attack by deadly monsters. Enter the Japan Defense Force, a military organization tasked with the neutralization of kaiju. Kafka Hibino, a kaiju-corpse cleanup man, has always dreamed of joining the force. But when he gets another shot at achieving his childhood dream, he undergoes an unexpected transformation. How can he fight kaiju now that he’s become one himself?!<br>\n<br>\n(Source: VIZ Media)",
    genres: ["Action", "Adventure", "Sci-Fi"],
    rating: 79,
    color: "#f1e4c9",
    type: "TV",
    releaseDate: 2024,
  },
  {
    id: "144176",
    malId: 50869,
    title: {
      romaji: "Kami wa Game ni Ueteiru.",
      english: "Gods' Games We Play",
      native: "神は遊戯に飢えている。",
      userPreferred: "Kami wa Game ni Ueteiru.",
    },
    status: "Ongoing",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx144176-xM8XAC3oUn5C.jpg",
    imageHash: "hash",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/144176-pI0FHoCJ5Rxc.jpg",
    coverHash: "hash",
    popularity: 19185,
    totalEpisodes: 13,
    currentEpisode: 4,
    countryOfOrigin: "JP",
    description:
      "In a world of idle gods, humans are forced into brain challenges with them. With three defeats, gods lose their right to challenge, while 10 victories spell human triumph. Fay, determined to achieve the impossible, enters the ultimate test of wits against the gods. Will he defy divinity or is he just another loss in the making?<br><br>\n(Source: Crunchyroll)",
    genres: ["Comedy", "Drama", "Ecchi", "Fantasy", "Romance"],
    rating: 59,
    color: "#5093e4",
    type: "TV",
    releaseDate: 2024,
  },
  {
    id: "156415",
    malId: 53516,
    title: {
      romaji:
        "Tensei Shitara Dai Nana Ouji Dattanode, Kimamani Majutsu wo Kiwamemasu",
      english:
        "I Was Reincarnated as the 7th Prince So I Can Take My Time Perfecting My Magical Ability",
      native: "転生したら第七王子だったので、気ままに魔術を極めます",
      userPreferred:
        "Tensei Shitara Dai Nana Ouji Dattanode, Kimamani Majutsu wo Kiwamemasu",
    },
    status: "Ongoing",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx156415-zwP9deA786S1.jpg",
    imageHash: "hash",
    cover: null,
    coverHash: "hash",
    popularity: 25992,
    totalEpisodes: 4,
    currentEpisode: 4,
    countryOfOrigin: "JP",
    description:
      "The qualities valued most in the study of magic are bloodline, aptitude, and effort. There was one sorcerer who, despite his deep love for magic, was born a commoner and thus lacked the bloodline and aptitude for it. As he died an unnatural death, he wished he had studied magic more while he had the chance. Then, he was reincarnated as Lloyd, the seventh prince of the Kingdom of Saloum and one blessed with a strong magical bloodline. Reborn with all his memories intact, along with the perfect bloodline and immense talent, he was determined to enjoy his new life, using his extraordinary magical abilities to master the study of magic that was beyond his reach in his previous life!\n<br>\n<br>\n(Source: Crunchyroll)",
    genres: ["Adventure", "Fantasy", "Slice of Life"],
    rating: 68,
    color: "#50e493",
    type: "TV",
    releaseDate: 2024,
  },
  {
    id: "156822",
    malId: 53580,
    title: {
      romaji: "Tensei Shitara Slime Datta Ken 3rd Season",
      english: "That Time I Got Reincarnated as a Slime Season 3",
      native: "転生したらスライムだった件 第3期",
      userPreferred: "Tensei Shitara Slime Datta Ken 3rd Season",
    },
    status: "Ongoing",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx156822-Jzo2ITWgm4kM.jpg",
    imageHash: "hash",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/156822-y0wPQIl3AHDA.jpg",
    coverHash: "hash",
    popularity: 72096,
    totalEpisodes: 24,
    currentEpisode: 3,
    countryOfOrigin: "JP",
    description:
      "The third season of <i>Tensei Shitara Slime Datta Ken</i>.<br><br>\nRimuru has officially become a Demon Lord after defeating Clayman. Following Walpurgis, the Demon Lords' banquet, Rimuru's domain is expanded to include the entire Great Forest of Jura. Anticipating a flood of representatives from all races showing up to pay their respects, Rimuru decides to throw a festival to commemorate the opening of Tempest, using it as an opportunity to gain new citizens and present Demon Lord Rimuru to the world. Meanwhile, in the Holy Empire of Lubelius, home base of the monster-hating cult of Luminism, Holy Knight Captain Hinata receives a message from Rimuru. But the message is actually a fabricated declaration of war sent by some unknown party. Upon learning that Hinata is heading for Tempest, Rimuru makes a decision... Thus begins a new challenge for Rimuru, striving to distinguish friend from foe in his pursuit of the ideal nation where humans and monsters can prosper together. <br><br>\n(Source: Crunchyroll)\n",
    genres: ["Action", "Adventure", "Comedy", "Fantasy"],
    rating: 82,
    color: "#e4785d",
    type: "TV",
    releaseDate: 2024,
  },
  {
    id: "164702",
    malId: 55265,
    title: {
      romaji: "Tensei Kizoku, Kantei Skill de Nariagaru",
      english:
        "As a Reincarnated Aristocrat, I'll Use My Appraisal Skill to Rise in the World",
      native: "転生貴族、鑑定スキルで成り上がる",
      userPreferred: "Tensei Kizoku, Kantei Skill de Nariagaru",
    },
    status: "Ongoing",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx164702-FjpM96MPdzVm.jpg",
    imageHash: "hash",
    cover: null,
    coverHash: "hash",
    popularity: 19340,
    totalEpisodes: 12,
    currentEpisode: 3,
    countryOfOrigin: "JP",
    description:
      "Our protagonist, Ars Louvent, was reincarnated in another world as the young son of a minor noble who owns a small domain. Ars was not particularly strong or intelligent, but he was born with the Appraisal Skill that's able to see others' abilities and statuses. He uses his skill to find the best hidden talents in the world to make their small, weak domain into the best. An isekai tale about unification is about to start, featuring the kind-hearted Ars and the unique talents he manages to find!<br><br>\n(Source: Crunchyroll)",
    genres: ["Adventure", "Fantasy"],
    rating: 67,
    color: "#f1d6bb",
    type: "TV",
    releaseDate: 2024,
  },
  {
    id: "158417",
    malId: 53770,
    title: {
      romaji: "Sentai Daishikkaku",
      english: "GO! GO! Loser Ranger!",
      native: "戦隊大失格",
      userPreferred: "Sentai Daishikkaku",
    },
    status: "Ongoing",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx158417-2jUaUdiGBZQ8.jpg",
    imageHash: "hash",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/158417-9oit16KQM4l7.jpg",
    coverHash: "hash",
    popularity: 26990,
    totalEpisodes: 12,
    currentEpisode: 3,
    countryOfOrigin: "JP",
    description:
      "When the Monster Army invaded Earth thirteen years ago, the Divine Dragon Rangers rose up to stop them! With the war raging on, these great heroes are mankind’s last hope!<br>\n<br>\n<i>...or are they?</i><br>\n<br>\nIn truth, the invaders were subjugated within a year, forced to continue to crank out a monster a week for the Rangers to crush in front of their adoring fans! But one monster has had enough. Something has to change! He’ll rebel against the might of the Dragon Rangers and destroy them all...from the inside!<br>\n<br>\n(Source: Kodansha USA)",
    genres: ["Action", "Comedy", "Drama", "Sci-Fi"],
    rating: 72,
    color: "#f1bb50",
    type: "TV",
    releaseDate: 2024,
  },
  {
    id: "163270",
    malId: 54900,
    title: {
      romaji: "WIND BREAKER",
      english: "WIND BREAKER",
      native: "WIND BREAKER",
      userPreferred: "WIND BREAKER",
    },
    status: "Ongoing",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx163270-oxwgbe43Cpog.jpg",
    imageHash: "hash",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/163270-QshLCttd04s6.jpg",
    coverHash: "hash",
    popularity: 46243,
    totalEpisodes: 13,
    currentEpisode: 3,
    countryOfOrigin: "JP",
    description:
      "Where the average scores are the lowest, but the fights are the strongest. Furin High School is renowned as a super school of delinquents. Haruka Sakura, a first-year student, came from outside the city to fight to the top. However, Furin High School has become a group that protects the town called the “Chime of the Wind Breaker” – Bofurin. The heroic legend of high school delinquent Sakura begins here!\n<br><br>\n(Source: Crunchyroll)",
    genres: ["Action", "Comedy", "Drama"],
    rating: 77,
    color: "#288643",
    type: "TV",
    releaseDate: 2024,
  },
  {
    id: "154587",
    malId: 52991,
    title: {
      romaji: "Sousou no Frieren",
      english: "Frieren: Beyond Journey’s End",
      native: "葬送のフリーレン",
      userPreferred: "Sousou no Frieren",
    },
    status: "Completed",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-gHSraOSa0nBG.jpg",
    imageHash: "hash",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/154587-ivXNJ23SM1xB.jpg",
    coverHash: "hash",
    popularity: 172790,
    totalEpisodes: 28,
    currentEpisode: null,
    countryOfOrigin: "JP",
    description:
      "The adventure is over but life goes on for an elf mage just beginning to learn what living is all about. Elf mage Frieren and her courageous fellow adventurers have defeated the Demon King and brought peace to the land. But Frieren will long outlive the rest of her former party. How will she come to understand what life means to the people around her? Decades after their victory, the funeral of one her friends confronts Frieren with her own near immortality. Frieren sets out to fulfill the last wishes of her comrades and finds herself beginning a new adventure…\n<br><br>\n(Source: Crunchyroll)",
    genres: ["Adventure", "Drama", "Fantasy"],
    rating: 92,
    color: "#aee493",
    type: "TV",
    releaseDate: 2023,
  },
  {
    id: "153518",
    malId: 52701,
    title: {
      romaji: "Dungeon Meshi",
      english: "Delicious in Dungeon",
      native: "ダンジョン飯",
      userPreferred: "Dungeon Meshi",
    },
    status: "Ongoing",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx153518-LEK6pAXtI03D.jpg",
    imageHash: "hash",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/153518-7uRvV7SLqmHV.jpg",
    coverHash: "hash",
    popularity: 74309,
    totalEpisodes: 24,
    currentEpisode: 16,
    countryOfOrigin: "JP",
    description:
      "When young adventurer Laios and his company are attacked and soundly thrashed by a dragon deep in a dungeon, the party loses all its money and provisions...and a member! They're eager to go back and save her, but there is just one problem: If they set out with no food or coin to speak of, they're sure to starve on the way! But Laios comes up with a brilliant idea: \"Let's eat the monsters!\" Slimes, basilisks, and even dragons...none are safe from the appetites of these dungeon-crawling gourmands! <br>\n<br>\n(Source: Yen Press)\n<br><br>\n<i>Note: A world premiere screening of Episode 1 was shown in the Studio TRIGGER panel at Anime Expo on July 1, 2023.</i>",
    genres: ["Adventure", "Comedy", "Fantasy"],
    rating: 80,
    color: "#f18650",
    type: "TV",
    releaseDate: 2024,
  },
  {
    id: "168138",
    malId: 56230,
    title: {
      romaji: "Jii-san Baa-san Wakagaeru",
      english: "Grandpa and Grandma Turn Young Again",
      native: "じいさんばあさん若返る",
      userPreferred: "Jii-san Baa-san Wakagaeru",
    },
    status: "Ongoing",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx168138-jgMSP1rDkJhs.jpg",
    imageHash: "hash",
    cover: null,
    coverHash: "hash",
    popularity: 21784,
    totalEpisodes: 11,
    currentEpisode: 3,
    countryOfOrigin: "JP",
    description:
      "The story of <i>Jii-san Baa-san Wakagaeru</i> follows Shouzou and Ine, an elderly couple who are living a quiet life in a farming village in Aomori Prefecture. After eating a mysterious apple that they discover on their apple farm, Shozo and Ine spontaneously regain their youth, but even after being reinvigorated they continue to live life at a grandparent-ly pace.<br>\n<br>\n(Source: Crunchyroll News, edited)",
    genres: ["Comedy", "Fantasy", "Romance"],
    rating: 66,
    color: "#e46b35",
    type: "TV",
    releaseDate: 2024,
  },
  {
    id: "151639",
    malId: 56285,
    title: {
      romaji: "Ninja Kamui",
      english: "Ninja Kamui",
      native: "Ninja Kamui",
      userPreferred: "Ninja Kamui",
    },
    status: "Ongoing",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx151639-7KqJ7BgaM9Mx.png",
    imageHash: "hash",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/151639-6tcLh08KSsmJ.jpg",
    coverHash: "hash",
    popularity: 43904,
    totalEpisodes: 12,
    currentEpisode: 11,
    countryOfOrigin: "JP",
    description:
      "Higan is a Nukenin - a former ninja who escaped his clan and is hiding from his violent past in rural America with his family. One night, he is ambushed by a team of assassins from his former organization who exact a bloody retribution on Joe and his family for betraying their ancient code. Rising from his seeming “death,” Joe will re-emerge as his former self - Ninja Kamui - to avenge his family and friends. Kamui is a 21st century ninja, a shadowy anachronism who pits his ancient skills against high-tech weaponry with brutal finesse. He must face off against trained assassins, combat cyborgs, and rival ninjas to bring down the very clan that made him.\n<br><br>\n(Source: Warner Bros. Discovery)",
    genres: ["Action", "Adventure", "Drama", "Sci-Fi"],
    rating: 75,
    color: "#e4351a",
    type: "TV",
    releaseDate: 2024,
  },
  {
    id: "163078",
    malId: 54839,
    title: {
      romaji: "Yoru no Kurage wa Oyogenai",
      english: "Jellyfish Can’t Swim in the Night",
      native: "夜のクラゲは泳げない",
      userPreferred: "Yoru no Kurage wa Oyogenai",
    },
    status: "Ongoing",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx163078-kIhCmQARcoOD.jpg",
    imageHash: "hash",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/163078-T9ckx5LFHfbL.jpg",
    coverHash: "hash",
    popularity: 22749,
    totalEpisodes: 12,
    currentEpisode: 3,
    countryOfOrigin: "JP",
    description:
      '<i>"I want to find what I enjoy."</i>\n<br><br>\nShibuya is a city full of identity. It is here on Shibuya’s late night streets that illustrator Mahiru Kozuki, former idol Kano Yamanouchi, Vtuber Kiui Watase\u202fand composer Mei Kim Anouk Takanashi — four young women who are slightly outside the world — join together and form an anonymous artist group called JELEE. “I” also want to shine like someone else. If it\'s not me but “we” then we might be able to shine.<br>\n<br>\n(Source: Crunchyroll News, HIDIVE, edited)',
    genres: ["Drama"],
    rating: 78,
    color: "#e4c95d",
    type: "TV",
    releaseDate: 2024,
  },
  {
    id: "145728",
    malId: 51122,
    title: {
      romaji: "Ookami to Koushinryou: MERCHANT MEETS THE WISE WOLF",
      english: "Spice and Wolf: MERCHANT MEETS THE WISE WOLF",
      native: "狼と香辛料 MERCHANT MEETS THE WISE WOLF",
      userPreferred: "Ookami to Koushinryou: MERCHANT MEETS THE WISE WOLF",
    },
    status: "Ongoing",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx145728-YUKXjN2E81Pq.jpg",
    imageHash: "hash",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/145728-v6NGBJOQs8Kh.jpg",
    coverHash: "hash",
    popularity: 45483,
    totalEpisodes: 25,
    currentEpisode: 4,
    countryOfOrigin: "JP",
    description:
      "Lawrence is a traveling merchant selling various goods from a horse-drawn cart. One day, he arrives at a village and meets a beautiful girl with the ears and tail of an animal! Her name is Holo the Wisewolf and she brings bountiful harvests. She wishes to return to her homeland, and Lawrence offers to take her. Now, the once-lonely merchant and the once-lonely wisewolf begin their journey north.<br>\n<br>\n(Source: Crunchyroll)",
    genres: ["Adventure", "Fantasy", "Romance"],
    rating: 79,
    color: "#5093f1",
    type: "TV",
    releaseDate: 2024,
  },
  {
    id: "169698",
    malId: 56768,
    title: {
      romaji: "Tadaima, Okaeri",
      english: "Tadaima, Okaeri",
      native: "ただいま、おかえり",
      userPreferred: "Tadaima, Okaeri",
    },
    status: "Ongoing",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx169698-pmIhuxlGufON.jpg",
    imageHash: "hash",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/169698-bMhXndCIlAOu.jpg",
    coverHash: "hash",
    popularity: 6498,
    totalEpisodes: 12,
    currentEpisode: 3,
    countryOfOrigin: "JP",
    description:
      "Masaki Fujiyoshi is a stay-at-home spouse and parent. He has fought long and hard with feelings of being a burden to his loving husband, Hiromu, due to his status as an omega—and the difficulty they faced to achieve this domesticity. When their son, Hikari, was born, the family moved to an area better suited for raising children.<br>\n<br>\nDespite their newfound domestic bliss, the family's ties to their past are in tatters. There are people they left behind to pursue the creation of their happy family, and when they begin to return, Masaki and Hiromu aren't quite sure they have good intentions.\n<br><br>\n(Source: Crunchyroll)",
    genres: ["Drama", "Romance", "Slice of Life"],
    rating: 66,
    color: "#e4e4ae",
    type: "TV",
    releaseDate: 2024,
  },
];

export const recentEpisode = {
  id: "160181",
  malId: "54233",
  title: {
    romaji: "Sasayaku You ni Koi wo Utau",
    english: "Whisper Me a Love Song",
    native: "ささやくように恋を唄う",
  },
  image:
    "https://artworks.thetvdb.com/banners/v4/series/429626/posters/6414799b9b5d0.jpg",
  imageHash: "hash",
  episodeId: "/sasayaku-you-ni-koi-wo-utau-episode-2",
  episodeTitle: "Episode 2",
  episodeNumber: 2,
  type: "TV",
};

export const searchAnime = {
  id: "146210",
  malId: 51213,
  title: {
    romaji:
      "Kinsou no Vermeil: Gakeppuchi Majutsushi wa Saikyou no Yakusai to Mahou Sekai wo Tsuki Susumu",
    english: "Vermeil in Gold",
    native:
      "金装のヴェルメイユ～崖っぷち魔術師は最強の厄災と魔法世界を突き進む～",
    userPreferred:
      "Kinsou no Vermeil: Gakeppuchi Majutsushi wa Saikyou no Yakusai to Mahou Sekai wo Tsuki Susumu",
  },
  status: "Completed",
  image:
    "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx146210-ZnIithxFLLHn.jpg",
  imageHash: "hash",
  cover:
    "https://s4.anilist.co/file/anilistcdn/media/anime/banner/146210-JtUyWvjL0PMz.jpg",
  coverHash: "hash",
  popularity: 65983,
  totalEpisodes: 12,
  currentEpisode: null,
  countryOfOrigin: "JP",
  description:
    "Meet Alto, a hapless student at Royal Ortigia Magic Academy whose academic performance leaves much to be desired. Rather than take a more sensible approach to salvaging his grades in time for graduation, Alto decides to summon a bit of otherworldly assistance. Only after does he learn he’s bound the legendary she-devil Vermeil into service as his familiar! But while Vermeil is a powerful ally sure to turn his grades around, her magic can only be replenished with a kiss, and that makes everything go to hell with Alto’s jealous childhood friend, Lilia.<br>\n<br>\n(Source: Sentai Filmworks)",
  genres: ["Ecchi", "Fantasy", "Romance"],
  rating: 67,
  color: "#aebbf1",
  type: "TV",
  releaseDate: 2022,
};

export const upcomingList = [
  {
    id: "166240",
    malId: 55701,
    title: {
      romaji: "Kimetsu no Yaiba: Hashira Geiko-hen",
      english: "Demon Slayer: Kimetsu no Yaiba Hashira Training Arc",
      native: "鬼滅の刃 柱稽古編",
      userPreferred: "Kimetsu no Yaiba: Hashira Geiko-hen",
    },
    status: "Not yet aired",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx166240-PBV7zukIHW7V.png",
    imageHash: "hash",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/166240-YdxoEhrfwNk0.jpg",
    coverHash: "hash",
    popularity: 71146,
    totalEpisodes: 0,
    currentEpisode: 0,
    countryOfOrigin: "JP",
    description:
      "Adaptation of the Hashira Training Arc.<br>\n<br>\nThe Hashira, the Demon Slayer Corps' highest ranking swordsmen and members. The Hashira Training has begun in order to face the forthcoming battle against Muzan Kibutsuji. Each with their own thoughts and hopes held in their hearts, a new story for Tanjiro and the Hashira begins.<br><br>\n(Source: Aniplex USA)<br><br>\n<i>Notes:<br>\n• The first episode has a runtime of ~1 hour, and received an early premiere in cinemas as part of a special screening alongside the final episode of Kimetsu no Yaiba: Katanakaji no Sato-hen. </i>",
    genres: ["Action", "Adventure", "Drama", "Fantasy", "Supernatural"],
    rating: null,
    color: "#e4d6ae",
    type: "TV",
    releaseDate: 2024,
  },
  {
    id: "163139",
    malId: 54789,
    title: {
      romaji: "Boku no Hero Academia 7",
      english: "My Hero Academia Season 7",
      native: "僕のヒーローアカデミア 7",
      userPreferred: "Boku no Hero Academia 7",
    },
    status: "Not yet aired",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx163139-JchZhUFlNTWU.jpg",
    imageHash: "hash",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/163139-I6UpRghBPVor.jpg",
    coverHash: "hash",
    popularity: 53986,
    totalEpisodes: 0,
    currentEpisode: 0,
    countryOfOrigin: "JP",
    description:
      "The seventh season of <i>Boku no Hero Academia</i>.<br>\n<br>\n<i>Note: The season was preceded by a 4-episode special titled 'Boku no Hero Academia: Memories' recapping events from the 6th season along with adding a few minutes of new material each episode.</i>",
    genres: ["Action", "Adventure"],
    rating: null,
    color: "#2893e4",
    type: "TV",
    releaseDate: 2024,
  },
  {
    id: "166531",
    malId: 55791,
    title: {
      romaji: "[Oshi no Ko] 2nd Season",
      english: "Oshi no Ko Season 2",
      native: "【推しの子】第2期",
      userPreferred: "[Oshi no Ko] 2nd Season",
    },
    status: "Not yet aired",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx166531-f2DILolRO12h.png",
    imageHash: "hash",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/166531-vUu7iDwUkC67.jpg",
    coverHash: "hash",
    popularity: 48296,
    totalEpisodes: null,
    currentEpisode: null,
    countryOfOrigin: "JP",
    description: "The second season of <i>[Oshi no Ko]</i>.",
    genres: ["Drama", "Mystery", "Psychological", "Supernatural"],
    rating: null,
    color: "#d6ae78",
    type: "TV",
    releaseDate: 2024,
  },
  {
    id: "153800",
    malId: 52807,
    title: {
      romaji: "One Punch Man 3",
      english: null,
      native: "ワンパンマン３",
      userPreferred: "One Punch Man 3",
    },
    status: "Not yet aired",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx153800-DoZMzBojzwHz.png",
    imageHash: "hash",
    cover: null,
    coverHash: "hash",
    popularity: 43566,
    totalEpisodes: null,
    currentEpisode: null,
    countryOfOrigin: "JP",
    description: "The third season of <i>One Punch Man</i>.",
    genres: ["Action", "Comedy", "Sci-Fi", "Supernatural"],
    rating: null,
    color: "#F4C950",
    type: null,
    releaseDate: null,
  },
  {
    id: "153406",
    malId: 52635,
    title: {
      romaji: "Kami no Tou: Tower of God 2nd SEASON",
      english: "Tower of God Season 2",
      native: "神之塔 -Tower of God- 2nd SEASON",
      userPreferred: "Kami no Tou: Tower of God 2nd SEASON",
    },
    status: "Not yet aired",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx153406-imNYLPKPDDzY.png",
    imageHash: "hash",
    cover: null,
    coverHash: "hash",
    popularity: 34456,
    totalEpisodes: null,
    currentEpisode: null,
    countryOfOrigin: "JP",
    description: "The second season of <i>Kami no Tou: Tower of God</i>.",
    genres: ["Action", "Adventure", "Drama", "Fantasy", "Mystery"],
    rating: null,
    color: "#5dbbf1",
    type: "TV",
    releaseDate: 2024,
  },
  {
    id: "163134",
    malId: 54857,
    title: {
      romaji: "Re:Zero kara Hajimeru Isekai Seikatsu 3rd Season",
      english: null,
      native: "Re:ゼロから始める異世界生活 3rd season",
      userPreferred: "Re:Zero kara Hajimeru Isekai Seikatsu 3rd Season",
    },
    status: "Not yet aired",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx163134-BSMUKU4zb31e.jpg",
    imageHash: "hash",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/163134-3aAuQr8C4EXK.jpg",
    coverHash: "hash",
    popularity: 32270,
    totalEpisodes: null,
    currentEpisode: null,
    countryOfOrigin: "JP",
    description:
      "The third season of <i>Re:Zero kara Hajimeru Isekai Seikatsu</i>.",
    genres: [
      "Action",
      "Adventure",
      "Drama",
      "Fantasy",
      "Psychological",
      "Romance",
      "Thriller",
    ],
    rating: null,
    color: "#861ad6",
    type: "TV",
    releaseDate: 2024,
  },
  {
    id: "111314",
    malId: 40333,
    title: {
      romaji: "Uzumaki",
      english: null,
      native: "うずまき",
      userPreferred: "Uzumaki",
    },
    status: "Not yet aired",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b111314-vZDqyfXNfsPY.png",
    imageHash: "hash",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/111314-OWfOEbP2ZsSJ.jpg",
    coverHash: "hash",
    popularity: 30850,
    totalEpisodes: 4,
    currentEpisode: null,
    countryOfOrigin: "JP",
    description:
      "Four episode anime adaptation of the Junji Ito manga. \n<br><br>\nKurozu-cho, a small fogbound town on the coast of Japan, is cursed. According to Shuichi Saito, the withdrawn boyfriend of teenager Kirie Goshima, their town is haunted not by a person or being but by a pattern: uzumaki, the spiral, the hypnotic secret shape of the world. It manifests itself in small ways: seashells, ferns, whirlpools in water, whirlwinds in air. And in large ways: the spiral marks on people's bodies, the insane obsessions of Shuichi's father, the voice from the cochlea in your inner ear. As the madness spreads, the inhabitants of Kurouzu-cho are pulled ever deeper, as if into a whirlpool from which there is no return...\n<br><br>\n(Source: Viz Media)",
    genres: ["Drama", "Horror", "Mystery", "Supernatural"],
    rating: null,
    color: null,
    type: null,
    releaseDate: null,
  },
  {
    id: "135865",
    malId: 49233,
    title: {
      romaji: "Youjo Senki II",
      english: null,
      native: "幼女戦記Ⅱ",
      userPreferred: "Youjo Senki II",
    },
    status: "Not yet aired",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx135865-mZaANFqPeiLc.png",
    imageHash: "hash",
    cover: null,
    coverHash: "hash",
    popularity: 30329,
    totalEpisodes: null,
    currentEpisode: null,
    countryOfOrigin: "JP",
    description: "The second season of <i>Youjo Senki</i>.",
    genres: ["Action", "Fantasy"],
    rating: null,
    color: "#e4d6a1",
    type: "TV",
    releaseDate: null,
  },
  {
    id: "163146",
    malId: 54865,
    title: {
      romaji: "Blue Lock 2nd Season",
      english: null,
      native: "ブルーロック第2期",
      userPreferred: "Blue Lock 2nd Season",
    },
    status: "Not yet aired",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx163146-AL4DrcV2Zp8H.jpg",
    imageHash: "hash",
    cover: null,
    coverHash: "hash",
    popularity: 29147,
    totalEpisodes: null,
    currentEpisode: null,
    countryOfOrigin: "JP",
    description: "The second season of <i> Blue Lock</i>.",
    genres: ["Action", "Drama", "Sports"],
    rating: null,
    color: "#aef143",
    type: "TV",
    releaseDate: null,
  },
  {
    id: "172463",
    malId: 57658,
    title: {
      romaji: "Jujutsu Kaisen: Shimetsu Kaiyuu",
      english: null,
      native: "呪術廻戦 死滅回游",
      userPreferred: "Jujutsu Kaisen: Shimetsu Kaiyuu",
    },
    status: "Not yet aired",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx172463-MbyLGjnXcpZu.png",
    imageHash: "hash",
    cover: null,
    coverHash: "hash",
    popularity: 26824,
    totalEpisodes: null,
    currentEpisode: null,
    countryOfOrigin: "JP",
    description:
      "The third season of <i>Jujutsu Kaisen</i>, adapting the Culling Game Arc.",
    genres: ["Action", "Drama", "Supernatural"],
    rating: null,
    color: null,
    type: "TV",
    releaseDate: null,
  },
  {
    id: "133007",
    malId: 48820,
    title: {
      romaji: "Mahou Shoujo Madoka☆Magica: Walpurgis no Kaiten",
      english: "Puella Magi Madoka Magica the Movie -Walpurgisnacht: Rising-",
      native: "劇場版 魔法少女まどか☆マギカ〈ワルプルギスの廻天〉",
      userPreferred: "Mahou Shoujo Madoka☆Magica: Walpurgis no Kaiten",
    },
    status: "Not yet aired",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx133007-uhswI9xjfURV.jpg",
    imageHash: "hash",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/133007-lZUipDJMmTSh.jpg",
    coverHash: "hash",
    popularity: 26002,
    totalEpisodes: 1,
    currentEpisode: null,
    countryOfOrigin: "JP",
    description:
      "The 10th anniversary online event for the <i>Mahou Shoujo Madoka☆Magica</i> anime revealed on Sunday that the franchise is getting a new anime film titled <i>Mahou Shoujo Madoka☆Magica: Walpurgis no Kaiten</i>. The film will be an official sequel to the <i>Mahou Shoujo Madoka☆Magica: Hangyaku no Monogatari</i> film that opened in October 2013. The tagline on the new film's visual reads, \"Now, let's continue the story.\"<br><br>\n(Source: Anime News Network, edited)",
    genres: ["Mahou Shoujo"],
    rating: null,
    color: "#f19350",
    type: "MOVIE",
    releaseDate: 2024,
  },
  {
    id: "154768",
    malId: 53065,
    title: {
      romaji: "Sono Bisque Doll wa Koi wo Suru (Zoku-hen)",
      english: null,
      native: "その着せ替え人形は恋をする (続編)",
      userPreferred: "Sono Bisque Doll wa Koi wo Suru (Zoku-hen)",
    },
    status: "Not yet aired",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154768-ter5paEcOztK.jpg",
    imageHash: "hash",
    cover: null,
    coverHash: "hash",
    popularity: 25804,
    totalEpisodes: null,
    currentEpisode: null,
    countryOfOrigin: "JP",
    description: "Sequel to <i>Sono Bisque Doll wa Koi wo Suru</i>.",
    genres: ["Comedy", "Ecchi", "Romance", "Slice of Life"],
    rating: null,
    color: "#e45dae",
    type: null,
    releaseDate: null,
  },
  {
    id: "176496",
    malId: 58567,
    title: {
      romaji: "Ore dake Level Up na Ken: Season 2 - Arise from the Shadow",
      english: "Solo Leveling Season 2 -Arise from the Shadow-",
      native: "俺だけレベルアップな件 Season 2 -Arise from the Shadow-",
      userPreferred:
        "Ore dake Level Up na Ken: Season 2 - Arise from the Shadow",
    },
    status: "Not yet aired",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx176496-r6oXxEqdZL0n.jpg",
    imageHash: "hash",
    cover: null,
    coverHash: "hash",
    popularity: 24921,
    totalEpisodes: null,
    currentEpisode: null,
    countryOfOrigin: "JP",
    description: "The second season of <i>Solo Leveling</i>.",
    genres: ["Action", "Adventure", "Fantasy"],
    rating: null,
    color: "#a1bbe4",
    type: "TV",
    releaseDate: null,
  },
  {
    id: "166613",
    malId: 55825,
    title: {
      romaji: "Jigokuraku 2nd Season",
      english: null,
      native: "地獄楽 第二期",
      userPreferred: "Jigokuraku 2nd Season",
    },
    status: "Not yet aired",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx166613-YzuAjRNJKo1K.png",
    imageHash: "hash",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/166613-drS86exJlIjG.jpg",
    coverHash: "hash",
    popularity: 24626,
    totalEpisodes: null,
    currentEpisode: null,
    countryOfOrigin: "JP",
    description: "The second season of <i>Jigokuraku</i>.",
    genres: ["Action", "Adventure", "Mystery", "Supernatural"],
    rating: null,
    color: "#e4a11a",
    type: "TV",
    releaseDate: null,
  },
  {
    id: "162804",
    malId: 54744,
    title: {
      romaji: "Tokidoki Bosotto Russiago de Dereru Tonari no Alya-san",
      english: null,
      native: "時々ボソッとロシア語でデレる隣のアーリャさん",
      userPreferred: "Tokidoki Bosotto Russiago de Dereru Tonari no Alya-san",
    },
    status: "Not yet aired",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx162804-TBeptcAfvqTd.jpg",
    imageHash: "hash",
    cover: null,
    coverHash: "hash",
    popularity: 24495,
    totalEpisodes: null,
    currentEpisode: null,
    countryOfOrigin: "JP",
    description:
      "Alisa Mikhailovna Kujou is Seiren Private Academy’s “solitary princess.” She’s a half-Russian beauty with silver hair, at the top of her class, student council accountant, and…completely unapproachable. For some reason, she’s also taken on the responsibility of reprimanding the slacker who sits next to her in class. Masachika Kuze is constantly frustrating her by falling asleep, forgetting his textbooks, and just being an overall unexemplary student. Or at least, that’s how it looks from the outside. She may put on a tough act, but she doesn’t mind Masachika as much as others would think. She even lets him call her by her nickname, Alya. Anyone hearing the comments she mutters in Russian under her breath might know how she really feels, but since none of her classmates understand the language, she’s free to say whatever she likes! Except…there is one person who knows what she’s saying. Masachika eavesdrops on her embarrassing revelations, pretending to be clueless, all the while wondering what her flirtatious comments actually mean!<br>\n<br>\n(Source: Yen Press)",
    genres: ["Comedy", "Romance", "Slice of Life"],
    rating: null,
    color: "#d6ae78",
    type: "TV",
    releaseDate: 2024,
  },
  {
    id: "133845",
    malId: 48896,
    title: {
      romaji: "Overlord: Sei Oukoku-hen",
      english: "OVERLORD: The Sacred Kingdom",
      native: "劇場版 オーバーロード 聖王国編",
      userPreferred: "Overlord: Sei Oukoku-hen",
    },
    status: "Not yet aired",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx133845-dcRFG8lscdHJ.png",
    imageHash: "hash",
    cover: null,
    coverHash: "hash",
    popularity: 24215,
    totalEpisodes: 1,
    currentEpisode: null,
    countryOfOrigin: "JP",
    description:
      'Theatrical follow-up to <i>Overlord IV</i>. The film will cover the "Holy Kingdom" arc.<br><br>\nAfter twelve years of playing his favorite MMORPG game, Momonga logs in for the last time only to find himself transported into its world playing it indefinitely. Throughout his adventures, his avatar ascends to the title of Sorcerer King Ains Ooal Gown.\n<br><br>\nOnce prosperous but now on the brink of ruin, The Sacred Kingdom enjoyed years of peace after construction of an enormous wall protecting them from neighboring invasions. But, one day this comes to an end when the Demon Emperor Jaldabaoth arrives with an army of villainous demi-humans. \n<br><br>\nFearing invasion of their own lands, the neighboring territory of the Slane Theocracy is forced to beg their enemies at the Sorcerer Kingdom for help. Heeding the call, Momonga, now known as the Sorcerer King Ains Ooal Gown, rallies the Sorcerer Kingdom and its undead army to join the fight alongside the Sacred Kingdom and the Slane Theocracy in hopes to defeat the Demon Emperor. <br><br>\n(Source: Crunchyroll, edited)',
    genres: ["Action", "Adventure", "Fantasy"],
    rating: null,
    color: "#e44335",
    type: "MOVIE",
    releaseDate: 2024,
  },
  {
    id: "171018",
    malId: 57334,
    title: {
      romaji: "Dandadan",
      english: "DAN DA DAN",
      native: "ダンダダン",
      userPreferred: "Dandadan",
    },
    status: "Not yet aired",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx171018-wC62pwYKfK8j.jpg",
    imageHash: "hash",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/171018-SpwPNAduszXl.jpg",
    coverHash: "hash",
    popularity: 22914,
    totalEpisodes: null,
    currentEpisode: null,
    countryOfOrigin: "JP",
    description:
      "Momo Ayase strikes up an unusual friendship with her school’s UFO fanatic, whom she nicknames “Okarun” because he has a name that is not to be said aloud. While Momo believes in spirits, she thinks aliens are nothing but nonsense. Her new friend, meanwhile, thinks the exact opposite. To settle matters, the two set out to prove each other wrong—Momo to a UFO hotspot and Okarun to a haunted tunnel! What unfolds next is a beautiful story of young love…and oddly horny aliens and spirits?\n<BR><BR>\n(Source: VIZ Media) ",
    genres: ["Action", "Comedy", "Drama", "Romance", "Sci-Fi", "Supernatural"],
    rating: null,
    color: "#f1bb0d",
    type: "TV",
    releaseDate: 2024,
  },
  {
    id: "141182",
    malId: 50306,
    title: {
      romaji: "Seirei Gensouki 2nd Season",
      english: null,
      native: "精霊幻想記 第2期",
      userPreferred: "Seirei Gensouki 2nd Season",
    },
    status: "Not yet aired",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx141182-uofQnuzG4n1g.jpg",
    imageHash: "hash",
    cover: null,
    coverHash: "hash",
    popularity: 21445,
    totalEpisodes: null,
    currentEpisode: null,
    countryOfOrigin: "JP",
    description: "The second season of <i>Seirei Gensouki</i>.",
    genres: ["Action", "Drama", "Fantasy", "Romance"],
    rating: null,
    color: "#50aee4",
    type: "TV",
    releaseDate: null,
  },
  {
    id: "176301",
    malId: 58514,
    title: {
      romaji: "Kusuriya no Hitorigoto 2nd Season",
      english: null,
      native: "薬屋のひとりごと 第2期",
      userPreferred: "Kusuriya no Hitorigoto 2nd Season",
    },
    status: "Not yet aired",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx176301-FvmCBWtLT9mu.jpg",
    imageHash: "hash",
    cover: null,
    coverHash: "hash",
    popularity: 20189,
    totalEpisodes: null,
    currentEpisode: null,
    countryOfOrigin: "JP",
    description: "The second season of <i>Kusuriya no Hitorigoto<i>.",
    genres: ["Drama", "Mystery"],
    rating: null,
    color: "#e4c95d",
    type: "TV",
    releaseDate: null,
  },
  {
    id: "166710",
    malId: 55848,
    title: {
      romaji: "Isekai Suicide Squad",
      english: "Suicide Squad ISEKAI",
      native: "異世界スーサイド・スクワッド",
      userPreferred: "Isekai Suicide Squad",
    },
    status: "Not yet aired",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx166710-VJRdCPDv2wOI.jpg",
    imageHash: "hash",
    cover:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/166710-pr7H0NvG6QHN.jpg",
    coverHash: "hash",
    popularity: 20081,
    totalEpisodes: null,
    currentEpisode: null,
    countryOfOrigin: "JP",
    description:
      "Deadly crazy party of the baddest villains land themselves in ISEKAI!!!<br>\nThe most dangerous & bizarre fantasy adventure unveiled…!!!<br>\nDC's Harley Quinn and The Joker have been ISEKAI!? Suicide Squad rampages onto the stage of ISEKAI!<br>\nA new original animation from Japan! The most maddening worlds collide in an epic and violent fantasy with the strongest line-up of creators!<br><br>\n(Source: Official Site)",
    genres: ["Adventure", "Fantasy"],
    rating: null,
    color: "#1a93f1",
    type: "TV",
    releaseDate: 2024,
  },
];

export const infoAnime = {
  id: "124080",
  title: {
    romaji: "Horimiya",
    english: "Horimiya",
    native: "ホリミヤ",
  },
  malId: 42897,
  synonyms: ["堀与宫村", "โฮริมิยะ สาวมั่นกับนายมืดมน", "Хоримия"],
  isLicensed: true,
  isAdult: false,
  countryOfOrigin: "JP",
  trailer: {
    id: "tryurXgGqkI",
    site: "youtube",
    thumbnail: "https://i.ytimg.com/vi/tryurXgGqkI/hqdefault.jpg",
    thumbnailHash: "hash",
  },
  image:
    "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
  imageHash: "hash",
  popularity: 360010,
  color: "#5dc9f1",
  cover:
    "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
  coverHash: "hash",
  description:
    "A secret life is the one thing they have in common. At school, Hori is a prim and perfect social butterfly, but the truth is she's a brash homebody. Meanwhile, under a gloomy facade, Miyamura hides a gentle heart, along with piercings and tattoos. In a chance meeting, they both reveal a side they've never shown. Could this blossom into something new?<br>\n<br>\n(Source: Funimation)",
  status: "Completed",
  releaseDate: 2021,
  startDate: {
    year: 2021,
    month: 1,
    day: 10,
  },
  endDate: {
    year: 2021,
    month: 4,
    day: 4,
  },
  totalEpisodes: 13,
  currentEpisode: 13,
  rating: 81,
  duration: 24,
  genres: ["Comedy", "Romance", "Slice of Life"],
  season: "WINTER",
  studios: ["CloverWorks"],
  subOrDub: "sub",
  type: "TV",
  recommendations: [
    {
      id: 101921,
      malId: 37999,
      title: {
        romaji: "Kaguya-sama wa Kokurasetai: Tensaitachi no Renai Zunousen",
        english: "Kaguya-sama: Love is War",
        native: "かぐや様は告らせたい～天才たちの恋愛頭脳戦～",
        userPreferred:
          "Kaguya-sama wa Kokurasetai: Tensaitachi no Renai Zunousen",
      },
      status: "Completed",
      episodes: 12,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101921-VvdGQy1ZySYf.jpg",
      imageHash: "hash",
      cover:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/101921-GgvvFhlNhzlF.jpg",
      coverHash: "hash",
      rating: 83,
      type: "TV",
    },
    {
      id: 98291,
      malId: 34902,
      title: {
        romaji: "Tsurezure Children",
        english: "Tsuredure Children",
        native: "徒然チルドレン",
        userPreferred: "Tsurezure Children",
      },
      status: "Completed",
      episodes: 12,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx98291-LY6txxZTX8We.jpg",
      imageHash: "hash",
      cover:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n98291-cRLmqm7It2rZ.jpg",
      coverHash: "hash",
      rating: 74,
      type: "TV_SHORT",
    },
    {
      id: 112443,
      malId: 40530,
      title: {
        romaji: "Jaku-Chara Tomozaki-kun",
        english: "Bottom-Tier Character Tomozaki",
        native: "弱キャラ友崎くん",
        userPreferred: "Jaku-Chara Tomozaki-kun",
      },
      status: "Completed",
      episodes: 12,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx112443-UVB1oKdblsIx.jpg",
      imageHash: "hash",
      cover:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/112443-w44XlUOHN5kh.jpg",
      coverHash: "hash",
      rating: 70,
      type: "TV",
    },
    {
      id: 101291,
      malId: 37450,
      title: {
        romaji: "Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai",
        english: "Rascal Does Not Dream of Bunny Girl Senpai",
        native: "青春ブタ野郎はバニーガール先輩の夢を見ない",
        userPreferred:
          "Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai",
      },
      status: "Completed",
      episodes: 13,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101291-L71WpAkZPtgm.jpg",
      imageHash: "hash",
      cover:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n101291-fqIUvQ6apEtD.jpg",
      coverHash: "hash",
      rating: 80,
      type: "TV",
    },
    {
      id: 6045,
      malId: 6045,
      title: {
        romaji: "Kimi ni Todoke",
        english: "Kimi ni Todoke: From Me to You",
        native: "君に届け",
        userPreferred: "Kimi ni Todoke",
      },
      status: "Completed",
      episodes: 25,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx6045-txJOukR5Qve4.jpg",
      imageHash: "hash",
      cover:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/6045-PHiyDpX2gc5D.jpg",
      coverHash: "hash",
      rating: 79,
      type: "TV",
    },
    {
      id: 99578,
      malId: 35968,
      title: {
        romaji: "Wotaku ni Koi wa Muzukashii",
        english: "Wotakoi: Love is Hard for Otaku",
        native: "ヲタクに恋は難しい",
        userPreferred: "Wotaku ni Koi wa Muzukashii",
      },
      status: "Completed",
      episodes: 11,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx99578-oO5KChtfhzln.png",
      imageHash: "hash",
      cover:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/99578-8orFGgDq7NS8.jpg",
      coverHash: "hash",
      rating: 79,
      type: "TV",
    },
    {
      id: 14227,
      malId: 14227,
      title: {
        romaji: "Tonari no Kaibutsu-kun",
        english: "My Little Monster",
        native: "となりの怪物くん",
        userPreferred: "Tonari no Kaibutsu-kun",
      },
      status: "Completed",
      episodes: 13,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx14227-VGxPG1xDZG7v.jpg",
      imageHash: "hash",
      cover:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/14227-X5LpJ40O61qu.jpg",
      coverHash: "hash",
      rating: 72,
      type: "TV",
    },
    {
      id: 145,
      malId: 145,
      title: {
        romaji: "Kareshi Kanojo no Jijou",
        english: "His and Her Circumstances",
        native: "彼氏彼女の事情",
        userPreferred: "Kareshi Kanojo no Jijou",
      },
      status: "Completed",
      episodes: 26,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx145-PBhmfYZ0gHdq.png",
      imageHash: "hash",
      cover:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/145-RQJdx77yqxnq.jpg",
      coverHash: "hash",
      rating: 75,
      type: "TV",
    },
    {
      id: 20596,
      malId: 21995,
      title: {
        romaji: "Ao Haru Ride",
        english: "Blue Spring Ride",
        native: "アオハライド",
        userPreferred: "Ao Haru Ride",
      },
      status: "Completed",
      episodes: 12,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20596-fJdMHV8xRMgY.png",
      imageHash: "hash",
      cover:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20596.jpg",
      coverHash: "hash",
      rating: 75,
      type: "TV",
    },
    {
      id: 116267,
      malId: 41389,
      title: {
        romaji: "Tonikaku Kawaii",
        english: "TONIKAWA: Over The Moon For You",
        native: "トニカクカワイイ",
        userPreferred: "Tonikaku Kawaii",
      },
      status: "Completed",
      episodes: 12,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx116267-CSAkFXN2Zsai.jpg",
      imageHash: "hash",
      cover:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/116267-xQRslGT0tMTS.jpg",
      coverHash: "hash",
      rating: 77,
      type: "TV",
    },
    {
      id: 7054,
      malId: 7054,
      title: {
        romaji: "Kaichou wa Maid-sama!",
        english: "Maid-Sama!",
        native: "会長はメイド様!",
        userPreferred: "Kaichou wa Maid-sama!",
      },
      status: "Completed",
      episodes: 26,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx7054-GW4D7VAZG19W.png",
      imageHash: "hash",
      cover:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/7054-iTfiX8juTvRV.jpg",
      coverHash: "hash",
      rating: 77,
      type: "TV",
    },
    {
      id: 20668,
      malId: 23289,
      title: {
        romaji: "Gekkan Shoujo Nozaki-kun",
        english: "Monthly Girls' Nozaki-kun",
        native: "月刊少女野崎くん",
        userPreferred: "Gekkan Shoujo Nozaki-kun",
      },
      status: "Completed",
      episodes: 12,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20668-33kB71bNr7N6.png",
      imageHash: "hash",
      cover:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20668-hmoK9pH09pWT.jpg",
      coverHash: "hash",
      rating: 77,
      type: "TV",
    },
    {
      id: 112641,
      malId: 40591,
      title: {
        romaji: "Kaguya-sama wa Kokurasetai?: Tensaitachi no Renai Zunousen",
        english: "Kaguya-sama: Love is War?",
        native: "かぐや様は告らせたい？～天才たちの恋愛頭脳戦～",
        userPreferred:
          "Kaguya-sama wa Kokurasetai?: Tensaitachi no Renai Zunousen",
      },
      status: "Completed",
      episodes: 12,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx112641-zoGC8d6FaPXU.jpg",
      imageHash: "hash",
      cover:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/112641-mKZe0zng0ndV.jpg",
      coverHash: "hash",
      rating: 86,
      type: "TV",
    },
    {
      id: 17895,
      malId: 17895,
      title: {
        romaji: "Golden Time",
        english: "Golden Time",
        native: "ゴールデンタイム",
        userPreferred: "Golden Time",
      },
      status: "Completed",
      episodes: 24,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx17895-nRpWbggDlXXB.jpg",
      imageHash: "hash",
      cover:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/17895.jpg",
      coverHash: "hash",
      rating: 75,
      type: "TV",
    },
    {
      id: 2167,
      malId: 2167,
      title: {
        romaji: "CLANNAD",
        english: "Clannad",
        native: "ＣＬＡＮＮＡＤ -クラナド-",
        userPreferred: "CLANNAD",
      },
      status: "Completed",
      episodes: 23,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx2167-ubU2875AFRTH.jpg",
      imageHash: "hash",
      cover:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/2167.jpg",
      coverHash: "hash",
      rating: 76,
      type: "TV",
    },
    {
      id: 4224,
      malId: 4224,
      title: {
        romaji: "Toradora!",
        english: "Toradora!",
        native: "とらドラ！",
        userPreferred: "Toradora!",
      },
      status: "Completed",
      episodes: 25,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx4224-3Bh0rm99N6Vl.jpg",
      imageHash: "hash",
      cover:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/4224-iPUOHdMde27j.jpg",
      coverHash: "hash",
      rating: 78,
      type: "TV",
    },
    {
      id: 20946,
      malId: 28297,
      title: {
        romaji: "Ore Monogatari!!",
        english: "My Love Story!!",
        native: "俺物語!!",
        userPreferred: "Ore Monogatari!!",
      },
      status: "Completed",
      episodes: 24,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20946-AC3RxlUqZB0M.png",
      imageHash: "hash",
      cover:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20946-r4wJYuCgFO1z.jpg",
      coverHash: "hash",
      rating: 77,
      type: "TV",
    },
    {
      id: 103572,
      malId: 38101,
      title: {
        romaji: "Go-toubun no Hanayome",
        english: "The Quintessential Quintuplets",
        native: "五等分の花嫁",
        userPreferred: "Go-toubun no Hanayome",
      },
      status: "Completed",
      episodes: 12,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx103572-2MXV30htoCSh.png",
      imageHash: "hash",
      cover:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/103572-qRtBguYOOR2j.jpg",
      coverHash: "hash",
      rating: 75,
      type: "TV",
    },
    {
      id: 13759,
      malId: 13759,
      title: {
        romaji: "Sakurasou no Pet na Kanojo",
        english: "The Pet Girl of Sakurasou",
        native: "さくら荘のペットな彼女",
        userPreferred: "Sakurasou no Pet na Kanojo",
      },
      status: "Completed",
      episodes: 24,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx13759-44TVZe8xNOJx.jpg",
      imageHash: "hash",
      cover:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n13759-nBjdu6f8aLbz.jpg",
      coverHash: "hash",
      rating: 78,
      type: "TV",
    },
    {
      id: 14813,
      malId: 14813,
      title: {
        romaji: "Yahari Ore no Seishun Love Come wa Machigatteiru.",
        english: "My Teen Romantic Comedy SNAFU",
        native: "やはり俺の青春ラブコメはまちがっている。",
        userPreferred: "Yahari Ore no Seishun Love Come wa Machigatteiru.",
      },
      status: "Completed",
      episodes: 13,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx14813-BC8aanHK9fju.jpg",
      imageHash: "hash",
      cover:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/14813-urImBxyWJUEw.jpg",
      coverHash: "hash",
      rating: 78,
      type: "TV",
    },
    {
      id: 21296,
      malId: 31245,
      title: {
        romaji: "Zutto Mae kara Suki deshita.: Kokuhaku Jikkou Iinkai",
        english: "I've Always Liked You",
        native: "ずっと前から好きでした。～告白実行委員会～",
        userPreferred: "Zutto Mae kara Suki deshita.: Kokuhaku Jikkou Iinkai",
      },
      status: "Completed",
      episodes: 1,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21296-WtdIXdg64GCK.jpg",
      imageHash: "hash",
      cover:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21296-1tLF48awXvQw.png",
      coverHash: "hash",
      rating: 70,
      type: "MOVIE",
    },
    {
      id: 103302,
      malId: 38080,
      title: {
        romaji: "Kono Oto Tomare!",
        english: "Kono Oto Tomare!: Sounds of Life",
        native: "この音とまれ！",
        userPreferred: "Kono Oto Tomare!",
      },
      status: "Completed",
      episodes: 13,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx103302-RVGwGRDGdMQq.jpg",
      imageHash: "hash",
      cover:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/103302-bEkF9A0W10rj.jpg",
      coverHash: "hash",
      rating: 77,
      type: "TV",
    },
    {
      id: 100526,
      malId: 36793,
      title: {
        romaji: "3D Kanojo: Real Girl",
        english: "Real Girl",
        native: "3D彼女 リアルガール",
        userPreferred: "3D Kanojo: Real Girl",
      },
      status: "Completed",
      episodes: 12,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx100526-Hw6U34Hw2TDb.jpg",
      imageHash: "hash",
      cover:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/100526-the6isOYqR8S.jpg",
      coverHash: "hash",
      rating: 65,
      type: "TV",
    },
    {
      id: 2034,
      malId: 2034,
      title: {
        romaji: "Lovely★Complex",
        english: "Lovely Complex",
        native: "ラブ★コン",
        userPreferred: "Lovely★Complex",
      },
      status: "Completed",
      episodes: 24,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx2034-to85QywohtUL.png",
      imageHash: "hash",
      cover:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/2034-AL1Xtj5GqKu3.jpg",
      coverHash: "hash",
      rating: 77,
      type: "TV",
    },
    {
      id: 21049,
      malId: 30015,
      title: {
        romaji: "ReLIFE",
        english: "ReLIFE",
        native: "ReLIFE",
        userPreferred: "ReLIFE",
      },
      status: "Completed",
      episodes: 13,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21049-4AHSLeiDE9eg.png",
      imageHash: "hash",
      cover:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21049-PeKXMMYru3Xl.png",
      coverHash: "hash",
      rating: 78,
      type: "ONA",
    },
  ],
  characters: [
    {
      id: 66173,
      role: "MAIN",
      name: {
        first: "Izumi",
        last: "Miyamura",
        full: "Izumi Miyamura",
        native: "宮村伊澄",
        userPreferred: "Izumi Miyamura",
      },
      image:
        "https://s4.anilist.co/file/anilistcdn/character/large/b66173-g8eU1LGWPB8O.png",
      imageHash: "hash",
      voiceActors: [
        {
          id: 96764,
          language: "Japanese",
          name: {
            first: "Kouki",
            last: "Uchiyama",
            full: "Kouki Uchiyama",
            native: "内山昂輝",
            userPreferred: "Kouki Uchiyama",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n96764-yJWGrhjanDJQ.png",
          imageHash: "hash",
        },
        {
          id: 120666,
          language: "English",
          name: {
            first: "Alejandro",
            last: "Saab",
            full: "Alejandro Saab",
            native: null,
            userPreferred: "Alejandro Saab",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n120666-w1w9s5Y9z6vW.png",
          imageHash: "hash",
        },
        {
          id: 181979,
          language: "Spanish",
          name: {
            first: "Javier",
            last: "Olguín",
            full: "Javier Olguín",
            native: null,
            userPreferred: "Javier Olguín",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n181979-5mjIa06q28A5.png",
          imageHash: "hash",
        },
        {
          id: 197328,
          language: "Portuguese",
          name: {
            first: "Thiago ",
            last: "Cordova",
            full: "Thiago  Cordova",
            native: "Thiago Córdova",
            userPreferred: "Thiago  Cordova",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n197328-cVtjSGbN9FhW.jpg",
          imageHash: "hash",
        },
        {
          id: 174943,
          language: "French",
          name: {
            first: "Jimmy",
            last: "Redler",
            full: "Jimmy Redler",
            native: null,
            userPreferred: "Jimmy Redler",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
          imageHash: "hash",
        },
        {
          id: 132487,
          language: "German",
          name: {
            first: "Karim",
            last: "El Kammouchi",
            full: "Karim El Kammouchi",
            native: null,
            userPreferred: "Karim El Kammouchi",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n132487-T4xsLlRrQ0zl.jpg",
          imageHash: "hash",
        },
        {
          id: 232741,
          language: "Chinese",
          name: {
            first: "Chaoran",
            last: "Yang",
            full: "Chaoran Yang",
            native: "杨超然",
            userPreferred: "Chaoran Yang",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n232741-UfrAwGJsQdpx.png",
          imageHash: "hash",
        },
      ],
    },
    {
      id: 66171,
      role: "MAIN",
      name: {
        first: "Kyouko",
        last: "Hori",
        full: "Kyouko Hori",
        native: "堀京子",
        userPreferred: "Kyouko Hori",
      },
      image:
        "https://s4.anilist.co/file/anilistcdn/character/large/b66171-o2vk3689wWFK.png",
      imageHash: "hash",
      voiceActors: [
        {
          id: 95890,
          language: "Japanese",
          name: {
            first: "Haruka",
            last: "Tomatsu",
            full: "Haruka Tomatsu",
            native: "戸松遥",
            userPreferred: "Haruka Tomatsu",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n95890-pDWHkOm4ncq0.png",
          imageHash: "hash",
        },
        {
          id: 207067,
          language: "English",
          name: {
            first: "Marisa",
            last: "Duran",
            full: "Marisa Duran",
            native: null,
            userPreferred: "Marisa Duran",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n207067-a3pMWQ4aj0Lv.jpg",
          imageHash: "hash",
        },
        {
          id: 107400,
          language: "Spanish",
          name: {
            first: "Georgina",
            last: "Sánchez",
            full: "Georgina Sánchez",
            native: null,
            userPreferred: "Georgina Sánchez",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n107400-peQnahDFhfOc.png",
          imageHash: "hash",
        },
        {
          id: 197182,
          language: "Portuguese",
          name: {
            first: "Mari",
            last: "Haruno",
            full: "Mari Haruno",
            native: null,
            userPreferred: "Mari Haruno",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n197182-mDKkEWvcDi9j.jpg",
          imageHash: "hash",
        },
        {
          id: 274732,
          language: "French",
          name: {
            first: "Camille",
            last: "Donda",
            full: "Camille Donda",
            native: null,
            userPreferred: "Camille Donda",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
          imageHash: "hash",
        },
        {
          id: 101138,
          language: "German",
          name: {
            first: "Ilona",
            last: "Brokowski",
            full: "Ilona Brokowski",
            native: null,
            userPreferred: "Ilona Brokowski",
          },
          image: "https://s4.anilist.co/file/anilistcdn/staff/large/6138.jpg",
          imageHash: "hash",
        },
        {
          id: 180729,
          language: "Chinese",
          name: {
            first: "Chanfei",
            last: "Li",
            full: "Chanfei Li",
            native: "李蝉妃",
            userPreferred: "Chanfei Li",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n180729-naeQHsl4hBrD.png",
          imageHash: "hash",
        },
      ],
    },
    {
      id: 72453,
      role: "SUPPORTING",
      name: {
        first: "Akane",
        last: "Yanagi",
        full: "Akane Yanagi",
        native: "柳明音",
        userPreferred: "Akane Yanagi",
      },
      image:
        "https://s4.anilist.co/file/anilistcdn/character/large/b72453-f9gRbQBUjKo6.png",
      imageHash: "hash",
      voiceActors: [
        {
          id: 95086,
          language: "Japanese",
          name: {
            first: "Jun",
            last: "Fukuyama",
            full: "Jun Fukuyama",
            native: "福山潤",
            userPreferred: "Jun Fukuyama",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n95086-cwKYmhOFNtH5.png",
          imageHash: "hash",
        },
        {
          id: 95010,
          language: "English",
          name: {
            first: "Johnny Yong",
            last: "Bosch",
            full: "Johnny Yong Bosch",
            native: null,
            userPreferred: "Johnny Yong Bosch",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n95010-56EByXYI2PjI.jpg",
          imageHash: "hash",
        },
        {
          id: 139012,
          language: "Spanish",
          name: {
            first: "Tommy",
            last: "Rojas",
            full: "Tommy Rojas",
            native: "Tomás Gerardo González Rojas",
            userPreferred: "Tommy Rojas",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n139012-GfYJJpdQXqyS.png",
          imageHash: "hash",
        },
        {
          id: 105003,
          language: "Portuguese",
          name: {
            first: "Jose",
            last: "Leonardo",
            full: "Jose Leonardo",
            native: "José Leonardo",
            userPreferred: "Jose Leonardo",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n105003-B56EKU3atlxe.png",
          imageHash: "hash",
        },
        {
          id: 167019,
          language: "French",
          name: {
            first: "Benjamin",
            last: "Bollen",
            full: "Benjamin Bollen",
            native: null,
            userPreferred: "Benjamin Bollen",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n167019-oWYmdxcxK7uI.jpg",
          imageHash: "hash",
        },
        {
          id: 196643,
          language: "German",
          name: {
            first: "Leonard",
            last: "Rosemann",
            full: "Leonard Rosemann",
            native: null,
            userPreferred: "Leonard Rosemann",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
          imageHash: "hash",
        },
        {
          id: 217687,
          language: "Chinese",
          name: {
            first: "Xiang",
            last: "Xu",
            full: "Xiang Xu",
            native: "徐翔",
            userPreferred: "Xiang Xu",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n217687-ZcGitcdza2la.png",
          imageHash: "hash",
        },
      ],
    },
    {
      id: 203892,
      role: "SUPPORTING",
      name: {
        first: "Takako",
        last: "Nishi",
        full: "Takako Nishi",
        native: "西貴子",
        userPreferred: "Takako Nishi",
      },
      image:
        "https://s4.anilist.co/file/anilistcdn/character/large/b203892-t0pUbFpAjheN.png",
      imageHash: "hash",
      voiceActors: [
        {
          id: 119154,
          language: "Japanese",
          name: {
            first: "Yuuki",
            last: "Takada",
            full: "Yuuki Takada",
            native: "高田憂希",
            userPreferred: "Yuuki Takada",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n119154-x2un4m4ECxn4.png",
          imageHash: "hash",
        },
        {
          id: 129030,
          language: "English",
          name: {
            first: "Dani",
            last: "Chambers",
            full: "Dani Chambers",
            native: null,
            userPreferred: "Dani Chambers",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n129030-JpDHbjigIejb.jpg",
          imageHash: "hash",
        },
        {
          id: 184295,
          language: "Spanish",
          name: {
            first: "Jocelyn",
            last: "Robles",
            full: "Jocelyn Robles",
            native: "Jocelyn Robles Guillén",
            userPreferred: "Jocelyn Robles",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n184295-SGIBinFSleRp.png",
          imageHash: "hash",
        },
        {
          id: 262894,
          language: "Portuguese",
          name: {
            first: "Camila",
            last: "Cristina",
            full: "Camila Cristina",
            native: null,
            userPreferred: "Camila Cristina",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n262894-gWg9M9tj7sex.jpg",
          imageHash: "hash",
        },
        {
          id: 137967,
          language: "German",
          name: {
            first: "Katharina",
            last: "von Daake",
            full: "Katharina von Daake",
            native: null,
            userPreferred: "Katharina von Daake",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n137967-RhQWMbuzxZJR.png",
          imageHash: "hash",
        },
        {
          id: 217559,
          language: "Chinese",
          name: {
            first: "Shuang",
            last: "Liang",
            full: "Shuang Liang",
            native: "梁爽",
            userPreferred: "Shuang Liang",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n217559-K8rRVFbKbdVc.png",
          imageHash: "hash",
        },
      ],
    },
    {
      id: 66971,
      role: "SUPPORTING",
      name: {
        first: "Yuuna",
        last: "Okuyama",
        full: "Yuuna Okuyama",
        native: "奥山有菜",
        userPreferred: "Yuuna Okuyama",
      },
      image:
        "https://s4.anilist.co/file/anilistcdn/character/large/b66971-yfKmxIsWKWyR.jpg",
      imageHash: "hash",
      voiceActors: [
        {
          id: 123268,
          language: "Japanese",
          name: {
            first: "Aoi",
            last: "Koga",
            full: "Aoi Koga",
            native: "古賀葵",
            userPreferred: "Aoi Koga",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n123268-zIZLjZ5Xfbk4.png",
          imageHash: "hash",
        },
        {
          id: 129030,
          language: "English",
          name: {
            first: "Dani",
            last: "Chambers",
            full: "Dani Chambers",
            native: null,
            userPreferred: "Dani Chambers",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n129030-JpDHbjigIejb.jpg",
          imageHash: "hash",
        },
        {
          id: 262894,
          language: "Portuguese",
          name: {
            first: "Camila",
            last: "Cristina",
            full: "Camila Cristina",
            native: null,
            userPreferred: "Camila Cristina",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n262894-gWg9M9tj7sex.jpg",
          imageHash: "hash",
        },
        {
          id: 137969,
          language: "German",
          name: {
            first: "Anna",
            last: "Ewelina",
            full: "Anna Ewelina",
            native: null,
            userPreferred: "Anna Ewelina",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n137969-19sfCyvNn90b.jpg",
          imageHash: "hash",
        },
        {
          id: 245060,
          language: "Chinese",
          name: {
            first: "Liu",
            last: "Jing",
            full: "Liu Jing",
            native: "井琉",
            userPreferred: "Liu Jing",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
          imageHash: "hash",
        },
      ],
    },
    {
      id: 72467,
      role: "SUPPORTING",
      name: {
        first: "Motoko",
        last: "Iura",
        full: "Motoko Iura",
        native: "井浦基子",
        userPreferred: "Motoko Iura",
      },
      image:
        "https://s4.anilist.co/file/anilistcdn/character/large/b72467-PpdDmPQFbaMC.png",
      imageHash: "hash",
      voiceActors: [
        {
          id: 103555,
          language: "Japanese",
          name: {
            first: "Hisako",
            last: "Kanemoto",
            full: "Hisako Kanemoto",
            native: "金元寿子",
            userPreferred: "Hisako Kanemoto",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n103555-2ZtBwZfy9DTi.jpg",
          imageHash: "hash",
        },
        {
          id: 142143,
          language: "English",
          name: {
            first: "Emi",
            last: "Lo",
            full: "Emi Lo",
            native: null,
            userPreferred: "Emi Lo",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n142143-W7jQ9Du9biy7.jpg",
          imageHash: "hash",
        },
        {
          id: 182193,
          language: "Spanish",
          name: {
            first: "Alicia",
            last: "Vélez",
            full: "Alicia Vélez",
            native: null,
            userPreferred: "Alicia Vélez",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n182193-ccFLirPjaXJi.png",
          imageHash: "hash",
        },
        {
          id: 205014,
          language: "Portuguese",
          name: {
            first: "Nina",
            last: "Carvalho",
            full: "Nina Carvalho",
            native: null,
            userPreferred: "Nina Carvalho",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n205014-1QMewtumpe47.jpg",
          imageHash: "hash",
        },
        {
          id: 165978,
          language: "French",
          name: {
            first: "Clara",
            last: "Soares",
            full: "Clara Soares",
            native: null,
            userPreferred: "Clara Soares",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n165978-BhMLANgEZpeB.jpg",
          imageHash: "hash",
        },
        {
          id: 134081,
          language: "German",
          name: {
            first: "Amira",
            last: "Leisner",
            full: "Amira Leisner",
            native: null,
            userPreferred: "Amira Leisner",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n134081-PsFE2JwaSynl.jpg",
          imageHash: "hash",
        },
        {
          id: 232748,
          language: "Chinese",
          name: {
            first: "Zhang",
            last: "Chen",
            full: "Zhang Chen",
            native: "陈章",
            userPreferred: "Zhang Chen",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
          imageHash: "hash",
        },
      ],
    },
    {
      id: 72463,
      role: "SUPPORTING",
      name: {
        first: "Chika",
        last: "Ichijou",
        full: "Chika Ichijou",
        native: "一条千佳",
        userPreferred: "Chika Ichijou",
      },
      image:
        "https://s4.anilist.co/file/anilistcdn/character/large/b72463-TKhUXOPgcmv3.jpg",
      imageHash: "hash",
      voiceActors: [
        {
          id: 119616,
          language: "Japanese",
          name: {
            first: "Sayaka",
            last: "Senbongi",
            full: "Sayaka Senbongi",
            native: "千本木彩花",
            userPreferred: "Sayaka Senbongi",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n119616-Dakq7gsUo2ja.png",
          imageHash: "hash",
        },
        {
          id: 126242,
          language: "English",
          name: {
            first: "Erica",
            last: "Mendez",
            full: "Erica Mendez",
            native: null,
            userPreferred: "Erica Mendez",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n126242-LjdhLN4TV53X.jpg",
          imageHash: "hash",
        },
        {
          id: 251987,
          language: "Portuguese",
          name: {
            first: "Camila",
            last: "Johann",
            full: "Camila Johann",
            native: null,
            userPreferred: "Camila Johann",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n251987-vpMDHyhJkcsZ.png",
          imageHash: "hash",
        },
        {
          id: 312040,
          language: "French",
          name: {
            first: "Deujna",
            last: "",
            full: "Deujna",
            native: null,
            userPreferred: "Deujna",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n312040-1wzcRK9R03T9.jpg",
          imageHash: "hash",
        },
        {
          id: 251807,
          language: "German",
          name: {
            first: "Carolin",
            last: "Kuhlmann",
            full: "Carolin Kuhlmann",
            native: null,
            userPreferred: "Carolin Kuhlmann",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
          imageHash: "hash",
        },
      ],
    },
    {
      id: 215830,
      role: "SUPPORTING",
      name: {
        first: "Kayo",
        last: "Yashiro",
        full: "Kayo Yashiro",
        native: "矢代加世",
        userPreferred: "Kayo Yashiro",
      },
      image:
        "https://s4.anilist.co/file/anilistcdn/character/large/b215830-UqoX5c4HSqw4.png",
      imageHash: "hash",
      voiceActors: [
        {
          id: 95141,
          language: "Japanese",
          name: {
            first: "Ryouka",
            last: "Yuzuki",
            full: "Ryouka Yuzuki",
            native: "柚木涼香",
            userPreferred: "Ryouka Yuzuki",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n95141-RUTdfZUbNcUv.png",
          imageHash: "hash",
        },
        {
          id: 227568,
          language: "English",
          name: {
            first: "Kenneisha",
            last: "Thompson",
            full: "Kenneisha Thompson",
            native: null,
            userPreferred: "Kenneisha Thompson",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n227568-tfvlMG0r6i1O.jpg",
          imageHash: "hash",
        },
        {
          id: 126221,
          language: "German",
          name: {
            first: "Claudia",
            last: "Schmidt",
            full: "Claudia Schmidt",
            native: null,
            userPreferred: "Claudia Schmidt",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/126221-OJGVCtPS0VgN.jpg",
          imageHash: "hash",
        },
        {
          id: 217599,
          language: "Chinese",
          name: {
            first: "Xiao N",
            last: null,
            full: "Xiao N",
            native: "小N",
            userPreferred: "Xiao N",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n217599-zYUG3S0nRYaL.png",
          imageHash: "hash",
        },
      ],
    },
    {
      id: 66963,
      role: "SUPPORTING",
      name: {
        first: "Yuki",
        last: "Yoshikawa",
        full: "Yuki Yoshikawa",
        native: "吉川由紀",
        userPreferred: "Yuki Yoshikawa",
      },
      image:
        "https://s4.anilist.co/file/anilistcdn/character/large/b66963-JBKCtpgwdgkG.png",
      imageHash: "hash",
      voiceActors: [
        {
          id: 127127,
          language: "Japanese",
          name: {
            first: "Yurie",
            last: "Kozakai",
            full: "Yurie Kozakai",
            native: "小坂井祐莉絵",
            userPreferred: "Yurie Kozakai",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n127127-9PscYdruJd4S.png",
          imageHash: "hash",
        },
        {
          id: 156013,
          language: "English",
          name: {
            first: "Anairis",
            last: "Quiñones",
            full: "Anairis Quiñones",
            native: null,
            userPreferred: "Anairis Quiñones",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n156013-v06CHeYgx1JL.png",
          imageHash: "hash",
        },
        {
          id: 190695,
          language: "Spanish",
          name: {
            first: "Marysol",
            last: "Lobo",
            full: "Marysol Lobo",
            native: "Marysol Lopéz Borja Rivas",
            userPreferred: "Marysol Lobo",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n190695-zYzxHUUwAWxw.jpg",
          imageHash: "hash",
        },
        {
          id: 197329,
          language: "Portuguese",
          name: {
            first: "Luana",
            last: "Stteger",
            full: "Luana Stteger",
            native: null,
            userPreferred: "Luana Stteger",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n197329-EzWV840THMg6.jpg",
          imageHash: "hash",
        },
        {
          id: 242612,
          language: "French",
          name: {
            first: "Zina",
            last: "Khakhoulia",
            full: "Zina Khakhoulia",
            native: null,
            userPreferred: "Zina Khakhoulia",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
          imageHash: "hash",
        },
        {
          id: 132374,
          language: "German",
          name: {
            first: "Lara",
            last: "Wurmer",
            full: "Lara Wurmer",
            native: null,
            userPreferred: "Lara Wurmer",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n132374-JPyfIzGus2VU.jpg",
          imageHash: "hash",
        },
        {
          id: 232743,
          language: "Chinese",
          name: {
            first: "Wen",
            last: "Liu",
            full: "Wen Liu",
            native: "刘雯",
            userPreferred: "Wen Liu",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n232743-WRMuBlXrlxdV.png",
          imageHash: "hash",
        },
      ],
    },
    {
      id: 72465,
      role: "SUPPORTING",
      name: {
        first: "Makio",
        last: "Tanihara",
        full: "Makio Tanihara",
        native: "谷原マキオ",
        userPreferred: "Makio Tanihara",
      },
      image:
        "https://s4.anilist.co/file/anilistcdn/character/large/b72465-IVbmlZUoptvt.jpg",
      imageHash: "hash",
      voiceActors: [
        {
          id: 119672,
          language: "Japanese",
          name: {
            first: "Shouya",
            last: "Chiba",
            full: "Shouya Chiba",
            native: "千葉翔也",
            userPreferred: "Shouya Chiba",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n119672-4RIzYsFUy8EH.png",
          imageHash: "hash",
        },
        {
          id: 174458,
          language: "English",
          name: {
            first: "Kiba",
            last: "Walker",
            full: "Kiba Walker",
            native: null,
            userPreferred: "Kiba Walker",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n174458-NU7mqy6p6o2F.jpg",
          imageHash: "hash",
        },
        {
          id: 117179,
          language: "Spanish",
          name: {
            first: "Arturo",
            last: "Castañeda",
            full: "Arturo Castañeda",
            native: null,
            userPreferred: "Arturo Castañeda",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n117179-7jGqruzVaaSq.png",
          imageHash: "hash",
        },
        {
          id: 191191,
          language: "Portuguese",
          name: {
            first: "Wirley",
            last: "Contaifer",
            full: "Wirley Contaifer",
            native: null,
            userPreferred: "Wirley Contaifer",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n191191-wHr1h8DJCnG0.png",
          imageHash: "hash",
        },
        {
          id: 241972,
          language: "French",
          name: {
            first: "Tom",
            last: "Trouffier",
            full: "Tom Trouffier",
            native: null,
            userPreferred: "Tom Trouffier",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
          imageHash: "hash",
        },
        {
          id: 188695,
          language: "German",
          name: {
            first: "François",
            last: "Goeske",
            full: "François Goeske",
            native: null,
            userPreferred: "François Goeske",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
          imageHash: "hash",
        },
        {
          id: 232746,
          language: "Chinese",
          name: {
            first: "Xiangyu",
            last: "Huang",
            full: "Xiangyu Huang",
            native: "黄翔宇",
            userPreferred: "Xiangyu Huang",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n232746-Mc0FkuTCHNwS.png",
          imageHash: "hash",
        },
      ],
    },
    {
      id: 66975,
      role: "SUPPORTING",
      name: {
        first: "Shin",
        last: "Yasuda",
        full: "Shin Yasuda",
        native: "安田真",
        userPreferred: "Shin Yasuda",
      },
      image:
        "https://s4.anilist.co/file/anilistcdn/character/large/b66975-1ENOxQZ7SJPm.png",
      imageHash: "hash",
      voiceActors: [
        {
          id: 95591,
          language: "Japanese",
          name: {
            first: "Kenjirou",
            last: "Tsuda",
            full: "Kenjirou Tsuda",
            native: "津田健次郎",
            userPreferred: "Kenjirou Tsuda",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n95591-WQGdD3ubbeoq.jpg",
          imageHash: "hash",
        },
        {
          id: 129056,
          language: "English",
          name: {
            first: "Gabe",
            last: "Kunda",
            full: "Gabe Kunda",
            native: null,
            userPreferred: "Gabe Kunda",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n129056-Mlas9juvRcT8.jpg",
          imageHash: "hash",
        },
        {
          id: 102694,
          language: "Spanish",
          name: {
            first: "Víctor",
            last: "Ugarte",
            full: "Víctor Ugarte",
            native: "Víctor Ugarte Fonseca",
            userPreferred: "Víctor Ugarte",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n102694-xWqlc4cFqipg.jpg",
          imageHash: "hash",
        },
        {
          id: 106869,
          language: "Portuguese",
          name: {
            first: "Renato",
            last: "Soares",
            full: "Renato Soares",
            native: null,
            userPreferred: "Renato Soares",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n106869-gR1b1qAARPPs.jpg",
          imageHash: "hash",
        },
        {
          id: 156218,
          language: "French",
          name: {
            first: "Vincent",
            last: "Ropion",
            full: "Vincent Ropion",
            native: null,
            userPreferred: "Vincent Ropion",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n156218-Nnr3dA3ADxTh.jpg",
          imageHash: "hash",
        },
        {
          id: 137968,
          language: "German",
          name: {
            first: "Julian",
            last: "Bayer",
            full: "Julian Bayer",
            native: null,
            userPreferred: "Julian Bayer",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n137968-urFdgX3dw7w7.jpg",
          imageHash: "hash",
        },
        {
          id: 232751,
          language: "Chinese",
          name: {
            first: "Yuze",
            last: "Sang",
            full: "Yuze Sang",
            native: "桑毓泽",
            userPreferred: "Yuze Sang",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n232751-EuXLSJuxzvk8.png",
          imageHash: "hash",
        },
      ],
    },
    {
      id: 66961,
      role: "SUPPORTING",
      name: {
        first: "Tooru",
        last: "Ishikawa",
        full: "Tooru Ishikawa",
        native: "石川透",
        userPreferred: "Tooru Ishikawa",
      },
      image:
        "https://s4.anilist.co/file/anilistcdn/character/large/b66961-VZV5IwKUwYfp.png",
      imageHash: "hash",
      voiceActors: [
        {
          id: 118249,
          language: "Japanese",
          name: {
            first: "Seiichirou",
            last: "Yamashita",
            full: "Seiichirou Yamashita",
            native: "山下誠一郎",
            userPreferred: "Seiichirou Yamashita",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n118249-aws1DsuN7cUW.png",
          imageHash: "hash",
        },
        {
          id: 153221,
          language: "English",
          name: {
            first: "Zeno",
            last: "Robinson",
            full: "Zeno Robinson",
            native: null,
            userPreferred: "Zeno Robinson",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n153221-ERADaS2McJoO.jpg",
          imageHash: "hash",
        },
        {
          id: 184306,
          language: "Spanish",
          name: {
            first: "Juan Carlos",
            last: "González",
            full: "Juan Carlos González",
            native: null,
            userPreferred: "Juan Carlos González",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n184306-NQC1ogWurHLJ.jpg",
          imageHash: "hash",
        },
        {
          id: 197973,
          language: "Portuguese",
          name: {
            first: "Victor",
            last: "Moreno",
            full: "Victor Moreno",
            native: null,
            userPreferred: "Victor Moreno",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n197973-KWV3gQP3BMEo.jpg",
          imageHash: "hash",
        },
        {
          id: 312043,
          language: "French",
          name: {
            first: "Simon",
            last: "Koukissa-Barney",
            full: "Simon Koukissa-Barney",
            native: null,
            userPreferred: "Simon Koukissa-Barney",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n312043-SR3iu2k5JqUL.png",
          imageHash: "hash",
        },
        {
          id: 137358,
          language: "German",
          name: {
            first: "Benjamin",
            last: "Mereis",
            full: "Benjamin Mereis",
            native: null,
            userPreferred: "Benjamin Mereis",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n137358-92xMioYTyrBB.png",
          imageHash: "hash",
        },
        {
          id: 188297,
          language: "Chinese",
          name: {
            first: "Zhengyang",
            last: "Ma",
            full: "Zhengyang Ma",
            native: "马正阳",
            userPreferred: "Zhengyang Ma",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n188297-McORfiFI9CYk.png",
          imageHash: "hash",
        },
      ],
    },
    {
      id: 78279,
      role: "SUPPORTING",
      name: {
        first: "Yuriko",
        last: "Hori",
        full: "Yuriko Hori",
        native: "堀百合子",
        userPreferred: "Yuriko Hori",
      },
      image:
        "https://s4.anilist.co/file/anilistcdn/character/large/b78279-Vyv16wSznsYl.jpg",
      imageHash: "hash",
      voiceActors: [
        {
          id: 105765,
          language: "Japanese",
          name: {
            first: "Ai",
            last: "Kayano",
            full: "Ai Kayano",
            native: "茅野愛衣",
            userPreferred: "Ai Kayano",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n105765-DDK94me8axVv.png",
          imageHash: "hash",
        },
        {
          id: 128533,
          language: "English",
          name: {
            first: "Marissa",
            last: "Lenti",
            full: "Marissa Lenti",
            native: null,
            userPreferred: "Marissa Lenti",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n128533-9yEK44FbdKLu.jpg",
          imageHash: "hash",
        },
        {
          id: 153194,
          language: "Spanish",
          name: {
            first: "Elsa",
            last: "Covián",
            full: "Elsa Covián",
            native: null,
            userPreferred: "Elsa Covián",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n153194-gLoOTnSq8k6H.jpg",
          imageHash: "hash",
        },
        {
          id: 186386,
          language: "Portuguese",
          name: {
            first: " Maíra",
            last: "Góes",
            full: " Maíra Góes",
            native: null,
            userPreferred: " Maíra Góes",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n186386-zihlQqQTZDVc.png",
          imageHash: "hash",
        },
        {
          id: 142568,
          language: "German",
          name: {
            first: "Janina",
            last: "Dietz",
            full: "Janina Dietz",
            native: null,
            userPreferred: "Janina Dietz",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
          imageHash: "hash",
        },
        {
          id: 232747,
          language: "Chinese",
          name: {
            first: "Ruoyu",
            last: "Zhang",
            full: "Ruoyu Zhang",
            native: "张若瑜",
            userPreferred: "Ruoyu Zhang",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n232747-y8OqQ9g3zRyp.png",
          imageHash: "hash",
        },
      ],
    },
    {
      id: 72457,
      role: "SUPPORTING",
      name: {
        first: "Daiki",
        last: "Mizouchi",
        full: "Daiki Mizouchi",
        native: "溝内大樹",
        userPreferred: "Daiki Mizouchi",
      },
      image:
        "https://s4.anilist.co/file/anilistcdn/character/large/b72457-urLH3qxflfRj.png",
      imageHash: "hash",
      voiceActors: [
        {
          id: 119200,
          language: "Japanese",
          name: {
            first: "Haruki",
            last: "Ishiya",
            full: "Haruki Ishiya",
            native: "石谷春貴",
            userPreferred: "Haruki Ishiya",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n119200-guyDteKAqtuo.png",
          imageHash: "hash",
        },
        {
          id: 129669,
          language: "English",
          name: {
            first: "Mark",
            last: "Allen Jr.",
            full: "Mark Allen Jr.",
            native: null,
            userPreferred: "Mark Allen Jr.",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n129669-3RQLaSnVOOWu.jpg",
          imageHash: "hash",
        },
        {
          id: 182219,
          language: "Spanish",
          name: {
            first: "Alan",
            last: "Bravo",
            full: "Alan Bravo",
            native: null,
            userPreferred: "Alan Bravo",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n182219-dgUxanIweWBY.png",
          imageHash: "hash",
        },
        {
          id: 116937,
          language: "Portuguese",
          name: {
            first: "Alex",
            last: "Minei",
            full: "Alex Minei",
            native: null,
            userPreferred: "Alex Minei",
          },
          image: "https://s4.anilist.co/file/anilistcdn/staff/large/21937.jpg",
          imageHash: "hash",
        },
        {
          id: 291738,
          language: "French",
          name: {
            first: "Oscar",
            last: "Douieb",
            full: "Oscar Douieb",
            native: null,
            userPreferred: "Oscar Douieb",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n291738-7RnCsRm7Me3w.jpg",
          imageHash: "hash",
        },
        {
          id: 137968,
          language: "German",
          name: {
            first: "Julian",
            last: "Bayer",
            full: "Julian Bayer",
            native: null,
            userPreferred: "Julian Bayer",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n137968-urFdgX3dw7w7.jpg",
          imageHash: "hash",
        },
        {
          id: 245061,
          language: "Chinese",
          name: {
            first: "Pang Xueren",
            last: null,
            full: "Pang Xueren",
            native: "胖雪人",
            userPreferred: "Pang Xueren",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n245061-aVRTQGi0e6GL.png",
          imageHash: "hash",
        },
      ],
    },
    {
      id: 72447,
      role: "SUPPORTING",
      name: {
        first: "Kakeru",
        last: "Sengoku",
        full: "Kakeru Sengoku",
        native: "仙石翔",
        userPreferred: "Kakeru Sengoku",
      },
      image:
        "https://s4.anilist.co/file/anilistcdn/character/large/b72447-SH9Hth8ZGJam.png",
      imageHash: "hash",
      voiceActors: [
        {
          id: 95270,
          language: "Japanese",
          name: {
            first: "Nobuhiko",
            last: "Okamoto",
            full: "Nobuhiko Okamoto",
            native: "岡本信彦",
            userPreferred: "Nobuhiko Okamoto",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n95270-LqNIF238L59u.png",
          imageHash: "hash",
        },
        {
          id: 207069,
          language: "English",
          name: {
            first: "Belsheber",
            last: "Rusape",
            full: "Belsheber Rusape",
            native: null,
            userPreferred: "Belsheber Rusape",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n207069-MHYP25TjEId5.jpg",
          imageHash: "hash",
        },
        {
          id: 248483,
          language: "Spanish",
          name: {
            first: "Mario",
            last: "Heras",
            full: "Mario Heras",
            native: null,
            userPreferred: "Mario Heras",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n248483-U62Av0lTVXz2.png",
          imageHash: "hash",
        },
        {
          id: 116463,
          language: "Portuguese",
          name: {
            first: "Bruno",
            last: "Marçal",
            full: "Bruno Marçal",
            native: null,
            userPreferred: "Bruno Marçal",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n116463-rYltbIoQNRix.jpg",
          imageHash: "hash",
        },
        {
          id: 212445,
          language: "French",
          name: {
            first: "Clément",
            last: "Moreau",
            full: "Clément Moreau",
            native: null,
            userPreferred: "Clément Moreau",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
          imageHash: "hash",
        },
        {
          id: 102964,
          language: "German",
          name: {
            first: "Hubertus",
            last: "von Lerchenfeld",
            full: "Hubertus von Lerchenfeld",
            native: null,
            userPreferred: "Hubertus von Lerchenfeld",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n102964-OF7rN1qtFSA3.png",
          imageHash: "hash",
        },
        {
          id: 188374,
          language: "Chinese",
          name: {
            first: "Lanling",
            last: "Li",
            full: "Lanling Li",
            native: "李兰陵",
            userPreferred: "Lanling Li",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n188374-kWjAs9h1w4Oi.png",
          imageHash: "hash",
        },
      ],
    },
    {
      id: 72461,
      role: "SUPPORTING",
      name: {
        first: "Kouichi",
        last: "Shindou",
        full: "Kouichi Shindou",
        native: "進藤晃一",
        userPreferred: "Kouichi Shindou",
      },
      image:
        "https://s4.anilist.co/file/anilistcdn/character/large/b72461-4zzQ6cShYe8l.png",
      imageHash: "hash",
      voiceActors: [
        {
          id: 119833,
          language: "Japanese",
          name: {
            first: "Taku",
            last: "Yashiro",
            full: "Taku Yashiro",
            native: "八代拓",
            userPreferred: "Taku Yashiro",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n119833-6CySrXDVAZ2X.jpg",
          imageHash: "hash",
        },
        {
          id: 130881,
          language: "English",
          name: {
            first: "Christopher",
            last: "Ramirez",
            full: "Christopher Ramirez",
            native: null,
            userPreferred: "Christopher Llewyn Ramirez",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n130881-w8FIzS5hO1Ei.jpg",
          imageHash: "hash",
        },
        {
          id: 205910,
          language: "Spanish",
          name: {
            first: "Alex",
            last: "Villamar",
            full: "Alex Villamar",
            native: null,
            userPreferred: "Alex Villamar",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n205910-w2sCnGLzK1Aa.png",
          imageHash: "hash",
        },
        {
          id: 175195,
          language: "Portuguese",
          name: {
            first: "Lipe",
            last: "Volpato",
            full: "Lipe Volpato",
            native: null,
            userPreferred: "Lipe Volpato",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n175195-vIv8LgrkG8fd.png",
          imageHash: "hash",
        },
        {
          id: 275100,
          language: "French",
          name: {
            first: "Martin",
            last: "Faliu",
            full: "Martin Faliu",
            native: null,
            userPreferred: "Martin Faliu",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n275100-1MsTZ135RcJG.jpg",
          imageHash: "hash",
        },
        {
          id: 134511,
          language: "German",
          name: {
            first: "Tobias",
            last: "Kern",
            full: "Tobias Kern",
            native: null,
            userPreferred: "Tobias Kern",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n134511-9l49gGbk1Z7z.jpg",
          imageHash: "hash",
        },
        {
          id: 232745,
          language: "Chinese",
          name: {
            first: "Jinze",
            last: "Huang",
            full: "Jinze Huang",
            native: "黄进泽",
            userPreferred: "Jinze Huang",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n232745-Ky35F0AMK2uV.png",
          imageHash: "hash",
        },
      ],
    },
    {
      id: 212578,
      role: "SUPPORTING",
      name: {
        first: "Miki",
        last: "Yoshikawa",
        full: "Miki Yoshikawa",
        native: "吉川美紀",
        userPreferred: "Miki Yoshikawa",
      },
      image:
        "https://s4.anilist.co/file/anilistcdn/character/large/b212578-b5u2nVSdkP0f.png",
      imageHash: "hash",
      voiceActors: [
        {
          id: 112215,
          language: "Japanese",
          name: {
            first: "Atsumi",
            last: "Tanezaki",
            full: "Atsumi Tanezaki",
            native: "種﨑敦美",
            userPreferred: "Atsumi Tanezaki",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n112215-kfABGD8W2YSJ.jpg",
          imageHash: "hash",
        },
        {
          id: 153203,
          language: "English",
          name: {
            first: "Alle",
            last: "Mims",
            full: "Alle Mims",
            native: null,
            userPreferred: "Alle Mims",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n153203-fjeYlL5Yg5NB.jpg",
          imageHash: "hash",
        },
        {
          id: 139018,
          language: "Spanish",
          name: {
            first: "Lourdes",
            last: "Arruti",
            full: "Lourdes Arruti",
            native: "María de Lourdes Torres Arruti",
            userPreferred: "Lourdes Arruti",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n139018-JzUsYikdGT92.png",
          imageHash: "hash",
        },
        {
          id: 176954,
          language: "Portuguese",
          name: {
            first: "Bruna",
            last: "Nogueira",
            full: "Bruna Nogueira",
            native: null,
            userPreferred: "Bruna Nogueira",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n176954-6ZX9X0hOU20I.jpg",
          imageHash: "hash",
        },
        {
          id: 160130,
          language: "French",
          name: {
            first: "Karine",
            last: "Foviau",
            full: "Karine Foviau",
            native: null,
            userPreferred: "Karine Foviau",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
          imageHash: "hash",
        },
        {
          id: 145846,
          language: "German",
          name: {
            first: "Nina",
            last: "Benz",
            full: "Nina Benz",
            native: null,
            userPreferred: "Nina Benz",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
          imageHash: "hash",
        },
        {
          id: 229301,
          language: "Chinese",
          name: {
            first: "Xueting",
            last: "Mu",
            full: "Xueting Mu",
            native: "穆雪婷",
            userPreferred: "Xueting Mu",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n229301-JkgzVjQPacWe.png",
          imageHash: "hash",
        },
      ],
    },
    {
      id: 72449,
      role: "SUPPORTING",
      name: {
        first: "Sakura",
        last: "Kouno",
        full: "Sakura Kouno",
        native: "河野桜",
        userPreferred: "Sakura Kouno",
      },
      image:
        "https://s4.anilist.co/file/anilistcdn/character/large/b72449-wTynovkFnQpC.png",
      imageHash: "hash",
      voiceActors: [
        {
          id: 124747,
          language: "Japanese",
          name: {
            first: "Reina",
            last: "Kondou",
            full: "Reina Kondou",
            native: "近藤玲奈",
            userPreferred: "Reina Kondou",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n124747-uWJRlxZ05TaM.png",
          imageHash: "hash",
        },
        {
          id: 207068,
          language: "English",
          name: {
            first: "Celeste",
            last: "Perez",
            full: "Celeste Perez",
            native: null,
            userPreferred: "Celeste Perez",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n207068-1wjpAS4OSgRy.jpg",
          imageHash: "hash",
        },
        {
          id: 139006,
          language: "Spanish",
          name: {
            first: "Andrea",
            last: "Orozco",
            full: "Andrea Orozco",
            native: "Andrea Daniela Orozco Antúnez",
            userPreferred: "Andrea Orozco",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n139006-5bFWR3IfedkS.jpg",
          imageHash: "hash",
        },
        {
          id: 302997,
          language: "Portuguese",
          name: {
            first: "Bruna",
            last: "Martins",
            full: "Bruna Martins",
            native: null,
            userPreferred: "Bruna Martins",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n302997-xt0O8iq64kFG.jpg",
          imageHash: "hash",
        },
        {
          id: 274701,
          language: "French",
          name: {
            first: "Emilie",
            last: "Marié",
            full: "Emilie Marié",
            native: null,
            userPreferred: "Emilie Marié",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n274701-iwUYKP9aWqg4.jpg",
          imageHash: "hash",
        },
        {
          id: 176999,
          language: "German",
          name: {
            first: "Marget",
            last: "Flach",
            full: "Marget Flach",
            native: null,
            userPreferred: "Marget Flach",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
          imageHash: "hash",
        },
        {
          id: 217599,
          language: "Chinese",
          name: {
            first: "Xiao N",
            last: null,
            full: "Xiao N",
            native: "小N",
            userPreferred: "Xiao N",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n217599-zYUG3S0nRYaL.png",
          imageHash: "hash",
        },
      ],
    },
    {
      id: 72459,
      role: "SUPPORTING",
      name: {
        first: "Honoka",
        last: "Sawada",
        full: "Honoka Sawada",
        native: "沢田ほのか",
        userPreferred: "Honoka Sawada",
      },
      image:
        "https://s4.anilist.co/file/anilistcdn/character/large/b72459-NbyXnBAjLxKT.png",
      imageHash: "hash",
      voiceActors: [
        {
          id: 118479,
          language: "Japanese",
          name: {
            first: "Momo",
            last: "Asakura",
            full: "Momo Asakura",
            native: "麻倉もも",
            userPreferred: "Momo Asakura",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n118479-yHWeZAiD5xpi.png",
          imageHash: "hash",
        },
        {
          id: 111643,
          language: "English",
          name: {
            first: "Apphia",
            last: "Yu",
            full: "Apphia Yu",
            native: null,
            userPreferred: "Apphia Yu",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n111643-sUnmaZ8MeT1S.jpg",
          imageHash: "hash",
        },
        {
          id: 196472,
          language: "Spanish",
          name: {
            first: "Valeria",
            last: "Mejía",
            full: "Valeria Mejía",
            native: null,
            userPreferred: "Valeria Mejía",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n196472-ZRrUr2nlww3M.png",
          imageHash: "hash",
        },
        {
          id: 198676,
          language: "Portuguese",
          name: {
            first: "Letícia",
            last: "Ida",
            full: "Letícia Ida",
            native: null,
            userPreferred: "Letícia Ida",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n198676-7lU4ek4Z4baS.jpg",
          imageHash: "hash",
        },
        {
          id: 312042,
          language: "French",
          name: {
            first: "Sonia",
            last: "Petit",
            full: "Sonia Petit",
            native: null,
            userPreferred: "Sonia Petit",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n312042-IgGDnh63vgUl.jpg",
          imageHash: "hash",
        },
        {
          id: 141260,
          language: "German",
          name: {
            first: "Lisa",
            last: "Dzyadyk",
            full: "Lisa Dzyadyk",
            native: null,
            userPreferred: "Lisa Dzyadyk",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n141260-0xZuO2Jgn4yf.jpg",
          imageHash: "hash",
        },
        {
          id: 163273,
          language: "Chinese",
          name: {
            first: "Miemie",
            last: null,
            full: "Miemie",
            native: "咩咩",
            userPreferred: "Miemie",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n163273-0KY9HJdgv8Zi.png",
          imageHash: "hash",
        },
      ],
    },
    {
      id: 66973,
      role: "SUPPORTING",
      name: {
        first: "Reiko",
        last: "Terajima",
        full: "Reiko Terajima",
        native: "寺島玲子",
        userPreferred: "Reiko Terajima",
      },
      image:
        "https://s4.anilist.co/file/anilistcdn/character/large/b66973-cRamsBQtjWmG.png",
      imageHash: "hash",
      voiceActors: [
        {
          id: 125030,
          language: "Japanese",
          name: {
            first: "Hana",
            last: "Satou",
            full: "Hana Satou",
            native: "佐藤はな",
            userPreferred: "Hana Satou",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n125030-qmzaBaeQA7xF.png",
          imageHash: "hash",
        },
        {
          id: 301904,
          language: "Portuguese",
          name: {
            first: "Vivian",
            last: "Poyart",
            full: "Vivian Poyart",
            native: "Vivian Amorim Poyart",
            userPreferred: "Vivian Poyart",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n301904-py8QGy6k5d0w.jpg",
          imageHash: "hash",
        },
        {
          id: 142568,
          language: "German",
          name: {
            first: "Janina",
            last: "Dietz",
            full: "Janina Dietz",
            native: null,
            userPreferred: "Janina Dietz",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
          imageHash: "hash",
        },
      ],
    },
    {
      id: 66965,
      role: "SUPPORTING",
      name: {
        first: "Remi",
        last: "Ayasaki",
        full: "Remi Ayasaki",
        native: "綾崎レミ",
        userPreferred: "Remi Ayasaki",
      },
      image:
        "https://s4.anilist.co/file/anilistcdn/character/large/b66965-Kfqui6IitXaL.png",
      imageHash: "hash",
      voiceActors: [
        {
          id: 118510,
          language: "Japanese",
          name: {
            first: "Mao",
            last: "Ichimichi",
            full: "Mao Ichimichi",
            native: "市道真央",
            userPreferred: "Mao Ichimichi",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n118510-iMUv5D7W99C1.png",
          imageHash: "hash",
        },
        {
          id: 207070,
          language: "English",
          name: {
            first: "Jalitza",
            last: "Delgado",
            full: "Jalitza Delgado",
            native: null,
            userPreferred: "Jalitza Chantel Delgado",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n207070-H4OSiwjm6u1A.jpg",
          imageHash: "hash",
        },
        {
          id: 184115,
          language: "Spanish",
          name: {
            first: "Ale",
            last: "Pilar",
            full: "Ale Pilar",
            native: "Alejandra Del Pilar",
            userPreferred: "Ale Pilar",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n184115-VaZOaW9MyPzq.png",
          imageHash: "hash",
        },
        {
          id: 247424,
          language: "Portuguese",
          name: {
            first: "Michelle",
            last: "Zampieri",
            full: "Michelle Zampieri",
            native: null,
            userPreferred: "Michelle Zampieri",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n247424-ArvL9e3X0T3s.png",
          imageHash: "hash",
        },
        {
          id: 285837,
          language: "French",
          name: {
            first: "Marie",
            last: "Facundo",
            full: "Marie Facundo",
            native: null,
            userPreferred: "Marie Facundo",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n285837-HwC3Dn0KeByy.jpg",
          imageHash: "hash",
        },
        {
          id: 163102,
          language: "German",
          name: {
            first: "Jana Dunja",
            last: "Gries",
            full: "Jana Dunja Gries",
            native: null,
            userPreferred: "Jana Dunja Gries",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n163102-8N7hufJRXy5R.jpg",
          imageHash: "hash",
        },
        {
          id: 232744,
          language: "Chinese",
          name: {
            first: "Yi",
            last: "Zhao",
            full: "Yi Zhao",
            native: "赵佚",
            userPreferred: "Yi Zhao",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n232744-hwVCZoniMCEr.jpg",
          imageHash: "hash",
        },
      ],
    },
    {
      id: 66969,
      role: "SUPPORTING",
      name: {
        first: "Souta",
        last: "Hori",
        full: "Souta Hori",
        native: "堀創太",
        userPreferred: "Souta Hori",
      },
      image:
        "https://s4.anilist.co/file/anilistcdn/character/large/b66969-w9HNa7igeTeF.png",
      imageHash: "hash",
      voiceActors: [
        {
          id: 95671,
          language: "Japanese",
          name: {
            first: "Yuka",
            last: "Terasaki",
            full: "Yuka Terasaki",
            native: "寺崎裕香",
            userPreferred: "Yuka Terasaki",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n95671-iXGq2oxE1DlW.png",
          imageHash: "hash",
        },
        {
          id: 128531,
          language: "English",
          name: {
            first: "Emily ",
            last: "Fajardo",
            full: "Emily  Fajardo",
            native: null,
            userPreferred: "Emily  J. Fajardo",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n128531-SazEpmyG0Qb5.jpg",
          imageHash: "hash",
        },
        {
          id: 206474,
          language: "Spanish",
          name: {
            first: "Sebastián",
            last: "García",
            full: "Sebastián García",
            native: null,
            userPreferred: "Sebastián García",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n206474-tM00dOUu5IOL.png",
          imageHash: "hash",
        },
        {
          id: 246602,
          language: "Portuguese",
          name: {
            first: "Nicolas",
            last: "Mattos",
            full: "Nicolas Mattos",
            native: null,
            userPreferred: "Nicolas Mattos",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n246602-rQ3SjWzqNI66.jpg",
          imageHash: "hash",
        },
        {
          id: 216176,
          language: "French",
          name: {
            first: "Emmylou",
            last: "Homs",
            full: "Emmylou Homs",
            native: null,
            userPreferred: "Emmylou Homs",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n216176-wk4Ts4Kv2fY5.jpg",
          imageHash: "hash",
        },
        {
          id: 251806,
          language: "German",
          name: {
            first: "Leon",
            last: "von Daake",
            full: "Leon von Daake",
            native: null,
            userPreferred: "Leon von Daake",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
          imageHash: "hash",
        },
        {
          id: 232747,
          language: "Chinese",
          name: {
            first: "Ruoyu",
            last: "Zhang",
            full: "Ruoyu Zhang",
            native: "张若瑜",
            userPreferred: "Ruoyu Zhang",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n232747-y8OqQ9g3zRyp.png",
          imageHash: "hash",
        },
      ],
    },
    {
      id: 207325,
      role: "SUPPORTING",
      name: {
        first: "Iori",
        last: "Miyamura",
        full: "Iori Miyamura",
        native: "宮村伊織",
        userPreferred: "Iori Miyamura",
      },
      image:
        "https://s4.anilist.co/file/anilistcdn/character/large/b207325-wjqrISdImoOl.png",
      imageHash: "hash",
      voiceActors: [
        {
          id: 95092,
          language: "Japanese",
          name: {
            first: "Sayaka",
            last: "Oohara",
            full: "Sayaka Oohara",
            native: "大原さやか",
            userPreferred: "Sayaka Oohara",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n95092-dQXsTFQXLg3o.png",
          imageHash: "hash",
        },
        {
          id: 120245,
          language: "English",
          name: {
            first: "Michelle",
            last: "Rojas",
            full: "Michelle Rojas",
            native: null,
            userPreferred: "Michelle Rojas",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n120245-caA11LwLmwZR.jpg",
          imageHash: "hash",
        },
        {
          id: 104136,
          language: "Spanish",
          name: {
            first: "Maggie",
            last: "Vera",
            full: "Maggie Vera",
            native: null,
            userPreferred: "Maggie Vera",
          },
          image: "https://s4.anilist.co/file/anilistcdn/staff/large/9136.jpg",
          imageHash: "hash",
        },
        {
          id: 306919,
          language: "Portuguese",
          name: {
            first: "Renata",
            last: "Flores",
            full: "Renata Flores",
            native: null,
            userPreferred: "Renata Flores",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n306919-t2NRZJbd1ctV.jpg",
          imageHash: "hash",
        },
        {
          id: 95826,
          language: "French",
          name: {
            first: "Hélène",
            last: "Bizot",
            full: "Hélène Bizot",
            native: null,
            userPreferred: "Hélène Bizot",
          },
          image: "https://s4.anilist.co/file/anilistcdn/staff/large/826.jpg",
          imageHash: "hash",
        },
        {
          id: 126221,
          language: "German",
          name: {
            first: "Claudia",
            last: "Schmidt",
            full: "Claudia Schmidt",
            native: null,
            userPreferred: "Claudia Schmidt",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/126221-OJGVCtPS0VgN.jpg",
          imageHash: "hash",
        },
      ],
    },
    {
      id: 66967,
      role: "SUPPORTING",
      name: {
        first: "Shuu",
        last: "Iura",
        full: "Shuu Iura",
        native: "井浦秀",
        userPreferred: "Shuu Iura",
      },
      image:
        "https://s4.anilist.co/file/anilistcdn/character/large/b66967-driczOA04cxe.png",
      imageHash: "hash",
      voiceActors: [
        {
          id: 116971,
          language: "Japanese",
          name: {
            first: "Daiki",
            last: "Yamashita",
            full: "Daiki Yamashita",
            native: "山下大輝",
            userPreferred: "Daiki Yamashita",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n116971-KDHjlYPO4HrS.png",
          imageHash: "hash",
        },
        {
          id: 162890,
          language: "English",
          name: {
            first: "Y.",
            last: "Chang",
            full: "Y. Chang",
            native: "張永宜",
            userPreferred: "Y. Chang",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n162890-qwnA0ACEZt1u.jpg",
          imageHash: "hash",
        },
        {
          id: 116839,
          language: "Spanish",
          name: {
            first: "Miguel Ángel",
            last: "Ruiz",
            full: "Miguel Ángel Ruiz",
            native: null,
            userPreferred: "Miguel Ángel Ruiz",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n116839-9EnQTp30Vy4R.png",
          imageHash: "hash",
        },
        {
          id: 176952,
          language: "Portuguese",
          name: {
            first: "Carloz",
            last: "Magno",
            full: "Carloz Magno",
            native: null,
            userPreferred: "Carloz Magno",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n176952-81gMj2L22bBb.jpg",
          imageHash: "hash",
        },
        {
          id: 216174,
          language: "French",
          name: {
            first: "Antoine",
            last: "Schoumsky",
            full: "Antoine Schoumsky",
            native: null,
            userPreferred: "Antoine Schoumsky",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
          imageHash: "hash",
        },
        {
          id: 176998,
          language: "German",
          name: {
            first: "Marco",
            last: "Rosenberg",
            full: "Marco Rosenberg",
            native: null,
            userPreferred: "Marco Rosenberg",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
          imageHash: "hash",
        },
        {
          id: 180733,
          language: "Chinese",
          name: {
            first: "Qianjing",
            last: "Zhao",
            full: "Qianjing Zhao",
            native: "赵乾景",
            userPreferred: "Qianjing Zhao",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n180733-QMS2qqgm11sZ.png",
          imageHash: "hash",
        },
      ],
    },
    {
      id: 89726,
      role: "SUPPORTING",
      name: {
        first: "Kyousuke",
        last: "Hori",
        full: "Kyousuke Hori",
        native: "堀京介",
        userPreferred: "Kyousuke Hori",
      },
      image:
        "https://s4.anilist.co/file/anilistcdn/character/large/b89726-NS2ZmYjp1Mnr.jpg",
      imageHash: "hash",
      voiceActors: [
        {
          id: 95212,
          language: "Japanese",
          name: {
            first: "Daisuke",
            last: "Ono",
            full: "Daisuke Ono",
            native: "小野大輔",
            userPreferred: "Daisuke Ono",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n95212-wX1M4LJN96q2.png",
          imageHash: "hash",
        },
        {
          id: 183735,
          language: "English",
          name: {
            first: "Bill",
            last: "Butts",
            full: "Bill Butts",
            native: null,
            userPreferred: "Bill Butts",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n183735-UItQ9fXKxpyA.png",
          imageHash: "hash",
        },
        {
          id: 116355,
          language: "Spanish",
          name: {
            first: "Carlo",
            last: "Vázquez",
            full: "Carlo Vázquez",
            native: null,
            userPreferred: "Carlo Vázquez",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n116355-3TfZ2HUih1y3.png",
          imageHash: "hash",
        },
        {
          id: 104157,
          language: "Portuguese",
          name: {
            first: "Nestor",
            last: "Chiesse",
            full: "Nestor Chiesse",
            native: null,
            userPreferred: "Nestor Chiesse",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n104157-w66nccGYhNVI.jpg",
          imageHash: "hash",
        },
        {
          id: 115396,
          language: "French",
          name: {
            first: "Emmanuel",
            last: "Curtil",
            full: "Emmanuel Curtil",
            native: null,
            userPreferred: "Emmanuel Curtil",
          },
          image: "https://s4.anilist.co/file/anilistcdn/staff/large/20396.jpg",
          imageHash: "hash",
        },
        {
          id: 116421,
          language: "German",
          name: {
            first: "Benedikt",
            last: "Gutjan",
            full: "Benedikt Gutjan",
            native: null,
            userPreferred: "Benedikt Gutjan",
          },
          image: "https://s4.anilist.co/file/anilistcdn/staff/large/21421.jpg",
          imageHash: "hash",
        },
        {
          id: 188416,
          language: "Chinese",
          name: {
            first: "Lei",
            last: "Wu",
            full: "Lei Wu",
            native: "吴磊",
            userPreferred: "Lei Wu",
          },
          image:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n188416-imtnktDpDBSl.png",
          imageHash: "hash",
        },
      ],
    },
  ],
  relations: [
    {
      id: 72451,
      relationType: "ADAPTATION",
      malId: 42451,
      title: {
        romaji: "Horimiya",
        english: "Horimiya",
        native: "ホリミヤ",
        userPreferred: "Horimiya",
      },
      status: "Completed",
      episodes: null,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx72451-vVXtRwyttjGG.png",
      imageHash: "hash",
      color: "#e45d93",
      type: "MANGA",
      cover:
        "https://s4.anilist.co/file/anilistcdn/media/manga/banner/42451-shG1Ksjxm3pw.jpg",
      coverHash: "hash",
      rating: 82,
    },
    {
      id: 14753,
      relationType: "ALTERNATIVE",
      malId: 14753,
      title: {
        romaji: "Hori-san to Miyamura-kun: Shingakki",
        english: null,
        native: "堀さんと宮村くん-新学期-",
        userPreferred: "Hori-san to Miyamura-kun: Shingakki",
      },
      status: "Completed",
      episodes: 6,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b14753-FKgfBa6AO5wg.jpg",
      imageHash: "hash",
      color: null,
      type: "OVA",
      cover:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b14753-FKgfBa6AO5wg.jpg",
      coverHash: "hash",
      rating: 72,
    },
    {
      id: 163132,
      relationType: "SIDE_STORY",
      malId: 54856,
      title: {
        romaji: "Horimiya: piece",
        english: "Horimiya: The Missing Pieces",
        native: "ホリミヤ -piece-",
        userPreferred: "Horimiya: piece",
      },
      status: "Completed",
      episodes: 13,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx163132-C220CO5UrTxY.jpg",
      imageHash: "hash",
      color: "#e4a143",
      type: "TV",
      cover:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/163132-bxxTKGlmlnOm.jpg",
      coverHash: "hash",
      rating: 82,
    },
  ],
  mappings: [
    {
      id: "/watch/horimiya.m0o8",
      providerId: "9anime",
      similarity: 1,
      providerType: "ANIME",
    },
    {
      id: "4166",
      providerId: "animepahe",
      similarity: 1,
      providerType: "ANIME",
    },
    {
      id: "/category/horimiya",
      providerId: "gogoanime",
      similarity: 1,
      providerType: "ANIME",
    },
    {
      id: "/horimiya-15733?ref=search",
      providerId: "zoro",
      similarity: 1,
      providerType: "ANIME",
    },
    {
      id: "/series/388593",
      providerId: "tvdb",
      similarity: 1,
      providerType: "META",
    },
    {
      id: "124080",
      providerId: "anilist",
      similarity: 1,
      providerType: "META",
    },
    {
      id: "42897",
      providerId: "mal",
      similarity: 1,
      providerType: "META",
    },
    {
      id: "43545",
      providerId: "kitsu",
      similarity: 1,
      providerType: "META",
    },
    {
      id: "/tv/110070",
      providerId: "tmdb",
      similarity: 1,
      providerType: "META",
    },
    {
      id: "/anime/15733",
      providerId: "anidb",
      similarity: 1,
      providerType: "META",
    },
  ],
  artwork: [
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      type: "poster",
      providerId: "anilist",
    },
    {
      img: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      type: "banner",
      providerId: "anilist",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://media.kitsu.io/anime/cover_images/43545/original.jpg",
      type: "banner",
      providerId: "kitsu",
    },
    {
      img: "https://media.kitsu.io/anime/poster_images/43545/original.jpg",
      type: "poster",
      providerId: "kitsu",
    },
    {
      img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      type: "poster",
      providerId: "mal",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5feb3592b0663.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbe925a755cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearart/611cee4263235.png",
      type: "clear_art",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee34e70d4.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfea198d8c2.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5fbfeb64dc0cf.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/panels/5fbfec1bba4fc.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/backgrounds/5ff68c2c65a70.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c46f12cef54.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/64c3cd1c94149.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/backgrounds/61c340fb57d0e.jpg",
      type: "banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/icons/5ffa0298ee8d1.jpg",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fd75879e0f8d.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/60295f9fb1348.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5fbd2c3fd7e7b.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/posters/5f63c5eea2fb3.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/series/388593/banners/5ffa0768b16ac.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/60603a47b3f71.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/icons/605f9bcc892aa.png",
      type: "icon",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/63e8bb032ff9c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c46eb1d1c24.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/62a730490c238.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/posters/61c473bfb8e6c.jpg",
      type: "poster",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/clearlogo/611cee37bea82.png",
      type: "clear_logo",
      providerId: "tvdb",
    },
    {
      img: "https://artworks.thetvdb.com/banners/v4/series/388593/banners/607c70427c5d4.jpg",
      type: "top_banner",
      providerId: "tvdb",
    },
  ],
  episodes: [
    {
      id: "horimiya-episode-1",
      title: "EP 1",
      description: null,
      number: 1,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      imageHash: "hash",
      airDate: null,
    },
    {
      id: "horimiya-episode-2",
      title: "EP 2",
      description: null,
      number: 2,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      imageHash: "hash",
      airDate: null,
    },
    {
      id: "horimiya-episode-3",
      title: "EP 3",
      description: null,
      number: 3,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      imageHash: "hash",
      airDate: null,
    },
    {
      id: "horimiya-episode-4",
      title: "EP 4",
      description: null,
      number: 4,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      imageHash: "hash",
      airDate: null,
    },
    {
      id: "horimiya-episode-5",
      title: "EP 5",
      description: null,
      number: 5,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      imageHash: "hash",
      airDate: null,
    },
    {
      id: "horimiya-episode-6",
      title: "EP 6",
      description: null,
      number: 6,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      imageHash: "hash",
      airDate: null,
    },
    {
      id: "horimiya-episode-7",
      title: "EP 7",
      description: null,
      number: 7,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      imageHash: "hash",
      airDate: null,
    },
    {
      id: "horimiya-episode-8",
      title: "EP 8",
      description: null,
      number: 8,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      imageHash: "hash",
      airDate: null,
    },
    {
      id: "horimiya-episode-9",
      title: "EP 9",
      description: null,
      number: 9,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      imageHash: "hash",
      airDate: null,
    },
    {
      id: "horimiya-episode-10",
      title: "EP 10",
      description: null,
      number: 10,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      imageHash: "hash",
      airDate: null,
    },
    {
      id: "horimiya-episode-11",
      title: "EP 11",
      description: null,
      number: 11,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      imageHash: "hash",
      airDate: null,
    },
    {
      id: "horimiya-episode-12",
      title: "EP 12",
      description: null,
      number: 12,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      imageHash: "hash",
      airDate: null,
    },
    {
      id: "horimiya-episode-13",
      title: "EP 13",
      description: null,
      number: 13,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-h8EPH92nyRfS.jpg",
      imageHash: "hash",
      airDate: null,
    },
  ],
};

export const episodeInfo = {
  headers: {
    Referer:
      "https://embtaku.pro/embedplus?id=MTUwMjMx&token=exuHicHjRHXmOmjLwNS54Q&expires=1713884679",
  },
  sources: [
    {
      url: "https://www034.vipanicdn.net/streamhls/7244984011002ee29dc294666636b688/ep.1.1709545502.360.m3u8",
      isM3U8: true,
      quality: "360p",
    },
    {
      url: "https://www034.vipanicdn.net/streamhls/7244984011002ee29dc294666636b688/ep.1.1709545502.480.m3u8",
      isM3U8: true,
      quality: "480p",
    },
    {
      url: "https://www034.vipanicdn.net/streamhls/7244984011002ee29dc294666636b688/ep.1.1709545502.720.m3u8",
      isM3U8: true,
      quality: "720p",
    },
    {
      url: "https://www034.vipanicdn.net/streamhls/7244984011002ee29dc294666636b688/ep.1.1709545502.1080.m3u8",
      isM3U8: true,
      quality: "1080p",
    },
    {
      url: "https://www034.vipanicdn.net/streamhls/7244984011002ee29dc294666636b688/ep.1.1709545502.m3u8",
      isM3U8: true,
      quality: "default",
    },
    {
      url: "https://www034.anicdnstream.info/videos/hls/HaYi-njBuLnmsDi1y3xfPw/1713891881/150231/7244984011002ee29dc294666636b688/ep.1.1709545502.m3u8",
      isM3U8: true,
      quality: "backup",
    },
  ],
};

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
