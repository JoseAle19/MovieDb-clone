/* eslint-disable react/prop-types */
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();
// import required modules
import {
  EffectCoverflow,
  Autoplay,
  Navigation,
} from "swiper/modules";
import { backgroundPoster } from "../constants/constantes";
import { useEffect } from "react";
import { useState } from "react";
export default function SwiperMovie({ movies, openModal }) {
  const [slidesPerView, setSlidesPerView] = useState(3); // Valor por defecto para dispositivos de escritorio

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setSlidesPerView(2); // Cambiar el valor para dispositivos móviles
    } else {
      setSlidesPerView(4); // Cambiar el valor para dispositivos de escritorio
    }
  };

  useEffect(() => {
    handleResize(); // Llamar a la función inicialmente para establecer el valor correcto
    window.addEventListener("resize", handleResize); // Agregar un listener para cambios de tamaño de pantalla
    return () => {
      window.removeEventListener("resize", handleResize); // Limpiar el listener al desmontar el componente
    };
  }, []);
  return (
    <>
      <swiper-container
        effect="coverflow"
        navigation={true}
        slides-per-view={slidesPerView}
        centered-slides="true"
        speed="500"
        autoplay-delay="1000"
        autoplay-pause-on-mouse-enter={true}
        coverflow-effect-rotate={"0"}
        coverflow-effect-stretch={"50"}
        coverflow-effect-depth={"100"}
        coverflow-effect-modifier={"2.5"}
        modules={[Autoplay, EffectCoverflow, Navigation]}
      >
        {movies?.results?.map((movie) => {
          return (
            <swiper-slide key={movie.id}>
              <div  
              onClick={()=>{
                openModal(movie)
              }}
               className="  flex items-center justify-center ">
                <img
                  className="object-cover hover:scale-95 duration-500 "
                  src={backgroundPoster({ keyImg: movie.poster_path })}
                  alt={movie.title}
                />
              </div>
            </swiper-slide>
          );
        })}{" "}
      </swiper-container>
    </>
  );
}
