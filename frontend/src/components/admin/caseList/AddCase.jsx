import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCase = () => {
  const [caseName, setcaseName] = useState("");
  const [caseDate, setcaseDate] = useState("");
  const [caseAbout, setcaseAbout] = useState("");
  const [caseAction, setcaseAction] = useState("");
  const [caseOutcome, setcaseOutcome] = useState("");
  const [caseMember1, setcaseMember1] = useState("");
  const [caseMember2, setcaseMember2] = useState("");
  const [caseMember3, setcaseMember3] = useState("");
  const [caseMember4, setcaseMember4] = useState("");

  const navigate = useNavigate();

  const saveCase = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/admin-cases", {
        caseName,
        caseDate,
        caseAbout,
        caseAction,
        caseOutcome,
        caseMember1,    
        caseMember2,
        caseMember3,
        caseMember4,
      });
      navigate("/admin-cases");
    } catch (error) {
      console.error("Error saving case:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Add New Cases</h1>
      <form onSubmit={saveCase} className="max-w-md mx-auto">
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            onChange={(e) => setcaseDate(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
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
            onChange={(e) => setcaseAction(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
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
            onChange={(e) => setcaseOutcome(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="caseMember1" className="block text-gray-700 font-bold mb-2">
            Member 1
          </label>
          <input
            id="caseMember1"
            type="text"
            value={caseMember1}
            required
            onChange={(e) => setcaseMember1(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="caseMember2" className="block text-gray-700 font-bold mb-2">
          Member 2
          </label>
          <input
            id="caseMember2"
            type="text"
            value={caseMember2}
            onChange={(e) => setcaseMember2(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="caseMember3" className="block text-gray-700 font-bold mb-2">
          Member 3
          </label>
          <input
            id="caseMember3"
            type="text"
            value={caseMember3}
            onChange={(e) => setcaseMember3(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="caseMember4" className="block text-gray-700 font-bold mb-2">
          Member 4
          </label>
          <input
            id="caseMember4"
            type="text"
            value={caseMember4}
            onChange={(e) => setcaseMember4(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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

export default AddCase;
