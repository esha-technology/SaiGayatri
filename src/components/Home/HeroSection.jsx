import React, { useState } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [videoLoaded, setVideoLoaded] = useState(false); // State to track if video is loaded

  // Handle video load event
  const handleVideoLoad = () => {
    setVideoLoaded(true); // Set videoLoaded to true once the video is loaded
  };

  return (
    <section className="relative pt-28 lg:pb-40 pb-16 -mt-24 ">
      {/*bg color */}
      <div className="absolute inset-0 bg-slate-700 opacity-80 filter brightness-50  z-10"></div>

      {/* Background  image (shows while video is loading) */}
      <div className="absolute inset-0 bg-[url('/solarBgImage.jpeg')] bg-no-repeat bg-cover z-0"></div>

      {/* Video container (hidden until video is loaded) */}
      <div className={`absolute inset-0 z-0 ${videoLoaded ? "" : "hidden"}`}>
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          preload="none" // Prevent video from loading prematurely
          onLoadedData={handleVideoLoad} // When video is fully loaded
        >
          <source src="/BgVideoSolar.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="py-8 px-4 mx-auto max-w-screen-lg text-center lg:py-16 lg:px-12 relative z-10 ">
        <div
          className=" inline-flex justify-between items-center px-2 py-1 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full "
          role="alert"
        >
          <img src="/Icons/wallet.svg" alt="icon" width={25} />
          <span className="text-sm font-medium ml-1">
            Save Money, Go Solar!
          </span>
        </div>
        <h1 className=" pb-5 mb-4 font-mont text-4xl font-extrabold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-t from-blue-200  to-white md:text-5xl lg:text-6xl">
          Power Your Future with Clean, Renewable{" "}
          <span className="solar">
            Solar Energy <img src="sun.gif" className="inline-block" />
          </span>
        </h1>
        <p className="mb-8 text-lg font-normal text-white lg:text-2xl sm:px-16 xl:px-48 font-robot  ">
          Start your solar journey today and enjoy long-term savings with clean
          energy.
        </p>

        <Link to={"/appointment"}>
          <div>
            <button className="relative flex  w-fit items-center justify-center overflow-hidden bg-blue-500 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-gray-600 before:duration-500 before:ease-out hover:shadow-gray-600 hover:before:h-56 hover:before:w-80 px-5 py-3 mx-auto font-semibold mt-14 rounded-lg">
              <span className="relative z-10 flex justify-center items-center gap-2 text-xl  font-poppins">
                <span className="filter invert brightness-0">
                  <img src="/Icons/appointment.svg" alt="icon" width={35} />
                </span>
                Book An Appointment
              </span>
            </button>
          </div>
        </Link>
      </div>
      <div className="absolute z-20 -bottom-2 w-full">
        <img src="./cut.png" alt="" className="w-full" />
      </div>
    </section>
  );
};

export default HeroSection;
