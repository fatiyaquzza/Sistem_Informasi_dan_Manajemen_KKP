import express from "express";
import {
  createCase,
  getCases,
  getCaseById,
  updateCase,
  deleteCase,
} from "../controllers/CaseController.js";

const Caserouter = express.Router();

Caserouter.post("/admin-cases", createCase);
Caserouter.get("/admin-cases", getCases);
Caserouter.get("/admin-cases/:id", getCaseById);
Caserouter.patch("/admin-cases/:id", updateCase);
Caserouter.delete("/admin-cases/:id", deleteCase);

export default Caserouter;