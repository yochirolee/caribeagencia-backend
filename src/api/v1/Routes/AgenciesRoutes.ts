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
router.post("/create", createAgency);
router.put("/update/:id", updateAgency);
router.delete("/delete/:id", deleteAgency);
//router.get("/:id", updateProduct);
//router.get("/:id", deleteProduct);
export default router;
