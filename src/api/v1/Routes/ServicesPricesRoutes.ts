import express from "express";
const servicesPricesController = require("../Controllers/ServicesPricesController");
const router = express.Router();
router.get("/", servicesPricesController.getAllServicesPrices);
router.get("/getByAgencyId/:id", servicesPricesController.getServicesPricesByAgencyId);
router.get(
	"/getByParams",
	servicesPricesController.getServicePricesByParams,
);
router.post("/", servicesPricesController.createServicePrice);
router.put("/:id", servicesPricesController.updateServicePrice);
router.delete("/:id", servicesPricesController.deleteServicePrice);

export default router;
