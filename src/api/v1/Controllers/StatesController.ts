import express from "express";
const statesDb = require("../Database/db_states");

const StatesController = {
	getAllStates: async (req: express.Request, res: express.Response) => {
		try {
			const result = await statesDb.getAllStates();
			res.status(200).send(result);
		} catch (e) {
			res.status(400).send(e);
		}
	},
};

module.exports = StatesController;
