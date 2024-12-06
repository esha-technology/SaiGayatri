import React, { useRef } from "react";
// import Heading from "../common/Heading";
import HeroSectionCard from "./HeroSectionCard";
import servicesProvideData from "../../Data/servicesProvideData";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/autoplay";

// import required modules

const HomeServices = () => {
  const top5Data = servicesProvideData.slice(0, 5);
  // console.log(top5Data);

  const swiperRef = useRef(null);

  // Handler for the left button (prev)
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  // Handler for the right button (next)
  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <>
      <section className="w-full   mx-auto pb-20">
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
          ref={swiperRef}
          slidesPerView={1}
          centeredSlides={true}
          modules={[Autoplay, Pagination]}
          loop={true} // Enable infinite loop
          autoplay={{
            delay: 3000, // Auto-scroll every 2 seconds
            disableOnInteraction: false, // Keeps auto-scroll working even after user interaction
          }}
          grabCursor={true} // Allow the user to drag the slide
          className="mySwiper border relative -z-10 "
          breakpoints={{
            800: {
              spaceBetween: 400,
            },
            1000: {
              slidesPerView: 2,
              spaceBetween: 200,
            },
            1200: {
              slidesPerView: 2,
              spaceBetween: -60,
            },
            1284: {
              slidesPerView: 2,
              spaceBetween: -50,
            },
            1400: {
              slidesPerView: 2,
              spaceBetween: -100,
            },
            1500: {
              slidesPerView: 2,
              spaceBetween: -150,
            },
          }}
        >
          {top5Data.map((item, index) => (
            <SwiperSlide key={index}>
              <HeroSectionCard data={item} />
            </SwiperSlide>
          ))}

          <div
            className=" absolute top-32 left-28 z-10 w-fit h-fit arrowShadow"
            onClick={handlePrev}
          >
            <img src="/Icons/ServiceArrow.png" alt="arrow" />
          </div>
          <div
            className=" absolute top-32 right-28 z-10 w-fit h-fit arrowShadow rotate-180"
            onClick={handleNext}
          >
            <img src="/Icons/ServiceArrow.png" alt="arrow" />
          </div>
        </Swiper>
      </section>
    </>
  );
};

export default HomeServices;
