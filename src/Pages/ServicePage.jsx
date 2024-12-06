import React from "react";
import TopHeading from "../components/common/TopHeading";

const ServicePage = ({ title, description, imageUrl, buttonText }) => {
  return (
    <>
      <TopHeading heading={"Services"} />

      <div className="relative w-[1077px] h-[343px] mx-auto  rounded-[25px] overflow-hidden">
        <img
          src={imageUrl}
          alt={title || "Image of healthcare facility"}
          className="w-full h-full object-cover"
        />
        <div className="absolute right-0 top-0 h-full w-[700px] bg-gradient-to-l from-black to-transparent text-white p-4 z-20 pr-20">
          <div className=" flex justify-end h-full items-center">
            <div className="text-right flex flex-col gap-2">
              <p className="font-poppins text-[40px] font-bold ">IOCL</p>
              <div className="flex justify-end items-center ">
                <img src="/Icons/location.png" alt="location" />
                <p className="text-[20px]">Chengalpattu</p>
              </div>
              <div className="flex justify-end items-center ">
                <img src="/Icons/power.png" alt="location" />
                <p className="text-[20px]">30kw</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ServicePage.defaultProps = {
  title: "Health Care",
  description: "50kw & 8kw",
  imageUrl: "/ServicesImg/Blind School/2.webp",
  buttonText: "Know More",
};

export default ServicePage;
