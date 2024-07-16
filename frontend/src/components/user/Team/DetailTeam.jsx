import React from "react";
import { useNavigate } from "react-router-dom";
import member1 from "../../../images/member1.jpg"; 

const DetailTeam = () => {
    const navigate = useNavigate();
  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center bg-black font-Lato">

        <div className="relative z-10 text-center text-white">
          <h1 className="text-7xl bg-black2 font-bold border-2 border-solid px-20 py-10 border-white">Zulqaria Lahirya, S.H., M.H.</h1>
       
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
            src={member1} // Replace with the correct path to the image
            alt="Zulqaria Lahirya"
            className="w-[400px] h-auto rounded-md"
          />

        </div>

        <p className="text-3xl mt-8 font-semibold text-center">Zulqaria Lahirya, S.H., M.H.</p>
        <p className="text-xl mt-2 text-gray-600 text-center">Advokat</p>

        <p className="text-2xl mt-8 font-semibold px-40">About</p>
          <p className="mt-4 text-xl text-justify tet-black2 px-40">
            Zulqaria Lahirya, S.H., merupakan Advokat di Kantor SATA Lawyers yang telah memiliki berbagai pengalaman. Zulqaria Lahirya, S.H. menyelesaikan pendidikan formal Sarjana Hukum di Universitas Islam Negeri Ar-Raniry serta telah menempuh berbagai pelatihan di bidang hukum.
            <br /><br />
            Sosok Advokat muda ini, merupakan Advokat yang telah berpengalaman dibidang Litigasi Pidana, ketenagakerjaan dan pertanahan dan pertambangan.
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