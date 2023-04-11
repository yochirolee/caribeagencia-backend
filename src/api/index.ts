import express from "express";
import agencies from "./agencies";
import customers from "./customers";
import recievers from "./recievers";
import states from "./states";
import invoices from "./invoices";

const router = express.Router();

router.get("/api", (req, res) => {
	res.json({ message: "API - 👋🌎🌍🌏" });
});

router.use("/agencies", agencies);
router.use("/customers", customers);
router.use("/recievers", recievers);
router.use("/states", states);
router.use("/invoices", invoices);

export default router;
