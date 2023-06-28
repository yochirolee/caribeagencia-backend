import express from "express";
const db_agencies = require("../Database/db_agencies");

export const getAllAgencies = async (req: express.Request, res: express.Response) => {
	try {
		const result = await db_agencies.getAllAgencies();
		res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	}
};

export const getAgencyById = async (req: express.Request, res: express.Response) => {
	const { id } = req.params;
	if (!id) res.status(400).json({ message: "Agency id is required" });
	try {
		const result = await db_agencies.getByAgencyId(Number(id));
		if (!result) res.status(404).json({ message: `Agency with id ${id} not found ` });
		else res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	}
};

export const searchAgency = async (req: express.Request, res: express.Response) => {
	const { search } = req.params;
	if (!search) res.status(400).json({ message: "Search Criteria is required" });
	try {
		const result = await db_agencies.searchAgency(search);
		if (!result) res.status(404).json({ message: `Customer  ${search} not found ` });
		else res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	}
};

export const createAgency = async (req: express.Request, res: express.Response) => {
	const { name, address, email, owner, phone, description } = req.body;
	console.log(req.body);
	if (!name || !address || !owner) res.status(400).json({ message: "All fields are required" });
	else
		try {
			const result = await db_agencies.createAgency({
				name,
				address,
				owner,
				email,
				phone,
				description,
			});
			res.status(200).json(result);
		} catch (e) {
			console.log(e, "error");
			res.status(400).json(e);
		}
};

export const updateAgency = async (req: express.Request, res: express.Response) => {
	const { id } = req.params;
	const { name, address, email, owner, phone, description } = req.body;
	if (!id) res.status(400).json({ message: "Agency id is required" });
	if (!name || !address || !owner) res.status(400).json({ message: "All fields are required" });
	else
		try {
			const result = await db_agencies.updateAgency(Number(id), {
				name,
				address,
				owner,
				phone,
				email,
				description,
			});
			if (!result) res.status(404).json({ message: `Agency with id ${id} not found ` });
			else res.status(200).json(result);
		} catch (e) {
			res.status(400).json(e);
		}
};

export const deleteAgency = async (req: express.Request, res: express.Response) => {
	const { id } = req.params;
	if (!id) res.status(400).json({ message: "Agency id is required" });
	try {
		const result = await db_agencies.deleteAgency(Number(id));
		if (!result) res.status(404).json({ message: `Agency with id ${id} not found ` });
		else res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	}
};
