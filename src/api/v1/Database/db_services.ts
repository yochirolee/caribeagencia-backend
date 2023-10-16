import { Prisma } from "@prisma/client";
import prisma from "../../../lib/prisma";

const getAllServices = async () => {
	try {
		const result = await prisma.services.findMany({
			include: {
				servicesPrices: true,
				packagesCategories: true,
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

const getServicesByAgencyId = async (agencyId: number) => {
	try {
		const result = await prisma.services.findMany({
			include: {
				servicesPrices: {
					where: {
						agencyId: agencyId,
					},
				},
				packagesCategories: true,
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

const createService = async (data: any, categoriesIds: Number[]) => {
	try {
		const result = await prisma.services.create({
			data: {
				...data,
				packagesCategories: {
					connect: categoriesIds.map((id) => ({ id: id })),
				},
			},
		});
		return result;
	} catch (e) {
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
			console.log(e, "error");
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
const deleteService = async (id: number) => {
	try {
		const result = await prisma.services.delete({
			where: {
				id: id,
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

module.exports = {
	getAllServices,
	getServicesByAgencyId,
	createService,
	updateService,
	deleteService,
};
