import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navBg, setNavBg] = useState("bg-opacity-0");
  const [navText, setNavText] = useState("text-white");

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavBg("bg-white shadow-md");
      setNavText("text-black");
    } else {
      setNavBg("bg-opacity-0");
      setNavText("text-white");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition duration-500 ease-in-out ${navBg}`}
    >
      <div className="flex justify-between items-center h-16 px-4 md:px-16">
        <Link to="/" className={`text-xl font-Cinzel font-bold ${navText}`}>
          LKBH Sata Al-Faqih
        </Link>
        <div className="px-4 cursor-pointer md:hidden">
          <svg
            className={`w-6 h-6 ${navText}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </div>
        <div
          className={`pr-16 md:block hidden font-Lato font-semibold ${navText}`}
        >
          <Link to="/" className="px-8 hover:text-gray-500">
            Home
          </Link>
          <Link to="/team" className="px-8 hover:text-gray-500">
            Our Team
          </Link>
          <Link to="/expertise" className="px-8 hover:text-gray-500">
            Areas of Expertise
          </Link>
          <Link to="/cases" className="px-8 hover:text-gray-500">
            Cases
          </Link>
          <Link to="/contact" className="pl-8 hover:text-gray-500">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
