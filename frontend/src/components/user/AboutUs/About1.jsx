import React from "react";
import about1 from "../../../images/home0.png";

const About1 = () => {
  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center bg-black font-Lato">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${about1})`, opacity: 0.2 }}
        ></div>
        <div className="relative z-10 text-center text-white p-4 md:p-8 mx-6 md:md-6">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold border-b py-4 md:py-8 lg:py-10 border-white w-fit md:w-[600px]">Tentang Kami</h1>
          <p className="text-base md:text-base lg:text-lg md:block hidden mt-4 md:mt-5 font-light">
            for clients with a stake in federal legislation or regulatory
            guidance
          </p>
        </div>
        <div className="absolute bottom-10 w-full flex justify-center">
          <a href="#section2" className="p-2 text-white animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-10 h-10"
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
        className="bg-primarywhite text-black px-16 py-12 md:py-24"
      >
         <p className="font-Cinzel font-light text-2xl md:text-4xl lg:text-5xl text-center border-b w-72 md:w-[800px] py-4 md:py-6  border-[#BCBCBC] mx-auto">
        Spesialisasi {" "}
          <span className="text-brown font-semibold">Hukum Kami</span>
        </p>
        <p className="font-Lato font-light text-lg text-center md:text-black hidden md:block mx-52 mt-10 md:mt-10">
        Lembaga Konsultasi dan Bantuan Hukum (LKBH) SATA Alfaqih adalah Lembaga Bantuan Hukum yang memberi layanan Bantuan Hukum berdasarkan Undang-Undang Nomor 16 Tahun 2011 Tentang Bantuan Hukum, yang didirikan di Banda Aceh sejak Tahun 2019. Bantuan Hukum yang diberikan terdiri dari masalah hukum keperdataan, pidana, dan tata usaha negara baik litigasi maupun nonlitigasi, meliputi menjalankan kuasa, mendampingi, mewakili, membela, dan/atau melakukan tindakan hukum lain untuk kepentingan hukum Penerima Bantuan Hukum.
        </p>
      </section>
    </>
  );
};

export default About1;
