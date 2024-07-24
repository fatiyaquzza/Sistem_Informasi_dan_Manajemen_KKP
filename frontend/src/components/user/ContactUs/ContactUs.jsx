import React from "react";
import contactus from "../../../images/contactus.png";

const ContactUs = () => {
  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center bg-black font-Lato">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${contactus})`, opacity: 0.2 }}
        ></div>
        <div className="relative z-10 text-center text-white p-4 md:p-8 mx-6 md:md-6">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold border-b py-4 md:py-8 lg:py-10 border-white">
            Contact Us
          </h1>
          <p className="text-lg md:text-lg lg:text-xl mt-3 md:mt-5 font-light">
            Here to Assist. Ready to Listen. Committed to Your Cause.
          </p>
        </div>
        <div className="absolute bottom-5 md:bottom-10 w-full flex justify-center">
          <a href="#section2" className="p-2 text-white animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8 md:w-10 md:h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </section>

      <section
        id="section2"
        className="bg-primarywhite text-black px-4 md:px-8 lg:px-16 py-12 lg:py-24"
      >
        <p className="font-Cinzel font-light text-2xl md:text-4xl lg:text-5xl text-center border-b w-72 md:w-96 lg:w-[600px] py-4 md:py-6 lg:py-8 border-[#BCBCBC] mx-auto">
          We're Here <span className="text-brown font-semibold">to Help</span>
        </p>

        <p className="font-Lato font-light text-xl text-center md:text-black hidden md:block mx-64 mt-10 md:mt-10">
          At our legal aid organization, we believe in making justice accessible
          to everyone. Whether you have a question, need legal assistance, or
          want to learn more about our services, we're here to help.
        </p>
      </section>

      <section className="flex flex-col items-center bg-primarywhite font-Lato px-12 md:px-20 lg:px-20">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-light mb-4">
          Office Hours :
        </h2>
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="bg-white shadow-md px-4 py-5 mb-4 transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:bg-gray-100">
            <div className="flex justify-between text-sm md:text-base">
              <span>Monday - Friday</span>
              <span>9:00 AM - 5:00 PM</span>
            </div>
          </div>
          <div className="bg-white shadow-md p-4 px-4 py-5 mb-4 transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:bg-gray-100">
            <div className="flex justify-between text-sm md:text-base">
              <span>Saturday</span>
              <span>10:00 AM - 2:00 PM</span>
            </div>
          </div>
          <div className="bg-white shadow-md p-4 px-4 py-5 transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:bg-gray-100">
            <div className="flex justify-between text-sm md:text-base">
              <span className="text-red-500">Sunday</span>
              <span className="text-red-500">Closed</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primarywhite py-12 md:py-16 lg:py-24 px-4 md:px-8 lg:px-12 font-Lato">
        <div className="container mx-auto flex flex-col md:flex-row justify-center">
          <div className="w-full md:w-1/2 p-4">
            <div className="relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.920333206504!2d95.31624465659937!3d5.532214778332061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304039f3e7bb9391%3A0xd3e4fce9fd81645c!2sSATA%20Lawyers!5e1!3m2!1sid!2sid!4v1720626302645!5m2!1sid!2sid"
                width="100%"
                height="450"
                frameborder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="bg-brown text-white p-4 md:p-6">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
                Visit Us :
              </h3>
              <p>Jl. Teuku Nyak Arief No.441</p>
              <p>Kopelma Darussalam</p>
              <p>Kec. Syiah Kuala, Kota Banda Aceh, Aceh 23111</p>
            </div>
            <div className="bg-brown text-white p-4 md:p-6 mt-6 md:mt-10">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
                Reach out to us :
              </h3>
              <p>Phone: (123) 456-7890</p>
              <p>Email: contact@legalhelp.org</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;