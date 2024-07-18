import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Lawyers = () => {
  const [lawyers, setLawyers] = useState([]);

  useEffect(() => {
    getLawyers();
  }, []);

  const getLawyers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/lawyers");
      setLawyers(response.data);
    } catch (error) {
      console.error("Error fetching lawyers:", error);
    }
  };

  const deleteLawyer = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/lawyers/${id}`);
      getLawyers();
    } catch (error) {
      console.error("Error deleting lawyer:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Manage Lawyers</h1>
      <Link
        to="/lawyers/add"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block mb-4"
      >
        Add New Lawyer
      </Link>
      <table className="min-w-full bg-white border shadow-sm rounded">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-6 py-3 text-left text-sm font-bold text-gray-700 uppercase">
              Name
            </th>
            <th className="border px-6 py-3 text-left text-sm font-bold text-gray-700 uppercase">
              Position
            </th>
            <th className="border px-6 py-3 text-left text-sm font-bold text-gray-700 uppercase">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {lawyers.map((lawyer) => (
            <tr key={lawyer.id}>
              <td className="border px-6 py-4">{lawyer.name}</td>
              <td className="border px-6 py-4">{lawyer.position}</td>
              <td className="border px-6 py-4">
                <Link
                  to={`/lawyers/edit/${lawyer.id}`}
                  className="text-blue-500 hover:text-blue-700 mr-2"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteLawyer(lawyer.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Lawyers;
