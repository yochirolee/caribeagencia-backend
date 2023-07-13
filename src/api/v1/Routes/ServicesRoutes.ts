import express from "express";
const servicesController = require("../Controllers/ServicesController");
const router = express.Router();
router.get("/", servicesController.getAllServices);
router.get("/getByAgencyId/:id", servicesController.getServicesByAgencyId);
router.post("/", servicesController.createService);
router.put("/:id", servicesController.updateService);

export default router;
