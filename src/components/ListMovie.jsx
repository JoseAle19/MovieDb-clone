/* eslint-disable react/prop-types */
import { CardMovie } from "./CardMovie";

export const ListMovie = ({ movies, openModal, loading }) => {
  return (
    <div className="flex flex-row overflow-x-scroll scroll-visible">
      {movies?.results?.map((movie, index) => {
        return (
          <div
            onClick={() => {
              openModal(movie);
            }}
            key={index}
            className={`  ${index === 0 ? "ml-12" : "ml-5"} ${
              !loading ? "animate-fadeIn" : "animate-fadeOut"
            } `}
          >
            <CardMovie movie={movie} loading={loading} />
          </div>
        );
      })}
    </div>
  );
};
