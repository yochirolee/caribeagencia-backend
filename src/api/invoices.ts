import express from "express";
import prisma from "../lib/prisma";

const router = express.Router();

router.get("/", async (req, res) => {
	const invoices = await prisma.invoices.findMany({
		include: {
			customer: true,
			agency: true,
			reciever: true,
		},
	});
	res.status(200).json(invoices);
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

export default router;
