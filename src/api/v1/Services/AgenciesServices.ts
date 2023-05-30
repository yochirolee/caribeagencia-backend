import prisma from "../../../lib/prisma";
import { IAgency } from "../Interfaces/IAgency";

const getAllAgencies = async () => {
	const result = await prisma.agencies.findMany();
	return result;
};

const getByAgencyId = async (id: number) => {
	const result = await prisma.agencies.findUnique({
		where: {
			id: id,
		},
	});
	return result;
};

const searchAgency = async (search: string) => {
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
};

const createAgency = async (data: any) => {
	const result = await prisma.agencies.create({ data });
	return result;
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
		console.log(e);
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
		console.log(e);
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

// Compare this snippet from src\api\v1\Services\CustomersServices.ts:
