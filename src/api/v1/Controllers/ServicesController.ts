import express from "express";
const db_services = require("../Database/db_services");

const getAllServices = async (req: express.Request, res: express.Response) => {
	try {
		const result = await db_services.getAllServices();
		res.send({ status: 200, data: result });
	} catch (error) {
		res.status(500).send({ status: "Failed", data: { error } });
	}
};

const getServicesByAgencyId = async (req: express.Request, res: express.Response) => {
	console.log(req.params);
	const { id } = req.params;
	if (!id) res.status(400).send({ status: "Failed", data: "Agency id is required" });
	try {
		const result = await db_services.getServicesByAgencyId(Number(id));
		if (!result) res.status(404).json({ message: `Agency with id ${id} not found ` });
		else res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	}
};

const createService = async (req: express.Request, res: express.Response) => {
	const { name, description, serviceType, providerId, invoiceCode } = req.body;
	if (!name || !description || !providerId || !invoiceCode || !serviceType)
		res.status(400).json({ message: "All fields are required" });
	else
		try {
			const result = await db_services.createService({
				name,
				description,
				serviceType,
				providerId,
				invoiceCode,
			});
			res.status(200).json(result);
		} catch (e) {
			console.log(e, "error");
			res.status(400).json(e);
		}
};

const updateService = async (req: express.Request, res: express.Response) => {
	const { id } = req.params;
	const { name, description, serviceType, providerId, invoiceCode } = req.body;
	if (!id) res.status(400).json({ message: "Service id is required" });
	if (!name || !description || !providerId || !invoiceCode || !serviceType)
		res.status(400).json({ message: "All fields are required" });
	else
		try {
			const result = await db_services.updateService(Number(id), {
				name,
				description,
				serviceType,
				providerId,
				invoiceCode,
			});
			res.status(200).json(result);
		} catch (e) {
			res.status(400).json(e);
		}
};

module.exports = {
	getAllServices,
	getServicesByAgencyId,
	createService,
	updateService,
};
