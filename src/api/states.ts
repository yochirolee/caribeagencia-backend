import express from "express";
import prisma from "../lib/prisma";

const router = express.Router();

router.get("/", async (req, res) => {
	const states = await prisma.states.findMany({
        include: {cities: true}
    });
	res.status(200).json(states);
});

export default router;
