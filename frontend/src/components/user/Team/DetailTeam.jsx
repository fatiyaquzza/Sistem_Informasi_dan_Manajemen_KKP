import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getLawyerById } from "../../../service/LawyerService";

const DetailTeam = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lawyer, setLawyer] = useState(null);

  useEffect(() => {
    const fetchLawyer = async () => {
      try {
        const data = await getLawyerById(id);
        setLawyer(data);
      } catch (error) {
        console.error("Error fetching lawyer:", error);
      }
    };

    fetchLawyer();
  }, [id]);

  if (!lawyer) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center bg-black font-Lato">
        <div className="relative z-10 text-center text-white p-4 md:p-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl bg-black2 font-bold border-2 border-solid px-6 md:px-20 py-6 md:py-10 border-white">
            {lawyer.name}
          </h1>
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
        className="bg-primarywhite text-black px-4 md:px-16 py-12 md:py-24 font-Lato"
      >
        <div className="flex flex-col items-center">
          <img
            src={lawyer.url}
            alt={lawyer.name}
            className="w-full max-w-[500px] h-auto object-cover rounded-md border-solid border-4 shadow-md border-brown"
          />
        </div>

        <p className="text-2xl md:text-3xl mt-4 md:mt-8 font-semibold text-center">
          {lawyer.name}
        </p>
        <p className="text-lg md:text-xl mt-2 text-gray-600 text-center">
          {lawyer.position}
        </p>

        <p className="text-xl md:text-2xl mt-8 font-semibold px-12 md:px-40">
          About
        </p>
        <p className="mt-4 text-base md:text-lg text-justify font-light text-black2 px-12 md:px-40 ">
          {lawyer.about}
        </p>

        <p className="mt-5 text-base md:text-lg text-justify font-light text-black2 px-12 md:px-40 ">
          {lawyer.description}
        </p>

        <div className="px-12 md:px-40 mt-10">
          <button
            onClick={() => navigate("/team")}
            className="mt-6 border-2 border-brown border-solid bg-brown text-white text-sm md:text-base font-semibold mb-2 px-4 md:px-6 py-2 md:py-3 hover:bg-transparent hover:text-brown transition"
          >
            Back to Our Team
          </button>
        </div>
      </section>
    </>
  );
};

export default DetailTeam;