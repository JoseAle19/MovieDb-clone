import { getMovies } from "../services/movies";
import SwiperMovie from "../swiper";
import { useEffect, useState } from "react";
export const NowPlayingMovies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getMovies({ endpoint: "movie/now_playing" });
      setMovies(data);
    })();
  }, []);

  return (
    <div>
      <div className="m-2 flex gap-6  items-center  mb-4  ">
        <p className="ml-2 md:ml-12 xl:ml-12  text-2xl font-bold"></p>
      </div>
      {movies && <SwiperMovie movies={movies} />}
    </div>
  );
};
