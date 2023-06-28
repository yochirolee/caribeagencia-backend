import express from "express";
import {
	createProductCategory,
	getAllProductsCategories,
	updateProductCategory,
	getProductCategoryById,
	getProductsCategoriesByAgencyId,
	deleteProductCategory,
} from "../Controllers/ProductsCategoriesController";

const router = express.Router();
router.get("/", getAllProductsCategories);
router.get("/:id", getProductCategoryById);
router.get("/getByAgencyId/:agencyId", getProductsCategoriesByAgencyId);
router.post("/", createProductCategory);
router.put("/:id", updateProductCategory);
router.delete("/:id", deleteProductCategory);

export default router;
