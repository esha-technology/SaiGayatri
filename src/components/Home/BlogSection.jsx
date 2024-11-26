import React, { useRef } from "react";
import BlogCard from "../common/BlogCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import BlogData from "../../Data/BlogsData";
import Heading from "../common/Heading";
const BlogSection = () => {
  const solarBlogs = BlogData;

  const swiperRef = useRef(null); // Create a reference to the Swiper instance

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
    <section className="bg-white">
      <Heading>Our Blogs</Heading>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="flex justify-center flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between gap-8">
          <div className="w-full flex justify-between flex-col lg:w-4/5">
            <div className="block lg:text-left text-center">
              <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-5 font-poppins">
                Our <span className="solar filter ">Latest Blogs </span>
              </h2>
              <p className="text-gray-500 mb-10  max-lg:max-w-xl max-lg:mx-auto">
                Welcome to our blog! Here, you'll find helpful articles, expert
                advice, and the latest trends in our field.
              </p>
              <Link
                to={"/blog"}
                className="cursor-pointer border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 lg:mx-0 mx-auto flex justify-center text-gray-900 font-semibold transition-all duration-300 hover:bg-gray-100"
              >
                View All
              </Link>
            </div>
            <div className="flex items-center lg:justify-start justify-center lg:mt-0 mt-8 gap-8 mb-4">
              {/* Left button */}
              <button
                onClick={handlePrev} // Attach the handler to the left button
                className="swiper-button-prev group flex justify-center items-center border border-solid border-slate-600 w-11 h-11 transition-all duration-500 rounded-full hover:bg-slate-600"
              >
                <svg
                  className="h-6 w-6 text-slate-600 group-hover:text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              {/* Right button */}
              <button
                onClick={handleNext} // Attach the handler to the right button
                className="swiper-button-next group flex justify-center items-center border border-solid border-slate-600 w-11 h-11 transition-all duration-500 rounded-full hover:bg-slate-600"
              >
                <svg
                  className="h-6 w-6 text-slate-600 group-hover:text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <Swiper
            ref={swiperRef} // Attach the Swiper instance reference
            modules={[Autoplay, Pagination]}
            spaceBetween={20} // Adds space between the cards
            loop={true} // Enable infinite loop
            autoplay={{
              delay: 3000, // Auto-scroll every 2 seconds
              disableOnInteraction: false, // Keeps auto-scroll working even after user interaction
            }}
            grabCursor={true} // Allow the user to drag the slider
            breakpoints={{
              400: {
                slidesPerView: 1, // On small screens, show 1 card
                spaceBetween: 10, // Reduce space between slides on small screens
              },
              768: {
                slidesPerView: 2, // On medium screens (e.g. tablets), show 2 cards
                spaceBetween: 15, // Reduce space between slides on medium screens
              },
              1024: {
                slidesPerView: 2, // On larger screens (e.g. desktops), show 3 cards
                spaceBetween: 20, // Maintain space between slides on larger screens
              },
            }}
          >
            {solarBlogs.slice(-6).map((item, index) => (
              <SwiperSlide key={index}>
                <BlogCard title={item.title} slug={item.slug} id={item.id} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* </div> */}
      </div>
    </section>
  );
};

export default BlogSection;
