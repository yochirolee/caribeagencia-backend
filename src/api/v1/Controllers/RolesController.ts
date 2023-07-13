import express from "express";
const rolesDb = require("../Database/db_roles");

const RolesController = {
	getAllRoles: async (req: express.Request, res: express.Response) => {
		try {
			const result = await rolesDb.getAllRoles();
			res.status(200).send(result);
		} catch (e) {
			res.status(400).send(e);
		}
	},
};

module.exports = RolesController;
