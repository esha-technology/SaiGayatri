import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Appointment from "./Pages/Appointment";

// Lazy-load components
const Home = lazy(() => import("./Pages/Home"));
const Blog = lazy(() => import("./Pages/Blog"));
const SolarCalculator = lazy(() => import("./Pages/SolarCalculator"));
const Footer = lazy(() => import("./components/common/Footer"));
const Navbar = lazy(() => import("./components/common/Navbar"));
const FixedIcon = lazy(() => import("./components/common/FixedIcon"));

function App() {
  return (
    <div className="max-w-[1700px] mx-auto" id="toTop">
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <FixedIcon />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/solarCalculator" element={<SolarCalculator />} />
            <Route path="/appointment" element={<Appointment />} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
