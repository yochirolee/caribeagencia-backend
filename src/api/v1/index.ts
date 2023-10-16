import express from "express";
import {
	AgenciesRoutes,
	CustomersRoutes,
	EmployeesRoutes,
	InvoicesRoutes,
	PackagesRoutes,
	RecieversRoutes,
	RolesRoutes,
	ServicesPricesRoutes,
	ServicesProvidersRoutes,
	ServicesRoutes,
	StatesRoutes,
	PackagesCategoriesRoutes,
	PaymentMethodsRoutes,
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
router.use("/states", StatesRoutes);
router.use("/invoices", InvoicesRoutes);
router.use("/packages", PackagesRoutes);
router.use("/packagesCategories", PackagesCategoriesRoutes);
router.use("/paymentMethods", PaymentMethodsRoutes);

export default router;
