import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCaseById } from "../../../service/CaseService";

const DetailCase = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [caseItem, setCaseItem] = useState(null);

  useEffect(() => {
    const fetchCase = async () => {
      try {
        const data = await getCaseById(id);
        setCaseItem(data);
      } catch (error) {
        console.error("Error fetching case:", error);
      }
    };

    fetchCase();
  }, [id]);

  if (!caseItem) {
    return (
      <div className="flex items-center justify-center min-h-screen text-2xl">
        Loading...
      </div>
    );
  }

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center bg-black text-white font-Lato">
        <div className="relative z-10 text-center p-4 md:p-8 mx-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl pb-10 py-4 md:py-8 lg:py-10 border-b-2 border-white">
            {/* Berita dan Artikel */}
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl bg-black2 font-bold border-2 border-solid px-10 py-5 md:px-20 md:py-10 border-white shadow-lg">
          Detail Berita dan Artikel
          </h1>
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
        className="bg-primarywhite text-black px-6 md:px-12 py-12 md:py-24 font-Lato"
      >
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4 pr-0 md:pr-10 mb-10 md:mb-0">
            <p className="font-semibold text-lg mb-2">Last Updated:</p>
            <p className="text-gray-700">{formatDate(caseItem.caseDate)}</p>
          </div>
          <div className="w-full lg:w-3/4 text-justify">
          {/* <h2 className="text-3xl font-semibold mb-4">Judul</h2> */}
            <p className="mt-4 text-2xl capitalize text-black font-semibold text-justify ">
              {caseItem.caseName.toUpperCase()}
            </p>
            <h2 className="text-3xl font-semibold text-gray-700 mt-10 mb-4">Abstract</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              {caseItem.caseAbout}
            </p>
            <h2 className="text-3xl font-semibold text-gray-700 mt-10 mb-4">Artikel Lengkap</h2>
            <div className="mt-4">
              <iframe
                src={caseItem.url}
                title="Case PDF"
                className="w-full h-[400px] md:h-[600px] border-2 border-solid border-gray-300 shadow-md"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => navigate("/cases")}
            className="mt-6 border-2 border-brown border-solid bg-brown text-white text-sm font-semibold mb-2 px-5 py-3 hover:bg-transparent hover:text-brown transition duration-300 ease-in-out"
          >
            Kembali ke Berita & Artikel
          </button>
        </div>
      </section>
    </>
  );
};

export default DetailCase;