import { IAnimeEpisode } from "@consumet/extensions";
import EpisodeHandler from "./EpisodeHandler";
import { toast } from "sonner";
import Player from "./Player";
import { notFound } from "next/navigation";

const fetchEpisode = async (episode: string) => {
  try {
    const response = await fetch(
      "/api/anilist/episode-sources?episodeId=" + episode,
    );
    if (!response.ok) {
      toast.error("Couldn't Fetch The episode");
      return;
    }
    const res = await response.json();
    if (res.success) {
      const epSources = res.sources as { quality: string; url: string }[];
      const source =
        epSources.find((e) => e.quality == "default")?.url ||
        epSources.find((e) => e.quality == "360")?.url ||
        epSources.find((e) => e.quality == "480")?.url ||
        epSources.find((e) => e.quality == "720")?.url ||
        "";
      return source;
    }
  } catch (error) {
    throw error;
  }
};

const VideoPlayer = async ({
  episodes,
  totalEpisodes,
  episode,
}: {
  episodes?: IAnimeEpisode[];
  totalEpisodes?: number;
  episode: string;
}) => {
  const epSource = await fetchEpisode(episode);

  if (!epSource) notFound();

  return (
    <div className="relative my-auto flex h-fit w-full flex-col">
      <div className="mb-2 flex w-full flex-wrap items-center justify-between gap-1">
        <EpisodeHandler
          episode={episode}
          episodes={episodes}
          totalEpisodes={totalEpisodes}
        />
      </div>
      <div className="relative">
        <Player source={epSource} />
      </div>
      {/* </div> */}
    </div>
  );
};

export default VideoPlayer;

// import { useEffect, useState } from "react";
// import { IAnimeEpisode } from "@consumet/extensions";
// import EpisodeHandler from "./EpisodeHandler";
// import { LoaderPinwheel } from "lucide-react";
// import { useMutation } from "@tanstack/react-query";
// import dynamic from "next/dynamic";
// import { toast } from "sonner";
// import Player from "./Player";

// const VideoPlayer = ({
//   episodes,
//   totalEpisodes,
//   episode,
// }: {
//   episodes?: IAnimeEpisode[];
//   totalEpisodes?: number;
//   episode: string;
// }) => {
//   const [epSources, setEpSources] = useState<
//     { isM3U8: Boolean; quality: string; url: string }[]
//   >([]);
//   const [epSource, setEpSource] = useState<string>(
//     "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
//   );

//   const { mutateAsync: fetchEpisode, isPending: isLoading } = useMutation({
//     mutationKey: ["fetch-episode"],
//     mutationFn: async () => {
//       try {
//         const response = await fetch(
//           "/api/anilist/episode-sources?episodeId=" + episode,
//         );
//         if (!response.ok) {
//           toast.error("Couldn't Fetch The episode");
//           setEpSource("");
//           setEpSources([]);
//           return;
//         }
//         const res = await response.json();
//         if (res.success) {
//           setEpSources(res.sources);
//           const source =
//             epSources.find((e) => e.quality == "default")?.url ||
//             epSources.find((e) => e.quality == "360")?.url ||
//             epSources.find((e) => e.quality == "480")?.url ||
//             epSources.find((e) => e.quality == "720")?.url ||
//             "";
//           setEpSource(source);
//         }
//       } catch (error) {
//         toast.error("Couldn't Fetch Episode");
//       }
//     },
//   });

//   useEffect(() => {
//     const debounce = setTimeout(() => {
//       if (episode) fetchEpisode();
//     }, 1000);
//     return () => clearTimeout(debounce);
//   }, [episode]);

//   return (
//     <div className="relative my-auto flex h-fit w-full flex-col">
//       <div className="mb-2 flex w-full flex-wrap items-center justify-between gap-1">
//         <EpisodeHandler
//           episode={episode}
//           episodes={episodes}
//           totalEpisodes={totalEpisodes}
//         />
//       </div>
//       <div className="relative">
//         <Player source={epSource} />
//         {isLoading && (
//           <div className="plyr-react absolute left-0 top-0 flex h-full w-full animate-pulse flex-col items-center justify-center rounded-xl bg-transparent/50">
//             <LoaderPinwheel className="animate-spin" size={55} />
//           </div>
//         )}
//       </div>
//       {/* </div> */}
//     </div>
//   );
// };

// export default VideoPlayer;
