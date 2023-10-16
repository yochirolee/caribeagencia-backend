import express from "express";
const db_packages = require("../Database/db_packages");

export const getPackages = async (req: express.Request, res: express.Response) => {
	console.log("getAllPackages");
	try {
		const result = await db_packages.getAllPackages();
		console.log(result);
		res.status(200).json(result);
	} catch (e) {
		console.log(e);
		res.status(400).json(e);
	}
};

export const getPackageById = async (req: express.Request, res: express.Response) => {
	const { id } = req.params;
	if (!id) res.status(400).json({ message: "Package id is required" });
	try {
		const result = await db_packages.getPackageById(id);
		res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	}
};
