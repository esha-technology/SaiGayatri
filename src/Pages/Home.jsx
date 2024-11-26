import React, { Suspense, lazy } from "react";
import ScrollToTop from "../components/common/ScrollToTop";

const BlogSection = lazy(() => import("../components/Home/BlogSection"));
const HeroSection = lazy(() => import("../components/Home/HeroSection"));
const HomeContact = lazy(() => import("../components/Home/HomeContact"));
const Why = lazy(() => import("../components/Home/Why"));
const HomeServices = lazy(() => import("../components/Home/HomeServices"));
const OurVision = lazy(() => import("../components/Home/OurVision"));
const Review = lazy(() => import("../components/Home/Review"));

const Home = () => {
  return (
    <>
      <ScrollToTop />

      <Suspense fallback={<div>Loading Hero Section...</div>}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={<div>Loading Why Section...</div>}>
        <Why />
      </Suspense>

      <Suspense fallback={<div>Loading Service Section...</div>}>
        <HomeServices />
      </Suspense>

      <Suspense fallback={<div>Loading OurVision Section...</div>}>
        <OurVision />
      </Suspense>

      <Suspense fallback={<div>Loading Blog Section...</div>}>
        <BlogSection />
      </Suspense>

      <Suspense fallback={<div>Loading TESTIMONIAL Section...</div>}>
        <Review />
      </Suspense>

      <Suspense fallback={<div>Loading Contact Section...</div>}>
        <HomeContact />
      </Suspense>
    </>
  );
};

export default Home;
