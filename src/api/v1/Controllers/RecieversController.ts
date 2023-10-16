import express from "express";
const db_recievers = require("../Database/db_recievers");

export const getAllRecievers = async (req: express.Request, res: express.Response) => {
	try {
		const result = await db_recievers.getAllRecievers();
		res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	}
};

export const getRecieverById = async (req: express.Request, res: express.Response) => {
	const { id } = req.params;
	if (!id) res.status(400).json({ message: "Reciever id is required" });
	try {
		const result = await db_recievers.getRecieverById(Number(id));
		if (!result) res.status(404).json({ message: `Reciever with id ${id} not found ` });
		else res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	}
};

export const searchRecievers = async (req: express.Request, res: express.Response) => {
	const { search } = req.params;
	if (!search) res.status(400).json({ message: "Search Criteria is required" });
	try {
		const result = await db_recievers.searchRecievers(search);
		if (!result) res.status(404).json({ message: `Recievers  ${search} not found ` });
		else res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	}
};

export const createReciever = async (req: express.Request, res: express.Response) => {
	const requiredFields = ["firstName", "lastName", "address", "mobile", "agencyId"];
	const missingFields = requiredFields.filter((field) => !req.body[field]);
	if (missingFields.length > 0) {
		res.status(400).json({ message: `Missing required fields: ${missingFields.join(", ")}` });
		return;
	}
	const {
		firstName,
		lastName,
		ci,
		passport,
		email,
		address,
		stateId,
		cityId,
		phone,
		mobile,
		agencyId,
	} = req.body;

	try {
		const result = await db_recievers.createReciever({
			firstName,
			lastName,
			ci,
			passport,
			email,
			address,
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

export const upsertReciever = async (req: express.Request, res: express.Response) => {
	console.log("upserting Reciever");
	const requiredFields = ["firstName", "lastName", "ci", "address", "mobile", "agencyId"];
	const missingFields = requiredFields.filter((field) => !req.body[field]);
	if (missingFields.length > 0) {
		res.status(400).json({ message: `Missing required fields: ${missingFields.join(", ")}` });
		return;
	}
	const {
		firstName,
		lastName,
		ci,
		passport,
		email,
		address,
		stateId,
		cityId,
		phone,
		mobile,
		agencyId,
	} = req.body;

	try {
		const result = await db_recievers.upsertReciever({
			firstName,
			lastName,
			ci,
			passport,
			email,
			address,
			phone,
			mobile,
			stateId,
			cityId,
			agencyId,
		});
		res.status(200).json(result);
	} catch (e) {
		console.log(e, "error");
		res.status(400).json(e);
	}
};

export const connectRecieverToCustomer = async (req: express.Request, res: express.Response) => {
	const { customerId, recieverId } = req.body;

	if (!customerId && !recieverId)
		res.status(400).json({ message: "Customer id and recieverId  are required" });

	try {
		const result = await db_recievers.connectRecieverToCustomer(customerId, recieverId);
		res.status(200).json(result);
	} catch (e) {
		console.log(e);
		res.status(400).json(e);
	}
};

export const createManyRecievers = async (req: express.Request, res: express.Response) => {
	const { recievers } = req.body;
	if (!recievers) res.status(400).json({ message: "Recievers are required" });
	else
		try {
			const result = await db_recievers.createManyRecievers(recievers);
			res.status(200).json(result);
		} catch (e) {
			res.status(400).json(e);
		}
};

export const deleteReciever = async (req: express.Request, res: express.Response) => {
	const { id } = req.params;
	if (!id) res.status(400).json({ message: "Reciever id is required" });
	try {
		const result = await db_recievers.deleteReciever(Number(id));
		if (!result) res.status(404).json({ message: `Reciever with id ${id} not found ` });
		else res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	}
};
