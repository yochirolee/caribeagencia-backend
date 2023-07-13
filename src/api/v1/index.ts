import express from "express";
import {
	AgenciesRoutes,
	CustomersRoutes,
	EmployeesRoutes,
	RecieversRoutes,
	RolesRoutes,
	ServicesPricesRoutes,
	ServicesProvidersRoutes,
	ServicesRoutes,
} from "./Routes";
const router = express.Router();

import clerk from "@clerk/clerk-sdk-node";

router.get("/", async (req, res) => {
	const userList = await clerk.users.getUserList();
	const sessionList = await clerk.sessions.getSessionList();

	res.json({ message: "Caribe Travel Express API - V1 👋🌎🌍🌏", userList, sessionList });
});
router.use("/customers", CustomersRoutes);
router.use("/agencies", AgenciesRoutes);
router.use("/recievers", RecieversRoutes);
router.use("/employees", EmployeesRoutes);
router.use("/services", ServicesRoutes);
router.use("/servicesProviders", ServicesProvidersRoutes);
router.use("/servicesPrices", ServicesPricesRoutes);
router.use("/roles", RolesRoutes);

export default router;
