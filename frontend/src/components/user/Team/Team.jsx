import React, { useState, useEffect } from "react";
import { getLawyers } from "../../../service/LawyerService";
import { Link } from "react-router-dom";
import team1 from "../../../images/team1.png";
import member1 from "../../../images/member1.jpg"; 
import member2 from "../../../images/member2.png"; 
import member3 from "../../../images/member3.png";

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

  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center bg-black font-Lato">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${team1})`, opacity: 0.2 }}
        ></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-7xl font-bold border-b py-10 border-white ">Our Team</h1>
          <p className="text-xl mt-5 font-light">
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

      <section id="section2" className=" bg-primarywhite text-black px-16 py-24">
        <p className="font-Cinzel font-light text-5xl text-center border-b py-6 border-[#BCBCBC] w-[800px] mx-auto">
          MEET OUR <span className="text-brown font-semibold">TEAM</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-Lato mt-10">
          {lawyers.map((lawyer) => (
          <Link to={`/lawyers/${lawyer.id}`} >
            <div key={lawyer.id} className="w-[420px] flex flex-col items-center shadow-md hover:shadow-xl cursor-pointer">
              <img
                src={lawyer.url}
                alt={lawyer.name}
                className="w-full h-[600px] object-cover border-solid border-2 border-brown"
              />
              <div className="w-full bg-brown text-white text-center py-4">
                <p className="text-2xl font-regular">{lawyer.name}</p>
                <p className="text-xl font-light italic">{lawyer.position}</p>
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
