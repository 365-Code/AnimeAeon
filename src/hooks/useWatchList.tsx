import { IAnimeResult } from "@consumet/extensions";
import React from "react";
import { toast } from "sonner";

const useWatchList = ({ anime }: { anime: IAnimeResult }) => {
  const [inWatch, setInWatch] = React.useState(false);

  React.useEffect(() => {
    const data = localStorage.getItem("watchList");
    if (data && anime) {
      const list = JSON.parse(data) as Array<any>;
      const exist = list.findIndex((v) => v.id == anime.id);
      if (exist != -1) {
        setInWatch(true);
      }
    }
  }, [anime]);

  const handleWatchList = () => {
    const data = localStorage.getItem("watchList");
    if (inWatch) {
      toast("Removed From WatchList");
      setInWatch(false);
      if (data) {
        const list = JSON.parse(data) as Array<any>;
        localStorage.setItem(
          "watchList",
          JSON.stringify(list.filter((v) => v.id != anime.id)),
        );
      }
      return;
    }

    setInWatch(true);
    const watchItem = {
      id: anime.id,
      image: anime.image,
      title: anime.title,
      genres: anime.genres,
      description: anime.description,
      type: anime.type?.toLowerCase(),
      status: anime.status?.toLowerCase(),
    };
    if (data) {
      const list = JSON.parse(data) as Array<any>;
      const exist = list.findIndex((v) => v.id == anime.id);
      if (exist == -1) {
        toast.success("Added to WatchList");
        localStorage.setItem("watchList", JSON.stringify([...list, watchItem]));
      }
    } else {
      toast.success("Added to WatchList");
      localStorage.setItem("watchList", JSON.stringify([watchItem]));
    }
  };

  return { inWatch, handleWatchList };
};

export default useWatchList;
