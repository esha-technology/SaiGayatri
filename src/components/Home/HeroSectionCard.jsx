import React from "react";

const HeroSectionCard = () => {
  return (
    <div className="relative w-[600px] h-[316px] mx-auto bg-white rounded-[20px] overflow-hidden shadow-md  font-poppins">
      {/* Background Image */}
      <img
        src="/ServicesImg/Blind School/2.webp"
        alt="Solar Panel"
        className="w-full  object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
        <h2 className="text-[50px] font-bold ">Health Care</h2>
        <hr className="border w-2/4 mb-8 opacity-70" />
        <p className="text-[20px] mb-4">50kw & 8kw</p>
        <button className="text-[20px] px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200">
          Know More
        </button>
      </div>
    </div>
  );
};

export default HeroSectionCard;
