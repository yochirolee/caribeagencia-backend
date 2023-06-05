import { Prisma } from "@prisma/client";
import prisma from "../../../lib/prisma";

const getAllAgencies = async () => {
	try {
		const result = await prisma.agencies.findMany();
		return result;
	} catch (e) {
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
		}
		throw e;
	}
};

const getByAgencyId = async (id: number) => {
	try {
		const result = await prisma.agencies.findUnique({
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

const searchAgency = async (search: string) => {
	try {
		const result = await prisma.agencies.findMany({
			where: {
				OR: [
					{
						name: {
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

const createAgency = async (data: any) => {
	try {
		const result = await prisma.agencies.create({ data });
		return result;
	} catch (e) {
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
		}
		throw e;
	}
};

const updateAgency = async (id: number, data: any) => {
	try {
		const result = await prisma.agencies.update({
			where: {
				id: id,
			},
			data: data,
		});
		return result;
	} catch (e) {
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
		}
		throw e;
	}
};

const deleteAgency = async (id: number) => {
	try {
		const result = await prisma.agencies.delete({
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
	getAllAgencies,
	getByAgencyId,
	searchAgency,
	createAgency,
	updateAgency,
	deleteAgency,
};
