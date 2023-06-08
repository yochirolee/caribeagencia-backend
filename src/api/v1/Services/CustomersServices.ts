import prisma from "../../../lib/prisma";
import { Prisma } from "@prisma/client";
import { ICustomer } from "../Interfaces/ICustomer";
import { IReciever } from "../Interfaces/IReciever";

const getAllCustomers = async () => {
	try {
		const result = await prisma.customers.findMany({
			include: {
				recievers: true,
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
			throw e;
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
			throw e;
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
			throw e;
		}
		throw e;
	}
};

//create customer with reciever
const createCustomerAndReciever = async (customer: ICustomer, reciever: IReciever) => {
	try {
		/* 	if (!customer || !reciever) throw new Error("Customer or Reciever is not defined");

		const customerResult = await prisma.customers.findUnique({
			where: { mobile: customer.mobile },
		});

		const recieverResult = await prisma.recievers.findUnique({
			where: { mobile: reciever.mobile },
		});
		//create a method using prisma to connect or create reciever

		if (recieverResult && customerResult) {
			console.log("Customers And Recievers already exist");
			const result = await prisma.recievers.update({
				where: {
					id: recieverResult.id,
				},
				data: {
					...reciever,
					customers: {
						connect: {
							id: customerResult.id,
						},
					},
				},
			});
			return result;
		}

		if (customerResult && !recieverResult) {
			console.log("Customer already exist and not a reciever");
			const result = await prisma.recievers.create({
				data: {
					...reciever,
					customers: {
						connect: {
							id: customerResult.id,
						},
					},
				},
			});
			return result;
		}

		if (recieverResult && !customerResult) {
			console.log("Reciever already exist and not a customer");
			const result = await prisma.customers.create({
				data: {
					...customer,
					recievers: {
						connect: {
							id: recieverResult.id,
						},
					},
				},
			});
			return result;
		} else {
			console.log("Customer and Reciever does not exist");
			const result = await prisma.customers.create({
				data: {
					...customer,
					recievers: {
						create: reciever,
					},
				},
			});
			return result; 
		}*/
		return "hello";
	} catch (e) {
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
			throw e;
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
			throw e;
		}
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
			throw e;
		}
	}
};
module.exports = {
	getAllCustomers,
	getCustomerById,
	searchCustomers,
	createCustomer,
	deleteCustomer,
	createManyCustomers,
	createCustomerAndReciever,
};

// Compare this snippet from src\api\v1\Services\CustomersServices.ts:
