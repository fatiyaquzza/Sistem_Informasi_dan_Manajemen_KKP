import React from "react";
import Navbar from "../components/admin/Navbar";
import Sidebar from "../components/admin/Sidebar";
import "bulma/css/bulma.css";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="columns mt-10" style={{ minHeight: "100vh" }}>
        <div className="pr-20 pl-6">
          <Sidebar />
        </div>
        <div className="bg-primarywhite w-full pt-10">
          <main>{children}</main>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
