import React from "react";

const HeroSectionCard = ({ data }) => {
  const { heading, kw, loctaion, images } = data;
  console.log(images[0]);

  return (
    <div className="px-2">
      <div className="relative w-full  md:w-[600px] lg:h-[316px] h-52 md:h-72 mx-auto bg-white rounded-[20px] overflow-hidden shadow-md font-poppins">
        {/* Background Image */}
        <img
          src={`${images[0]}`}
          alt="Solar Panel"
          className="w-full h-full object-cover"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0   bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-10">
          <h2 className="text-[30px] md:text-[50px] font-bold">{heading}</h2>
          <hr className="border w-2/4 mb-8 opacity-70" />
          <p className="text-[16px] md:text-[20px] mb-4 flex items-center gap-2">
            <img src="/Icons/power.png" alt="location" />
            {kw}
          </p>
          <button className="text-[16px] md:text-[20px] px-4 py-2  bg-white text-black font-semibold rounded hover:bg-gray-200">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionCard;
