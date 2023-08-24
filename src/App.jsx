import "./App.css";
import { useRandomimage } from "./hooks/useRandomimage";

import {
  NavBar,
  ModalMovie,
  SearchMovieAndtitle,
  Trending,
} from "./components/";

// Importar modales
import Modal from "react-modal";
import { useState } from "react";
import { getMovies } from "./services/movies";
import { Popular } from "./components/Popular";
import { MoviesSearch } from "./components/MoviesSearch";

// debouncer
import debounce from "just-debounce-it";
import { NowPlayingMovies } from "./components/NowPlayingMovies";

export const App = () => {
  const { imageIndex } = useRandomimage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  // Para saber si esta escribiendo o no en el input
  const [IsTyping, setIsTyping] = useState(false);
  const [movieSearch, setMovieSearch] = useState("");
  Modal.setAppElement("#root");
  // Función para abrir el modal y establecer la película seleccionada
  const openModal = (movie) => {
    document.querySelector('swiper-container').classList.add('index-swiper')
    setIsModalOpen(true);
    Promise.all([
      getMovies({
        endpoint: `movie/${movie.id}`,
      }),
      getMovies({ endpoint: `movie/${movie.id}/videos` }),
      getMovies({ endpoint: `movie/${movie.id}/credits` }),
    ])
      .then((data) => {
        const [detail, video, credits] = data;
        setSelectedMovie({
          detail,
          video,
          movie,
          credits,
        });
      })
      .finally();
  };

  // debouncer para buscar las peliculas
  const debounceGetMovies = debounce((movieSearch) => {
    setMovieSearch(movieSearch);
  }, 500);
  // Función para cerrar el modal
  const closeModal = () => {
    setSelectedMovie(null);
    setIsModalOpen(false);
    document.querySelector('swiper-container').classList.remove('index-swiper')

  };
  return (
    <>
      <main>
        <NavBar />
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
        <MoviesSearch
          IsTyping={IsTyping}
          movieSearched={movieSearch}
          openModal={openModal}
        />
        <Trending typeTitle={"Tendencias"} openModal={openModal} />
        <NowPlayingMovies/>
        <Popular openModal={openModal} />
      </section>
    </>
  );
};
