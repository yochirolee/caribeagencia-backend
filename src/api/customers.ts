import express from "express";
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const router = express.Router();

router.get("/", async (req, res) => {
	const customers = await prisma.customers.findMany({});
	res.status(200).json(customers);
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
