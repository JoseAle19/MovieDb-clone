/* eslint-disable react/prop-types */
import { CardMovie } from "../components";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "../App.css";
export const Favorites = ({
  moviesStorage,
  deleteMovieinLocalStorage = { deleteMovieinLocalStorage },
}) => {
  return (
    <main className="m-4">
      <div>
        <h1 className="text-white text-2xl font-bold text-center gradient-text">
          Favoritos
        </h1>
        <TransitionGroup>
          {moviesStorage.map((movie, index) => {
            return (
              <CSSTransition
                key={movie.id + index}
                // nodeRef={movie.itemRef}
                timeout={1000}
                classNames="fade"
              >
                <div className="flex gap-6 bg-black/30 mt-2  ">
                  <div>
                    <CardMovie
                      deleteMovieinLocalStorage={deleteMovieinLocalStorage}
                      movie={movie}
                      fav={true}
                    />
                  </div>
                  <div className="">
                    <p className="text-white font-bold  text-sm line-clamp-[10]  ">
                      {movie.overview}
                    </p>
                  </div>
                </div>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </div>
    </main>
  );
};
