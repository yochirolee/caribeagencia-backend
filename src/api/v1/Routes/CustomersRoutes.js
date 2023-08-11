"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CustomersController_1 = require("../Controllers/CustomersController");
const router = express_1.default.Router();
router.get("/", CustomersController_1.getAllCustomers);
router.get("/:id", CustomersController_1.getCustomerById);
router.get("/search/:search", CustomersController_1.searchCustomers);
router.post("/", CustomersController_1.createCustomer);
router.post("/createMany", CustomersController_1.createManyCustomers);
router.post("/createCustomerReciever", CustomersController_1.createCustomerAndReciever);
router.delete("/:id", CustomersController_1.deleteCustomer);
exports.default = router;
