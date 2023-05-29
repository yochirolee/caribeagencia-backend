import express from "express";
import prisma from "../lib/prisma";

const router = express.Router();

router.get("/", async (req, res) => {
	const invoices = await prisma.invoices.findMany({
		include: {
			customer: true,
			agency: true,
			reciever: true,
			products: true,
		},
	});
	res.status(200).json(invoices);
});

router.put("/update", async (req, res) => {
	const {
		id,
		invoiceNumber,
		customerId,
		recieverId,
		employeeId,
		totalWeight,
		totalAmount,
		discount,
		deliveryAmount,
		agencyId,
	} = req.body;
	try {
		const result = await prisma.invoices.update({
			where: {
				id,
			},
			data: {
				invoiceNumber,
				customerId,
				recieverId,
				employeeId,
				totalWeight,
				totalAmount,
				discount,
				deliveryAmount,
				agencyId,
			},
		});
		res.status(200).json(result);
	} catch (e) {
		res.json({ error: `Invoice with ${invoiceNumber} number does not exist in the database` });
	}
});

router.post("/create", async (req, res) => {
	const {
		invoiceNumber,
		customerId,
		recieverId,
		employeeId,
		totalWeight,
		totalAmount,
		discount,
		deliveryAmount,
		agencyId,
	} = req.body;
	// Perform validations
	if (!invoiceNumber || !customerId || !recieverId || !employeeId || !agencyId) {
		return res.status(400).json({ error: "Missing required fields" });
	}
	try {
		const result = await prisma.invoices.create({
			data: {
				invoiceNumber,
				customerId,
				recieverId,
				employeeId,
				totalWeight,
				totalAmount,
				discount,
				deliveryAmount,
				agencyId,
			},
		});
		res.status(200).json(result);
	} catch (e) {
		res.json({ error: `Invoice with ${invoiceNumber} number does not exist in the database` });
	}
});

router.delete("/delete/:id", async (req, res) => {
	const { id } = req.params;
	// Perform validations
	if (!id) {
		return res.status(400).json({ error: "Missing required field" });
	}
	try {
		const result = await prisma.invoices.delete({
			where: {
				id: parseInt(id),
			},
		});
		res.status(200).json(result);
	} catch (e) {
		res.json({ error: `Invoice with ${id} number does not exist in the database` });
	}
});

router.get("/findById/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const result = await prisma.invoices.findUnique({
			where: {
				id: parseInt(id),
			},
			include: {
				customer: true,
				agency: true,
				reciever: true,
				products: true,
			},
		});
		res.status(200).json(result);
	} catch (e) {
		res.json({ error: `Invoice with ${id} number does not exist in the database` });
	}
});

export default router;
