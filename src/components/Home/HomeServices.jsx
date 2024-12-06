import React from "react";
import Heading from "../common/Heading";
import HeroSectionCard from "./HeroSectionCard";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/autoplay";

// import required modules

const HomeServices = () => {
  return (
    <>
      <section className="w-full   mx-auto py-14">
        <div className="w-full mx-auto mb-10 lg:mb-20">
          <h1 className="  font-poppins font-extrabold  text-center mb-5 text-black  lg:text-[50px] text-[27px] ">
            Our <span className="solar">Successful</span> Solar Installations{" "}
          </h1>
          <p className="text-[20px] px-5 lg:px-28 font-medium leading-8 text-gray-400 text-center mb-14 mx-auto hidden lg:block">
            At Sai Gayatri Greentech, we've installed solar systems across many
            locations, helping homes and businesses save energy and costs. Our
            projects reflect our commitment to reliable, sustainable solutions.
            Discover the key places we've made a positive impact.
          </p>
        </div>
        <Swiper
          slidesPerView={2}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          loop={true} // Enable infinite loop
          autoplay={{
            delay: 1000, // Auto-scroll every 2 seconds
            disableOnInteraction: false, // Keeps auto-scroll working even after user interaction
          }}
          grabCursor={true} // Allow the user to drag the slider
          className="mySwiper"
          breakpoints={{
            1000: {
              spaceBetween: 200,
            },
            1284: {
              spaceBetween: -50,
            },
            1400: {
              spaceBetween: -100,
            },
            1500: {
              spaceBetween: -150,
            },
          }}
        >
          <SwiperSlide>
            <HeroSectionCard />
          </SwiperSlide>
          <SwiperSlide>
            <HeroSectionCard />
          </SwiperSlide>
          <SwiperSlide>
            <HeroSectionCard />
          </SwiperSlide>
          <SwiperSlide>
            <HeroSectionCard />
          </SwiperSlide>
          <SwiperSlide>
            <HeroSectionCard />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default HomeServices;
