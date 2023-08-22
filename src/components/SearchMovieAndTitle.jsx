/* eslint-disable react/prop-types */

import { LIST_IMAGES } from "../constants/constantes";

export const SearchMovieAndtitle = ({ imageIndex, typing, searchMovie}) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url("https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)${LIST_IMAGES[imageIndex]}")`,
          backgroundSize: "auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="flex flex-col justify-center items-center bg-"
      >
        <div className="  w-full h-full  backdrop-blur-0 bg-sky-950/60"></div>

        <div className=" mx-5 md:my-10 xl:my-10 ">
          <p className="text-white font-extrabold text-[45px] md:text-4xl">
            Bienvenidos.
          </p>
          <span className="text-white font-bold text-3xl">
            Millones de películas, programas de televisión y personas por
            descubrir. Explora ahora.
          </span>
          <div className=" rounded-full bg-white flex justify-between my-10">
            <input
              onChange={(e) => {
                const { value } = e.target;
                if (value.length > 0) {
                  typing(true);
                  searchMovie(value)
                  
                } else {
                  typing(false);
                }
              }}
              className="w-full outline-none ml-10  bg-transparent p-2"
              type="text"
              placeholder="Avengers, Barbie, Oppenh..."
            />
            <button
              className="w-32 text-white hover:text-black
             font-bold rounded-full bg-gradient-to-r from-cyan-400 to-blue-400"
            >
              Buscar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
