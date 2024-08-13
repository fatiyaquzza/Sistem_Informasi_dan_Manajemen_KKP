import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Users from "./pages/Users";
import Forbidden from "./pages/Forbidden";
import Navbar from "./components/admin/Navbar";
import Home from "./components/user/Home/Home";
import Team from "./components/user/Team/Team";
import AreasOfExpertise from "./components/user/AreasOfExpertise/AreasOfExpertise";
import Cases from "./components/user/Cases/Cases";
import ContactUs from "./components/user/ContactUs/ContactUs";
import NavbarUser from "./components/user/NavbarUser";
import Footer from "./components/user/Footer";
import AdminCases from "./components/admin/caseList/AdminCases";
import DetailCase from "./components/user/Cases/DetailCase";
import CaseList from "./pages/CaseList";
import TeamList from "./pages/TeamList";
import LawyerEdit from "./pages/LawyerEdit";
import CaseEdit from "./pages/CaseEdit";
import CaseAdd from "./pages/CaseAdd";
import LawyerAdd from "./pages/LawyerAdd";
import DetailTeam from "./components/user/Team/DetailTeam";

import "./index.css";
import About from "./components/user/AboutUs/About";
import Litigasi from "./components/user/AreasOfExpertise/Litigasi";
import NonLitigasi from "./components/user/AreasOfExpertise/NonLitigasi";
import KonsultasiHukum from "./components/user/AreasOfExpertise/KonsultasiHukum";
import Mediasi from "./components/user/AreasOfExpertise/Mediasi";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  const generateLawyerRoutes = (count) => {
    const routes = [];
    for (let i = 1; i <= count; i++) {
      routes.push(`/lawyers/${i}`);
    }
    return routes;
  };
  const generateCaseRoutes = (count) => {
    const routes = [];
    for (let i = 1; i <= count; i++) {
      routes.push(`/admin-cases/${i}`);
    }
    return routes;
  };

  const userRoutes = [
    "/",
    "/team",
    "/expertise",
    "/cases",
    "/contact",
    "/litigasi",
    "/non-litigasi",
    "/detail-team",
    "/konsultasi-hukum",
    "/mediasi",
    "/about-us",
    ...generateLawyerRoutes(100),
    ...generateCaseRoutes(100),
  ];
  const adminRoutes = [
    "/dashboard",
    "/users",
    "/forbidden",
    "/lawyers/add",
    "/lawyers/edit/:id",
    "/admin-cases",
    "/admin-cases/add",
    "/admin-cases/edit/:id",
    "/caseList",
    "/teamList",
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
          path="/litigasi"
          element={
            <Layout>
              <Litigasi />
            </Layout>
          }
        />
        <Route
          path="/non-litigasi"
          element={
            <Layout>
              <NonLitigasi />
            </Layout>
          }
        />
        <Route
          path="/konsultasi-hukum"
          element={
            <Layout>
              <KonsultasiHukum />
            </Layout>
          }
        />
        <Route
          path="/mediasi"
          element={
            <Layout>
              <Mediasi />
            </Layout>
          }
        />
        <Route
          path="/non-litigasi"
          element={
            <Layout>
              <NonLitigasi />
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
          path="/forbidden"
          element={
            <Layout>
              <Forbidden />
            </Layout>
          }
        />
        <Route
          path="/lawyers/:id"
          element={
            <Layout>
              <DetailTeam />
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
        <Route
          path="/about-us"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
