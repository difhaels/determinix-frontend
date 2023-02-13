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
        autoplay={{ delay: 6000 }}
      >
        <SwiperSlide>
          {setTimeout(() => {
            const t1 = document.querySelector(".text1");
            t1.classList.remove("hidden");
          }, 2000)}
          <div className="absolute left-0 right-0 top-52 text-center text1 hidden">
            <h1 className="text-[120px]  text-[#ff0000] font-bold shadow-xl">DETERMINIX</h1>
            <h2 className="text-[40px]  text-[#ffff] font-bold shadow-xl">A team working in the field of web developers</h2>
          </div>
          <img src={home1} width="100%" />
        </SwiperSlide>
        <SwiperSlide>
          {setTimeout(() => {
            const t2 = document.querySelector(".text2");
            t2.classList.remove("hidden");
          }, 8000)}
          <div className="absolute left-0 right-0 top-52 text-center text2 hidden">
            <h1 className="text-[120px]  text-green-400 font-bold shadow-xl">LIFE.</h1>
            <h2 className="text-[40px]  text-[#ffff] font-bold shadow-xl">We try to make the web as alive as possible</h2>
          </div>
          <img src={home2} width="100%"></img>
        </SwiperSlide>
        <SwiperSlide>
          {setTimeout(() => {
            const t3 = document.querySelector(".text3");
            t3.classList.remove("hidden");
          }, 14000)}
          <div className="absolute left-0 right-0 top-52 text-center text3 hidden">
            <h1 className="text-[120px]  text-teal-500 font-bold shadow-sm">COOL.</h1>
            <h2 className="text-[40px]  text-[#ffff] bg-[#1D1D1D] font-bold py-1 mx-72 ">It's an obligation for us to make something cool</h2>
          </div>
          <img src={home3} width="100%" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
