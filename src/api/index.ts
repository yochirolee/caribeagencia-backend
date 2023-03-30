import express from "express";
import customers from "./customers";
import recievers from "./recievers";
import states from "./states";

const router = express.Router();

router.get("/api", (req, res) => {
	res.json({ message: "API - 👋🌎🌍🌏" });
});

router.use("/customers", customers);
router.use("/recievers", recievers);
router.use("/states", states);

export default router;
