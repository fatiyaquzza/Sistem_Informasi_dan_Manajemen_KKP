import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white py-8 px-4 md:px-16">
      <div className="flex flex-col md:flex-row justify-between border-b border-gray-400 pb-4 md:px-12">
        <p className="text-xl font-Cinzel font-bold mb-4 md:mb-0">
          LKBH Sata Al-Faqih
        </p>
        <button className="border-2 border-solid border-brown hover:border-brown hover:text-softgray hover:bg-transparent bg-brown text-white text-sm font-semibold py-2 px-6 mb-2 md:mb-0">
          Make an Appointment
        </button>
      </div>
      <div className="container mx-auto flex flex-wrap justify-between font-Lato mt-6">
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
          <h2 className="text-lg font-semibold">Address</h2>
          <p className="mt-4 not-italic text-opacity-60 text-white">
            Jl. Sultan Malikul Saleh, Lamlagang, Kec. Banda Raya, Kota Banda
            Aceh, Aceh 23117
          </p>
        </div>

        <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
          <h2 className="text-lg font-semibold">Info</h2>
          <ul className="mt-4 space-y-2 text-opacity-60 text-white">
            <li>
              <Link
                to="/"
                className="hover:underline text-white opacity-50 hover:opacity-90"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/team"
                className="hover:underline text-white opacity-50 hover:opacity-90"
              >
                Our Team
              </Link>
            </li>
            <li>
              <Link
                to="/expertise"
                className="hover:underline text-white opacity-50 hover:opacity-90"
              >
                Areas of Expertise
              </Link>
            </li>
            <li>
              <Link
                to="/cases"
                className="hover:underline text-white opacity-50 hover:opacity-90"
              >
                Cases
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:underline text-white opacity-50 hover:opacity-90"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
          <h2 className="text-lg font-semibold">Contact us</h2>
          <ul className="mt-4 space-y-2 text-opacity-60 text-white">
            <li>+1 891 989-11-91</li>
            <li>
              <a
                href="mailto:help@logoipsum.com"
                className="hover:underline text-white opacity-50 hover:opacity-90"
              >
                help@logoipsum.com
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-1/4 flex justify-center lg:justify-start mt-4 lg:mt-0 space-x-4">
          <a
            href="#"
            className="hover:text-gray-400 text-white text-opacity-50"
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a
            href="#"
            className="hover:text-gray-400 text-white text-opacity-50"
          >
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a
            href="#"
            className="hover:text-gray-400 text-white text-opacity-50"
          >
            <i className="fab fa-youtube fa-2x"></i>
          </a>
        </div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-8">
        <p className="text-white text-opacity-40 text-center md:text-left w-full md:w-auto mb-4 md:mb-0">
          Copyright © 2024 LKBH Sata Al-Faqih
        </p>
        <button onClick={scrollToTop} className="p-2 text-white animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-10 h-10 rotate-180"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;