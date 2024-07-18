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
import AdminCases from "./components/admin/caseList/AdminCases";

import "./index.css";
import DetailCase from "./components/user/Cases/DetailCase";
import CaseList from "./pages/CaseList";
import TeamList from "./pages/TeamList";
import LawyerEdit from "./pages/LawyerEdit";
import CaseEdit from "./pages/CaseEdit";
import CaseAdd from "./pages/CaseAdd";
import LawyerAdd from "./pages/LawyerAdd";

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
    "/admin-cases/:id",
  ];
  const adminRoutes = [
    "/dashboard",
    "/users",
    "/users/add",
    "/users/edit/:id",
    "/forbidden",
    "/lawyers/add",
    "/lawyers/edit/:id",
    "/admin-cases",
    "/admin-cases/add",
    "/admin-cases/edit/:id",
    "/caseList",
    "/teamList"
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
          path="/lawyers/add"
          element={
            <Layout>
              <LawyerAdd />
            </Layout>
          }
        />
        <Route
          path="/lawyers/edit/:id"
          element={
            <Layout>
              <LawyerEdit />
            </Layout>
          }
        />
         <Route
          path="/teamList"
          element={
            <Layout>
              <TeamList />
            </Layout>
          }
        />
        <Route
          path="/admin-cases/:id"
          element={
            <Layout>
              <DetailCase />
            </Layout>
          }
        />
        <Route
          path="/admin-cases/edit/:id"
          element={
            <Layout>
              <CaseEdit />
            </Layout>
          }
        />
         <Route
          path="/admin-cases"
          element={
            <Layout>
              <AdminCases />
            </Layout>
          }
        />
        <Route
          path="/admin-cases/add"
          element={
            <Layout>
              <CaseAdd />
            </Layout>
          }
        />
        <Route
          path="/caseList"
          element={
            <Layout>
              <CaseList />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
