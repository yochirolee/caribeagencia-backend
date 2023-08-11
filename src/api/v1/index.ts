import express from "express";
import {
	AgenciesRoutes,
	CustomersRoutes,
	EmployeesRoutes,
	ProductsCategoriesRoutes,
	RecieversRoutes,
	RolesRoutes,
	ServicesPricesRoutes,
	ServicesProvidersRoutes,
	ServicesRoutes,
} from "./Routes";
const router = express.Router();


router.get("/", async (req, res) => {
	res.json({ message: "CTEnvios API - V1, contact: yleecruz@gmail.com 👋🌎🌍🌏" });
});
router.use("/customers", CustomersRoutes);
router.use("/agencies", AgenciesRoutes);
router.use("/recievers", RecieversRoutes);
router.use("/employees", EmployeesRoutes);
router.use("/services", ServicesRoutes);
router.use("/servicesProviders", ServicesProvidersRoutes);
router.use("/servicesPrices", ServicesPricesRoutes);
router.use("/roles", RolesRoutes);
router.use("/productsCategories", ProductsCategoriesRoutes);

export default router;
