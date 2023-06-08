import express from "express";
const RecieversServices = require("../Services/RecieversServices");

export const getAllRecievers = async (req: express.Request, res: express.Response) => {
	try {
		const result = await RecieversServices.getAllRecievers();
		res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	}
};

export const getRecieverById = async (req: express.Request, res: express.Response) => {
	const { id } = req.params;
	if (!id) res.status(400).json({ message: "Reciever id is required" });
	try {
		const result = await RecieversServices.getRecieverById(Number(id));
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
		const result = await RecieversServices.searchRecievers(search);
		if (!result) res.status(404).json({ message: `Recievers  ${search} not found ` });
		else res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	}
};

export const createReciever = async (req: express.Request, res: express.Response) => {
	console.log(req.body);
	const {
		firstName,
		lastName,
		ci,
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
		!ci ||
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
			const result = await RecieversServices.createReciever({
				firstName,
				lastName,
				ci,
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

export const createManyRecievers = async (req: express.Request, res: express.Response) => {
	const { recievers } = req.body;
	if (!recievers) res.status(400).json({ message: "Recievers are required" });
	else
		try {
			const result = await RecieversServices.createManyRecievers(recievers);
			res.status(200).json(result);
		} catch (e) {
			res.status(400).json(e);
		}
};

export const deleteReciever = async (req: express.Request, res: express.Response) => {
	const { id } = req.params;
	if (!id) res.status(400).json({ message: "Reciever id is required" });
	try {
		const result = await RecieversServices.deleteReciever(Number(id));
		if (!result) res.status(404).json({ message: `Reciever with id ${id} not found ` });
		else res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	}
};
