import express from "express";
import {
	createProductCategory,
	getAllProductsCategories,
	updateProductCategory,
	getProductCategoryById,
	deleteProductCategory,
} from "../Controllers/ProductsCategoriesController";

const router = express.Router();
router.get("/", getAllProductsCategories);
router.get("/:id", getProductCategoryById);
router.post("/create", createProductCategory);
router.put("/update/:id", updateProductCategory);
router.delete("/delete/:id", deleteProductCategory);

export default router;
