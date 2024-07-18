import React, { useEffect } from "react";
import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";
import EditLawyer from "../components/admin/teamList/EditLawyer";

const LawyerEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isError, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
    if (user && user.role !== "admin") {
      navigate("/forbiden");
    }
  }, [isError, user, navigate]);
  return (
    <Layout>
      <EditLawyer />
    </Layout>
  );
};

export default LawyerEdit;
