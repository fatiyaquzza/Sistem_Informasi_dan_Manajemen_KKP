import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavbarUser = () => {
  const [navBg, setNavBg] = useState("bg-opacity-0");
  const [navText, setNavText] = useState("text-white");
  const [navOpen, setNavOpen] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavBg("bg-white shadow-md");
      setNavText("text-black");
    } else {
      setNavBg("bg-opacity-0");
      setNavText("text-white");
    }
  };

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition duration-500 ease-in-out ${navBg} px-4 md:px-12`}
    >
      <div className="flex justify-between items-center h-16  md:px-12">
        <Link to="/" className={`text-xl font-Cinzel font-bold ${navText}`}>
          LKBH Sata Al-Faqih
        </Link>
        <div className="md:hidden" onClick={toggleNav}>
          <svg
            className={`w-6 h-6 cursor-pointer ${navText}`}
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
        <div className="hidden md:flex space-x-8 font-Lato font-semibold">
          <Link to="/" className={`hover:text-gray-500 ${navText}`}>
            Beranda
          </Link>
          <Link to="/about-us" className={`hover:text-gray-500 ${navText}`}>
            Tentang Kami
          </Link>
          <Link to="/team" className={`hover:text-gray-500 ${navText}`}>
            Tim Kami
          </Link>
          <Link to="/expertise" className={`hover:text-gray-500 ${navText}`}>
            Lingkup Jasa Hukum
          </Link>
          <Link to="/cases" className={`hover:text-gray-500 ${navText}`}>
            Berita & Artikel
          </Link>
          <Link to="/contact" className={`hover:text-gray-500 ${navText}`}>
            Kontak
          </Link>
        </div>
      </div>
      <div
        className={`md:hidden ${
          navOpen ? "block" : "hidden"
        } bg-white shadow-md`}
      >
        <div className="flex flex-col space-y-4 py-4">
          <Link
            to="/"
            className="px-6 py-2 hover:bg-gray-100"
            onClick={toggleNav}
          >
            Home
          </Link>
          <Link
            to="/team"
            className="px-6 py-2 hover:bg-gray-100"
            onClick={toggleNav}
          >
            Our Team
          </Link>
          <Link
            to="/expertise"
            className="px-6 py-2 hover:bg-gray-100"
            onClick={toggleNav}
          >
            Areas of Expertise
          </Link>
          <Link
            to="/cases"
            className="px-6 py-2 hover:bg-gray-100"
            onClick={toggleNav}
          >
            Cases
          </Link>
          <Link
            to="/contact"
            className="px-6 py-2 hover:bg-gray-100"
            onClick={toggleNav}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarUser;