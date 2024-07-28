import React from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white py-8 px-5 md:px-16">
      <div className="flex flex-col md:flex-row justify-between border-b border-gray-400 pb-4 md:px-12">
        <p className="text-xl font-Cinzel font-bold mb-4 md:mb-0">
          LKBH Sata Al-Faqih
        </p>
        <Link to="/contact" className="border-2 border-solid border-brown hover:border-brown hover:text-softgray hover:bg-transparent bg-brown text-white text-sm font-semibold py-2 px-6 mb-2 md:mb-0 text-center">
          Hubungi Kami
        </Link>
      </div>
      <div className="container mx-auto flex flex-wrap justify-between font-Lato mt-6">
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
          <h2 className="text-lg font-semibold">Alamat</h2>
          <p className="mt-4 not-italic text-opacity-60 text-white">
            Jl. Sultan Malikul Saleh, No. 42, Lamlagang, Kec. Banda Raya, Kota Banda
            Aceh, Aceh 23117  <span className="font-semibold text-white text-opacity-80"> (Kantor Banda Aceh)</span>
          </p>

          <p className="mt-4 not-italic text-opacity-60 text-white">
          Desa Blang Muko, Kec. Kuala, Kab. Nagan Raya, Aceh  <span className="font-semibold text-white text-opacity-80"> (Kantor Nagan Raya)</span>
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
                Beranda
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="hover:underline text-white opacity-50 hover:opacity-90"
              >
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                to="/team"
                className="hover:underline text-white opacity-50 hover:opacity-90"
              >
                Tim Kami
              </Link>
            </li>
            <li>
              <Link
                to="/expertise"
                className="hover:underline text-white opacity-50 hover:opacity-90"
              >
                Lingkup Jasa Hukum
              </Link>
            </li>
            <li>
              <Link
                to="/cases"
                className="hover:underline text-white opacity-50 hover:opacity-90"
              >
                Berita & Artikel
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:underline text-white opacity-50 hover:opacity-90"
              >
                Kontak
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
          <h2 className="text-lg font-semibold">Kontak</h2>
          <ul className="mt-4 space-y-2 text-opacity-60 text-white">
            <li className="flex items-center">
              <FaPhone className="mr-2" /> +62 852 7799 9249
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2" />
              <a
                href="mailto:sata.alfaqih@gmail.com"
                className="hover:underline text-white opacity-50 hover:opacity-90"
              >
                sata.alfaqih@gmail.com
              </a>
            </li>
          </ul>
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