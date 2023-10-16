import prisma from "../../../lib/prisma";
import { IInvoice } from "../Interfaces/IInvoice";

const getAllInvoices = async () => {
	try {
		const result = await prisma.invoices.findMany({
			include: {
				packages: true,
				customer: true,
				reciever: { include: { state: true, city: true } },
				agency: true,
			},
			orderBy: {
				createdAt: "desc",
			},
		});
		return result;
	} catch (e) {
		throw e;
	}
};

const createInvoice = async (data: IInvoice, packages: []) => {
	try {
		const result = await prisma.invoices.create({
			data: {
				...data,
				packages: {
					createMany: {
						data: packages,
					},
				},
			},
		});
		return result;
	} catch (e) {
		console.log(e);
		throw e;
	}
};

const getInvoiceById = async (id: number) => {
	try {
		const result = await prisma.invoices.findUnique({
			where: {
				id: id,
			},
			include: {
				packages: true,
				customer: true,
				reciever: { include: { state: true, city: true } },
				agency: true,
				employee: true,
				service: true,
				payments: { include: { paymentMethod: true } },
			},
		});
		return result;
	} catch (e) {
		console.log(e);
		throw e;
	}
};

const getInvoiceByAgencyId = async (agencyId: number) => {
	try {
		const result = await prisma.invoices.findMany({
			where: {
				agencyId: agencyId,
			},
			include: {
				packages: true,
				customer: true,
				reciever: { include: { state: true, city: true } },
				agency: true,
				employee: true,
				service: true,
			},
			orderBy: {
				createdAt: "desc",
			},
		});
		return result;
	} catch (e) {
		console.log(e);
		throw e;
	}
};

const payInvoice = async (id: number, paymentAmount: number, paymentMethodId: number) => {
	try {
		const invoice = await prisma.invoices.findUnique({
			where: {
				id: id,
			},
			select: {
				id: true,
				amountToPay: true,
				totalPaid: true,
				isPaid: true,
				payments: {
					select: {
						amount: true,
					},
				},
			},
		});

		if (!invoice?.amountToPay || !invoice?.payments) throw new Error("Invoice not found");
		if (!invoice.isPaid) {
			const paymentsDone = invoice.payments.reduce((acc, curr) => acc + curr.amount, 0);
			const totalPayment = paymentsDone + paymentAmount;
			if (totalPayment > invoice.amountToPay)
				throw new Error("Total Payment amount is greater than invoice amount");

			const result = await prisma.invoices.update({
				where: {
					id: id,
				},
				data: {
					totalPaid: totalPayment,
					isPaid: totalPayment == invoice.amountToPay,

					payments: {
						create: {
							amount: paymentAmount,
							paymentMethod: {
								connect: {
									id: paymentMethodId,
								},
							},
						},
					},
				},
			});

			return result;
		}
		return { message: "Invoice already paid" };

		/* 	const paymentsDone = invoice.payments.reduce((acc, curr) => acc + curr.amount, 0);
		const totalPayment = paymentsDone + paymentAmount;
		if (totalPayment > invoice.amountToPay)
			throw new Error("Total Payment amount is greater than invoice amount");

		const result = await prisma.invoices.update({
			where: {
				id: id,
			},
			data: {
				totalPaid: totalPayment,
				isPaid: totalPayment == invoice.amountToPay,

				payments: {
					create: {
						amount: paymentAmount,
						paymentsMethods: {
							connect: {
								id: paymentMethodId,
							},
						},
					},
				},
			},
		});

		return result; */
	} catch (e) {
		console.log(e, "Error");
		return e;
	}
};

/* const getRecieverById = async (id: number) => {
	try {
		const result = await prisma.recievers.findUnique({
			where: {
				id: id,
			},
			include: {
				customers: true,
				invoices: true,
				agency: true,
				state: true,
				city: true,
			},
		});
		return result;
	} catch (e) {
		throw e;
	}
};

const searchRecievers = async (search: string) => {
	try {
		const result = await prisma.recievers.findMany({
			where: {
				OR: [
					{
						firstName: {
							contains: search,
							mode: "insensitive",
						},
					},
					{
						ci: {
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
				state: true,
				city: true,
			},
		});
		return result;
	} catch (e) {
		throw e;
	}
};

const createReciever = async (data: IReciever) => {
	try {
		const result = await prisma.recievers.create({ data, include: { state: true, city: true } });
		return result;
	} catch (e) {
		throw e;
	}
};

const upsertReciever = async (data: IReciever) => {
	try {
		const result = await prisma.recievers.upsert({
			where: {
				ci: data.ci,
			},
			update: data,
			create: data,
			include: {
				state: true,
				city: true,
			},
		});
		return result;
	} catch (e) {
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
		}
		throw e;
	}
};

export const connectRecieverToCustomer = async (customerId: number, recieverId: number) => {
	try {
		const result = await prisma.recievers.update({
			where: {
				id: recieverId,
			},
			data: {
				customers: {
					connect: {
						id: customerId,
					},
				},
			},
		});

		return result;
	} catch (e) {
		throw e;
	}
};

const createManyRecievers = async (data: IReciever[]) => {
	try {
		const result = await prisma.recievers.createMany({ data });
		return result;
	} catch (e) {
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
		}
		throw e;
	}
};

const deleteReciever = async (id: number) => {
	try {
		const result = await prisma.recievers.delete({
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
}; */
module.exports = {
	getAllInvoices,
	createInvoice,
	getInvoiceById,
	getInvoiceByAgencyId,
	payInvoice,
};

// Compare this snippet from src\api\v1\Services\RecieverssServices.ts:
