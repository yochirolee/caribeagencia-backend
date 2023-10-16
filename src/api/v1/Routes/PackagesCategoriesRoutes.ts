import express from "express";
import { getPackagesCategories } from "../Controllers/PackagesCategoriesController";

const router = express.Router();
router.get("/", getPackagesCategories);

export default router;
