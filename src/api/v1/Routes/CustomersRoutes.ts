import express from "express";
import {
	getAllCustomers,
	getCustomerById,
	searchCustomers,
	createCustomer,
	deleteCustomer,
	createManyCustomers,
} from "../Controllers/CustomersController";

const router = express.Router();
router.get("/", getAllCustomers);
router.get("/:id", getCustomerById);
router.get("/search/:search", searchCustomers);
router.post("/create", createCustomer);
router.post("/createMany", createManyCustomers);
router.delete("/delete/:id", deleteCustomer);
//router.get("/:id", deleteProduct);
export default router;
