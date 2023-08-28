/* eslint-disable react/prop-types */
import { NO_IMAGE, addPoster } from "../constants/constantes";
import { InformationOption } from "./InformationOptions";
import { ProgressBar } from "./ProgressBar";

export const CardMovie = ({ movie }) => {
    return (
      <div
        key={movie.id}
        className="flex flex-col relative  justify-between  hover:cursor-pointer hover:scale-95 duration-300"
      >
        <div className="w-36 relative ">
          <img
            loading="lazy"
            className="object-cover rounded-xl w-64 h-56 "
            src={`${
              !movie 
                ? NO_IMAGE
                : addPoster({ keyImg: movie?.poster_path  })
            }`}
            alt={movie.title}
          />
  
          <InformationOption />
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
  