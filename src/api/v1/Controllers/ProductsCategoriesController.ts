import express from "express";
const ProductsCategories = require("../Services/ProductsCategoriesServices");

export const getAllProductsCategories = async (req: express.Request, res: express.Response) => {
	try {
		const result = await ProductsCategories.getAllProductsCategories();
		res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	}
};

export const getProductCategoryById = async (req: express.Request, res: express.Response) => {
	const { id } = req.params;
	if (!id) res.status(400).json({ message: "Agency id is required" });
	try {
		const result = await ProductsCategories.getByProductCategoryId(Number(id));
		if (!result) res.status(404).json({ message: `Category with id ${id} not found ` });
		else res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	}
};

export const getProductsCategoriesByAgencyId = async (
	req: express.Request,
	res: express.Response,
) => {
	const { agencyId } = req.params;
	if (!agencyId) res.status(400).json({ message: "Agency id is required" });
	try {
		const result = await ProductsCategories.getProductsCategoriesByAgencyId(Number(agencyId));
		if (!result) res.status(404).json({ message: `Category with id ${agencyId} not found ` });
		else res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	}
};

export const createProductCategory = async (req: express.Request, res: express.Response) => {
	const {
		agencyId,
		name,
		unitSalePrice,
		unitBuyPrice,
		minWeight,
		maxWeight,
		poundSalePrice,
		poundBuyPrice,
	} = req.body;

	console.log(req.body);
	if (!name || !agencyId) res.status(400).json({ message: "All fields are required" });
	else
		try {
			const result = await ProductsCategories.createProductCategory({
				agencyId,
				name,
				unitSalePrice,
				unitBuyPrice,
				minWeight,
				maxWeight,
				poundSalePrice,
				poundBuyPrice,
			});
			res.status(200).json(result);
		} catch (e) {
			console.log(e, "error");
			res.status(400).json(e);
		}
};

export const updateProductCategory = async (req: express.Request, res: express.Response) => {
	const { id } = req.params;
	const { name } = req.body;
	if (!id) res.status(400).json({ message: "Agency id is required" });
	if (!name) res.status(400).json({ message: "All fields are required" });
	else
		try {
			const result = await ProductsCategories.updateProductCategory(Number(id), {
				name,
			});
			if (!result) res.status(404).json({ message: `Category with id ${id} not found ` });
			else res.status(200).json(result);
		} catch (e) {
			res.status(400).json(e);
		}
};

export const deleteProductCategory = async (req: express.Request, res: express.Response) => {
	const { id } = req.params;
	if (!id) res.status(400).json({ message: "Category id is required" });
	try {
		const result = await ProductsCategories.deleteProductCategory(Number(id));
		if (!result) res.status(404).json({ message: `Category with id ${id} not found ` });
		else res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	}
};
