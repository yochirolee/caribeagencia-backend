"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const EmployeesController_1 = require("../Controllers/EmployeesController");
const router = express_1.default.Router();
router.get("/", EmployeesController_1.getAllEmployees);
router.get("/getByAgencyId/:id", EmployeesController_1.getEmployeesByAgencyId);
router.get("/:id", EmployeesController_1.getEmployeeById);
router.get("/getEmployeeByEmail/:email", EmployeesController_1.getEmployeeByEmail);
router.get("/search/:search", EmployeesController_1.searchEmployees);
router.post("/", EmployeesController_1.createEmployee);
router.put("/:id", EmployeesController_1.updateEmployee);
router.delete("/:id", EmployeesController_1.deleteEmployee);
exports.default = router;
