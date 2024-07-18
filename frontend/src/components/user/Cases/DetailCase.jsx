import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCaseById } from "../../../service/CaseService";
import { FaUser } from "react-icons/fa";
import member1 from "../../../images/member1.jpg"; 

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
    return <div>Loading...</div>;
  }

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  const renderMember = (member, index) => {
    if (member) {
      return (
        <div key={index} className="mt-2  p-2 w-[300px] text-white flex items-center border-solid border-brown border-2">
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
        <div className="relative z-10 text-center text-white">
          <h1 className="text-6xl pb-10 border-white">Case</h1>
          <h1 className="text-6xl bg-black2 font-bold border-2 border-solid px-20 py-10 border-white">
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

      <section id="section2" className="bg-primarywhite text-black px-16 py-24 font-Lato">
        <div className="flex">
          <div className="w-1/4 pr-10">
            <p className="font-semibold">Last Updated:</p>
            <p>{formatDate(caseItem.caseDate)}</p>

            <p className="mt-5 font-semibold">Members:</p>
            {renderMember(caseItem.caseMember1, 1)}
            {renderMember(caseItem.caseMember2, 2)}
            {renderMember(caseItem.caseMember3, 3)}
            {renderMember(caseItem.caseMember4, 4)}
          </div>
          <div className="w-3/4 text-justify">
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
            className="mt-10 border-2 border-brown border-solid bg-brown text-white text-sm font-semibold mb-2 px-6 py-3 hover:bg-transparent hover:text-brown"
          >
            Back to Cases
          </button>
        </div>
      </section>
    </>
  );
};

export default DetailCase;
