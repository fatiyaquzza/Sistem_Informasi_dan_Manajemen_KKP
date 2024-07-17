import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import Forbidden from "./pages/Forbidden";
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
