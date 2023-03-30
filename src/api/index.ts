import express from "express";
import customers from "./customers";

const router = express.Router();

router.get("/api", (req, res) => {
	res.json({ message: "API - 👋🌎🌍🌏" });
});

router.use("/customers", customers);

export default router;
