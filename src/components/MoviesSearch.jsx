/* eslint-disable react/prop-types */
import { ListMovie } from "./ListMovie";
import { useEffect } from "react";
import { getMovies } from "../services/movies";
import { useState } from "react";
export const MoviesSearch = ({ IsTyping, movieSearched,openModal }) => {
 
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies({
      endpoint: `search/movie?query=${movieSearched}&include_adult=false&language=es-ES&page=1`,
    }).then((searchMovies) => setMovies(searchMovies));
  }, [movieSearched]);

  return (
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        IsTyping ? "max-h-[500px] mt-2 opacity-100" : "max-h-0 mt-0 opacity-0"
      }`}
    >
      {" "}
      <div className="m-2 flex gap-6  items-center  mb-4  ">
        <p className="ml-2 md:ml-12 xl:ml-12  text-2xl font-bold">
          Pelicula: {movieSearched}
        </p>
      </div>
      <ListMovie loading={false} movies={movies} openModal={openModal} />
    </div>
  );
};
