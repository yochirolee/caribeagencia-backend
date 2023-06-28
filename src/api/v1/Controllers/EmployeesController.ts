import express from "express";
const db_employees = require("../Database/db_employees");

export const getAllEmployees = async (req: express.Request, res: express.Response) => {
	try {
		const result = await db_employees.getAllEmployees();
		res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	}
};

export const getEmployeesByAgencyId = async (req: express.Request, res: express.Response) => {
	const { id } = req.params;
	console.log(id, "agency id");
	if (!id) res.status(400).json({ message: "Agency id is required" });
	try {
		const result = await db_employees.getEmployeesByAgencyId(Number(id));
		if (!result) res.status(404).json({ message: `Agency with id ${id} not found ` });
		else res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	}
};

export const getEmployeeById = async (req: express.Request, res: express.Response) => {
	const { id } = req.params;
	if (!id) res.status(400).json({ message: "Employee id is required" });
	try {
		const result = await db_employees.getEmployeeById(Number(id));
		if (!result) res.status(404).json({ message: `Employee with id ${id} not found ` });
		else res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	}
};

export const searchEmployees = async (req: express.Request, res: express.Response) => {
	const { search } = req.params;
	if (!search) res.status(400).json({ message: "Search Criteria is required" });
	try {
		const result = await db_employees.searchEmployees(search);
		if (!result) res.status(404).json({ message: `Employees  ${search} not found ` });
		else res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	}
};

export const createEmployee = async (req: express.Request, res: express.Response) => {
	console.log(req.body);
	const { firstName, lastName, email, address, mobile, agencyId } = req.body;
	if (!firstName || !lastName || !email || !address || !mobile || !agencyId)
		res.status(400).json({ message: "All fields are required" });
	else
		try {
			const result = await db_employees.createEmployee({
				firstName,
				lastName,
				email,
				address,
				mobile,
				agencyId,
			});
			res.status(200).json(result);
		} catch (e) {
			res.status(400).json(e);
		}
};

export const createManyEmployees = async (req: express.Request, res: express.Response) => {
	const { Employees } = req.body;
	if (!Employees) res.status(400).json({ message: "Employees are required" });
	else
		try {
			const result = await db_employees.createManyEmployees(Employees);
			res.status(200).json(result);
		} catch (e) {
			res.status(400).json(e);
		}
};

export const updateEmployee = async (req: express.Request, res: express.Response) => {
	const { id } = req.params;
	console.log(id);
	const { firstName, lastName, email, address, mobile, agencyId } = req.body;
	if (!firstName || !lastName || !email || !address || !mobile || !agencyId)
		res.status(400).json({ message: "All fields are required" });
	else
		try {
			const result = await db_employees.updateEmployee(Number(id), {
				firstName,
				lastName,
				email,
				address,
				mobile,
				agencyId,
			});
			console.log(result, "result");
			if (!result) res.status(404).json({ message: `Employee with id ${id} not found ` });
			else res.status(200).json(result);
		} catch (e) {
			res.status(400).json(e);
		}
};

export const deleteEmployee = async (req: express.Request, res: express.Response) => {
	const { id } = req.params;
	if (!id) res.status(400).json({ message: "Employee id is required" });
	try {
		const result = await db_employees.deleteEmployee(Number(id));
		if (!result) res.status(404).json({ message: `Employee with id ${id} not found ` });
		else res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	}
};
