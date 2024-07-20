import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import member1 from "../../../images/member1.jpg"; 
import { getLawyerById } from "../../../service/LawyerService";

const DetailTeam = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lawyer, setLawyer] = useState(null);

  useEffect(() => {
    const fetchCase = async () => {
      try {
        const data = await getLawyerById(id);
        setLawyer(data);
      } catch (error) {
        console.error("Error fetching lawyer:", error);
      }
    };

    fetchCase();
  }, [id]);

  if (!lawyer) {
    return <div>Loading...</div>;
  }
  
  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center bg-black font-Lato">

        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl bg-black2 font-bold border-2 border-solid px-20 py-10 border-white">{lawyer.name}</h1>
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
        className=" bg-primarywhite text-black px-16 py-24 font-Lato"
      >

        <div className="flex flex-col items-center">
          <img
            src={lawyer.url}
            alt={lawyer.name}
            className="w-[500px] h-[500px] object-cover  rounded-md border-solid border-4 shadow-md border-brown"
          />

        </div>

        <p className="text-3xl mt-8 font-semibold text-center">{lawyer.name}</p>
        <p className="text-xl mt-2 text-gray-600 text-center">{lawyer.position}</p>

        <p className="text-2xl mt-8 font-semibold px-40">About</p>
          <p className="mt-4 text-lg text-justify font-light text-black2 px-40">
          {lawyer.about}
          </p>

          <p className="mt-5 text-lg text-justify font-light text-black2 px-40">
          {lawyer.description}
          </p>

        <div className="px-40 mt-10">
        <button
        onClick={() => navigate("/team")}
          className="mt-10 border-2 border-brown border-solid  bg-brown text-white text-sm font-semibold mb-2 px-6 py-3 hover:bg-transparent hover:text-brown"
        >
          Back to Our Team
        </button>
        </div>

      </section>
    </>
  );
};

export default DetailTeam;
