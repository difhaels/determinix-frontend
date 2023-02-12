import home1 from "./img/home/home1.jpeg";
import home2 from "./img/home/home2.jpeg";
import home3 from "./img/home/home3.jpeg";

// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import "./css/Home.css";

export default function Home() {
  return (
    <div className="bg-black">
      <Swiper
        // install Swiper modules
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true, backgroundColor: "#000" }}
        autoplay={{ delay: 4500 }}
      >
        <SwiperSlide>
          <img src={home1} width="100%" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={home2} width="100%" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={home3} width="100%" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
