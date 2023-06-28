import express from "express";
import {
	createAgency,
	deleteAgency,
	getAgencyById,
	getAllAgencies,
	searchAgency,
	updateAgency,
} from "../Controllers/AgenciesController";

const router = express.Router();
router.get("/", getAllAgencies);
router.get("/:id", getAgencyById);
router.get("/search/:search", searchAgency);
router.post("/", createAgency);
router.put("/:id", updateAgency);
router.delete("/:id", deleteAgency);
export default router;
