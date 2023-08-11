"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const servicesController = require("../Controllers/ServicesController");
const router = express_1.default.Router();
router.get("/", servicesController.getAllServices);
router.get("/getByAgencyId/:id", servicesController.getServicesByAgencyId);
router.post("/", servicesController.createService);
router.put("/:id", servicesController.updateService);
router.delete("/:id", servicesController.deleteService);
exports.default = router;
