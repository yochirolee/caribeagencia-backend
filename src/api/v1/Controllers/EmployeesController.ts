import express from "express";
const db_employees = require("../Database/db_employees");
import clerk from "@clerk/clerk-sdk-node";

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

	if (!id) res.status(400).json({ message: "Agency id is required" });
	try {
		const result = await db_employees.getEmployeesByAgencyId(Number(id));
		const users = await clerk.users.getUserList();
		const sessionList = await clerk.sessions.getSessionList();

		const employees = result.map((employee: any) => {
			const user = users.find((user: any) => user.id === employee.id);
			const session = sessionList.find((session: any) => session.userId === employee.id);
			return {
				...employee,
				imageUrl: user?.imageUrl,
				session: { status: session?.status, lastActiveAt: session?.lastActiveAt },
			};
		});
		res.status(200).json(employees);
	} catch (e) {
		res.status(400).json(e);
	}
};

export const getEmployeeById = async (req: express.Request, res: express.Response) => {
	const { id } = req.params;
	if (!id) res.status(400).json({ message: "Employee id is required" });
	try {
		const result = await db_employees.getEmployeeById(String(id));
		if (!result) res.status(404).json({ message: `Employee with id ${id} not found ` });
		else res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	}
};

export const getEmployeeByEmail = async (req: express.Request, res: express.Response) => {
	const { email } = req.params;
	console.log(email);
	if (!email) res.status(400).json({ message: "Employee email is required" });
	try {
		const result = await db_employees.getEmployeeByEmail(email);
		if (!result) res.status(404).json({ message: `Employee with email ${email} not found ` });
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
	const { firstName, lastName, password, email, address, mobile, agencyId, roleId } = req.body;
	if (!firstName || !lastName || !email || !address || !mobile || !agencyId || !roleId)
		res.status(400).json({ message: "All fields are required" });
	else
		try {
			const clerkUser = await clerk.users.createUser({
				emailAddress: [email],
				password,
				firstName,
				lastName,
			});

			const result = await db_employees.createEmployee({
				id: clerkUser.id,
				firstName,
				lastName,
				email,
				address,
				mobile,
				agencyId,
				roleId,
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

	const { firstName, lastName, address, mobile, agencyId, roleId } = req.body;
	if (!firstName || !lastName || !address || !mobile || !agencyId)
		res.status(400).json({ message: "All fields are required" });
	else
		try {
			clerk.users.updateUser(String(id), {
				firstName,
				lastName,
			});
			const result = await db_employees.updateEmployee(String(id), {
				firstName,
				lastName,
				address,
				mobile,
				agencyId,
				roleId,
			});

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
		await clerk.users.deleteUser(String(id));
		const result = await db_employees.deleteEmployee(String(id));
		if (!result) res.status(404).json({ message: `Employee with id ${id} not found ` });
		else res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	}
};
