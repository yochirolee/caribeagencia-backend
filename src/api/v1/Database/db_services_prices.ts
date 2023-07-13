import { Prisma } from "@prisma/client";
import prisma from "../../../lib/prisma";

const getAllServicesPrices = async () => {
	try {
		const result = await prisma.servicesPrices.findMany();
		return result;
	} catch (e) {
		console.log(e, "error");
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
			throw e;
		}
		throw e;
	}
};

const getServicesPricesByAgencyId = async (agencyId: number) => {
	try {
		const result = await prisma.servicesPrices.findMany({
			where: {
				agencyId: agencyId,
			},
		});
		return result;
	} catch (e) {
		console.log(e, "error");
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
			throw e;
		}
		throw e;
	}
};

const updateServicePrice = async (id: number, data: any) => {
	try {
		const result = await prisma.servicesPrices.update({
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

const deleteServicePrice = async (id: number) => {
	console.log(id);
	try {
		const result = await prisma.servicesPrices.delete({
			where: {
				id: id,
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

const createServicePrices = async (data: any) => {
	console.log(data, "data");
	try {
		const result = await prisma.servicesPrices.create({
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
	getAllServicesPrices,
	getServicesPricesByAgencyId,
	createServicePrices,
	updateServicePrice,
	deleteServicePrice,
};
