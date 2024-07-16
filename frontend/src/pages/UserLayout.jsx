import React from "react";
import Navbar from "../components/admin/Navbar";
import "bulma/css/bulma.css";

const UserLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="column has-background-light">
        <main>{children}</main>
      </div>
    </React.Fragment>
  );
};

export default UserLayout;
