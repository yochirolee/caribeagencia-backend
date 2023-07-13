import { Prisma } from "@prisma/client";
import prisma from "../../../lib/prisma";

const getAllServices = async () => {
	try {
		const result = await prisma.services.findMany();
		return result;
	} catch (e) {
		console.log(e, "error");
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
			throw e;
		}
		throw e;
	}
};

const getServicesByAgencyId = async (agencyId: number) => {
	console.log(agencyId);
	try {
		const result = await prisma.services.findMany({
			include: {
				servicesPrices: {
					where: {
						agencyId: agencyId,
					},
				},
			},
		});
		console.log(result);
		return result;
	} catch (e) {
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
			throw e;
		}
		throw e;
	}
};

const createService = async (data: any) => {
	try {
		const result = await prisma.services.create({
			data,
		});
		return result;
	} catch (e) {
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
			throw e;
		}
		throw e;
	}
};
const updateService = async (id: number, data: any) => {
	try {
		const result = await prisma.services.update({
			where: {
				id: id,
			},
			data,
		});
		return result;
	} catch (e) {
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
			throw e;
		}
		throw e;
	}
};

module.exports = {
	getAllServices,
	getServicesByAgencyId,
	createService,
	updateService,
};
