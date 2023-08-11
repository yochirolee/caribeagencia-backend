"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const agenciesController = require("../Controllers/AgenciesController");
const router = express_1.default.Router();
router.get("/", agenciesController.getAllAgencies);
router.get("/:id", agenciesController.getAgencyById);
router.post("/", agenciesController.createAgency);
router.put("/:id", agenciesController.updateAgency);
router.delete("/:id", agenciesController.deleteAgency);
exports.default = router;
