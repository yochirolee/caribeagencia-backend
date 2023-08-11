import express from "express";
const db_services = require("../Database/db_services");

const servicesController = {
	getAllServices: async (req: express.Request, res: express.Response) => {
		try {
			const result = await db_services.getAllServices();
			res.send(result);
		} catch (error) {
			res.status(400).send(error);
		}
	},

	getServicesByAgencyId: async (req: express.Request, res: express.Response) => {
		const { id } = req.params;
		if (!id) res.status(400).send({ status: "Failed", data: "Agency id is required" });
		try {
			const result = await db_services.getServicesByAgencyId(Number(id));
			if (!result) res.status(404).json({ message: `Agency with id ${id} not found ` });
			else res.status(200).json(result);
		} catch (e) {
			res.status(400).json(e);
		}
	},

	createService: async (req: express.Request, res: express.Response) => {
		const { name, description, serviceType, providerId, invoiceCode, categoriesIds } = req.body;
		if (!name || !description || !providerId || !invoiceCode || !serviceType)
			res.status(400).json({ message: "All fields are required" });
		else
			try {
				const result = await db_services.createService(
					{
						name,
						description,
						serviceType,
						providerId,
						invoiceCode,
					},
					categoriesIds,
				);
				res.status(200).json(result);
			} catch (e) {
				console.log(e, "error");
				res.status(400).json(e);
			}
	},

	updateService: async (req: express.Request, res: express.Response) => {
		const { id } = req.params;
		const { name, description, serviceType, providerId,isActive, invoiceCode, categoriesIds } = req.body;
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
					isActive,
					categoriesIds,
					invoiceCode,
				});
				res.status(200).json(result);
			} catch (e) {
				res.status(400).json(e);
			}
	},

	deleteService: async (req: express.Request, res: express.Response) => {
		const { id } = req.params;
		console.log("delteting")
		if (!id) res.status(400).json({ message: "Service id is required" });
		else
			try {
				const result = await db_services.deleteService(Number(id));
				res.status(200).json(result);
			} catch (e) {
				res.status(400).json(e);
			}
	},
};

module.exports = servicesController;
