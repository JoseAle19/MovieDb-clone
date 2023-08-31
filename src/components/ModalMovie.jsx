/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { CardMovieAbout } from "./CardMovieAbout";
import Modal from "react-modal";
import { urlVideo } from "../utils/constants/constantes";
import { Card } from "./Card";
// Importar la libreria de youtube
export const ModalMovie = ({
  closeModal,
  isModalOpen,
  selectedMovie,
}) => {
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Asegúrate de restaurar el scroll cuando el componente se desmonta
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="h-[70%] w-5/6 md:w-[75%] xl:w-[70%] backdrop-blur-md bg-black/70 overflow-y-auto  scroll-visible p-2  "
        overlayClassName="modal-overlay"
      >
        <section className="  xl:flex md:flex md:flex-row xl:flex-row flex flex-col gap-5 shadow-2xl shadow-slate-400  ">
          <div className="  md:w-1/2 xl:w-1/2  flex gap-5 items-center  ">
            <VideoPlayer results={selectedMovie?.video?.results} />
          </div>
          <div
            style={{
              backgroundImage: `url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${selectedMovie?.movie?.poster_path}')`,
            }}
            className={`w-full md:w-1/2 xl:w-1/2   h-full flex items-center justify-center
           bg-no-repeat
           bg-cover
           relative
           bg-center
  `}
          >
            <span className="absolute w-full h-full blur-full bg-black/70"></span>

            <div className="z-10">
              <CardMovieAbout
                movie={selectedMovie?.movie}
                credits={selectedMovie?.credits}
                detail={selectedMovie?.detail}
              />
            </div>
           
          </div>
        </section>
        {!selectedMovie?.credits ? (
          <div className=" w-full h-1/2 flex justify-center items-center ">
            <span className="loader-images"></span>
          </div>
        ) : (
          <section className="w-full  flex flex-col items-center animate-fadeIn ">
            <div className="w-[90%] h-1/2 mt-5  ">
              <p className="text-white font-bold text-sm ">
                {selectedMovie?.movie?.overview}
              </p>
            </div>
            <div className="w-[90%] gap-5 mt-2 flex overflow-x-auto scroll-visible animate-fadeIn">
              {selectedMovie?.credits?.cast?.map((character) => {
                return (
                  <div key={character.id} className="flex-none w-[100px] mb-5 ">
                    <Card {...character} />
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </Modal>
    </>
  );
};

export const VideoPlayer = ({ results = [] }) => {
  return (
    <div className=" w-full h-full">
      {results.length > 1 ? (
        <iframe
          className=" w-full h-full"
          src={`${urlVideo}${results[0]?.key}`}
          frameBorder="0"
        />
      ) : (
        <p className="text-white  text-center"> sin video </p>
      )}
    </div>
  );
};
