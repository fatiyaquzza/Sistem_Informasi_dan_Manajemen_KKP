import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCaseById } from "../../../service/CaseService";
import { FaUser } from "react-icons/fa";

const DetailCase = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [caseItem, setCaseItem] = useState(null);

  useEffect(() => {
    const fetchCase = async () => {
      try {
        const data = await getCaseById(id);

        // Uraikan JSON string jika diperlukan
        const caseWithParsedMembers = {
          ...data,
          teamMembers: JSON.parse(data.teamMembers || "[]") // Uraikan JSON string
        };
        setCaseItem(caseWithParsedMembers);
      } catch (error) {
        console.error("Error fetching case:", error);
      }
    };

    fetchCase();
  }, [id]);

  if (!caseItem) {
    return <div>Loading...</div>;
  }

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  const renderMember = (member, index) => {
    if (member) {
      return (
        <div key={index} className="mt-2 p-2 w-full lg:w-[300px] text-white flex items-center border-solid border-brown border-2">
          <FaUser className="mr-2 w-12 h-12 bg-brown p-2" /> {/* Ikon pengguna */}
          <div className="text-brown font-semibold pl-1 capitalize">
            {member}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center bg-black font-Lato">
        <div className="relative z-10 text-center text-white p-4 md:p-8 mx-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl pb-10 py-4 md:py-8 lg:py-10 border-white">
            Case
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl bg-black2 font-bold border-2 border-solid px-10 py-5 md:px-20 md:py-10 border-white">
            {caseItem.caseName}
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
        className="bg-primarywhite text-black px-12 6 py-12 md:py-24 font-Lato"
      >
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4 pr-0 md:pr-10 mb-10 md:mb-0">
            <p className="font-semibold">Last Updated:</p>
            <p>{formatDate(caseItem.caseDate)}</p>

            <p className="mt-5 font-semibold">Members:</p>
            {caseItem.teamMembers.length > 0 ? (
              caseItem.teamMembers.map((member, index) => renderMember(member, index + 1))
            ) : (
              <p>No members</p>
            )}
          </div>
          <div className="w-full lg:w-3/4 text-justify">
            <h2 className="text-3xl font-semibold">Background</h2>
            <p className="mt-4">{caseItem.caseAbout}</p>
            <h2 className="text-3xl font-semibold mt-10">Actions Taken</h2>
            <p className="mt-4">{caseItem.caseAction}</p>
            <h2 className="text-3xl font-semibold mt-10">Outcome</h2>
            <p className="mt-4">{caseItem.caseOutcome}</p>
          </div>
        </div>
        <div className="mt-10 flex justify-end">
          <button
            onClick={() => navigate("/cases")}
            className="mt-6 border-2 border-brown border-solid bg-brown text-white text-sm font-semibold mb-2 px-5 py-3 hover:bg-transparent hover:text-brown transition"
          >
            Kembali ke Berita & Artikel
          </button>
        </div>
      </section>
    </>
  );
};

export default DetailCase;
