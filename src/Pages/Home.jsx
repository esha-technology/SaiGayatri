import React, { Suspense, lazy } from "react";

const HeroSection = lazy(() => import("../components/Home/HeroSection"));
const Services = lazy(() => import("../components/Home/Services"));
const Contact = lazy(() => import("./Contact"));

const Home = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeroSection />
      <Services />
      <Contact />
    </Suspense>
  );
};

export default Home;
