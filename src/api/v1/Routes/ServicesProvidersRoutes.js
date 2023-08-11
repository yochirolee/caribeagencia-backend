"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ServicesProvidersController_1 = require("../Controllers/ServicesProvidersController");
const router = express_1.default.Router();
router.get("/", ServicesProvidersController_1.getAllServicesProviders);
router.get("/getByAgencyId/:id", ServicesProvidersController_1.getServicesProvidersByAgencyId);
router.post("/", ServicesProvidersController_1.createServiceProvider);
router.put("/:id", ServicesProvidersController_1.updateServiceProvider);
exports.default = router;
