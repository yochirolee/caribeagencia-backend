import express from "express";
import customersRoutes from "./Routes/CustomersRoutes";
const router = express.Router();

router.get("/", (req, res) => {
	res.json({ message: "Caribe Travel Express API - V1 👋🌎🌍🌏" });
});
router.use("/customers", customersRoutes);

export default router;
