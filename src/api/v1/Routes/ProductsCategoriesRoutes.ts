import express from "express";

const productsCategoriesContoller = require("../Controllers/ProductsCategoriesController");

const router = express.Router();
router.get("/", productsCategoriesContoller.getAllProductsCategories);

export default router;
