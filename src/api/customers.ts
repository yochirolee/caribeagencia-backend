import express from "express";
import { Prisma } from "@prisma/client";
import prisma from "../lib/prisma";

const router = express.Router();

router.get("/", async (req, res) => {
	const customers = await prisma.customers.findMany({});
	res.status(200).json(customers);
});

router.get("/findByMobile/:mobile", async (req, res) => {
	console.log(req.params.mobile)
	const { mobile } = req.params;
	const customer = await prisma.customers.findUnique({
		where: {
			mobile: mobile,
		},
	});
	res.status(200).json(customer);
});

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
			},
		});
		res.status(200).json(result);
	} catch (e) {
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
			// The .code property can be accessed in a type-safe manner
			if (e.message) {
				res.status(400).json(e.message);
			}
		}
		throw e;
	}
});

export default router;
