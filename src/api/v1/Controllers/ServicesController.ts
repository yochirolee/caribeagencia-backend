import express from "express";
const db_services = require("../database/db_services");

export const getAllServices = async (req: express.Request, res: express.Response) => {
	try {
		const result = await db_services.getAllServices();
		res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	}
};

export const getServicesByAgencyId = async (req: express.Request, res: express.Response) => {
	const { id } = req.params;
	if (!id) res.status(400).json({ message: "Agency id is required" });
	try {
		const result = await db_services.getServicesByAgencyId(Number(id));
		if (!result) res.status(404).json({ message: `Agency with id ${id} not found ` });
		else res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	}
};

export const createService = async (req: express.Request, res: express.Response) => {
	const {
		name,
		description,
		providerName,
		providerPhone,
		providerAddress,
		providerEmail,
		type,
		agencyId,
	} = req.body;
	if (
		!name ||
		!description ||
		!providerName ||
		!providerPhone ||
		!providerAddress ||
		!providerEmail ||
		!type ||
		!agencyId
	)
		res.status(400).json({ message: "All fields are required" });
	else
		try {
			const result = await db_services.createService({
				name,
				description,
				providerName,
				providerPhone,
				providerAddress,
				providerEmail,
				type,
				agencyId,
			});
			res.status(200).json(result);
		} catch (e) {
			console.log(e, "error");
			res.status(400).json(e);
		}
};
