import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faFileAlt } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const [teamCount, setTeamCount] = useState(0);
  const [articleCount, setArticleCount] = useState(0);

  useEffect(() => {
    getTeamCount();
    getArticleCount();
  }, []);

  const getTeamCount = async () => {
    try {
      const response = await axios.get("http://localhost:5000/lawyers");
      setTeamCount(response.data.length);
    } catch (error) {
      console.error("Error fetching team data:", error);
    }
  };

  const getArticleCount = async () => {
    try {
      const response = await axios.get("http://localhost:5000/admin-cases");
      setArticleCount(response.data.length);
    } catch (error) {
      console.error("Error fetching article data:", error);
    }
  };

  return (
    <div className="mx-auto px-4 py-8 font-Poppins text-center">
      <h1 className="text-4xl font-bold mb-10 text-gray-800 pt-20">Selamat Datang di Dashboard Admin</h1>
      <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8 md:p-12 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <FontAwesomeIcon icon={faUsers} className="text-4xl md:text-6xl mb-4 md:mb-0 md:mr-6" />
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Jumlah Tim</h2>
              <p className="text-4xl md:text-5xl mt-4 font-semibold">{teamCount}</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-8 md:p-12 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <FontAwesomeIcon icon={faFileAlt} className="text-4xl md:text-6xl mb-4 md:mb-0 md:mr-6" />
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Jumlah Artikel</h2>
              <p className="text-4xl md:text-5xl mt-4 font-semibold">{articleCount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
