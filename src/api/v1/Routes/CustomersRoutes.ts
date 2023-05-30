import express from "express";
import {
	getAllCustomers,
	getCustomerById,
	searchCustomers,
	createCustomer,
	deleteCustomer,
} from "../Controllers/CustomersController";

const router = express.Router();
router.get("/", getAllCustomers);
router.get("/:id", getCustomerById);
router.get("/search/:search", searchCustomers);
router.post("/create", createCustomer);
router.delete("/delete/:id", deleteCustomer);
//router.get("/:id", deleteProduct);
export default router;
