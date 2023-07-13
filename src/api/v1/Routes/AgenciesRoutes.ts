import express from "express";
const agenciesController = require("../Controllers/AgenciesController");

const router = express.Router();
router.get("/", agenciesController.getAllAgencies);
router.get("/:id", agenciesController.getAgencyById);
router.post("/", agenciesController.createAgency);
router.put("/:id", agenciesController.updateAgency);
router.delete("/:id", agenciesController.deleteAgency);
export default router;
