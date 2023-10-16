import prisma from "../../../lib/prisma";
import { Prisma } from "@prisma/client";
import { IReciever } from "../Interfaces/IReciever";
import { ICustomer } from "../Interfaces/ICustomer";

const getAllRecievers = async () => {
	try {
		const result = await prisma.recievers.findMany({ include: { state: true, city: true } });
		return result;
	} catch (e) {
		throw e;
	}
};

const getRecieverById = async (id: number) => {
	try {
		const result = await prisma.recievers.findUnique({
			where: {
				id: id,
			},
			include: {
				customers: true,
				invoices: true,
				agency: true,
				state: true,
				city: true,
			},
		});
		return result;
	} catch (e) {
		throw e;
	}
};

const searchRecievers = async (search: string) => {
	try {
		const result = await prisma.recievers.findMany({
			where: {
				OR: [
					{
						firstName: {
							contains: search,
							mode: "insensitive",
						},
					},
					{
						ci: {
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
				state: true,
				city: true,
			},
		});
		return result;
	} catch (e) {
		throw e;
	}
};

const createReciever = async (data: IReciever) => {
	try {
		const result = await prisma.recievers.create({ data, include: { state: true, city: true } });
		return result;
	} catch (e) {
		throw e;
	}
};

const upsertReciever = async (data: IReciever) => {
	try {
		const result = await prisma.recievers.upsert({
			where: {
				ci: data.ci,
			},
			update: data,
			create: data,
			include: {
				state: true,
				city: true,
			},
		});
		return result;
	} catch (e) {
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
		}
		throw e;
	}
};

export const connectRecieverToCustomer = async (customerId: number, recieverId: number) => {
	try {
		const result = await prisma.recievers.update({
			where: {
				id: recieverId,
			},
			data: {
				customers: {
					connect: {
						id: customerId,
					},
				},
			},
		});

		return result;
	} catch (e) {
		throw e;
	}
};

const createManyRecievers = async (data: IReciever[]) => {
	try {
		const result = await prisma.recievers.createMany({ data });
		return result;
	} catch (e) {
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
		}
		throw e;
	}
};

const deleteReciever = async (id: number) => {
	try {
		const result = await prisma.recievers.delete({
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
	getAllRecievers,
	getRecieverById,
	searchRecievers,
	createReciever,
	upsertReciever,
	deleteReciever,
	createManyRecievers,
	connectRecieverToCustomer,
};

// Compare this snippet from src\api\v1\Services\RecieverssServices.ts:
