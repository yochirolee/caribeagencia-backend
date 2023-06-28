import express from "express";
const db_customers = require("../database/db_customers");

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
	console.log(req.body);
	const {
		firstName,
		lastName,
		license,
		passport,
		email,
		address,
		countryId,
		stateId,
		cityId,
		phone,
		mobile,
		agencyId,
	} = req.body;
	if (
		!firstName ||
		!lastName ||
		!email ||
		!address ||
		!countryId ||
		!stateId ||
		!cityId ||
		!mobile ||
		!agencyId
	)
		res.status(400).json({ message: "All fields are required" });
	else
		try {
			const result = await db_customers.createCustomer({
				firstName,
				lastName,
				license,
				passport,
				email,
				address,
				countryId,
				stateId,
				cityId,
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
