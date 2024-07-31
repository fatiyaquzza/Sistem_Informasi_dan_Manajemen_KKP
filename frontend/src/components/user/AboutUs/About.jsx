import React from "react";
import struktur from "../../../images/struktur.png";
import about1 from "../../../images/aboutus.png";
import logo from "../../../images/logo.png";

import office from "../../../images/aceh_depan.jpg";
import office2 from "../../../images/nagan_depan.jpg";
import meetingRoom from "../../../images/aceh_meet.jpg";
import advocateParalegal from "../../../images/aceh_mp.jpg";
import nagan1 from "../../../images/nagan_01.jpg";
import nagan2 from "../../../images/nagan_02.jpg";
import nagan3 from "../../../images/nagan_03.jpg";
import nagan4 from "../../../images/nagan_04.jpg";

import doc1 from "../../../images/doc01.jpg";
import doc2 from "../../../images/doc02.jpg";
import doc3 from "../../../images/doc03.jpg";
import doc4 from "../../../images/doc04.jpg";
import doc5 from "../../../images/doc05.jpg";
import doc6 from "../../../images/doc06.jpg";


import { MdLocationOn } from "react-icons/md";

const About = () => {
  const data = [
    {
      imageLink: doc1,
      description: "Proses Persidangan ",
    },
    {
      imageLink: doc3,
      description: "Penyuluhan Hukum",
    },
    {
      imageLink: doc5,
      description: "Penyuluhan Hukum",
    },
    {
      imageLink: doc2,
      description: "Proses Persidangan ",
    },
    {
      imageLink: doc4,
      description: "Penyuluhan Hukum",
    },
    {
      imageLink: doc6,
      description: "Penyuluhan Hukum",
    },
  ];

  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center bg-black font-Lato">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${about1})`, opacity: 0.2 }}
        ></div>
        <div className="relative z-10 text-center text-white p-4 md:p-8 mx-6 md:md-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold border-b py-4 md:py-8 lg:py-10 border-white w-fit md:w-[600px]">
            TENTANG KAMI
          </h1>
          <p className="text-base md:text-base lg:text-lg md:block hidden mt-4 md:mt-5 font-light">
            Kami siap membantu Anda dengan solusi hukum terbaik.
          </p>
        </div>
        <div className="absolute bottom-10 w-full flex justify-center">
          <a href="#about1" className="p-2 text-white animate-bounce">
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
        id="about1"
        className="bg-primarywhite text-black px-8 md:px-16 py-12 md:py-24"
      >
        <p className="font-Cinzel font-light text-2xl md:text-4xl lg:text-5xl text-center border-b w-72 md:w-[800px] py-4 md:py-6  border-[#BCBCBC] mx-auto">
          Tentang{" "}
          <span className="text-brown font-semibold">LKBH Sata Al Faqih</span>
        </p>
        <p className="font-Lato font-light text-base md:text-lg text-justify md:text-center md:text-black mx-0 md:mx-52 mt-10 md:mt-10">
          Lembaga Konsultasi dan Bantuan Hukum (LKBH) SATA Alfaqih adalah
          Lembaga Bantuan Hukum yang memberi layanan Bantuan Hukum berdasarkan
          Undang-Undang Nomor 16 Tahun 2011 Tentang Bantuan Hukum, yang
          didirikan di Banda Aceh sejak Tahun 2019. Bantuan Hukum yang diberikan
          terdiri dari masalah hukum keperdataan, pidana, dan tata usaha negara
          baik litigasi maupun nonlitigasi, meliputi menjalankan kuasa,
          mendampingi, mewakili, membela, dan/atau melakukan tindakan hukum lain
          untuk kepentingan hukum Penerima Bantuan Hukum.
        </p>
      </section>
      <section id="about3" className="bg-white py-12 md:py-24 px-8 md:px-16">
        <div className="flex flex-col md:flex-row md:justify-between space-y-6 md:space-y-0 md:space-x-6">
          <div className="bg-primarywhite px-8 py-20 md:px-32 shadow-md border-2 border-solid border-brown flex items-center">
            <div>
              <p className="font-Cinzel text-center text-brown font-bold text-2xl md:text-3xl lg:text-4xl">
                Bentuk Lembaga
              </p>
              <p className="font-Lato font-light text-lg text-center mt-4">
                Badan Hukum Perkumpulan.
              </p>
            </div>
          </div>

          <div className="bg-primarywhite px-8 py-20 md:px-20 shadow-md border-2 border-solid border-brown flex items-center">
            <div>
              <p className="font-Cinzel text-center text-brown font-bold text-2xl md:text-3xl lg:text-4xl">
                Akta Pendirian LKBH <br /> SATA Alfaqih
              </p>
              <p className="font-Lato font-light text-lg text-center mt-4 md:w-[500px]">
                Akta Pendirian Nomor 2 Tanggal 3 Januari 2019, dibuat di hadapan
                Notaris Teuku Mursalin, S.H., M.Kn.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about3"
        className="bg-primarywhite py-12 md:py-24 px-8 md:px-16"
      >
        <p className="font-Cinzel font-bold text-2xl md:text-3xl lg:text-4xl text-center text-brown py-4 md:py-6">
          Surat Keputusan Kemenkumham
        </p>
        <ul className="font-Lato font-light text-base md:text-lg text-justify md:text-black mt-5 md:mt-10 list-disc list-inside">
          <li className="mb-4">
            Keputusan Menteri Hukum dan Hak Asasi Manusia Republik Indonesia
            Nomor: AHU-0000670.AH.01.07 Tahun 2019 tentang Pengesahan Pendirian
            Badan Hukum Perkumpulan Lembaga Konsultasi dan Bantuan Hukum SATA
            ALFAQIH
          </li>
          <li className="mb-4">
            Lampiran Keputusan Menteri Hukum dan Hak Asasi Manusia Republik
            Indonesia Nomor: AHU-0000670.AH.01.07 Tahun 2019 tentang Pengesahan
            Pendirian Badan Hukum Perkumpulan Lembaga Konsultasi dan Bantuan
            Hukum SATA ALFAQIH
          </li>
          <li>
            Keputusan Menteri Hukum dan Hak Asasi Manusia Rebuplik Indonesia
            Nomor: M.HH-02.HN.03.03 Tahun 2021 tentang Penetapan Lembaga
            Konsultasi dan Bantuan Hukum SATA ALFAQIH Provinsi Aceh sebagai
            Pemberi Bantuan Hukum Akreditasi C selama Periode 2022 s.d. 2024
          </li>
        </ul>
      </section>

      <section
        id="about4"
        className="bg-white text-black px-8 md:px-16 lg:px-16 py-12 md:py-24"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-start ml-0 lg:ml-20 text-brown mb-8 font-Cinzel">
          Visi LKBH Sata Alfaqih
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center mb-12 font-Lato border border-[#A7A7A7] bg-primarywhite shadow-md">
          <div className="text-center md:text-left md:w-3/4 p-4 md:p-8">
            <p className="text-base md:text-xl font-light">
              Terwujudnya akses keadilan yang profesional dalam pelaksanaan
              pemberian bantuan hukum bagi masyarakat kurang mampu.
            </p>
          </div>
          <div className="flex justify-center items-center md:w-1/4 p-4 md:p-8 border-none lg:border-l lg:border-solid border-[#A7A7A7] bg-white">
            <img
              src={logo}
              alt="Logo"
              className="w-32 h-32 md:w-40 md:h-40 object-contain"
            />
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-end text-brown mb-8 font-Cinzel mr-0 lg:mr-20 mt-32">
          Misi LKBH Sata Alfaqih
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-Lato text-justify">
          <div className="border border-[#A7A7A7] p-4 md:p-6 bg-primarywhite shadow-md">
            <p className="text-base md:text-lg font-light">
              Meningkatkan pelayanan bantuan hukum terhadap masyarakat kurang
              mampu demi terwujudnya kepastian hukum yang adil serta perlakuan
              yang sama di hadapan hukum sebagai sarana perlindungan hak asasi
              manusia.
            </p>
          </div>
          <div className="border border-[#A7A7A7] p-4 md:p-6 bg-primarywhite shadow-md">
            <p className="text-base md:text-lg font-light">
              Meningkatkan efektivitas upaya-upaya pemenuhan hak-hak lapisan
              masyarakat lemah dan miskin.
            </p>
          </div>
          <div className="border border-[#A7A7A7] p-4 md:p-6 bg-primarywhite shadow-md">
            <p className="text-base md:text-lg font-light">
              Menanamkan, menumbuhkan sikap kemandirian serta memberdayakan
              potensi lapisan masyarakat yang lemah dan miskin dengan
              menyelenggarakan penyuluhan hukum, konsultasi hukum, dan program
              kegiatan lain yang berkaitan dengan penyelenggaraan Bantuan Hukum.
            </p>
          </div>
          <div className="border border-[#A7A7A7] p-4 md:p-6 bg-primarywhite shadow-md">
            <p className="text-base md:text-lg font-light">
              Membangun kerjasama dengan lembaga-lembaga mitra dalam
              mengupayakan dihormati, dihargai dan dijunjung tinggi nilai-nilai
              kemanusiaan dan hak-hak masyarakat, khususnya masyarakat kurang
              mampu.
            </p>
          </div>
        </div>
      </section>

      <section
        id="about5"
        className="bg-primarywhite py-12 md:py-24 px-8 md:px-16"
      >
        <p className="font-Cinzel font-bold text-2xl md:text-3xl lg:text-4xl text-center text-brown py-4 md:py-6">
          Struktur Kepengurusan
        </p>
        <p className="font-Lato font-light text-base md:text-lg text-justify md:text-black mt-5 md:mt-10 list-disc list-inside">
          Berikut Merupakan Struktur Kepengurusan LKBH Sata Al Faqih, yang
          dirancang untuk memastikan efektivitas dan efisiensi dalam setiap
          aspek organisasi, sehingga memungkinkan koordinasi yang baik antara
          berbagai elemen dalam organisasi serta memastikan setiap inisiatif dan
          program dapat terlaksana dengan optimal.
        </p>

        <div className="mt-10 flex justify-center">
          <img
            src={struktur}
            alt="lawyer"
            className="w-full max-w-lg md:max-w-xl lg:max-w-3xl mb-8 md:mb-0"
          />
        </div>
      </section>

      <section
        id="about6"
        className="bg-white text-black py-12 md:py-24 px-8 md:px-16 font-Lato"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-brown mb-12 font-Cinzel">
          Fasilitas
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="relative">
              <img
                src={office}
                alt="Kantor Banda Aceh"
                className="w-full h-[600px] shadow-lg object-center"
              />
              <div className="absolute top-0 left-0 flex items-center gap-2 p-2 bg-white bg-opacity-75">
                <MdLocationOn className="text-red-600" size={20} />
                <span className="text-gray-700 font-semibold">
                  Kantor Banda Aceh
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center md:items-start">
              <img
                src={meetingRoom}
                alt="Meeting Room"
                className="w-full h-[300px] object-cover shadow-lg mb-4"
              />
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Meeting Room
              </h3>
              <p className="text-gray-600">Ruang rapat tim</p>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <img
                src={advocateParalegal}
                alt="Ruang Kerja Advokat & Paralegal"
                className="w-full h-[300px] object-cover shadow-lg mb-4"
              />
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Ruang Kerja Advokat & Paralegal
              </h3>
              <p className="text-gray-600">
                Menyiapkan dokumen hukum dan pekerjaan lainnya
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto pt-20 mt-20  border-brown border-t-2">
          <div className="mb-12">
            <div className="relative">
              <img
                src={office2}
                alt="Kantor Banda Aceh"
                className="w-full h-[600px] shadow-lg object-center"
              />
              <div className="absolute top-0 left-0 flex items-center gap-2 p-2 bg-white bg-opacity-75">
                <MdLocationOn className="text-red-600" size={20} />
                <span className="text-gray-700 font-semibold">
                  Kantor Nagan Raya
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center md:items-start">
              <img
                src={nagan1}
                alt="Meeting Room"
                className="w-full h-[300px] object-cover shadow-lg mb-4"
              />
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Resepsionis
              </h3>
              <p className="text-gray-600">
                Meja Resepsionis dan Ruang Tunggu Klien/Pihak
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <img
                src={nagan2}
                alt="Ruang Kerja Advokat & Paralegal"
                className="w-full h-[300px] object-cover shadow-lg mb-4"
              />
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Ruang Kerja Advokat & Paralegal
              </h3>
              <p className="text-gray-600">
                Menyiapkan dokumen hukum dan pekerjaan lainnya
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center md:items-start">
              <img
                src={nagan3}
                alt="Meeting Room"
                className="w-full h-[300px] object-cover shadow-lg mb-4"
              />
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Ruang Kerja ADV
              </h3>
              <p className="text-gray-600">Layanan konsultasi hukum</p>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <img
                src={nagan4}
                alt="Ruang Kerja Advokat & Paralegal"
                className="w-full h-[300px] object-cover shadow-lg mb-4"
              />
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Ruang Kerja Ketua
              </h3>
              <p className="text-gray-600">
                Ruang Kerja Ketua LKBH SATA Alfaqih
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about7"
        className="bg-primarywhite py-12 md:py-24 px-8 md:px-16"
      >
        <p className="font-Cinzel font-bold text-2xl md:text-3xl lg:text-4xl text-center text-brown py-4 md:py-6">
          Dokumentasi Kegiatan
        </p>
        <p className="font-Lato font-light text-base md:text-lg text-justify md:text-black mt-5 md:mt-10 list-disc list-inside">
          Berikut merupakan dokumentasi kegiatan LKBH Sata Al Faqih, yang
          mencatat setiap aktivitas organisasi dengan lengkap dan terstruktur.
          Dokumentasi ini membantu memastikan semua kegiatan terdokumentasi
          dengan baik dan mudah diakses kapan saja.
        </p>

        <div className="mt-10 flex justify-center">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {data.map(({ imageLink, description }, index) => (
              <div key={index} className="relative overflow-hidden group">
                <img
                  className="h-80 w-full max-w-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                  src={imageLink}
                  alt="gallery-photo"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-Lato">
                  {description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
