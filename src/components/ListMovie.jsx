/* eslint-disable react/prop-types */
import { CardMovie } from "./CardMovie";

export const ListMovie = ({
  movies,
  openModal,
  loading,
  saveMovieinLocalStorage,
  storedIds = [],
}) => {

  return (
    <div className="flex flex-row overflow-x-scroll scroll-visible">
      {!movies.results ? (
        <div className="w-full h-56  flex items-center justify-center text-2xl text-white font-bold">
          <p>No se pudo cargar la información</p>
        </div>
      ) : (
        movies?.results?.map((movie, index) => {
          return (
            <div
              key={index}
              className={`  ${index === 0 ? "ml-12" : "ml-5"} ${
                !loading ? "animate-fadeIn" : "animate-fadeOut"
              } `}
            >
              <CardMovie
                color={storedIds.find( movieF => movieF.id === movie.id )? "#f34336" : "white"}
                saveMovieinLocalStorage={saveMovieinLocalStorage}
                openModal={openModal}
                movie={movie}
                loading={loading}
              />
            </div>
          );
        })
      )}
    </div>
  );
};
