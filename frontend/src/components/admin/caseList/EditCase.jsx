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
  const [lawyers, setLawyers] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch lawyers for dropdown
    const fetchLawyers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/lawyers");
        setLawyers(response.data);
      } catch (error) {
        console.error("Error fetching lawyers:", error);
      }
    };

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

        // Parse and set team members
        setTeamMembers(JSON.parse(caseData.teamMembers));
      } catch (error) {
        console.error("Error fetching case data:", error);
      }
    };

    fetchLawyers();
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
        teamMembers: teamMembers.map((member) => member.name),
      });
      navigate("/caseList");
    } catch (error) {
      console.error("Error updating case:", error);
    }
  };

  const addTeamMember = () => {
    setTeamMembers([...teamMembers, { name: "" }]);
  };

  const removeTeamMember = (index) => {
    const newTeamMembers = teamMembers.filter((_, i) => i !== index);
    setTeamMembers(newTeamMembers);
  };

  const handleTeamMemberChange = (index, name) => {
    const newTeamMembers = [...teamMembers];
    newTeamMembers[index] = { name }; // Store lawyer name
    setTeamMembers(newTeamMembers);
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
            htmlFor="teamMembers"
            className="block text-gray-700 font-bold mb-2"
          >
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
                  <option key={lawyer.id} value={lawyer.name}>
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