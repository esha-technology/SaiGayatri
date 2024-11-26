import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <img
        src="/solarLogo.png"
        alt="Loading..."
        className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 h-auto -mt-16"
      />
    </div>
  );
};

export default Loading;
