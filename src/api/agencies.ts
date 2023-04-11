import express from "express";
import { Prisma } from "@prisma/client";
import prisma from "../lib/prisma";

const router = express.Router();

router.get("/", async (req, res) => {
	const agencies = await prisma.agencies.findMany({
		include: { employees: true },
	});
	res.status(200).json(agencies);
});

export default router;
