import express from "express";
import { getPackages, getPackageById } from "../Controllers/PackagesController";

const router = express.Router();
router.get("/", getPackages);
router.get("/:id", getPackageById);

export default router;
