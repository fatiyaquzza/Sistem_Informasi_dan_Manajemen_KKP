import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getCases } from "../../../service/CaseService";
import Case from "../../../images/Case.png";
import familyLaw from "../../../images/familyLaw.png";

const Cases = () => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const data = await getCases();
        setCases(data);
      } catch (error) {
        console.error("Error fetching cases:", error);
      }
    };

    fetchCases();
  }, []);

  const navigate = useNavigate();
  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  const ellipsisStyle = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };

  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center bg-black font-Lato">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${Case})`, opacity: 0.2 }}
        ></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-7xl font-bold bold border-b py-10 border-white">Cases</h1>
          <p className="text-xl mt-5 font-light">
            Here to Assist. Ready to Listen. Committed to Your Cause.
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

      <section id="section2" className="bg-primarywhite text-black px-16 py-24">
        <p className="font-Cinzel font-light text-5xl text-center border-b py-6 border-[#BCBCBC] w-[800px] mx-auto ">
          Recent and Ongoing{" "}
          <span className="text-brown font-semibold">Cases</span>
        </p>
        <p className="font-Lato font-light text-xl text-center mx-64 mt-10">
          Below are examples of some of the notable cases we have handled,
          showcasing our dedication and expertise across various areas of law.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-20 font-Lato">
          {cases.map((caseItem) => (
            <div key={caseItem.id} className="bg-gray-100 px-2 py-6 shadow-sm shadow-black">
              <div className="relative px-24">
                <img
                  src={familyLaw}
                  alt={caseItem.caseName}
                  className="w-full h-60 object-cover border-black border-2"
                />
                <div className="absolute top-0 left-0 bg-black text-white text-xs mx-24 px-2 py-1">
                  {formatDate(caseItem.caseDate)}
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-2xl font-semibold text-center">{caseItem.caseName}</h2>
                <p className="mt-4 px-10 text-lg text-gray-600 text-justify" style={ellipsisStyle}>
                  {caseItem.caseAbout}
                </p>
                <div className="flex justify-center">
                <Link to={`/admin-cases/${caseItem.id}`} className="mt-5 px-6 py-2 text-sm shadow-md border-2 border-solid border-brown bg-transparent text-brown hover:border-brown hover:bg-brown hover:border-2 hover:shadow-none hover:text-white">
                  Read More
                </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Pagination />
        </div>
      </section>
    </>
  );
};

const Pagination = () => {
  return (
    <div className="flex items-center space-x-2">
      <button className="px-3 py-1 bg-white border border-gray-300 text-gray-700">
        &lt;
      </button>
      <button className="px-3 py-1 bg-brown text-white">1</button>
      <button className="px-3 py-1 bg-white border border-gray-300 text-gray-700">
        2
      </button>
      <button className="px-3 py-1 bg-white border border-gray-300 text-gray-700">
        3
      </button>
      <span className="px-3 py-1 text-gray-700">...</span>
      <button className="px-3 py-1 bg-white border border-gray-300 text-gray-700">
        19
      </button>
      <button className="px-3 py-1 bg-white border border-gray-300 text-gray-700">
        &gt;
      </button>
    </div>
  );
};

export default Cases;