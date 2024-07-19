import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    <div className="container mx-auto px-4 py-8 font-Poppins">
      <h1 className="text-3xl font-bold mb-4">Manage Lawyers</h1>
      <Link
        to="/lawyers/add"
        className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded inline-block mb-4"
      >
        Add New Lawyer
      </Link>
      <table className="min-w-full bg-white border shadow-sm rounded">
        <thead>
          <tr className="bg-gray-200 text-center">
          <th className="border px-6 py-3 text-left text-sm font-bold text-gray-700 uppercase">
              No
            </th>
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
          {lawyers.map((lawyer, index) => (
            <tr key={lawyer.id}>
              <td className="border px-6 py-4">{index+1}</td>
              <td className="border px-6 py-4">{lawyer.name}</td>
              <td className="border px-6 py-4">{lawyer.position}</td>
              <td className="border px-6 py-4">
              <div className="flex justify-between">
                <Link
                  to={`/lawyers/edit/${lawyer.id}`}
                  className="text-blue-500 hover:text-blue-70 border-blue-500 border-2 border-solid p-2 rounded hover:bg-blue-500 hover:text-white"
                >
                  <FontAwesomeIcon icon={faEdit} /> &nbsp; Edit
                </Link>
                <button
                  onClick={() => deleteLawyer(lawyer.id)}
                  className="text-red-500  border-red-500 border-2 border-solid p-2 rounded hover:bg-red-500 hover:text-white"
                >
                  <FontAwesomeIcon icon={faTrash} /> &nbsp; Delete
                </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Lawyers;
