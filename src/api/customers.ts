import express from "express";
import { Prisma } from "@prisma/client";
import prisma from "../lib/prisma";
import {
	PrismaClientKnownRequestError,
	PrismaClientUnknownRequestError,
} from "@prisma/client/runtime";

const router = express.Router();

router.get("/", async (req, res) => {
	const customers = await prisma.customers.findMany({});
	res.status(200).json(customers);
});

router.get("/findById/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const customer = await prisma.customers.findUnique({
			where: {
				id: parseInt(id),
			},
			include: {
				recievers: {
					include: { state: true, city: true },
				},
			},
		});
		res.status(200).json(customer);
	} catch (error) {
		res.json({ error: `Customer with ${id} number does not exist in the database` });
	}
});

router.get("/findByMobile/:mobile", async (req, res) => {
	const { mobile } = req.params;
	try {
		const customer = await prisma.customers.findUnique({
			where: {
				mobile: String(mobile),
			},
			include: {
				recievers: {
					include: { state: true, city: true },
				},
			},
		});
		res.status(200).json(customer);
	} catch (error) {
		res.json({ error: `Customer with ${mobile} number does not exist in the database` });
	}
});

router.get("/search/:search", async (req, res) => {
	const { search } = req.params;
	try {
		const customers = await prisma.customers.findMany({
			where: {
				OR: [
					{
						firstName: {
							contains: search,
							mode: "insensitive",
						},
					},
					{
						lastName: {
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
			},
		});
		res.status(200).json(customers);
	} catch (error) {
		res.json({ error: `Customer with ${search} number does not exist in the database` });
	}
});

//create a method to insert a new customer and handle the error if the customer already exists

//create a crud method to delete a customer by id

router.post("/create", async (req, res) => {
	const {
		firstName,
		lastName,
		license,
		passport,
		email,
		address,
		countryId,
		stateId,
		cityId,
		phone,
		mobile,
		agencyId,
	} = req.body;

	try {
		const result = await prisma.customers.create({
			data: {
				firstName,
				lastName,
				license,
				passport,
				email,
				address,
				countryId,
				stateId,
				cityId,
				phone,
				mobile,
				agencyId,
			},
		});

		res.status(200).json(result);
	} catch (e) {
		console.log(e);
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
			if (e.code === "P2002") {
				res.status(400).json({
					code: e.code,
					meta: e.meta,
					text: "The customer already exists",
				});
			}
		}
	}
});

router.put("/update/:id", async (req, res) => {
	const { id } = req.params;
	const {
		firstName,
		lastName,
		license,
		passport,
		email,
		address,
		countryId,
		stateId,
		cityId,
		phone,
		mobile,
		agencyId,
	} = req.body;

	try {
		const result = await prisma.customers.update({
			where: {
				id: Number(id),
			},
			data: {
				firstName,
				lastName,
				license,
				passport,
				email,
				address,
				countryId,
				stateId,
				cityId,
				phone,
				mobile,
				agencyId,
			},
		});
		res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	}
});

router.delete("/delete/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const result = await prisma.customers.delete({
			where: {
				id: Number(id),
			},
		});
		res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	}
});

router.get("/getInvoicesByCustomerId/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const result = await prisma.customers.findUnique({
			where: {
				id: Number(id),
			},
			include: {
				invoices: {
					include: {
						agency: true,
						customer: true,
						reciever: true,
						products: true,
					},
				},
			},
		});
		res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	}
});

export default router;
