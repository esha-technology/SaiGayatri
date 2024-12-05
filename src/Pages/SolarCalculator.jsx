import React from "react";
import TopHeading from "../components/common/TopHeading";
import SolarCal from "../components/SolarCal/SolarCal";
const SolarCalculator = () => {
  return (
    <>
      <TopHeading heading={"Solar Calculator"} />
      <SolarCal />
    </>
  );
};

export default SolarCalculator;
