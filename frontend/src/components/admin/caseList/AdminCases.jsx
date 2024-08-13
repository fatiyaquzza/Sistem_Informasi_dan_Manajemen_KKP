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

  const deleteCase = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/admin-cases/${id}`);
      getCases();
    } catch (error) {
      console.error("Error deleting case:", error);
    }
  };

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  return (
    <div className="container mx-auto px-4 py-8 font-Poppins">
      <h1 className="text-3xl font-bold mb-8">Manage Articles</h1>
      <Link
        to="/admin-cases/add"
        className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded inline-block mb-6"
      >
        Add New Article
      </Link>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200 text-left text-sm font-semibold text-gray-700">
              <th className="border px-6 py-3">No</th>
              <th className="border px-6 py-3">Name</th>
              <th className="border px-6 py-3">Date</th>
              <th className="border px-6 py-3">About</th>
              <th className="border px-6 py-3">URL</th>
              <th className="border px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cases.map((casee, index) => (
              <tr key={casee.id} className="hover:bg-gray-100">
                <td className="border px-6 py-4">{index + 1}</td>
                <td className="border px-6 py-4">{casee.caseName}</td>
                <td className="border px-6 py-4">
                  {formatDate(casee.caseDate)}
                </td>
                <td className="border px-6 py-4">{casee.caseAbout}</td>
                <td className="border px-6 py-4">
                  <a
                    href={casee.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    View PDF
                  </a>
                </td>
                <td className="border px-6 py-4">
                  <div className="flex space-x-2">
                    <Link
                      to={`/admin-cases/edit/${casee.id}`}
                      className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                    >
                      <FontAwesomeIcon icon={faEdit} /> Edit
                    </Link>
                    <button
                      onClick={() => deleteCase(casee.id)}
                      className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                    >
                      <FontAwesomeIcon icon={faTrash} /> Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminCases;