import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditLawyer = () => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [about, setAbout] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getLawyerById(); // Panggil getLawyerById saat komponen dimuat
  }, []); // Tambahkan dependensi kosong agar useEffect dipanggil hanya sekali

  const getLawyerById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/lawyers/${id}`);
      setName(response.data.name);
      setPosition(response.data.position);
      setAbout(response.data.about);
      setDescription(response.data.description);
    } catch (error) {
      console.error("Error fetching lawyer data:", error);
    }
  };

  const updateLawyer = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/lawyers/${id}`, {
        name,
        position,
        about,
        description,
      });
      navigate("/lawyers");
    } catch (error) {
      console.error("Error updating lawyer:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Edit Lawyer</h1>
      <form onSubmit={updateLawyer} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="position" className="block text-gray-700 font-bold mb-2">
            Position
          </label>
          <input
            id="position"
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="about" className="block text-gray-700 font-bold mb-2">
            About
          </label>
          <textarea
            id="about"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditLawyer;
