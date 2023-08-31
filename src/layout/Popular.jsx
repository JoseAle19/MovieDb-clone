/* eslint-disable react/prop-types */
import { useState } from "react";
import { ListMovie } from "../components/ListMovie";
import { useEffect } from "react";
import { getMovies } from "../services/movies";

export const Popular = ({ openModal, saveMovieinLocalStorage, storedIds }) => {
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    // https://api.themoviedb.org/3/movie/popular
    (async () => {
      const responseMovies = await getMovies({
        endpoint: `movie/popular?language=es-ES`,
      });
      setmovies([]);
      setmovies(responseMovies);
    })();
  }, []);

  return (
    <div>
      <div className="m-2 flex gap-6  items-center  mb-4  ">
        <p className="ml-2 md:ml-12 xl:ml-12  text-2xl font-bold gradient-text ">
          Populares
        </p>
      </div>
      <ListMovie
        movies={movies}
        openModal={openModal}
        saveMovieinLocalStorage={saveMovieinLocalStorage}
        storedIds={storedIds}
      />
    </div>
  );
};
