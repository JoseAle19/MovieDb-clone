/* eslint-disable react/prop-types */
import {createRef, useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
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
import { Favorites } from "./pages/Favorites";

export const App = () => {
  const storedItemsString = localStorage.getItem("moviesIds");
  const storedItems = storedItemsString ? JSON.parse(storedItemsString) : [];
  const [StoredItems, setStoredItems] = useState(storedItems);

  {
    /* TODO: Si!, si ya sé que se debe y puede hacer con redux, context o zuztand lo hare despues :), GRACIAS*/
  }

  useEffect(() => {
    document.body.classList.add("scroll-visible");
  }, []);
  useEffect(() => {
    localStorage.setItem("moviesIds", JSON.stringify(StoredItems));
  }, [StoredItems]);

  const deleteMovieinLocalStorage = (movie) => {
    const moviesFilter = StoredItems.filter(
      (movieStored) => movieStored.id !== movie.id
    );
    setStoredItems(moviesFilter);
  };
  const { debounceGetMovies, imageIndex, setIsTyping, isOpen, setIsOpen } =
    useMovie();

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
      <Routes>
        <Route
          path="/"
          element={
            <Movies StoredItems={StoredItems} setStoredItems={setStoredItems} />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              moviesStorage={StoredItems}
              deleteMovieinLocalStorage={deleteMovieinLocalStorage}
            />
          }
        />
      </Routes>
    </>
  );
};

export const Movies = ({ StoredItems, setStoredItems }) => {
  const saveMovieinLocalStorage = (movie) => {
    if (StoredItems.find((movieStored) => movieStored.id == movie.id)) {
      return StoredItems;
    } else {
      const {id,poster_path, overview, vote_average, title} = movie
      setStoredItems([...StoredItems, {id, poster_path, overview, vote_average, title, itemRef: createRef(null)}]);
    }
  };

  const {
    IsTyping,
    closeModal,

    isModalOpen,
    movieSearch,
    openModal,
    selectedMovie,
  } = useMovie();

  return (
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
        storedIds={StoredItems}
      />
      <NowPlayingMovies
        saveMovieinLocalStorage={saveMovieinLocalStorage}
        openModal={openModal}
      />
      <Popular
        saveMovieinLocalStorage={saveMovieinLocalStorage}
        storedIds={StoredItems}
        openModal={openModal}
      />
    </section>
  );
};
