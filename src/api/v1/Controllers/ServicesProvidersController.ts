import express from "express";
const db_services_providers = require("../Database/db_services_providers");

export const getAllServicesProviders = async (req: express.Request, res: express.Response) => {
	try {
		const result = await db_services_providers.getAllServicesProviders();
		res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	}
};

export const getServicesProvidersByAgencyId = async (
	req: express.Request,
	res: express.Response,
) => {
	const { id } = req.params;
	if (!id) res.status(400).json({ message: "Agency id is required" });
	try {
		const result = await db_services_providers.getServicesProvidersByAgencyId(Number(id));
		if (!result) res.status(404).json({ message: `Agency with id ${id} not found ` });
		else res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	}
};

export const createServiceProvider = async (req: express.Request, res: express.Response) => {
	const { providerName, providerPhone, providerEmail, providerAddress } = req.body;
	if (!providerName || !providerPhone || !providerEmail || !providerAddress)
		res.status(400).json({ message: "All fields are required" });
	else
		try {
			const result = await db_services_providers.createServiceProvider({
				providerName,
				providerPhone,
				providerEmail,
				providerAddress,
			});
			res.status(200).json(result);
		} catch (e) {
			res.status(400).json(e);
		}
};

export const updateServiceProvider = async (req: express.Request, res: express.Response) => {
	const { id } = req.params;
	const { providerName, providerPhone, providerEmail, providerAddress } = req.body;
	console.log(id, req.body);
	if (!id) res.status(400).json({ message: "Agency id is required" });
	if (!providerName || !providerPhone || !providerEmail || !providerAddress)
		res.status(400).json({ message: "All fields are required" });
	else
		try {
			const result = await db_services_providers.updateServiceProvider(Number(id), {
				providerName,
				providerPhone,
				providerEmail,
				providerAddress,
			});
			if (!result) res.status(404).json({ message: `Service Provider  with id ${id} not found ` });
			else res.status(200).json(result);
		} catch (e) {
			res.status(400).json(e);
		}
};
