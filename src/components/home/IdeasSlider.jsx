import React from "react"; // Asegúrate de importar React
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Importa los estilos de Swiper

// Importa los estilos del componente
import styles from "@/styles/carousel.module.css";

// Importa las imágenes directamente
import Slide1 from "@/assets/images/ideas/1.webp";
import Slide2 from "@/assets/images/ideas/2.webp";
import Slide3 from "@/assets/images/ideas/3.webp";
import Slide4 from "@/assets/images/ideas/4.webp";
import Slide5 from "@/assets/images/ideas/5.webp";
import Slide6 from "@/assets/images/ideas/6.webp";
import Slide7 from "@/assets/images/ideas/7.webp";
import Slide8 from "@/assets/images/ideas/8.webp";
import Slide9 from "@/assets/images/ideas/9.webp";
import Slide10 from "@/assets/images/ideas/10.webp";
import Slide11 from "@/assets/images/ideas/11.webp";
import Slide12 from "@/assets/images/ideas/12.webp";

export default function ImageCarousel() {
  return (
    <>
    <div className="mt-5">
        <h2 className={`${styles.titleTxt}`}>Conocé Nuestras Ideas</h2>
    </div>
      <Swiper
        className={`rounded-5 mt-1 mb-5 ${styles.carouselContainer}`}
        spaceBetween={50}
        slidesPerView={2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img
            src={Slide1.src}
            alt="Slide 1"
            className={`${styles.imgCarousel}`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Slide2.src}
            alt="Slide 2"
            className={`${styles.imgCarousel}`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Slide3.src}
            alt="Slide 3"
            className={`${styles.imgCarousel}`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Slide4.src}
            alt="Slide 4"
            className={`${styles.imgCarousel}`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Slide5.src}
            alt="Slide 5"
            className={`${styles.imgCarousel}`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Slide6.src}
            alt="Slide 6"
            className={`${styles.imgCarousel}`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Slide7.src}
            alt="Slide 7"
            className={`${styles.imgCarousel}`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Slide8.src}
            alt="Slide 8"
            className={`${styles.imgCarousel}`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Slide9.src}
            alt="Slide 9"
            className={`${styles.imgCarousel}`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Slide10.src}
            alt="Slide 10"
            className={`${styles.imgCarousel}`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Slide11.src}
            alt="Slide 11"
            className={`${styles.imgCarousel}`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Slide12.src}
            alt="Slide 12"
            className={`${styles.imgCarousel}`}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
