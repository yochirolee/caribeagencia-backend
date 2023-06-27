import express from "express";
const Services = require("../db/dbServices");

export const getAllServices = async (req: express.Request, res: express.Response) => {
	try {
		const result = await Services.getAllServices();
		res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	}
};

export const getServicesByAgencyId = async (req: express.Request, res: express.Response) => {
	const { id } = req.params;
	if (!id) res.status(400).json({ message: "Agency id is required" });
	try {
		const result = await Services.getServicesByAgencyId(Number(id));
		if (!result) res.status(404).json({ message: `Agency with id ${id} not found ` });
		else res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	}
};


