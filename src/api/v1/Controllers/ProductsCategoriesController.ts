import express from "express";
const productsCategoriesDB = require("../Database/db_productsCategories");

const productsCategoriesContoller = {
	getAllProductsCategories: async (req: express.Request, res: express.Response) => {
		try {
			const result = await productsCategoriesDB.getAllProductsCategories();
			res.send(result);
		} catch (error) {
			res.status(400).send(error);
		}
	},
};
module.exports = productsCategoriesContoller;
