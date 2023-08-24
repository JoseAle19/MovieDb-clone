/* eslint-disable react/jsx-no-undef */
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import movies from "../mocks/movies_now_playing.json";
import { useEffect, useRef, useState } from "react";
import { addPoster, backgrounPoster } from "../constants/constantes";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

register();
export const NowPlayingMovies = () => {
  const swiperElRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setpreviousIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(0);
  // direccion del scroll
  const [swipeDirection, setSwipeDirection] = useState("next");
  useEffect(() => {
    swiperElRef.current.addEventListener("slidechange", (e) => {
      const { activeIndex, previousIndex, swipeDirection } = e.detail[0];
      setSwipeDirection(swipeDirection);
      // console.log('Anterior index')
      setpreviousIndex(previousIndex);
      // console.log('Actual index')
      // console.log(e.detail[0].activeIndex);
      setCurrentIndex(activeIndex);
      // console.log('siguiente index')
      setNextIndex(activeIndex + 1);
    });
  }, []);

  return (
    <swiper-container
      speed={900}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      ref={swiperElRef}
      slides-per-view="3"
      centered-slides={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
      allowSlidePrev={false}
      allowSlideNext={false}
      mousewheel={true}
    >
      {movies.results.map((movie, index) => {
        return (
          <swiper-slide key={movie.id}>
            <div className=" relative flex justify-center items-center">
              <div
             className={` bg-no-repeat bg-center bg-contain  h-72 w-96 flex items-center justify-center ${
                  currentIndex === index
                    ? "z-20 bg-blue-500 h-72 w-96  duration-500 "
                    : previousIndex === index
                    ? ` backdrop-blur-2xl bg-black/90   scale-75 duration-300 ${
                        swipeDirection !== "next" ? "-ml-20" : "-mr-20"
                      }`
                    : nextIndex === index
                    ? ` backdrop-blur-2xl bg-black/90   scale-75 duration-300 ${
                        swipeDirection === "next" ? "-ml-20" : "-mr-20"
                      }`
                    : ` backdrop-blur-2xl bg-black/90   scale-75 duration-300 ${
                        swipeDirection === "next" ? "-ml-20" : "-mr-20"
                      }`
                }`}
              >
                <div className="relative  h-full w-full ">
                  <img  className="z-20  object-cover h-full w-full" src={backgrounPoster({keyImg:movie.backdrop_path})} alt="" />
                  <div className="absolute bottom-0 w-full h-10" >
                    <p className="text-white text-2xl font-bold text-center" >{movie.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        );
      })}
    </swiper-container>
  );
};
