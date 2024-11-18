import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import SolarCalculator from "./Pages/SolarCalculator";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import FixedIcon from "./components/common/FixedIcon";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="max-w-[1700px] mx-auto" id="toTop">
        <Router
          future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        >
          <Navbar />
          <FixedIcon />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/solarCalculator" element={<SolarCalculator />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
