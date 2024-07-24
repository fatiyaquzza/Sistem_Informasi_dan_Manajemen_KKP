import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCase = () => {
  const [caseName, setcaseName] = useState("");
  const [caseDate, setcaseDate] = useState("");
  const [caseAbout, setcaseAbout] = useState("");
  const [caseAction, setcaseAction] = useState("");
  const [caseOutcome, setcaseOutcome] = useState("");
  const [lawyers, setLawyers] = useState([]);
  const [teamMembers, setTeamMembers] = useState([{ lawyerId: "" }]);

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch lawyers from server
    const fetchLawyers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/lawyers");
        setLawyers(response.data);
      } catch (error) {
        console.error("Error fetching lawyers:", error);
      }
    };
    fetchLawyers();
  }, []);

  const addTeamMember = () => {
    setTeamMembers([...teamMembers, { lawyerId: "" }]);
  };

  const removeTeamMember = (index) => {
    const newTeamMembers = teamMembers.filter((_, i) => i !== index);
    setTeamMembers(newTeamMembers);
  };

  const handleTeamMemberChange = (index, name) => {
    const newTeamMembers = [...teamMembers];
    newTeamMembers[index] = { name }; // Menyimpan nama pengacara
    setTeamMembers(newTeamMembers);
  };
  
  const saveCase = async (e) => {
    e.preventDefault();
    try {
      const caseData = {
        caseName,
        caseDate,
        caseAbout,
        caseAction,
        caseOutcome,
        teamMembers: teamMembers.map((member) => member.name)
      };
      await axios.post("http://localhost:5000/admin-cases", caseData);
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
          <label htmlFor="caseOutcome" className="block text-gray-700 font-bold mb-2">
            Outcome
          </label>
          <textarea
            id="caseOutcome"
            value={caseOutcome}
            required
            onChange={(e) => setcaseOutcome(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:border-blue-500 bg-gray-50 h-32 resize-none"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="teamMembers" className="block text-gray-700 font-bold mb-2">
            Team Members
          </label>
          {teamMembers.map((member, index) => (
            <div key={index} className="flex items-center mb-2">
              <select
  value={member.name}
  onChange={(e) => handleTeamMemberChange(index, e.target.value)}
  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
>
  <option value="">Select a lawyer</option>
  {lawyers.map((lawyer) => (
    <option key={lawyer.id} value={lawyer.name}> {/* Menyimpan nama pengacara */}
      {lawyer.name}
    </option>
  ))}
</select>
              <button
                type="button"
                onClick={() => removeTeamMember(index)}
                className="ml-2 text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addTeamMember}
            className="text-blue-500 hover:text-blue-700"
          >
            Add Member
          </button>
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
