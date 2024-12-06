import React from "react";
import TopHeading from "../components/common/TopHeading";
import servicesProvideData from "../Data/ServicesProvideData.js";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const ServicePage = () => {
  return (
    <>
      <TopHeading heading={"Services"} />
      <section className="relative -mt-56 z-20 px-5">
        <div className="flex flex-col gap-5">
          {servicesProvideData.map((item) => (
            <div key={item.id}>
              {/* <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
              >
                {item.images.map((y, index) => (
                  <SwiperSlide key={index}>
                    <img src={`${y}`} alt="location" />
                  </SwiperSlide>
                ))}
              </Swiper> */}

              <div className="relative w-full lg:w-[1200px] h-[350px] mx-auto rounded-[25px] overflow-hidden group">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  spaceBetween={10}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{ delay: 2000, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  className="service-swiper"
                >
                  {item.images.map((y, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={`${y}`}
                        alt="hello"
                        className="w-full h-full object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="absolute right-0 top-0 h-full w-[700px] bg-gradient-to-l from-black to-transparent text-white p-4 z-20 pr-20">
                  <div className=" flex justify-end h-full items-start">
                    <div className="text-right flex flex-col gap-3">
                      <p className="font-poppins text-[50px] font-bold ">
                        {item.heading}
                      </p>
                      <div className="flex justify-end items-center gap-2 ">
                        <img src="/Icons/location.png" alt="location" />
                        <p className="text-[25px]">{item.location}</p>
                      </div>
                      <div className="flex justify-end items-center gap-2 ">
                        <img src="/Icons/power.png" alt="location" />
                        <p className="text-[25px]">{item.kw}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="font-poppins absolute bottom-[-100%] left-0 z-30 w-full text-white px-20 py-7 pt-28 text-right bg-gradient-to-t from-black to-transparent group-hover:bottom-0 group-hover:opacity-100 opacity-0 transition-all duration-500 ease-out">
                  {item.content}
                </p>
              </div>
              <hr className="border w-3/4 mb-8 mx-auto  mt-14" />
            </div>
          ))}
        </div>
      </section>

      {/* <div className="relative w-[1200px] h-[350px] mx-auto  rounded-[25px] overflow-hidden">
        <img
          src={"/blogImgBg.jpg"}
          alt="hello"
          className="w-full h-full object-cover"
        />

        <div className="absolute right-0 top-0 h-full w-[700px] bg-gradient-to-l from-black to-transparent text-white p-4 z-20 pr-20">
          <div className=" flex justify-end h-full items-center">
            <div className="text-right flex flex-col gap-3">
              <p className="font-poppins text-[50px] font-bold ">IOCL</p>
              <div className="flex justify-end items-center ">
                <img src="/Icons/location.png" alt="location" />
                <p className="text-[25px]">Chengalpattu</p>
              </div>
              <div className="flex justify-end items-center ">
                <img src="/Icons/power.png" alt="location" />
                <p className="text-[25px]">30kw</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ServicePage;
