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
    <div className="">
      <div className="bg-[#131313] hidden sm:block">
        <Swiper
          // install Swiper modules
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true, backgroundColor: "#000" }}
          autoplay={{ delay: 5000 }}
        >
          <SwiperSlide>
            <div className="absolute left-0 right-0 top-52 3xl:top-72 text-center">
              <h1 className="text-[120px] text-[#ff0000] font-bold shadow-xl">DETERMINIX</h1>
              <h2 className="text-[40px]  text-[#ffff] bg-[#1D1D1D] font-bold shadow-xl mx-72 3xl:mx-[450px]">A team working in the field of web developers</h2>
            </div>
            <img src={home1} height="100vh" alt="home1" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="absolute left-0 right-0 top-52 3xl:top-72 text-center">
              <h1 className="text-[120px]  text-green-400 font-bold shadow-xl">LIFE.</h1>
              <h2 className="text-[40px]  text-[#ffff] bg-[#1D1D1D] font-bold shadow-xl mx-60 3xl:mx-[400px]">Determinix try to make the web as alive as possible</h2>
            </div>
            <img src={home2} height="100vh" alt="home2" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="absolute left-0 right-0 top-52 3xl:top-72 text-center">
              <h1 className="text-[120px]  text-teal-500 font-bold shadow-sm">COOL.</h1>
              <h2 className="text-[40px]  text-[#ffff] bg-[#1D1D1D] font-bold py-1 mx-72 3xl:mx-[400px]">It's an obligation for Dx to make something cool</h2>
            </div>
            <img src={home3} height="100vh" alt="home3" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
