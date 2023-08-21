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

export const App = () => {
  const { imageIndex } = useRandomimage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
   Modal.setAppElement("#root");
  // Función para abrir el modal y establecer la película seleccionada
  const openModal = (movie) => {
    setIsModalOpen(true);
 
    Promise.all([
      getMovies({
        endpoint: `movie/${movie.id}`,
      }),
      getMovies({ endpoint: `movie/${movie.id}/videos` }),
      getMovies({ endpoint: `movie/${movie.id}/credits` }),
    ]).then((data) => {
      const [detail, video, credits] = data;
      setSelectedMovie({
        detail,
        video,
        movie,
        credits,
      });
    }).finally(
     );
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setSelectedMovie(null);
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="w-auto ">
        <main>
          <NavBar />
          <SearchMovieAndtitle imageIndex={imageIndex} />
        </main>
        <section>
          <ModalMovie
            closeModal={closeModal}
            isModalOpen={isModalOpen}
            selectedMovie={selectedMovie}
            setIsModalOpen={closeModal}
          />
          <Trending typeTitle={"Tendencias"} openModal={openModal} />
          <Popular openModal={openModal} />
        </section>
      </div>
    </>
  );
};
