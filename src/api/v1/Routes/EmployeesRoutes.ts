import express from "express";
import {
	getAllEmployees,
	getEmployeeById,
	searchEmployees,
	createEmployee,
	deleteEmployee,
	getEmployeesByAgencyId,
} from "../Controllers/EmployeesController";

const router = express.Router();
router.get("/", getAllEmployees);
router.get("/getByAgencyId/:id", getEmployeesByAgencyId);
router.get("/:id", getEmployeeById);
router.get("/search/:search", searchEmployees);
router.post("/create", createEmployee);
router.delete("/delete/:id", deleteEmployee);
export default router;
