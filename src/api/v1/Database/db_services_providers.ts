import { Prisma } from "@prisma/client";
import prisma from "../../../lib/prisma";

const getAllServicesProviders = async () => {
	try {
		const result = await prisma.servicesProviders.findMany({
			include: {
				services: {
					include: { servicesPrices: true },
				},
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

const getServicesProvidersByAgencyId = async (agencyId: number) => {
	try {
		const result = await prisma.servicesProviders.findMany({
			include: {
				services: {
					include: {
						servicesPrices: {
							where: {
								agencyId: agencyId,
							},
						},
					},
				},
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

const createServiceProvider = async (data: any) => {
	try {
		const result = await prisma.servicesProviders.create({
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

const updateServiceProvider = async (id: number, data: any) => {
	try {
		const result = await prisma.servicesProviders.update({
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
	getAllServicesProviders,
	getServicesProvidersByAgencyId,
	createServiceProvider,
	updateServiceProvider,
};
