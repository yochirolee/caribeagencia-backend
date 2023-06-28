import prisma from "../../../lib/prisma";
import { Prisma } from "@prisma/client";
import { IReciever } from "../Interfaces/IReciever";

const getAllRecievers = async () => {
	try {
		const result = await prisma.recievers.findMany({});
		return result;
	} catch (e) {
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
		}
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
			},
		});
		return result;
	} catch (e) {
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
		}
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
				customers: true,
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

const createReciever = async (data: IReciever) => {
	try {
		const result = await prisma.recievers.create({ data });
		return result;
	} catch (e) {
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
		}
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
	deleteReciever,
	createManyRecievers,
};

// Compare this snippet from src\api\v1\Services\RecieverssServices.ts:
