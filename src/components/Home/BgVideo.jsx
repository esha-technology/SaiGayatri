import React, { useState } from "react";

const BgVideo = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoaded(true); // Set this state to true when the video has fully loaded
  };

  return (
    <div className={`absolute inset-0 z-0 ${videoLoaded ? "" : "hidden"}`}>
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        preload="none" // Prevent video from loading prematurely
        onLoadedData={handleVideoLoad}
      >
        <source src="/BgVideoSolar.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BgVideo;
