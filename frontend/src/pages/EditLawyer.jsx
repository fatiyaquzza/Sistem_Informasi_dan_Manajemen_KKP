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
    <div>
      <h1>Edit Lawyer</h1>
      <form onSubmit={updateLawyer}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Position</label>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>
        <div>
          <label>About</label>
          <textarea
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditLawyer;
