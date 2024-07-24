import React, { useState, useEffect } from "react";
import { getLawyers } from "../../../service/LawyerService";
import { Link } from "react-router-dom";
import team1 from "../../../images/team1.png";

const Team = () => {
  const [lawyers, setLawyers] = useState([]);

  useEffect(() => {
    const fetchLawyers = async () => {
      try {
        const data = await getLawyers();
        setLawyers(data);
      } catch (error) {
        console.error("Error fetching lawyers:", error);
      }
    };

    fetchLawyers();
  }, []);

  const getGridCols = () => {
    if (lawyers.length === 1) return "grid-cols-1";
    if (lawyers.length === 2) return "grid-cols-1 sm:grid-cols-2";
    return "sm:grid-cols-2 md:grid-cols-3";
  };

  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center bg-black font-Lato">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${team1})`, opacity: 0.2 }}
        ></div>
        <div className="relative z-10 text-center text-white p-4 md:p-8 mx-6 md:md-6">
          <h1 className="text-4xl md:text-7xl font-bold border-b py-4 md:py-10 border-white ">
            Our Team
          </h1>
          <p className="text-lg md:text-xl mt-4 md:mt-5 font-light">
            Expert litigators. Trusted advisors. Your champions in justice.
          </p>
        </div>
        <div className="absolute bottom-10 w-full flex justify-center">
          <a href="#section2" className="p-2 text-white animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 md:w-10 h-6 md:h-10"
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
        className="bg-primarywhite text-black px-4 md:px-16 py-12 md:py-24"
      >
        <p className="font-Cinzel font-light text-2xl md:text-4xl lg:text-5xl text-center border-b w-72 md:w-[800px] py-4 md:py-6 border-[#BCBCBC] mx-auto">
          Meet Our <span className="text-brown font-semibold">Team</span>
        </p>

        <div
          className={`grid ${getGridCols()} gap-6 md:gap-8 font-Lato mt-8 md:mt-10 md:px-12`}
        >
          {lawyers.map((lawyer) => (
            <Link to={`/lawyers/${lawyer.id}`} key={lawyer.id}>
              <div className="relative w-full max-w-[420px] mx-auto shadow-md hover:shadow-2xl cursor-pointer group transform hover:-translate-y-2 transition duration-300">
                <div className="relative overflow-hidden border-2 border-brown">
                  <img
                    src={lawyer.url}
                    alt={lawyer.name}
                    className="w-full h-[200px] md:h-[400px] lg:h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
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
                <div className="w-full bg-white text-brown text-center py-4 border-x-2 border-b-2 border-brown">
                  <p className="text-xs md:text-lg lg:text-2xl font-regular transition-colors duration-300">
                    {lawyer.name}
                  </p>
                  <p className="text-xs md:text-lg lg:text-xl font-light italic">
                    {lawyer.position}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Team;