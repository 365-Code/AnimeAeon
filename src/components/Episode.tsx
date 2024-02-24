import React, { useEffect, useState } from "react";

const Episode = ({
  episode: ep,
}: {
  episode: { id: string; name: string };
}) => {
  type episodeType = {
    name: string;
    episodes: string;
    stream: {
      Referer: string;
      sources: [
        {
          file: string;
          label: string;
          type: string;
        }
      ];
      sources_bk: [
        {
          file: string;
          label: string;
          type: string;
        }
      ];
    };
    servers: {
      vidcdn: string;
      streamwish: string;
      mp4upload: string;
      doodstream: string;
      filelions: string;
    };
  };

  const [episode, setEpisode] = useState<episodeType>();

  const fetchEpisode = async () => {
    try {
      const result = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/episode/${ep.name}`
      );
      if (result.ok) {
        const { results } = await result.json();
        const res = results as episodeType;
        setEpisode(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEpisode();
  }, []);

  // console.log(episode?.stream.sources[0]?.file);

  return (
    // <div className='rounded-lg overflow-hidden min-w-[150px] h-[150px] border border-black'>
    //     {ep.name}

    //     <iframe></iframe>
    <>
      <video
        crossOrigin=""
        playsInline
        data-poster="https://thumb.anime-dex.workers.dev/get/ore-dake-level-up-na-ken-episode-1"
      >
        <source
            src={episode?.stream?.sources[0].file || ""}
        //   src={URL.createObjectURL(episode?.stream?.sources[0].file)}
          type="application/x-mpegURL"
        />
      </video>
    </>
    // </div>
  );
};

export default Episode;
