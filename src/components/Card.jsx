/* eslint-disable react/prop-types */
import { NO_IMAGE, addPoster } from "../utils/constants/constantes";

export const Card = ({ profile_path, name, character }) => {
  return (
    <div className="flex flex-col  justify-between w-full h-full">
      <div className="h-1/2">
        <img
          className="object-cover w-full h-full  rounded-xl  text-white"
          src={!profile_path ? NO_IMAGE : addPoster({ keyImg: profile_path })}
          alt={name ?? "No name"}
        />
      </div>
      <div
        className="  text-center font-bold text-white
flex flex-col  justify-around gap-5  h-1/2  overflow-ellipsis line-clamp-2"
      >
        <p className="  text-md">{name ?? "Sin nombre"}</p>
        <p className="  text-sm">Personaje: {character ?? "Sin nombre"}</p>
      </div>
    </div>
  );
};
