import React, { Suspense, lazy } from "react";

const HeroSection = lazy(() => import("../components/Home/HeroSection"));
const Services = lazy(() => import("../components/Home/Services"));
const HomeContact = lazy(() => import("../components/Home/HomeContact"));

const Home = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeroSection />
      <Services />
      <HomeContact />
    </Suspense>
  );
};

export default Home;
