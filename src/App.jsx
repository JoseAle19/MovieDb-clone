import "./App.css";

import {
  NavBar,
  ModalMovie,
  SearchMovieAndtitle,
  Trending,
} from "./components/";

import { Popular } from "./components/Popular";
import { MoviesSearch } from "./components/MoviesSearch";

import { NowPlayingMovies } from "./components/NowPlayingMovies";
import { useMovie } from "./hooks/movie";

export const App = () => {
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
        <Trending typeTitle={"Tendencias"} openModal={openModal} />
        <NowPlayingMovies openModal={openModal} />
        <Popular openModal={openModal} />
      </section>
    </>
  );
};
