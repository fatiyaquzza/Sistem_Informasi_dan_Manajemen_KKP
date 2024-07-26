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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold border-b py-4 md:py-8 lg:py-10 border-white w-fit md:w-[600px]">
            KONTAK
          </h1>
          <p className="text-base md:text-base lg:text-lg md:block hidden mt-4 md:mt-5 font-light">
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
        className="bg-primarywhite text-black px-5 md:px-8 lg:px-16 py-12 lg:py-24"
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

      <section className="flex flex-col items-center bg-primarywhite font-Lato px-8 md:px-16 lg:px-16">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-light mb-4">
          Office Hours :
        </h2>
        <div className="w-full px-4">
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

      <section className="bg-primarywhite pt-12 md:pt-16 lg:pt-24 font-Lato px-8 md:px-20">
      <div className="bg-brown w-full py-10 ">
        <p className="text-center text-base md:text-xl text-white">Reach out to us through the following channels:</p>
        <p className="text-center text-base md:text-xl font-light text-white mt-4">Phone: +62 852 7799 9249</p>
        <p className="text-center text-base md:text-xl font-light text-white">Email: sata.alfaqih@gmail.com</p>


      </div>
    </section>

      <section className="bg-primarywhite py-12 md:py-16 lg:py-24 font-Lato">
      <div className="container flex flex-col md:flex-row justify-center">
        {/* Banda Aceh Office */}
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-brown text-white py-6 text-center">
            <h3 className="font-Cinzel text-xl md:text-2xl lg:text-3xl font-light mb-8">
              Kantor Banda Aceh
            </h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.920333206504!2d95.31624465659937!3d5.532214778332061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304039f3e7bb9391%3A0xd3e4fce9fd81645c!2sSATA%20Lawyers!5e1!3m2!1sid!2sid!4v1720626302645!5m2!1sid!2sid"
              width="100%"
              height="350"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
            <div className="mt-8 font-Lato">
              <p>Visit Us :</p>
              <p className="font-light mx-4 md:mx-20">Jl. Sultan Malikul Saleh, No. 42, Lamlagang, Kec. Banda Raya, Kota Banda Aceh, Aceh 23117 </p>
            </div>
          </div>
        </div>

        {/* Nagan Raya Office */}
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-brown text-white py-6 text-center">
            <h3 className="font-Cinzel text-xl md:text-2xl lg:text-3xl font-light mb-8">
              Kantor Nagan Raya
            </h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63672.44213040848!2d96.20097177159536!3d4.116012154642315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303ec8d818d8fe11%3A0x750a005e78dec099!2sBlang%20Muko%2C%20Kec.%20Kuala%2C%20Kabupaten%20Nagan%20Raya%2C%20Aceh!5e0!3m2!1sid!2sid!4v1722015581772!5m2!1sid!2sid" 
              width="100%"
              height="350"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
            <div className="mt-8 font-Lato">
              <p>Visit Us :</p>
              <p className="font-light  mx-4 md:mx-20">Jl. Nasional Simpang Peut-Meulaboh, Desa Blang Muko, Kec. Kuala, Kab. Nagan Raya, Aceh</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
  );
};

export default ContactUs;