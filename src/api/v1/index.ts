import express from "express";
import { AgenciesRoutes, CustomersRoutes, RecieversRoutes } from "./Routes";
const router = express.Router();

router.get("/", (req, res) => {
	res.json({ message: "Caribe Travel Express API - V1 👋🌎🌍🌏" });
});
router.use("/customers", CustomersRoutes);
router.use("/agencies", AgenciesRoutes);
router.use("/recievers", RecieversRoutes);

export default router;
