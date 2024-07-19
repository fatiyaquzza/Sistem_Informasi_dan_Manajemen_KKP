import express from "express";
import {
  createLawyer,
  getLawyers,
  getLawyerById,
  updateLawyer,
  deleteLawyer,
} from "../controllers/LawyerController.js";

const Lawyerrouter = express.Router();

Lawyerrouter.post("/lawyers", createLawyer);
Lawyerrouter.get("/lawyers", getLawyers);
Lawyerrouter.get("/lawyers/:id", getLawyerById);
Lawyerrouter.patch("/lawyers/:id", updateLawyer);
Lawyerrouter.delete("/lawyers/:id", deleteLawyer);

export default Lawyerrouter;