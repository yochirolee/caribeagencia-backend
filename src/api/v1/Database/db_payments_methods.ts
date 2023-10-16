import prisma from "../../../lib/prisma";

const getAllPaymentsMethods = async () => {
	try {
		const result = await prisma.paymentsMethods.findMany({});
		return result;
	} catch (e) {
		console.log(e);
		throw e;
	}
};

const createPaymentsMethods = async (data: any) => {
	try {
		const result = await prisma.paymentsMethods.create({
			data,
		});
		return result;
	} catch (e) {
		console.log(e);
		throw e;
	}
};

const deletePaymentsMethods = async (id: number) => {
	try {
		const result = await prisma.paymentsMethods.delete({
			where: {
				id,
			},
		});
		return result;
	} catch (e) {
		console.log(e);
		throw e;
	}
};

const updatePaymentsMethods = async (id: number, data: any) => {
	try {
		const result = await prisma.paymentsMethods.update({
			where: {
				id,
			},
			data,
		});
		return result;
	} catch (e) {
		console.log(e);
		throw e;
	}
};

const upsertPaymentsMethods = async (where: any, data: any) => {
	try {
		const result = await prisma.paymentsMethods.upsert({
			where,
			update: data,
			create: data,
		});
		return result;
	} catch (e) {
		console.log(e);
		throw e;
	}
};

export {
	getAllPaymentsMethods,
	createPaymentsMethods,
	deletePaymentsMethods,
	updatePaymentsMethods,
	upsertPaymentsMethods,
};
