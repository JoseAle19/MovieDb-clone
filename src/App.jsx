/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
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
        <Route path="/" element={<Movies StoredItems={StoredItems} setStoredItems={setStoredItems} />} />
        <Route path="/favorites" element={<Favorites  moviesStorage={StoredItems} />} />
      </Routes>
    </>
  );
};

export const Movies = ({StoredItems, setStoredItems}) => {

  const saveMovieinLocalStorage = (movie) => {
    if (StoredItems.includes(movie)) {
      return;
    } else {
      setStoredItems([...StoredItems, movie]);
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

  useEffect(() => {
    localStorage.setItem("moviesIds", JSON.stringify(StoredItems));
  }, [StoredItems]);

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

