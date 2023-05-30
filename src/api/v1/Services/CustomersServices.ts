import prisma from "../../../lib/prisma";
import { ICustomer } from "../Interfaces/ICustomer";

const getAllCustomers = async () => {
	const result = await prisma.customers.findMany();
	return result;
};

const getCustomerById = async (id: number) => {
	const result = await prisma.customers.findUnique({
		where: {
			id: id,
		},
	});
	return result;
};

const searchCustomers = async (search: string) => {
	const result = await prisma.customers.findMany({
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
			recievers: true,
			invoices: true,
		},
	});
	return result;
};

const createCustomer = async (data: ICustomer) => {
	const result = await prisma.customers.create({ data });
	return result;
};
module.exports = {
	getAllCustomers,
	getCustomerById,
	searchCustomers,
	createCustomer,
};

// Compare this snippet from src\api\v1\Services\CustomersServices.ts:
