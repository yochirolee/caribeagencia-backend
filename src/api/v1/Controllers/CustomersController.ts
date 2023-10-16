import express from "express";
const db_customers = require("../Database/db_customers");

export const getAllCustomers = async (req: express.Request, res: express.Response) => {
	try {
		const result = await db_customers.getAllCustomers();
		res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	}
};

export const getCustomerById = async (req: express.Request, res: express.Response) => {
	const { id } = req.params;
	if (!id) res.status(400).json({ message: "Customer id is required" });
	try {
		const result = await db_customers.getCustomerById(Number(id));
		if (!result) res.status(404).json({ message: `Customer with id ${id} not found ` });
		else res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	}
};

export const searchCustomers = async (req: express.Request, res: express.Response) => {
	const { search } = req.params;
	if (!search) res.status(400).json({ message: "Search Criteria is required" });
	try {
		const result = await db_customers.searchCustomers(search);
		if (!result) res.status(404).json({ message: `Customer  ${search} not found ` });
		else res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	}
};

export const createCustomer = async (req: express.Request, res: express.Response) => {
	const requiredFields = ["firstName", "lastName", "email", "mobile", "agencyId"];
	const missingFields = requiredFields.filter((field) => !req.body[field]);
	if (missingFields.length > 0) {
		res.status(400).json({ message: `Missing required fields: ${missingFields.join(", ")}` });
		return;
	}
	const { firstName, lastName, license, passport, email, address, phone, mobile, agencyId } =
		req.body;

	try {
		const result = await db_customers.createCustomer({
			firstName,
			lastName,
			license,
			passport,
			email,
			address,
			phone,
			mobile,
			agencyId,
		});
		res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	}
};

export const createCustomerAndReciever = async (req: express.Request, res: express.Response) => {
	console.log(req.body);
	const { customer, reciever } = req.body;
	if (!customer || !reciever)
		res.status(400).json({ message: "Customer and Reciever are required" });
	else
		try {
			const result = await db_customers.createCustomerAndReciever(customer, reciever);
			res.status(200).json(result);
		} catch (e) {
			res.status(400).json(e);
		}
};

export const createManyCustomers = async (req: express.Request, res: express.Response) => {
	const { customers } = req.body;
	if (!customers) res.status(400).json({ message: "Customers are required" });
	else
		try {
			const result = await db_customers.createManyCustomers(customers);
			res.status(200).json(result);
		} catch (e) {
			res.status(400).json(e);
		}
};

export const deleteCustomer = async (req: express.Request, res: express.Response) => {
	const { id } = req.params;
	if (!id) res.status(400).json({ message: "Customer id is required" });
	try {
		const result = await db_customers.deleteCustomer(Number(id));
		if (!result) res.status(404).json({ message: `Customer with id ${id} not found ` });
		else res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	}
};
