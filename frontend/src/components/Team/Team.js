import React from "react";
import team1 from "../../images/team1.png";
import member1 from "../../images/member1.jpg"; 
import member2 from "../../images/member2.png"; 
import member3 from "../../images/member3.png";

const Team = () => {
  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center bg-black font-Lato">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${team1})`, opacity: 0.2 }}
        ></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-7xl font-bold">Our Team</h1>
          <hr className="w-[600px] mx-auto border-1 border-white my-10" />
          <p className="text-xl mt-4 font-light">
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

      <section
        id="section2"
        className=" bg-primarywhite text-black px-16 py-24"
      >
        <p className="font-Cinzel font-light text-5xl text-center">
            MEET OUR <span className="text-brown font-semibold">TEAM</span>
        </p>
        <hr className="w-[600px] mx-auto border-1 border-[#BCBCBC] my-10" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-Lato">
          {[member1, member2, member3, member1, member2, member3, member1, member2, member3].map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={member}
                alt={`Team member ${index + 1}`}
                className="w-[450px] h-[600px] object-cover"
              />
              <div className="w-full bg-[#8A4F3D] text-white text-center py-4">
                <p className="text-2xl font-regular">Zulqaria Lahirya S.H., M.H.</p>
                <p className="text-xl font-light italic">Pengacara</p>
              </div>
            </div>
          ))}
        </div>

      </section>
    </>
  );
};

export default Team;
