import express from "express";
import { Prisma } from "@prisma/client";
import prisma from "../lib/prisma";

const router = express.Router();

router.get("/", async (req, res) => {
	const recievers = await prisma.recievers.findMany({
		include: {
			state: true,
			city: true,
		},
	});
	res.status(200).json(recievers);
});

router.post("/create", async (req, res) => {
	const {
		firstName,
		lastName,
		ci,
		passport,
		email,
		address,
		phone,
		mobile,
		customerId,
		countryId,
		stateId,
		cityId,
	} = req.body;
	try {
		const result = await prisma.recievers.create({
			data: {
				firstName,
				lastName,
				ci,
				passport,
				email,
				address,
				phone,
				mobile,
				countryId,
				customerId,
				stateId,
				cityId,
			},
		});
		res.status(200).json(result);
	} catch (e) {
		console.log(e);

		res.status(400).json(e);
	}
});

router.get("/getRecieversByCustomerId/:id", async (req, res) => {
	const recieversByCustomerId = await prisma.recievers.findMany({
		where: {
			customerId: parseInt(req.params.id),
		},
		include: {
			state: true,
			city: true,
		},
	});
	res.status(200).json(recieversByCustomerId);
});

router.get("/findRecieverByName/:searchParam", async (req, res) => {
	const recieverByName = await prisma.recievers.findMany({
		where: {
			firstName: {
				contains: req.params.searchParam,
				mode: "insensitive",
			},
		},
		include: {
			state: true,
			city: true,
		},
	});
	res.status(200).json(recieverByName);
});
export default router;
