import React, { useState } from "react";

const TopHeading = ({ heading, img }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <div className="relative w-full  pt-40 pb-72  bg-cover bg-center -mt-24  leading-loose">
      <div className="absolute inset-0 bg-slate-700 opacity-80 filter brightness-50  z-10"></div>

      <div className="flex flex-col gap-7 -mt-9">
        <hr className="border-x-0   border-slate-500  relative mx-20  z-20" />
        <h1 className="relative z-20 flex justify-center items-center font-bold text-5xl md:text-6xl  text-center px-10 text-transparent bg-clip-text bg-gradient-to-t from-blue-200 to-white  font-poppins">
          {img ? (
            <span className="filter invert brightness-0">
              <img src={img} alt="icon" className="w-20 mr-1  " />
            </span>
          ) : null}
          {heading}
        </h1>
        <hr className="border-x-0   border-slate-500  relative mx-20    z-20" />
      </div>

      {/* Background image (shows while video is loading) */}
      <div className="absolute inset-0 bg-[url('/blogImgBg.jpg')] bg-no-repeat bg-cover z-0 bg-bottom"></div>

      {/* Video container (hidden until video is loaded) */}
      <div className={`absolute inset-0 z-0 ${videoLoaded ? "" : "hidden"}`}>
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          preload="none"
          onLoadedData={handleVideoLoad}
        >
          <source src="/BgVideoSolar.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="absolute z-20 -bottom-0 w-full">
        <img src="/cut.png" alt="" className="w-full" />
      </div>
    </div>
  );
};

export default TopHeading;
