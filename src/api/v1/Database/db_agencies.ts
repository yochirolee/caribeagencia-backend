import { Prisma } from "@prisma/client";
import prisma from "../../../lib/prisma";

const db_agencies = {
	getAllAgencies: async () => {
		try {
			const result = await prisma.agencies.findMany();
			return result;
		} catch (e) {
			if (e instanceof Prisma.PrismaClientKnownRequestError) {
			}
			throw e;
		}
	},
	getAgenciesEmployees: async (id: number) => {
		try {
			const result = await prisma.agencies.findUnique({
				where: {
					id: id,
				},
				include: {
					employees: true,
				},
			});
			return result;
		} catch (e) {
			if (e instanceof Prisma.PrismaClientKnownRequestError) {
			}
			throw e;
		}
	},

	getByAgencyId: async (id: number) => {
		try {
			const result = await prisma.agencies.findUnique({
				where: {
					id: id,
				},
				include: {
					customers: true,
					employees: true,
					invoices: true,
					recievers: true,
				},
			});
			return result;
		} catch (e) {
			if (e instanceof Prisma.PrismaClientKnownRequestError) {
			}
			throw e;
		}
	},

	searchAgency: async (search: string) => {
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
	},

	createAgency: async (data: any) => {
		try {
			const result = await prisma.agencies.create({ data });
			return result;
		} catch (e) {
			if (e instanceof Prisma.PrismaClientKnownRequestError) {
			}
			throw e;
		}
	},

	updateAgency: async (id: number, data: any) => {
		console.log(data, id,"updateting agency");
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
				throw e;
			}
			throw e;
		}
	},

	deleteAgency: async (id: number) => {
		try {
			const result = await prisma.agencies.delete({
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
	},
};

module.exports = db_agencies;
