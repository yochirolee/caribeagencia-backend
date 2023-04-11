import express from "express";
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
		agencyId,
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
				agencyId,
			},
		});
		res.status(200).json(result);
	} catch (e) {
		res.json({ error: `Error Creating a Reciever`,e });
	}
});

router.get("/findByCustomerId/:id", async (req, res) => {
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

router.get("/findByName/:searchParam", async (req, res) => {
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
			customer:true
		},
	});
	res.status(200).json(recieverByName);
});

router.get("/findByMobile/:mobile", async (req, res) => {
	const { mobile } = req.params;
	try {
		const reciever = await prisma.recievers.findUnique({
			where: {
				mobile: String(mobile),
			},
			include: {
				state: true,
				city: true,
			},
		});
		res.status(200).json(reciever);
	} catch (error) {
		res.json({ error: `Reciever with ${mobile} number does not exist in the database` });
	}
});

export default router;
