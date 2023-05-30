import express from "express";
const CustomersServices = require("../Services/CustomersServices");

export const getAllCustomers = async (req: express.Request, res: express.Response) => {
	try {
		const result = await CustomersServices.getAllCustomers();
		res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	}
};

export const getCustomerById = async (req: express.Request, res: express.Response) => {
	const { id } = req.params;
	if (!id) res.status(400).json({ message: "Customer id is required" });
	try {
		const result = await CustomersServices.getCustomerById(Number(id));
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
		const result = await CustomersServices.searchCustomers(search);
		if (!result) res.status(404).json({ message: `Customer  ${search} not found ` });
		else res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	}
};

export const createCustomer = async (req: express.Request, res: express.Response) => {
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
			const result = await CustomersServices.createCustomer({
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
			console.log(e, "error");
			res.status(401).json(e);
		}
};

export const deleteCustomer = async (req: express.Request, res: express.Response) => {
	const { id } = req.params;
	if (!id) res.status(400).json({ message: "Customer id is required" });
	try {
		const result = await CustomersServices.deleteCustomer(Number(id));
		if (!result) res.status(404).json({ message: `Customer with id ${id} not found ` });
		else res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	}
};
