import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment-timezone";

const EditCase = () => {
  const [caseName, setCaseName] = useState("");
  const [caseDate, setCaseDate] = useState("");
  const [caseAbout, setCaseAbout] = useState("");
  const [caseAction, setCaseAction] = useState("");
  const [file, setFile] = useState(null);
  const [existingFile, setExistingFile] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getCaseById();
  }, []);

  const getCaseById = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/admin-cases/${id}`
      );
      const caseData = response.data;

      const caseDateFormatted = moment(caseData.caseDate).format("YYYY-MM-DD");

      setCaseName(caseData.caseName);
      setCaseDate(caseDateFormatted);
      setCaseAbout(caseData.caseAbout);
      setCaseAction(caseData.caseAction);
      setExistingFile(caseData.url);
    } catch (error) {
      console.error("Error fetching case data:", error);
    }
  };

  const updateCase = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    const caseDateISO = moment(caseDate).toISOString();
    formData.append("caseName", caseName);
    formData.append("caseDate", caseDateISO);
    formData.append("caseAbout", caseAbout);
    formData.append("caseAction", caseAction);
    if (file) {
      formData.append("file", file);
    } else {
      formData.append("existingFile", existingFile); 
    }
  
    try {
      await axios.patch(`http://localhost:5000/admin-cases/${id}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate("/caseList");
    } catch (error) {
      console.error("Error updating article:", error);
    }
  };
  

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Edit Case</h1>
      <form
        onSubmit={updateCase}
        className="max-w-full p-10 shadow-md rounded bg-white"
      >
        <div className="mb-4">
          <label
            htmlFor="caseName"
            className="block text-gray-700 font-bold mb-2"
          >
            Name
          </label>
          <input
            id="caseName"
            type="text"
            value={caseName}
            required
            onChange={(e) => setCaseName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="caseDate"
            className="block text-gray-700 font-bold mb-2"
          >
            Date
          </label>
          <input
            id="caseDate"
            type="date"
            value={caseDate}
            required
            onChange={(e) => setCaseDate(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="caseAbout"
            className="block text-gray-700 font-bold mb-2"
          >
            About
          </label>
          <textarea
            id="caseAbout"
            value={caseAbout}
            required
            onChange={(e) => setCaseAbout(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:border-blue-500 bg-gray-50 h-32 resize-none"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="caseAction"
            className="block text-gray-700 font-bold mb-2"
          >
            Action
          </label>
          <textarea
            id="caseAction"
            value={caseAction}
            required
            onChange={(e) => setCaseAction(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:border-blue-500 bg-gray-50 h-32 resize-none"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="file" className="block text-gray-700 font-bold mb-2">
            PDF
          </label>
          {existingFile ? (
            <div className="mb-2">
              <a
                href={existingFile}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Lihat File yang Diunggah Sebelumnya
              </a>
            </div>
          ) : (
            <p className="text-gray-500">
              Tidak ada file yang diunggah sebelumnya
            </p>
          )}
          <input
            id="file"
            type="file"
            accept="application/pdf"
            onChange={loadImage}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default EditCase;
