/* eslint-disable react/prop-types */

import { LIST_IMAGES } from "../constants/constantes";

export const SearchMovieAndtitle = ({ imageIndex }) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url("https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)${LIST_IMAGES[imageIndex]}")`,
          backgroundSize: "auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="relative h-72 flex flex-col justify-center items-center "
      >
        <div className="w-full h-full  absolute top-0 left-0  backdrop-blur-0 bg-sky-950/70"></div>

        <div className="w-11/12 absolute">
          <p className="text-white font-extrabold text-4xl">Bienvenidos.</p>
          <span className="text-white font-bold text-3xl">
            Millones de películas, programas de televisión y personas por
            descubrir. Explora ahora.
          </span>
          <div className="w-full h-12  rounded-full bg-white flex justify-between mt-10">
            <input
              className="w-full outline-none ml-10 bg-transparent"
              type="text"
              placeholder="Avengers, Barbie, Oppenh..."
            />
            <button className="w-32 text-white hover:text-black
             font-bold rounded-full bg-gradient-to-r from-cyan-400 to-blue-400">
              Buscar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
