import express from "express";
const db_invoices = require("../Database/db_invoices");

export const getAllInvoices = async (req: express.Request, res: express.Response) => {
	try {
		const result = await db_invoices.getAllInvoices();
		res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	}
};

export const getInvoiceByAgencyId = async (req: express.Request, res: express.Response) => {
	const { id } = req.params;
	if (!id) res.status(400).json({ message: "Agency id is required" });
	try {
		const result = await db_invoices.getInvoiceByAgencyId(Number(id));
		res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	}
};

export const getInvoiceById = async (req: express.Request, res: express.Response) => {
	const { id } = req.params;
	console.log(id, "id");
	if (!id) res.status(400).json({ message: "Invoice id is required" });
	try {
		const result = await db_invoices.getInvoiceById(Number(id));
		res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	}
};

export const payInvoice = async (req: express.Request, res: express.Response) => {
	const { id, amountToPay, paymendMethodId } = req.body;
	console.log(id, amountToPay, paymendMethodId, "data to pay");
	if (!id) res.status(400).json({ message: "Invoice id is required" });
	try {
		const result = await db_invoices.payInvoice(
			Number(id),
			Number(amountToPay),
			Number(paymendMethodId),
		);
		res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	}
};

export const createInvoice = async (req: express.Request, res: express.Response) => {
	console.log(req.body, "body");
	try {
		const requiredFields = [
			"invoiceNumber",
			"amountToPay",

			"customerId",
			"recieverId",
			"employeeId",
			"serviceId",
			"packages",
			"agencyId",
		];
		const missingFields = requiredFields.filter((field) => !req.body[field]);
		if (missingFields.length > 0) {
			res.status(400).json({ message: `Missing required fields: ${missingFields.join(", ")}` });
			return;
		}
		const {
			invoiceNumber,
			status,
			amountToPay,
			discount,
			deliveryAmount,
			agencyId,
			customerId,
			recieverId,
			employeeId,
			serviceId,
		} = req.body;

		const { packages } = req.body;

		if (!packages || packages.lenght == 0)
			res.status(400).json({ message: "packages is required" });

		const packagesRequiredFields = ["hbl", "description", "weight", "publicPrice"];
		const packagesMissingFields = packagesRequiredFields.filter((field) => !packages[0][field]);
		if (packagesMissingFields.length > 0) {
			res
				.status(400)
				.json({ message: `Missing required fields: ${packagesMissingFields.join(", ")}` });
			return;
		}

		const packagesToInsert = packages.map((pack: any) => ({
			hbl: pack.hbl,
			description: pack.description,
			weight: pack.weight,
			publicPrice: pack.publicPrice,
			isSellByPounds: pack.isSellByPounds,
		}));

		console.log(packagesToInsert, "packages to insert");

		const result = await db_invoices.createInvoice(
			{
				invoiceNumber,
				status,
				discount,
				deliveryAmount,
				amountToPay,
				agencyId,
				customerId,
				recieverId,
				employeeId,
				serviceId,
			},
			packagesToInsert,
		);
		res.status(200).json(result);
	} catch (e) {
		console.log(e);
		res.status(400).json(e);
	}
};
