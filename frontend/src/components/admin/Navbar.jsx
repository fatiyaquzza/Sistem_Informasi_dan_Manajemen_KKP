import React from "react";
import { useDispatch } from "react-redux";
import { LogOut, reset } from "../../features/authSlice";
import { useNavigate } from "react-router-dom";
import "bulma/css/bulma.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div>
      <nav
        className="navbar is-fixed-top has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <span
              style={{
                marginLeft: "10px",
                fontWeight: "bold",
                fontSize: "1.5em",
              }}
            >
              Sistem Pengajuan Cuti Pegawai
            </span>
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button onClick={logout} className="button is-danger is-light">
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
