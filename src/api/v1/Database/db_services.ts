import { Prisma } from "@prisma/client";
import prisma from "../../../lib/prisma";


const getAllServices = async () => {
	try {
		const result = await prisma.services.findMany({
			include: {
				servicesPrices: true,
				servicesCategories: true,
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

const getServicesByAgencyId = async (agencyId: number) => {
	try {
		const result = await prisma.services.findMany({
			include: {
				servicesPrices: {
					where: {
						agencyId: agencyId,
					},
				},
				servicesCategories: true,
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

const createService = async (data: any, categoriesIds: Number[]) => {
	console.log(data, categoriesIds);

	console.log(categoriesIds, "categoriesIds");
	try {
		const result = await prisma.services.create({
			data: {
				...data,
				servicesCategories: {
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
	console.log(id, data,"updating")
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
