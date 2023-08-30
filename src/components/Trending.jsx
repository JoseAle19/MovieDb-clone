/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Switch } from "./Switch";
// Mocks
// import moviesType from "../mocks/movies_now_playing.json";
import { getMovies } from "../services/movies";
import { ListMovie } from "./ListMovie";

export const Trending = ({ typeTitle, openModal , saveMovieinLocalStorage, storedIds}) => {
  const [today, setToday] = useState(true);
  const [week, setWeek] = useState(false);
  const [movies, setmovies] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setloading(true);
    getMovies({
      endpoint: `/trending/movie/${today ? "day" : "week"}?language=es-ES`,
    })
      .then((data) => setmovies(data))
      .finally(() => {
        setloading(false);
      });
  }, [week, today]);
  return (
    <>
      <div
        style={{
          backgroundImage: `url("https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg")`,
          backgroundSize: "auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
        className="w-full  my-5 flex flex-col justify-center items-center   "
      >
        <div className="w-full  relative ">
          <div className="m-2 flex gap-6  items-center  mb-4  ">
            <p className=" md:ml-12 xl:ml-12  text-2xl font-bold gradient-text">
              {typeTitle}
            </p>
            <Switch
              setToday={setToday}
              setWeek={setWeek}
              today={today}
              week={week}
            />
          </div>

          <ListMovie saveMovieinLocalStorage={saveMovieinLocalStorage} loading={loading} movies={movies} openModal={openModal} storedIds={storedIds}/>
        </div>
      </div>
    </>
  );
};
