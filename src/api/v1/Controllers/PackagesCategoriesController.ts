import express from "express";
const db_packagesCategories = require("../Database/db_packagesCategories");

export const getPackagesCategories = async (req: express.Request, res: express.Response) => {
	console.log("getAllPackages");
	try {
		const result = await db_packagesCategories.getAllPackagesCategories();
		console.log(result);
		res.status(200).json(result);
	} catch (e) {
		console.log(e);
		res.status(400).json(e);
	}
};
