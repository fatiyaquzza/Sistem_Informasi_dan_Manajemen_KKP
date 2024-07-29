import React from "react";
import home1 from "../../../images/home1.png";
import home0 from "../../../images/home0.png";

const Home1 = () => {
  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center bg-black font-Lato">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${home0})`, opacity: 0.2 }}
        ></div>
        <div className="relative z-10 text-center text-white p-4 md:p-8 mx-6 md:md-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold border-b py-4 md:py-8 lg:py-10 border-white w-fit md:w-[600px]">SELAMAT DATANG</h1>
          <p className="text-base md:text-base lg:text-lg md:block hidden mt-4 md:mt-5 font-light">
          Untuk klien yang memiliki kepentingan dalam legislasi federal atau panduan regulasi.
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
        className="h-auto bg-softgray text-black flex flex-col md:flex-row justify-center px-8 md:px-16 py-12 md:py-24"
      >
        <div className="w-full md:w-7/12 flex items-center mb-8 md:mb-0">
          <div className="text-center md:text-left">
            <p className="font-Lato font-light text-sm md:text-md mb-2">
              SIAPAKAH KAMI
            </p>
            <p className="font-Cinzel text-brown font-bold text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-10">
              LKBH SATA AL-FAQIH
            </p>
            <p className="font-Lato font-light text-base md:text-base lg:text-lg w-full pr-2 md:pr-10 text-justify">
            Lembaga Konsultasi dan Bantuan Hukum (LKBH) SATA Alfaqih adalah Lembaga Bantuan Hukum yang memberi layanan Bantuan Hukum berdasarkan Undang-Undang Nomor 16 Tahun 2011 Tentang Bantuan Hukum, yang didirikan di Banda Aceh sejak Tahun 2019. Bantuan Hukum yang diberikan terdiri dari masalah hukum keperdataan, pidana, dan tata usaha negara baik litigasi maupun nonlitigasi, meliputi menjalankan kuasa, mendampingi, mewakili, membela, dan/atau melakukan tindakan hukum lain untuk kepentingan hukum Penerima Bantuan Hukum.
            </p>
          </div>
        </div>

        <div className="hidden md:flex w-full md:w-5/12 justify-center md:justify-end items-center">
          <img
            src={home1}
            alt="lawyer"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg mb-8 md:mb-0"
          />
        </div>
      </section>
    </>
  );
};

export default Home1;
