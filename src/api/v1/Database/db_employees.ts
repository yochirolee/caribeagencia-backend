import prisma from "../../../lib/prisma";
import { Prisma } from "@prisma/client";
import { IEmployee } from "../Interfaces/IEmployee";

const getAllEmployees = async () => {
	try {
		const result = await prisma.employees.findMany({});
		return result;
	} catch (e) {
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
		}
		throw e;
	}
};

const getEmployeesByAgencyId = async (agencyId: number) => {
	try {
		const result = await prisma.employees.findMany({
			where: {
				agencyId: agencyId,
			},
			include: {
				role: true,
			},
		});
		return result;
	} catch (e) {
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
			throw e;
		}
		throw e;
	}
};

const getEmployeeById = async (id: string) => {
	try {
		const result = await prisma.employees.findUnique({
			where: {
				id: id,
			},
			include: {
				agency: true,
				role: true,
			},
		});
		return result;
	} catch (e) {
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
		}
		throw e;
	}
};

const searchEmployees = async (search: string) => {
	try {
		const result = await prisma.employees.findMany({
			where: {
				OR: [
					{
						firstName: {
							contains: search,
							mode: "insensitive",
						},
					},
					{
						email: {
							contains: search,
							mode: "insensitive",
						},
					},
					{
						mobile: {
							contains: search,
							mode: "insensitive",
						},
					},
				],
			},
		});
		return result;
	} catch (e) {
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
		}
		throw e;
	}
};

const getEmployeeByEmail = async (email: string) => {
	try {
		const result = await prisma.employees.findUnique({
			where: {
				email: email,
			},
			include: {
				role: true,
			},
		});
		return result;
	} catch (e) {
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
			throw e;
		}
		throw e;
	}
};

const createEmployee = async (data: IEmployee) => {
	try {
		const result = await prisma.employees.create({ data });
		return result;
	} catch (e) {
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
		}
		throw e;
	}
};

const updateEmployee = async (id: string, data: IEmployee) => {
	try {
		const result = await prisma.employees.update({
			where: {
				id: id,
			},
			data: data,
		});
		return result;
	} catch (e) {
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
			throw e;
		}
		throw e;
	}
};
const deleteEmployee = async (id: string) => {
	try {
		const result = await prisma.employees.delete({
			where: {
				id: id,
			},
		});
		return result;
	} catch (e) {
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
		}
		throw e;
	}
};
module.exports = {
	getAllEmployees,
	getEmployeeById,
	searchEmployees,
	createEmployee,
	deleteEmployee,
	getEmployeesByAgencyId,
	updateEmployee,
	getEmployeeByEmail,
};

// Compare this snippet from src\api\v1\Services\EmployeessServices.ts:
