/* eslint-disable react/prop-types */
import { getMovies } from "../services/movies";
import SwiperMovie from "../swiper/swiper";
import { useEffect, useState } from "react";
export const NowPlayingMovies = ({openModal}) => {
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
        <p className="ml-2 md:ml-12 xl:ml-12  text-4xl font-bold text-gray-600 w-full text-center animate-bounce">En estreno ahora</p>
      </div>
      {movies && <SwiperMovie movies={movies} openModal={openModal} />}
    </div>
  );
};
