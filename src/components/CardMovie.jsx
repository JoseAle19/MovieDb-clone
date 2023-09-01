/* eslint-disable react/prop-types */
import { iconClose } from "../svgs/icons";
import { NO_IMAGE, addPoster } from "../utils/constants/constantes";
import { InformationOption } from "./InformationOptions";
import { ProgressBar } from "./ProgressBar";

export const CardMovie = ({
  movie,
  openModal,
  saveMovieinLocalStorage,
  deleteMovieinLocalStorage,
  color,
  fav = false,
}) => {
  return (
    <div
      key={movie.id}
      className="flex flex-col relative  justify-between  hover:cursor-pointer hover:scale-95 duration-300"
    >
      <div className="w-36 relative ">
        <img
          onClick={() => {
            openModal(movie);
          }}
          loading="lazy"
          className="object-cover rounded-xl w-64 h-56 "
          src={`${
            !movie ? NO_IMAGE : addPoster({ keyImg: movie?.poster_path })
          }`}
          alt={movie.title}
        />
        {/* el fav sirve para que valide si es verdader solo aparezca en la pagina de peliculas y no la de favoritos  */}
        {fav ? (
          <span
            onClick={() => {
              deleteMovieinLocalStorage(movie);
            }}
          >
            <div className="absolute top-0 left-0  w-full flex justify-end ">
              {iconClose}
            </div>
          </span>
        ) : (
          <span
            onClick={() => {
              saveMovieinLocalStorage(movie);
            }}
          >
            <InformationOption color={color} />
          </span>
        )}
        <div className="absolute -bottom-5 left-2">
          <ProgressBar percent={movie.vote_average} />
        </div>
      </div>
      <div className=" h-full flex flex-col justify-around items-center mt-5">
        <p className=" text-white font-bold text-center ">{movie.title}</p>
        <p className=" text-white text-sm font-light">{movie.release_date}</p>
      </div>
    </div>
  );
};
