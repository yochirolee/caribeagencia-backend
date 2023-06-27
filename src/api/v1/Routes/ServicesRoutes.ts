import express from "express";
import {
getAllServices,
getServicesByAgencyId,
} from "../Controllers/ServicesController";

const router = express.Router();
router.get("/", getAllServices);
router.get("/agency/:id", getServicesByAgencyId);

export default router;
