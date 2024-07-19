import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AdminCases = () => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    getCases();
  }, []);

  const getCases = async () => {
    try {
      const response = await axios.get("http://localhost:5000/admin-cases");
      setCases(response.data);
    } catch (error) {
      console.error("Error fetching cases:", error);
    }
  };

  const deleteLawyer = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/admin-cases/${id}`);
      getCases();
    } catch (error) {
      console.error("Error deleting case:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 font-Poppins">
      <h1 className="text-3xl font-bold mb-4">Manage Cases</h1>
      <Link
        to="/admin-cases/add"
        className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded inline-block mb-4"
      >
        Add New Case
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
              Date
            </th>
            <th className="border px-6 py-3 text-left text-sm font-bold text-gray-700 uppercase">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {cases.map((casee, index) => (
            <tr key={casee.id}>
              <td className="border px-6 py-4">{index+1}</td>
              <td className="border px-6 py-4">{casee.caseName}</td>
              <td className="border px-6 py-4">{casee.caseDate}</td>
              <td className="border px-6 py-4">
              <div className="flex justify-between">
                <Link
                  to={`/admin-cases/edit/${casee.id}`}
                  className="text-blue-500 hover:text-blue-700 mr-2"
                >
                  <FontAwesomeIcon icon={faEdit} /> &nbsp; Edit
                </Link>
                <button
                  onClick={() => deleteLawyer(casee.id)}
                  className="text-red-500 hover:text-red-700"
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

export default AdminCases;
