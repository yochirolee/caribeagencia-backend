import express from "express";

import {
	createServiceProvider,
	getAllServicesProviders,
	getServicesProvidersByAgencyId,
	updateServiceProvider,
} from "../Controllers/ServicesProvidersController";

const router = express.Router();
router.get("/", getAllServicesProviders);
router.get("/getByAgencyId/:id", getServicesProvidersByAgencyId);
router.post("/", createServiceProvider);
router.put("/:id", updateServiceProvider);

export default router;
