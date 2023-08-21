/* eslint-disable react/prop-types */
import { useState } from "react";
import { ListMovie } from "./ListMovie";
import { useEffect } from "react";
import { getMovies } from "../services/movies";

export const Popular = ({ openModal }) => {
  const [movies, setmovies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // https://api.themoviedb.org/3/movie/popular
    (async () => {
      const responseMovies = await getMovies({
        endpoint: `movie/popular?language=es-ES`,
      });
      setmovies([]);
      setmovies(responseMovies);
      setLoading(false);
    })();
  }, []);

  return (
    <div>
      <div className="m-2 flex gap-6  items-center  mb-4  ">
      <p className="ml-2 md:ml-12 xl:ml-12  text-2xl font-bold">Populares</p>

      </div>
      <ListMovie loading={loading} movies={movies} openModal={openModal} />
    </div>
  );
};
