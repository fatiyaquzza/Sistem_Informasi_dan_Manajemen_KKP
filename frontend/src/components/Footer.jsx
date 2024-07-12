import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white py-8 px-16">
      <div className="flex justify-between">
        <p className="text-xl font-Cinzel font-bold">LKBH Sata Al-Faqih</p>

        <button className="border-2 border-brown hover:border-brown hover:text-softgray hover:bg-transparent bg-brown text-white text-sm font-semibold py-2 px-6">
          Make an Appointment
        </button>
      </div>
      <hr className="my-6 border-1 border-softgray" />
      
      <div className="container mx-auto  flex flex-wrap justify-between font-Lato">
        <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
          <h2 className="text-lg font-semibold">Address</h2>
          <p className="mt-4 not-italic text-opacity-60 text-white">
          Jl. Sultan Malikul Saleh, Lamlagang, Kec. Banda Raya, Kota Banda Aceh, Aceh 23117
          </p>
        </div>

        <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
          <h2 className="text-lg font-semibold">Info</h2>
          <ul className="mt-4 space-y-2 text-opacity-60 text-white">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#team" className="hover:underline">
                Our Team
              </a>
            </li>
            <li>
              <a href="#expertise" className="hover:underline">
                Areas of Expertise
              </a>
            </li>
            <li>
              <a href="#cases" className="hover:underline">
                Cases
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-1/4">
          <h2 className="text-lg font-semibold ">Contact us</h2>
          <ul className="mt-4 space-y-2 text-opacity-60 text-white">
            <li>+1 891 989-11-91</li>
            <li>
              <a href="mailto:help@logoipsum.com" className="hover:underline">
                help@logoipsum.com
              </a>
            </li>
          </ul>
        </div>

        <div className="flex mt-4 space-x-4 ">
            <a href="#" className="hover:text-gray-400 text-white text-opacity-50">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a href="#" className="hover:text-gray-400 text-white text-opacity-50">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="#" className="hover:text-gray-400 text-white text-opacity-50">
              <i className="fab fa-youtube fa-2x"></i>
            </a>
          </div>

      </div>
      <div className="container mx-auto  flex justify-between items-center mt-8">
        <p className="text-white text-opacity-40 w-1/4">Copyright © 2024 LKBH Sata Al-Faqih</p>

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
