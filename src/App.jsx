import "./App.css";

import {
  NavBar,
  ModalMovie,
  SearchMovieAndtitle,
  Trending,
  NowPlayingMovies,
  Popular,
  MoviesSearch,
} from "./components/";

import { useMovie } from "./hooks/movie";
import { useState } from "react";

export const App = () => {
  {
    /* TODO: Si!, si ya sé que se debe y puede hacer con redux, context o zuztand lo hare despues :), GRACIAS*/
  }
  const storedItemsString = localStorage.getItem("moviesIds");
  const storedItems = storedItemsString ? JSON.parse(storedItemsString) : [];
  const [StoredItems, setStoredItems] = useState(storedItems);

  const {
    IsTyping,
    closeModal,
    debounceGetMovies,
    imageIndex,
    isModalOpen,
    movieSearch,
    openModal,
    selectedMovie,
    setIsTyping,
    isOpen,
    setIsOpen,
  } = useMovie();

  const saveMovieinLocalStorage = (movieId) => {
    if (StoredItems.includes(movieId)) {
      return;
    } else {
      setStoredItems([...StoredItems, movieId]);
    }
  };
  localStorage.setItem("moviesIds", JSON.stringify(StoredItems));

  return (
    <>
      <main>
        <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <SearchMovieAndtitle
          imageIndex={imageIndex}
          typing={setIsTyping}
          searchMovie={debounceGetMovies}
        />
      </main>
      <section>
        <ModalMovie
          closeModal={closeModal}
          isModalOpen={isModalOpen}
          selectedMovie={selectedMovie}
          setIsModalOpen={closeModal}
        />
        {IsTyping && (
          <MoviesSearch
            IsTyping={IsTyping}
            movieSearched={movieSearch}
            openModal={openModal}
          />
        )}
        <Trending
          saveMovieinLocalStorage={saveMovieinLocalStorage}
          typeTitle={"Tendencias"}
          openModal={openModal}
          storedIds={storedItems}
        />
        <NowPlayingMovies
          saveMovieinLocalStorage={saveMovieinLocalStorage}
          openModal={openModal}
        />
        <Popular
          saveMovieinLocalStorage={saveMovieinLocalStorage}
          storedIds={storedItems}
          openModal={openModal}
        />
      </section>
    </>
  );
};
