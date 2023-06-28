import express from "express";
import {
	getAllServices,
	getServicesByAgencyId,
	createService,
} from "../Controllers/ServicesController";

const router = express.Router();
router.get("/", getAllServices);
router.get("/getByAgencyId/:id", getServicesByAgencyId);
router.post("/", createService);

export default router;
