import prisma from "../../../lib/prisma";
import { Prisma } from "@prisma/client";
import { ICustomer } from "../Interfaces/ICustomer";

const getAllCustomers = async () => {
	try {
		const result = await prisma.customers.findMany({});
		return result;
	} catch (e) {
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
		}
		throw e;
	}
};

const getCustomerById = async (id: number) => {
	try {
		const result = await prisma.customers.findUnique({
			where: {
				id: id,
			},
			include: {
				recievers: true,
				invoices: true,
				agency: true,
			},
		});
		return result;
	} catch (e) {
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
		}
		throw e;
	}
};

const searchCustomers = async (search: string) => {
	try {
		const result = await prisma.customers.findMany({
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
			include: {
				recievers: true,
				invoices: true,
				agency: true,
			},
		});
		return result;
	} catch (e) {
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
		}
		throw e;
	}
};

const createCustomer = async (data: ICustomer) => {
	try {
		const result = await prisma.customers.create({ data });
		return result;
	} catch (e) {
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
		}
		throw e;
	}
};

const createManyCustomers = async (data: ICustomer[]) => {
	try {
		const result = await prisma.customers.createMany({ data });
		return result;
	} catch (e) {
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
		}
		throw e;
	}
};

const deleteCustomer = async (id: number) => {
	try {
		const result = await prisma.customers.delete({
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
	getAllCustomers,
	getCustomerById,
	searchCustomers,
	createCustomer,
	deleteCustomer,
	createManyCustomers,
};

// Compare this snippet from src\api\v1\Services\CustomersServices.ts:
