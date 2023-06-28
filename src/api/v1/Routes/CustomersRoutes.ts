import express from "express";
import {
	getAllCustomers,
	getCustomerById,
	searchCustomers,
	createCustomer,
	deleteCustomer,
	createManyCustomers,
	createCustomerAndReciever,
} from "../Controllers/CustomersController";

const router = express.Router();
router.get("/", getAllCustomers);
router.get("/:id", getCustomerById);
router.get("/search/:search", searchCustomers);
router.post("/", createCustomer);
router.post("/createMany", createManyCustomers);
router.post("/createCustomerReciever", createCustomerAndReciever);
router.delete("/:id", deleteCustomer);
export default router;
