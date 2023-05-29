import express from "express";

import prisma from "../lib/prisma";

const router = express.Router();

router.get("/", async (req, res) => {
	const agencies = await prisma.agencies.findMany({
		include: { employees: true },
	});
	res.status(200).json(agencies);
});

router.post("/create", async (req, res) => {
	const { name, address, owner, description } = req.body;
	if (!name) return res.json("Please no Agency Passed in Body");
	try {
		const result = await prisma.agencies.create({
			data: {
				name,
				address,
				owner,
				description,
			},
		});
		res.status(200).json(result);
	} catch (e) {
		res.status(401).json({ error: `Agency do not exist` });
	}
});

router.post("/createMany", async (req, res) => {
	const { agencies } = req.body;
	if (!agencies) return res.json("Please no Agency Passed in Body");
	try {
		const result = await prisma.agencies.createMany({
			data: agencies,
		});
		res.status(200).json(result);
	} catch (e) {
		res.status(401).json({ error: `Agency do not exist` });
	}
});

router.delete("/delete/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const result = await prisma.agencies.delete({
			where: {
				id: parseInt(id),
			},
		});
		res.status(200).json(result);
	} catch (e) {
		res.status(401).json({ error: `Agency do not exist`, message: e });
	}
});
//find by id
router.get("/:id", async (req, res) => {
	const { id } = req.params;
	if (!id) return res.status(401).json({ error: `Agency do not exist` });
	try {
		const result = await prisma.agencies.findUnique({
			where: {
				id: parseInt(id),
			},
		});
		res.status(200).json(result );
	} catch (e) {
		res.status(401).json({ error: `Agency do not exist`, message: e });
	}
});

export default router;
