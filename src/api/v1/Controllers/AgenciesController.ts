import express from "express";
const db_agencies = require("../Database/db_agencies");

const AgenciesController = {
	getAllAgencies: async (req: express.Request, res: express.Response) => {
		try {
			const result = await db_agencies.getAllAgencies();
			res.status(200).send(result);
		} catch (e) {
			res.status(400).send(e);
		}
	},
	getAgencyById: async (req: express.Request, res: express.Response) => {
		const { id } = req.params;
		if (!id) res.status(400).send({ message: "Agency id is required" });
		try {
			const result = await db_agencies.getByAgencyId(Number(id));
			if (!result) res.status(404).send({ message: `Agency with id ${id} not found ` });
			else res.status(200).send(result);
		} catch (e) {
			res.status(400).send(e);
		}
	},
	getAgencyEmployees: async (req: express.Request, res: express.Response) => {
		const { id } = req.params;
		if (!id) res.status(400).send({ message: "Agency id is required" });
		try {
			const result = await db_agencies.getAgenciesEmployees(Number(id));
			if (!result) res.status(404).send({ message: `Agency with id ${id} not found ` });
			else res.status(200).send(result);
		} catch (e) {
			res.status(400).send(e);
		}
	},

	createAgency: async (req: express.Request, res: express.Response) => {
		const { name, address, email, owner, phone, description } = req.body;
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
				res.status(201).send(result);
			} catch (e) {
				res.status(400).send(e);
			}
	},

	updateAgency: async (req: express.Request, res: express.Response) => {
		const { id } = req.params;
		const { name, address, email, owner, phone, description } = req.body;
		console.log(id, req.body);
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
				if (!result) res.status(404).send({ message: `Agency with id ${id} not found ` });
				else res.status(201).send(result);
			} catch (e) {
				res.status(400).send(e);
			}
	},

	deleteAgency: async (req: express.Request, res: express.Response) => {
		const { id } = req.params;
		if (!id) res.status(400).send({ message: "Agency id is required" });
		try {
			const result = await db_agencies.deleteAgency(Number(id));
			if (!result) res.status(404).send({ message: `Agency with id ${id} not found ` });
			else res.status(201).send(result);
		} catch (e) {
			res.status(400).send(e);
		}
	},
};

module.exports = AgenciesController;
