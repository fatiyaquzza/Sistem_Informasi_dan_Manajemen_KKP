import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCase = () => {
  const [caseName, setcaseName] = useState("");
  const [caseDate, setcaseDate] = useState("");
  const [caseAbout, setcaseAbout] = useState("");
  const [caseAction, setcaseAction] = useState("");
  const [file, setFile] = useState(null);

  const navigate = useNavigate();
    
  const saveCase = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("caseName", caseName);
    formData.append("caseDate", caseDate);
    formData.append("caseAbout", caseAbout);
    formData.append("caseAction", caseAction);
    formData.append("file", file);
    // console.log(file);
    try {
      await axios.post("http://localhost:5000/admin-cases", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate("/caseList");
    } catch (error) {
      console.error("Error saving case:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Add New Case</h1>
      <form onSubmit={saveCase} className="max-w-full p-10 shadow-md rounded bg-white">
        <div className="mb-4">
          <label htmlFor="caseName" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            id="caseName"
            type="text"
            value={caseName}
            required
            onChange={(e) => setcaseName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="caseDate" className="block text-gray-700 font-bold mb-2">
            Date
          </label>
          <input
            id="caseDate"
            type="date"
            value={caseDate}
            required
            onChange={(e) => setcaseDate(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="caseAbout" className="block text-gray-700 font-bold mb-2">
            About
          </label>
          <textarea
            id="caseAbout"
            value={caseAbout}
            required
            onChange={(e) => setcaseAbout(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:border-blue-500 bg-gray-50 h-32 resize-none"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="caseAction" className="block text-gray-700 font-bold mb-2">
            Action
          </label>
          <textarea
            id="caseAction"
            value={caseAction}
            required
            onChange={(e) => setcaseAction(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:border-blue-500 bg-gray-50 h-32 resize-none"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="file" className="block text-gray-700 font-bold mb-2">
            PDF
          </label>
          <input
            id="file"
            type="file"
            accept="application/pdf"
            required
            onChange={(e) => setFile(e.target.files[0])}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
          />
          </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCase;
