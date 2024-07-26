import React from "react";
import { Link } from "react-router-dom";
import expertise from "../../../images/Expertise.png";
import familyLaw from "../../../images/familyLaw.png";
import civilRights from "../../../images/civilRights.png";

const AreasOfExpertise = () => {
  const specializations = [
    { name: "Litigasi", image: familyLaw, link: "/criminal-law" },
    { name: "Non Litigasi", image: civilRights, link: "/civil-law" },
    { name: "Konsultasi Hukum", image: familyLaw, link: "/criminal-law" },
    { name: "Mediasi", image: civilRights, link: "/civil-law" },
  ];

  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center bg-black font-Lato">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${expertise})`, opacity: 0.2 }}
        ></div>
        <div className="relative z-10 text-center text-white p-4 md:p-8 mx-6 md:md-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold border-b py-4 md:py-8 lg:py-10 border-white w-fit md:w-[800px]">LAYANAN HUKUM KAMI</h1>
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

      <section id="section2" className="bg-primarywhite text-black px-16 py-12 md:py-24">
        <p className="font-Cinzel font-light text-2xl md:text-4xl lg:text-5xl text-center border-b w-72 md:w-[800px] py-4 md:py-6  border-[#BCBCBC] mx-auto">
        Spesialisasi {" "}
          <span className="text-brown font-semibold">Hukum Kami</span>
        </p>
        <p className="font-Lato font-light text-lg text-center md:text-black hidden md:block mx-52 mt-10 md:mt-10">
        Di LKBH Sata Al-Faqih, kami menawarkan berbagai layanan hukum untuk memenuhi beragam kebutuhan klien kami. Tim pengacara kami yang terampil berkomitmen untuk memberikan panduan dan representasi ahli di berbagai bidang hukum.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 mt-10 md:gap-16 md:mt-16">
      {specializations.map((specialization, index) => (
        <div
          key={index}
          className="relative w-full shadow-md hover:shadow-2xl cursor-pointer group transform hover:-translate-y-2 transition duration-300 overflow-hidden"
        >
          <Link to={specialization.link} className="block w-full h-full">
            <div className="relative">
              <img
                src={specialization.image}
                alt={specialization.name}
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <p className="text-white text-lg sm:text-2xl md:text-3xl font-semibold font-Lato">
                  {specialization.name}
                </p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm md:text-lg lg:text-xl flex items-center">
                  <span>See Details</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 md:w-6 h-5 md:h-6 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
      </section>
    </>
  );
};

export default AreasOfExpertise;
