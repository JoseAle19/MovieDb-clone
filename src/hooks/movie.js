import { useState } from "react";
import { useRandomimage } from "./useRandomimage";

// Importar modales
import Modal from "react-modal";
// debouncer
import debounce from "just-debounce-it";
import { getMovies } from "../services/movies";


export const useMovie = () => {
  const [isOpen, setIsOpen] = useState(false);

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
  return {
    imageIndex,
    isModalOpen,
    selectedMovie,
    IsTyping,
    movieSearch,
    openModal,
    debounceGetMovies,
    closeModal,
    setIsTyping,
    isOpen,
setIsOpen  }
}
