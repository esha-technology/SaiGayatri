import React, { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/common/Loading";

// Lazy-load components
const Home = lazy(() => import("./Pages/Home"));
const Blog = lazy(() => import("./Pages/Blog"));
const SolarCalculator = lazy(() => import("./Pages/SolarCalculator"));
const Footer = lazy(() => import("./components/common/Footer"));
const Navbar = lazy(() => import("./components/common/Navbar"));
const FixedIcon = lazy(() => import("./components/common/FixedIcon"));
const BlogDetail = lazy(() => import("./components/Blog/BlogDetail"));
const Appointment = lazy(() => import("./Pages/Appointment"));
const ServicePage = lazy(() => import("./Pages/ServicePage"));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-[1700px] mx-auto relative" id="toTop">
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Suspense
          fallback={
            <div>
              <Loading />
            </div>
          }
        >
          <div>{isLoading ? <Loading /> : null}</div>
          <Navbar />
          <FixedIcon />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solarCalculator" element={<SolarCalculator />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
