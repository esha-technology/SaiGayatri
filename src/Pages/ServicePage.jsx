import TopHeading from "../components/common/TopHeading";
import servicesProvideData from "../Data/ServicesProvideData.js";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import { useLocation } from "react-router-dom";
import React, { useEffect, useRef } from "react";

const ServicePage = () => {
  const location = useLocation();
  const sectionRefs = useRef({}); // Object to hold refs for all sections

  useEffect(() => {
    const targetId = location.hash.replace("#", ""); // Remove the '#' from the hash
    if (targetId && sectionRefs.current[targetId]) {
      sectionRefs.current[targetId].scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <TopHeading heading={"Services"} />
      <section className="relative lg:-mt-56 -mt-64 z-20 px-5 bg-white lg:bg-transparent rounded-3xl ">
        <div className="flex flex-col gap-5">
          {/* first map */}
          {servicesProvideData.map((item) => {
            const headingWithoutSpaces = item.heading.replace(/\s+/g, "");
            return (
              <div
                key={item.id}
                id={headingWithoutSpaces}
                ref={(el) => (sectionRefs.current[headingWithoutSpaces] = el)}
              >
                {headingWithoutSpaces != "BlindSchool" ? (
                  <hr className=" w-3/4 lg:mb-16 mx-auto  lg:mt-14 my-5 " />
                ) : null}
                {/* for mobile device only  */}
                <div className="block lg:hidden h-full w-full max-w-[700px] p-4 z-20 lg:pr-20">
                  <div className="flex flex-col h-full items-start">
                    <div className="flex flex-col gap-3">
                      <p className="font-poppins text-[32px] sm:text-[40px] lg:text-[50px] font-bold">
                        {item.heading}
                      </p>
                      <div className="flex gap-4 flex-wrap">
                        {/* Location */}
                        <div className="flex items-center gap-2">
                          <img
                            src="/Icons/location.png"
                            alt="location"
                            className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 filter invert"
                          />
                          <p className="text-[16px] sm:text-[20px] lg:text-[25px]">
                            {item.location}
                          </p>
                        </div>
                        {/* Power */}
                        <div className="flex items-center gap-2">
                          <img
                            src="/Icons/power.png"
                            alt="power"
                            className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 filter invert"
                          />
                          <p className="text-[16px] sm:text-[20px] lg:text-[25px]">
                            {item.kw}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* for destop and mobile */}
                <div className="relative w-full max-w-[1200px] lg:h-[350px] h-[250px] mx-auto rounded-[25px] overflow-hidden group ">
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={10}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    className="service-swiper w-full h-full"
                  >
                    {/* image map */}
                    {item.images.map((y, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={`${y}`}
                          alt="hello"
                          className="w-full h-full object-cover block"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  {/* for largee device */}
                  <div className=" hidden lg:block absolute right-0 top-0 h-full w-[700px] bg-gradient-to-l from-black to-transparent text-white p-4 z-20 pr-20">
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

                  <p className="hidden lg:block  font-poppins absolute bottom-[-100%] left-0 z-30 w-full text-white px-20 py-7 pt-28 text-right bg-gradient-to-t from-black to-transparent group-hover:bottom-0 group-hover:opacity-100 opacity-0 transition-all duration-500 ease-out">
                    {item.content}
                  </p>
                </div>
                {/* for mobile device only*/}
                <p className="block lg:hidden p-3 text-lg">{item.content}</p>
              </div>
            );
          })}
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
