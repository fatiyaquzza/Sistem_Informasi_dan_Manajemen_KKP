import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Users from "./pages/Users";
import Constants from "./pages/Constants";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import Forbidden from "./pages/Forbidden";
import AddConstant from "./pages/AddConstant";
import Navbar from "./components/admin/Navbar";
import Home from "./components/user/Home/Home";
import Team from "./components/user/Team/Team";
import AreasOfExpertise from "./components/user/AreasOfExpertise/AreasOfExpertise";
import Cases from "./components/user/Cases/Cases";
import ContactUs from "./components/user/ContactUs/ContactUs";
import NavbarUser from "./components/user/NavbarUser";
import Footer from "./components/user/Footer";
import CivilLaw from "./components/user/AreasOfExpertise/CivilLaw";
import CriminalLaw from "./components/user/AreasOfExpertise/CriminalLaw";
import Lawyers from "./pages/Lawyers";
import AddLawyer from "./pages/AddLawyer";
import EditLawyer from "./pages/EditLawyer";

import axios from "axios";

import "./index.css";
import DetailTeam from "./components/user/Team/DetailTeam";
import DetailCase from "./components/user/Cases/DetailCase";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  const userRoutes = [
    "/",
    "/team",
    "/expertise",
    "/cases",
    "/contact",
    "/civil-law",
    "/criminal-law",
    "/detail-team",
    "/detail-case",
  ];
  const adminRoutes = [
    "/dashboard",
    "/users",
    "/users/add",
    "/users/edit/:id",
    "/constants",
    "/constants/add",
    "/forbidden",
    "/lawyers",
    "/lawyers/add",
    "/lawyers/edit/:id",
  ];

  const showNavbarUser = userRoutes.includes(pathname);
  const showNavbarAdmin = adminRoutes.includes(pathname);
  const showFooter = userRoutes.includes(pathname);

  return (
    <>
      {showNavbarUser && <NavbarUser />}
      {showNavbarAdmin && <Navbar />}
      <main>{children}</main>
      {showFooter && <Footer />}
    </>
  );
};

function App() {
  const [lastChecked, setLastChecked] = useState(null);
  const [uuid, setUuid] = useState(null);

  useEffect(() => {
    getConstants();
  }, []);

  const getConstants = async () => {
    try {
      const response = await axios.get("http://localhost:5000/constants");
      const lastCheckedConst = response.data.find(
        (obj) => obj.name === "lastChecked"
      );
      if (lastCheckedConst) {
        setLastChecked(lastCheckedConst.value);
        setUuid(lastCheckedConst.uuid);
      }
    } catch (error) {
      console.error("Error fetching constants:", error);
    }
  };

  const updateYear = async (year, uuid) => {
    try {
      await axios.patch(`http://localhost:5000/constants/${uuid}`, {
        name: "lastChecked",
        value: year,
      });
      await axios.patch(`http://localhost:5000/update-cuti-year-end`);
    } catch (error) {
      if (error.response) {
        console.error("Failed to update database:", error.response.data.msg);
      }
    }
  };

  useEffect(() => {
    const checkForNewYear = async () => {
      const now = new Date();
      const year = now.getFullYear();
      console.log(year);

      if (lastChecked && uuid && year !== parseInt(lastChecked, 10)) {
        updateYear(year, uuid); // Jalankan tugas update cuti pada tahun akhir
      }
    };

    if (lastChecked !== null && uuid !== null) {
      checkForNewYear();
    }

    const interval = setInterval(() => {
      if (lastChecked !== null && uuid !== null) {
        checkForNewYear();
      }
    }, 24 * 60 * 60 * 1000); // Cek setiap 24 jam

    return () => clearInterval(interval);
  }, [lastChecked, uuid]);

  return (
    <BrowserRouter basename="/">
      <ScrollToTop />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/team"
          element={
            <Layout>
              <Team />
            </Layout>
          }
        />
        <Route
          path="/expertise"
          element={
            <Layout>
              <AreasOfExpertise />
            </Layout>
          }
        />
        <Route
          path="/cases"
          element={
            <Layout>
              <Cases />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <ContactUs />
            </Layout>
          }
        />
        <Route
          path="/civil-law"
          element={
            <Layout>
              <CivilLaw />
            </Layout>
          }
        />
        <Route
          path="/criminal-law"
          element={
            <Layout>
              <CriminalLaw />
            </Layout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/users"
          element={
            <Layout>
              <Users />
            </Layout>
          }
        />
        <Route
          path="/users/add"
          element={
            <Layout>
              <AddUser />
            </Layout>
          }
        />
        <Route
          path="/users/edit/:id"
          element={
            <Layout>
              <EditUser />
            </Layout>
          }
        />
        <Route
          path="/constants"
          element={
            <Layout>
              <Constants />
            </Layout>
          }
        />
        <Route
          path="/constants/add"
          element={
            <Layout>
              <AddConstant />
            </Layout>
          }
        />
        <Route
          path="/forbidden"
          element={
            <Layout>
              <Forbidden />
            </Layout>
          }
        />
        <Route
          path="/lawyers"
          element={
            <Layout>
              <Lawyers />
            </Layout>
          }
        />
        <Route
          path="/lawyers/add"
          element={
            <Layout>
              <AddLawyer />
            </Layout>
          }
        />
        <Route
          path="/lawyers/edit/:id"
          element={
            <Layout>
              <EditLawyer />
            </Layout>
          }
        />
        <Route
          path="/detail-team"
          element={
            <Layout>
              <DetailTeam />
            </Layout>
          }
        />
        <Route
          path="/detail-case"
          element={
            <Layout>
              <DetailCase />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
