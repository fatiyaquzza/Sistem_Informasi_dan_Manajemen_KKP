import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import { IoDocument, IoHome, IoLogOut, IoPeople } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { LogOut, reset } from "../../features/authSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/login");
  };

  return (
    <div className="font-Poppins">
    <aside className="menu">
      <div className="flex justify-center py-4">
        <Link to="/dashboard" className="navbar-item">
          <img src={logo} alt="logo" className="w-36" />
        </Link>
      </div>

      <p className="mt-4 mb-2 text-gray-700">General</p>
      <ul className="menu-list">
        <li>
          <Link to="/dashboard" className="menu-item">
            <div className="flex items-center gap-2">
              <IoHome /> Dashboard
            </div>
          </Link>
        </li>

        <li>
          <Link to="/caseList" className="menu-item">
            <div className="flex items-center gap-2">
              <IoDocument /> CaseList
            </div>
          </Link>
        </li>

        <li>
          <Link to="/teamList" className="menu-item">
            <div className="flex items-center gap-2">
              <IoPeople/> TeamList
            </div>
          </Link>
        </li>
      </ul>

      <p className="mt-4 mb-2 text-gray-700">Settings</p>
      <ul className="menu-list">
        <li>
          <p
            onClick={logout}
            className="button bg-white w-full "
          >
            <div className="flex items-center gap-2">
              <IoLogOut /> Log Out
            </div>
          </p>
        </li>
      </ul>
    </aside>
  </div>
  );
};

export default Sidebar;
