import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/users");
      const sortedUsers = response.data.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setUsers(sortedUsers);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const openModal = (user) => {
    setUserToDelete(user);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setUserToDelete(null);
  };

  const deleteUser = async () => {
    try {
      await axios.delete(`http://localhost:5000/users/${userToDelete.uuid}`);
      closeModal();
      getUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div>
    <div className="container mx-auto px-4 py-8 font-Poppins">
      <h1 className="text-3xl font-bold mb-4">Manage Admin</h1>
      <Link
        to="/users/add"
        className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded inline-block mb-4"
      >
        Add New User
      </Link>
      <table className="min-w-full bg-white border shadow-sm rounded">
        <thead>
          <tr className="bg-gray-200 text-center">
            <th className="border px-6 py-3 text-left text-sm font-bold text-gray-700 uppercase">
              No
            </th>
            <th className="border px-6 py-3 text-left text-sm font-bold text-gray-700 uppercase">
              Name
            </th>
            <th className="border px-6 py-3 text-left text-sm font-bold text-gray-700 uppercase">
              Email
            </th>
            <th className="border px-6 py-3 text-left text-sm font-bold text-gray-700 uppercase">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.uuid}>
              <td className="border px-6 py-4">{index + 1}</td>
              <td className="border px-6 py-4">{user.name}</td>
              <td className="border px-6 py-4">{user.email}</td>
              <td className="border px-6 py-4">
                <div className="flex justify-between">
                <Link
                  to={`/users/edit/${user.uuid}`}
                  className="hover:text-blue-500 hover:bg-white border-blue-500 border-2 border-solid p-2 rounded bg-blue-500 text-white"
                >
                  <FontAwesomeIcon icon={faEdit} /> &nbsp; Edit
                </Link>
                <button
                  onClick={() => openModal(user)}
                  className="hover:text-red-500 hover:bg-white  border-red-500 border-2 border-solid p-2 rounded bg-red-500 text-white"
                >
                   <FontAwesomeIcon icon={faTrash} /> &nbsp; Delete
                </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

<div className={`modal ${modalIsOpen ? "is-active" : ""}`}>
<div className="modal-background" onClick={closeModal}></div>
<div className="modal-content">
  <div className="box">
    <h3 className="title is-4">Konfirmasi Penghapusan</h3>
    <p>Apakah kamu ingin menghapus user ini?</p>
    <div className="buttons is-right mt-3">
      <button onClick={deleteUser} className="button is-danger">
        Ya
      </button>
      <button onClick={closeModal} className="button">
        Tidak
      </button>
    </div>
  </div>
</div>
<button
  className="modal-close is-large"
  aria-label="close"
  onClick={closeModal}
></button>
</div>

</div>
  );
};

export default UserList;
