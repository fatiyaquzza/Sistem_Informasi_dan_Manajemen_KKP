import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment-timezone";

const EditCase = () => {
  const [caseName, setCaseName] = useState("");
  const [caseDate, setCaseDate] = useState("");
  const [caseAbout, setCaseAbout] = useState("");
  const [caseAction, setCaseAction] = useState("");
  const [caseOutcome, setCaseOutcome] = useState("");
  const [caseMember1, setCaseMember1] = useState("");
  const [caseMember2, setCaseMember2] = useState("");
  const [caseMember3, setCaseMember3] = useState("");
  const [caseMember4, setCaseMember4] = useState("");
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const getCaseById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/admin-cases/${id}`
        );
        const caseData = response.data;

        const caseDateFormatted = moment(caseData.caseDate).format(
          "YYYY-MM-DD"
        );

        setCaseName(caseData.caseName);
        setCaseDate(caseDateFormatted);
        setCaseAbout(caseData.caseAbout);
        setCaseAction(caseData.caseAction);
        setCaseOutcome(caseData.caseOutcome);
        setCaseMember1(caseData.caseMember1);
        setCaseMember2(caseData.caseMember2);
        setCaseMember3(caseData.caseMember3);
        setCaseMember4(caseData.caseMember4);
      } catch (error) {
        console.error("Error fetching case data:", error);
      }
    };

    getCaseById();
  }, [id]);

  const updateCase = async (e) => {
    e.preventDefault();
    try {
      const caseDateISO = moment(caseDate).toISOString();

      await axios.patch(`http://localhost:5000/admin-cases/${id}`, {
        caseName,
        caseDate: caseDateISO,
        caseAbout,
        caseAction,
        caseOutcome,
        caseMember1,
        caseMember2,
        caseMember3,
        caseMember4,
      });
      navigate("/caseList");
    } catch (error) {
      console.error("Error updating case:", error);
    }
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
          <label
            htmlFor="caseOutcome"
            className="block text-gray-700 font-bold mb-2"
          >
            Outcome
          </label>
          <textarea
            id="caseOutcome"
            value={caseOutcome}
            required
            onChange={(e) => setCaseOutcome(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:border-blue-500 bg-gray-50 h-32 resize-none"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="caseMember1"
            className="block text-gray-700 font-bold mb-2"
          >
            Member 1
          </label>
          <input
            id="caseMember1"
            type="text"
            value={caseMember1}
            required
            onChange={(e) => setCaseMember1(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="caseMember2"
            className="block text-gray-700 font-bold mb-2"
          >
            Member 2
          </label>
          <input
            id="caseMember2"
            type="text"
            value={caseMember2}
            onChange={(e) => setCaseMember2(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="caseMember3"
            className="block text-gray-700 font-bold mb-2"
          >
            Member 3
          </label>
          <input
            id="caseMember3"
            type="text"
            value={caseMember3}
            onChange={(e) => setCaseMember3(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="caseMember4"
            className="block text-gray-700 font-bold mb-2"
          >
            Member 4
          </label>
          <input
            id="caseMember4"
            type="text"
            value={caseMember4}
            onChange={(e) => setCaseMember4(e.target.value)}
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