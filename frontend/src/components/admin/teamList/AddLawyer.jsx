import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddLawyer = () => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [about, setAbout] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();
  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveLawyer = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("position", position);
    formData.append("description", description);
    formData.append("about", about);
    formData.append("file", file);
    // console.log(file);
    try {
      await axios.post("http://localhost:5000/lawyers", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate("/teamList");
    } catch (error) {
      console.error("Error saving lawyer:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Add New Lawyer</h1>
      <form
        onSubmit={saveLawyer}
        className="max-w-full p-10 shadow-md rounded bg-white"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="position"
            className="block text-gray-700 font-bold mb-2"
          >
            Position
          </label>
          <input
            id="position"
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:border-blue-500 bg-gray-50 h-32 resize-none"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:border-blue-500 bg-gray-50 h-32 resize-none"
          ></textarea>
        </div>

        <div className="field">
          <label className="label">Image</label>
          <div className="control">
            <div className="file">
              <label className="file-label">
                <input
                  type="file"
                  className="file-input"
                  onChange={loadImage}
                />
                <span className="file-cta">
                  <span className="file-label">Choose a file...</span>
                </span>
              </label>
            </div>
          </div>
        </div>

        {preview ? (
          <figure className="image is-128x128">
            <img src={preview} alt="Preview Image" />
          </figure>
        ) : (
          ""
        )}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-10"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default AddLawyer;