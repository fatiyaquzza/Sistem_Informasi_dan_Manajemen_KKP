import express from "express";
import { createCase, getCases, getCaseById, updateCase, deleteCase } from "../controllers/CaseController.js";

const router = express.Router();

router.post("/admin-cases", createCase);
router.get("/admin-cases", getCases);
router.get("/admin-cases/:id", getCaseById);
router.patch("/admin-cases/:id", updateCase);
router.delete("/admin-cases/:id", deleteCase);

export default router;
