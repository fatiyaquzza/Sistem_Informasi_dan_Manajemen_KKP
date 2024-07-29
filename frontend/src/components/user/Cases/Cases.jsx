import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCases } from "../../../service/CaseService";
import Case from "../../../images/Case.png";
import { FaSearch } from "react-icons/fa";

const Cases = () => {
  const [cases, setCases] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const casesPerPageMobile = 3;
  const casesPerPageDesktop = 6;

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

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCases = cases.filter((caseItem) =>
    caseItem.caseName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const casesPerPage =
    window.innerWidth < 768 ? casesPerPageMobile : casesPerPageDesktop;

  const totalPages = Math.ceil(filteredCases.length / casesPerPage);
  const indexOfLastCase = currentPage * casesPerPage;
  const indexOfFirstCase = indexOfLastCase - casesPerPage;
  const currentCases = filteredCases.slice(indexOfFirstCase, indexOfLastCase);

  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center bg-black font-Lato">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${Case})`, opacity: 0.2 }}
        ></div>
        <div className="relative z-10 text-center text-white p-4 md:p-8 mx-6 md:md-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold border-b py-4 md:py-8 lg:py-10 border-white w-fit md:w-[600px]">
            BERITA & ARTIKEL
          </h1>
          <p className="text-base md:text-base lg:text-lg md:block hidden mt-4 md:mt-5 font-light">
          Dapatkan informasi terbaru dan artikel penting mengenai hukum.
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
        className="bg-primarywhite text-black px-16 py-12 md:py-24"
      >
        <p className="font-Cinzel font-light text-2xl md:text-4xl lg:text-5xl text-center border-b w-72 md:w-[800px] py-4 md:py-6 border-[#BCBCBC] mx-auto">
        Kumpulan Berita dan 
          <span className="text-brown font-semibold"> Artikel</span>
        </p>
        <p className="font-Lato font-light text-lg text-center md:text-black hidden md:block mx-64 mt-10 md:mt-10">
        Berikut adalah beberapa berita dan artikel terbaru yang mencerminkan perkembangan terkini dan wawasan mendalam kami dalam berbagai isu hukum
        </p>

        <div className="mt-10 md:mt-16 relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <FaSearch className="text-gray-500 dark:text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search cases by case name"
            value={searchTerm}
            onChange={handleSearchChange}
            className="block w-full pl-10 pr-4 py-4 text-sm text-gray-900 border border-gray-300 bg-gray-50 shadow-sm"
          />
        </div>

        <div className="mt-16 overflow-x-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {currentCases.map((caseItem) => (
              <div
                key={caseItem.id}
                className="bg-white shadow-lg overflow-hidden"
              >
                <div className="relative bg-gradient-to-r from-brown to-black text-white p-6 flex items-center justify-center">
                  <div className="absolute top-0 left-0 bg-black text-white text-xs px-2 py-1">
                    {formatDate(caseItem.caseDate)}
                  </div>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
                    {caseItem.caseName}
                  </h2>
                </div>
                <div className="p-6">
                  <p className="text-lg text-gray-700 mb-4">
                    {caseItem.caseAbout.length > 100
                      ? `${caseItem.caseAbout.slice(0, 100)}...`
                      : caseItem.caseAbout}
                  </p>
                  <div className="flex justify-center">
                    <Link
                      to={`/admin-cases/${caseItem.id}`}
                      className="px-5 py-2 text-sm bg-brown text-white shadow-md border-solid border-2 border-brown hover:bg-transparent hover:text-brown transition duration-300"
                    >
                      Selengkapnya
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </section>
    </>
  );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center space-x-2">
      <button
        className={`px-3 py-1 ${
          currentPage === 1 ? "bg-gray-300" : "bg-white"
        } border border-gray-300 text-gray-700`}
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          className={`px-3 py-1 ${
            number === currentPage
              ? "bg-brown text-white"
              : "bg-white border border-gray-300 text-gray-700"
          }`}
          onClick={() => onPageChange(number)}
        >
          {number}
        </button>
      ))}
      <button
        className={`px-3 py-1 ${
          currentPage === totalPages ? "bg-gray-300" : "bg-white"
        } border border-gray-300 text-gray-700`}
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Cases;