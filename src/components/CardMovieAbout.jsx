/* eslint-disable react/no-unescaped-entities */
import {  addPoster } from "../constants/constantes";
import DetailMovie from "../mocks/details_movie.json";
import Movies from "../mocks/movies_top.json";
import { ProgressBar } from "./ProgressBar";
/* eslint-disable react/prop-types */
// Importar json de peliculas para tener el tipado, solo desarollo
export const CardMovieAbout = ({
  movie = Movies.results[0],
  detail = DetailMovie,
}) => {
  return (
    <section className="w-full h-full flex  p-2 gap-5">
      <div className="w-[30%]  h-[80%] animate-fadeIn">
        <img
          className="object-cover w-full h-full rounded-md"
          src={`${addPoster({ keyImg: movie?.backdrop_path })}`}
          alt={`Pelicula: ${movie?.title}`}
        />
      </div>
 
      <div className="w-[70%]">
        <div className="flex gap-2  ">
          <ProgressBar percent={movie?.vote_average} />
          <p className="text-white font-bold">
            Puntuación <br /> de usuario
          </p>
        </div>
        <div className="w-full flex flex-col items-center justify-between mt-10 ">
          <p className=" text-white/70 font-bold text-[12px] " >20/7/2023 (MX) Comedia, Aventura, Fantasía 1h 54m</p>
          <p className=" text-white font-bold ">"{detail?.tagline}"</p>
        </div>
      </div>
    </section>
  );
};
