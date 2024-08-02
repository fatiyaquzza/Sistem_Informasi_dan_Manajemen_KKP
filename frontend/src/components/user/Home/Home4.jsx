import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCases } from "../../../service/CaseService";

const Home4 = () => {
  const [cases, setCases] = useState([]);

  const sortedCases = cases
    .sort((a, b) => new Date(b.caseDate) - new Date(a.caseDate))
    .slice(0, 2);

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

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  const ellipsisStyle = {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  return (
    <div className="bg-primarywhite px-8 xl:px-16 py-12 xl:py-24">
      <div className="text-center">
        <h2 className="text-3xl xl:text-4xl font-bold mb-4 xl:mb-0 font-Cinzel xl:mr-72">
          Our Legal Work
        </h2>
        <h2 className="text-3xl xl:text-4xl text-brown font-bold mb-8 xl:mb-12 font-Cinzel xl:ml-52">
          Ongoing & Past Cases
        </h2>
      </div>
      {sortedCases.map((caseItem) => (
        <div key={caseItem.id} className="mt-8 xl:mt-16 space-y-8 font-Lato">
          <div className="bg-white p-6 shadow-md">
            <h2 className="text-xl xl:text-2xl font-semibold">
              {caseItem.caseName}
            </h2>
            <p className="mt-2 text-gray-700" style={ellipsisStyle}>
              {caseItem.caseAbout}
            </p>
            <div className="flex justify-between items-center mt-4">
              <p className="text-gray-400 italic">
                {formatDate(caseItem.caseDate)}
              </p>
              <Link to={`/admin-cases/${caseItem.id}`} className="text-brown">
                <p>Read More</p>
              </Link>
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-center mt-10 xl:mt-20">
        <Link
          to="/cases"
          className="border-solid border-2 border-brown hover:border-brown hover:text-brown hover:bg-transparent bg-brown text-white text-sm font-semibold py-3 px-6 xl:px-12"
        >
          Selengkapnya
        </Link>
      </div>
    </div>
  );
};

export default Home4;