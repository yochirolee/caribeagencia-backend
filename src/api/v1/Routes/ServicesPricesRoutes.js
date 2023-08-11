"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const servicesPricesController = require("../Controllers/ServicesPricesController");
const router = express_1.default.Router();
router.get("/", servicesPricesController.getAllServicesPrices);
router.get("/getByAgencyId/:id", servicesPricesController.getServicesPricesByAgencyId);
router.get("/getByParams", servicesPricesController.getServicePricesByParams);
router.post("/", servicesPricesController.createServicePrice);
router.put("/:id", servicesPricesController.updateServicePrice);
router.delete("/:id", servicesPricesController.deleteServicePrice);
exports.default = router;
