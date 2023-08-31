/* eslint-disable react/prop-types */
import { getMovies } from "../services/movies";
import SwiperMovie from "../swiper/swiper";
import { useEffect, useState } from "react";
export const NowPlayingMovies = ({ openModal }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getMovies({
        endpoint: "movie/now_playing?language=es-ES&page=1",
      });
      setMovies(data);
    })();
  }, []);

  return (
    <div  className="">
      <div className="m-2 flex gap-6  items-center  mb-4  ">
        <p className="ml-2 md:ml-12 xl:ml-12  text-4xl font-bold text-gray-600 w-full text-center animate-bounce gradient-text">
          En cartelera hoy
        </p>
      </div>
      {movies && <SwiperMovie movies={movies} openModal={openModal} />}
    </div>
  );
};
