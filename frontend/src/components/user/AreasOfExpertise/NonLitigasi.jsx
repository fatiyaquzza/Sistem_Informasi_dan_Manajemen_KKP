import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBalanceScale, FaShieldAlt   } from 'react-icons/fa';

const NonLitigasi = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center bg-black font-Lato">
        <div className="relative z-10 text-center text-white p-4 md:p-8 mx-6 md:md-6">
        <div className="flex items-center justify-center space-x-4">
            <FaShieldAlt  className="w-10 h-10 md:w-16 md:h-16" />
            <h1 className="text-4xl md:text-7xl font-bold border-b py-4 md:py-10 border-white ">
              NON LITIGASI
            </h1>
          </div>
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

      <section id="section2" className="px-6 py-10 md:px-20 md:py-20 bg-white font-Lato text-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 font-Cinzel text-brown">PENGERTIAN</h2>
          <p className="text-justify text-lg mb-4">
Non-litigasi merupakan sebuah pendekatan untuk menyelesaikan konflik di luar jalur pengadilan. Metode ini sering dipilih karena umumnya lebih cepat, lebih ekonomis, dan lebih fleksibel dibandingkan dengan litigasi. Non-litigasi mencakup berbagai teknik seperti negosiasi, mediasi, dan arbitrase, yang semuanya bertujuan untuk mencapai kesepakatan yang saling menguntungkan tanpa perlu melalui proses pengadilan yang panjang dan kompleks.
          </p>
          <p className="text-justify text-lg mb-4">
          Negosiasi adalah cara penyelesaian sengketa di mana pihak-pihak yang terlibat berkomunikasi secara langsung untuk mencapai kesepakatan. Dalam negosiasi, tidak ada pihak ketiga yang dilibatkan, dan kedua belah pihak berusaha mencari solusi yang dapat diterima bersama. Proses ini sangat fleksibel dan memungkinkan pihak-pihak yang terlibat untuk menyesuaikan solusi sesuai kebutuhan spesifik mereka.
          </p>
          <p className="text-justify text-lg mb-6">
          Mediasi melibatkan pihak ketiga yang netral, yang dikenal sebagai mediator, untuk membantu pihak-pihak yang bersengketa mencapai kesepakatan. Mediator tidak memiliki kekuasaan untuk membuat keputusan yang mengikat, tetapi mereka bertugas memfasilitasi komunikasi dan negosiasi antara pihak-pihak yang bersengketa. Mediasi sering kali berhasil karena mediator dapat membantu mengidentifikasi kepentingan bersama dan mengarahkan diskusi ke arah solusi yang konstruktif.
          </p>
          <h2 className="text-3xl font-semibold mb-4 font-Cinzel text-brown mt-20">CAKUPAN</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-transparent border-solid border-2 border-brown p-4 shadow-md text-center">
              <p className="text-lg">Hukum Pidana</p>
            </div>
            <div className="bg-transparent border-solid border-2 border-brown p-4 shadow-md text-center">
              <p className="text-lg">Hukum Perdata</p>
            </div>
            <div className="bg-transparent border-solid border-2 border-brown p-4 shadow-md text-center">
              <p className="text-lg">Hukum Keluarga</p>
            </div>
            <div className="bg-transparent border-solid border-2 border-brown p-4 shadow-md text-center">
              <p className="text-lg">Hukum Pidana</p>
            </div>
            <div className="bg-transparent border-solid border-2 border-brown p-4 shadow-md text-center">
              <p className="text-lg">Hukum Perdata</p>
            </div>
            <div className="bg-transparent border-solid border-2 border-brown p-4 shadow-md text-center">
              <p className="text-lg">Hukum Keluarga</p>
            </div>
          </div>
          <h2 className="text-3xl font-semibold mb-4 font-Cinzel text-brown mt-20">TOTAL KASUS</h2>
          <div className=" bg-primarywhite p-6 shadow-md text-center">
            <div className="flex flex-col items-center">
              <FaBalanceScale className="w-20 h-20 text-brown p-2 mb-4" />
              <p className="text-4xl font-Cinzel font-semibold text-brown mb-2">120 Kasus</p>
              <p className="text-lg">Kami telah berhasil menyelesaikan sejumlah besar kasus litigasi dengan efisiensi dan keadilan.</p>
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => navigate("/expertise")}
            className="px-5 py-3 text-sm bg-brown text-white shadow-md border-solid border-2 border-brown hover:bg-transparent hover:text-brown transition duration-300 font-semibold"
          >
            Back to Areas of Expertise
          </button>
        </div>
      </section>

  </>
  );
};

export default NonLitigasi;
