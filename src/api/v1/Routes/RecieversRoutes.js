"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const RecieversController_1 = require("../Controllers/RecieversController");
const router = express_1.default.Router();
router.get("/", RecieversController_1.getAllRecievers);
router.get("/:id", RecieversController_1.getRecieverById);
router.get("/search/:search", RecieversController_1.searchRecievers);
router.post("/", RecieversController_1.createReciever);
router.post("/createMany", RecieversController_1.createManyRecievers);
router.delete("/:id", RecieversController_1.deleteReciever);
//router.get("/:id", deleteProduct);
exports.default = router;
