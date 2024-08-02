import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBalanceScale, FaShieldAlt   } from 'react-icons/fa';

const Litigasi = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center bg-black font-Lato">
        <div className="relative z-10 text-center text-white p-4 md:p-8 mx-6 md:md-6">
        <div className="flex items-center justify-center space-x-4">
            <FaShieldAlt  className="w-10 h-10 md:w-16 md:h-16" />
            <h1 className="text-4xl md:text-7xl font-bold border-b py-4 md:py-10 border-white ">
              LITIGASI
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
          Litigasi adalah proses hukum formal yang digunakan untuk menyelesaikan perselisihan melalui pengadilan. Dalam proses ini, serangkaian prosedur diawasi oleh hakim atau majelis hakim, di mana pihak-pihak yang bersengketa menyajikan argumen, bukti, dan saksi untuk mendukung posisi mereka. Litigasi mencakup berbagai bidang hukum, seperti hukum perdata, pidana, administrasi, dan komersial. Proses ini dimulai dengan pengajuan gugatan oleh pihak yang merasa dirugikan (penggugat) dan pengajuan tanggapan oleh pihak yang diduga melakukan pelanggaran atau menyebabkan kerugian (tergugat). Setelah penggugat mengajukan gugatan, tergugat diberitahu secara resmi dan diberikan waktu untuk menyiapkan tanggapan tertulis.

          </p>
          <p className="text-justify text-lg mb-6">
Litigasi memiliki beberapa keuntungan, seperti memberikan kepastian hukum karena putusan pengadilan bersifat mengikat dan memastikan penegakan hak-hak yang diakui secara hukum. Prosedur yang terstruktur dalam litigasi juga menjamin keadilan prosedural. Namun, litigasi juga memiliki beberapa kelemahan, termasuk biaya yang tinggi, waktu yang lama, dan ketidakpastian hasil. Proses litigasi sering kali mahal, melibatkan biaya pengacara, biaya pengadilan, dan biaya lainnya. Selain itu, proses ini bisa berlangsung bertahun-tahun sebelum putusan akhir dijatuhkan, dan hasilnya sering kali sulit diprediksi serta berisiko bagi kedua belah pihak.
          </p>
          {/* <h2 className="text-3xl font-semibold mb-4 font-Cinzel text-brown mt-20">CAKUPAN</h2>
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
          </div> */}
          <h2 className="text-3xl font-semibold mb-4 font-Cinzel text-brown mt-20">TOTAL KASUS</h2>
          <div className=" bg-primarywhite p-6 shadow-md text-center">
            <div className="flex flex-col items-center">
              <FaBalanceScale className="w-20 h-20 text-brown p-2 mb-4" />
              <p className="text-4xl font-Cinzel font-semibold text-brown mb-2">+-30 Kasus</p>
              <p className="text-lg">Kami telah berhasil menyelesaikan sejumlah besar kasus litigasi dengan efisiensi dan keadilan.</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
        <button
            onClick={() => navigate("/expertise")}
            className="mt-6 border-2 border-brown border-solid bg-brown text-white text-sm font-semibold mb-2 px-5 py-3 hover:bg-transparent hover:text-brown transition"
          >
            Kembali ke Lingkup Jasa Hukum
          </button>
        </div>
      </section>

    </>
  );
};

export default Litigasi;
