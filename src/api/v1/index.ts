import express from "express";
import {
	AgenciesRoutes,
	CustomersRoutes,
	EmployeesRoutes,
	RecieversRoutes,
	ProductsCategoriesRoutes,
	ServicesRoutes,
} from "./Routes";
const router = express.Router();

router.get("/", (req, res) => {
	res.json({ message: "Caribe Travel Express API - V1 👋🌎🌍🌏" });
});
router.use("/customers", CustomersRoutes);
router.use("/agencies", AgenciesRoutes);
router.use("/recievers", RecieversRoutes);
router.use("/employees", EmployeesRoutes);
router.use("/productsCategories", ProductsCategoriesRoutes);
router.use("/services", ServicesRoutes);

export default router;
