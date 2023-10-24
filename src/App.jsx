import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function App() {
  const [slides, setSlides] = useState(["1", "2", "3", "4", "5"]);

  const reduceSlidesByIndex = (index) => {
    setSlides((prev) => [...prev].filter((slide) => slide === index));
  };

  const resetSlidesByIndex = (index) => {
    setSlides(["1", "2", "3", "4", "5"]);
  };

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {slides.map((el, id) => {
          return (
            <SwiperSlide
              // onMouseLeave={resetSlidesByIndex}
              onMouseEnter={(e) => console.log(e)}
              key={id}
            >
              {el}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
