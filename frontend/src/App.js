import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Team from "./components/Team/Team";
import Footer from "./components/Footer";
import AreasOfExpertise from "./components/AreasOfExpertise/AreasOfExpertise";
import Cases from "./components/Cases/Cases";
import ContactUs from "./components/ContactUs/ContactUs";

import "./index.css";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/expertise" element={<AreasOfExpertise />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;