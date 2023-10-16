import express from "express";
const db_services_prices = require("../Database/db_services_prices");

const getAllServicesPrices = async (req: express.Request, res: express.Response) => {
	try {
		const result = await db_services_prices.getAllServicesPrices();
		res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	}
};

const getServicesPricesByAgencyId = async (req: express.Request, res: express.Response) => {
	const { id } = req.params;
	if (!id) res.status(400).json({ message: "Agency id is required" });
	try {
		const result = await db_services_prices.getServicesPricesByAgencyId(Number(id));
		if (!result) res.status(404).json({ message: `Agency with id ${id} not found ` });
		else res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	}
};

const getServicePricesByParams = async (req: express.Request, res: express.Response) => {
	console.log(req.query, "params");
	const { agencyId, serviceId, productCategoryId } = req.query;
	const result = await db_services_prices.getServicePricesByParams({
		agencyId: Number(agencyId),
		serviceId: Number(serviceId),
		productCategoryId: Number(productCategoryId),
	});
	if (!result) res.status(404).json({ message: `Service Price not found ` });
	else res.status(200).json(result);
};

const createServicePrice = async (req: express.Request, res: express.Response) => {
	console.log(req.body);

	const requiredFields = [
		"name",
		"description",
		"costPrice",
		"agencyPrice",
		
		"serviceId",
		"agencyId",
		"packageCategoryId",
	];
	const missingFields = requiredFields.filter((field) => !req.body[field]);
	if (missingFields.length > 0) {
		res.status(400).json({ message: `Missing required fields: ${missingFields.join(", ")}` });
		return;
	}
	const {
		name,
		description,
		costPrice,
		agencyPrice,
		publicPrice,
		isSellByPounds,
		weight,
		serviceId,
		agencyId,
		packageCategoryId,
	} = req.body;

	try {
		const servicePrice = {
			name,
			description,
			costPrice,
			agencyPrice,
			publicPrice,
			isSellByPounds,
			serviceId,
			agencyId,
			weight,
			packageCategoryId,
		};
		const result = await db_services_prices.createServicePrices(servicePrice);
		res.status(200).json(result);
	} catch (e) {
		console.log(e);
		res.status(400).json(e);
	}
};

const updateServicePrice = async (req: express.Request, res: express.Response) => {
	const { id } = req.params;
	if (!id) res.status(400).json({ message: "Agency id is required" });
	const {
		name,
		description,
		costPrice,
		agencyPrice,
		publicPrice,
		isSellByPounds,
		weight,
		serviceId,
		agencyId,
		packageCategoryId,
	} = req.body;
	if (
		!name ||
		!description ||
		!costPrice ||
		!agencyPrice ||
		!serviceId ||
		!agencyId ||
		!publicPrice ||
		!packageCategoryId
	)
		res.status(400).json({ message: "All fields are required" });
	else
		try {
			const servicePrice = {
				name,
				description,
				costPrice,
				agencyPrice,
				publicPrice,
				isSellByPounds,
				weight,
				serviceId,
				agencyId,
				packageCategoryId,
			};
			const result = await db_services_prices.updateServicePrice(Number(id), servicePrice);
			res.status(200).json(result);
		} catch (e) {
			res.status(400).json(e);
		}
};

const deleteServicePrice = async (req: express.Request, res: express.Response) => {
	const { id } = req.params;
	console.log(id);
	if (!id) res.status(400).json({ message: " Id is required" });
	else
		try {
			const result = await db_services_prices.deleteServicePrice(Number(id));
			res.status(200).json(result);
		} catch (e) {
			res.status(400).json(e);
		}
};

/* export const createServiceProvider = async (req: express.Request, res: express.Response) => {
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
}; */

module.exports = {
	getAllServicesPrices,
	getServicesPricesByAgencyId,
	getServicePricesByParams,
	createServicePrice,
	updateServicePrice,
	deleteServicePrice,
};
