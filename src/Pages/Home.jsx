import React, { Suspense, lazy } from "react";
import ScrollToTop from "../components/common/ScrollToTop";
import LoadingComp from "../components/common/LoadingComp";

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

      <Suspense
        fallback={
          <div>
            <LoadingComp />
          </div>
        }
      >
        <HeroSection />
      </Suspense>

      <Suspense fallback={<div></div>}>
        <Why />
      </Suspense>

      <Suspense fallback={<div></div>}>
        <HomeServices />
      </Suspense>

      <Suspense fallback={<div></div>}>
        <BlogSection />
      </Suspense>

      <Suspense fallback={<div></div>}>
        <OurVision />
      </Suspense>

      <Suspense fallback={<div></div>}>
        <Review />
      </Suspense>

      <Suspense fallback={<div></div>}>
        <HomeContact />
      </Suspense>
    </>
  );
};

export default Home;
