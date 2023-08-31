/* eslint-disable no-unused-vars */
import {  CardMovie } from "../components";
import Movies from "../mocks/movies_top.json";

export const Favorites = ({moviesStorage}) => {
  return (
    <main className="m-4">
      <div>
        <h1 className="text-white text-2xl font-bold text-center gradient-text ">
          Favoritos
        </h1>
        <div className="grid grid-cols-2 gap-5 mt-5 ">
          {moviesStorage.map((movie) => {
            return (
              <div key={movie.id} className="flex gap-6 ">
                <div>
                  <CardMovie movie={movie} />
                </div>
                <div className="">
                    <p className="text-white font-bold  text-sm" >{movie.overview}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};
