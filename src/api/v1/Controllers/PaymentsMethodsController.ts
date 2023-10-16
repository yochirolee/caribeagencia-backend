import express from "express";
const db_payments_methods = require("../Database/db_payments_methods");

export const getPaymentsMethods = async (req: express.Request, res: express.Response) => {
	try {
		const result = await db_payments_methods.getAllPaymentsMethods();
		res.status(200).json(result);
	} catch (e) {
		console.log(e);
		res.status(400).json(e);
	}
};

export const createPaymentsMethods = async (req: express.Request, res: express.Response) => {
	try {
		const requiredFields = ["name", "description"];
		const missingFields = requiredFields.filter((field) => !req.body[field]);
		if (missingFields.length > 0) {
			res.status(400).json({ message: `Missing required fields: ${missingFields.join(", ")}` });
			return;
		}
		const { name, description } = req.body;
		const data = {
			name,
			description,
		};
		const result = await db_payments_methods.createPaymentsMethods(data);
		res.status(200).json(result);
	} catch (e) {
		console.log(e);
		res.status(400).json(e);
	}
};
