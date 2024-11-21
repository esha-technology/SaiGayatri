import React from "react";

const TopHeading = ({ imgUrl }) => {
  return (
    <div
      className="relative w-full pt-24 pb-8 sm:pb-10 md:pb-12 bg-cover bg-center -mt-20"
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <div className="absolute inset-0 bg-slate-700 opacity-80 filter brightness-50"></div>
      <div className="relative z-20 flex justify-center items-center text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl ">
        Blogs
      </div>
    </div>
  );
};

export default TopHeading;
