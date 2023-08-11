"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Routes_1 = require("./Routes");
const router = express_1.default.Router();
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ message: "CTEnvios API - V1, contact: yleecruz@gmail.com 👋🌎🌍🌏" });
}));
router.use("/customers", Routes_1.CustomersRoutes);
router.use("/agencies", Routes_1.AgenciesRoutes);
router.use("/recievers", Routes_1.RecieversRoutes);
router.use("/employees", Routes_1.EmployeesRoutes);
router.use("/services", Routes_1.ServicesRoutes);
router.use("/servicesProviders", Routes_1.ServicesProvidersRoutes);
router.use("/servicesPrices", Routes_1.ServicesPricesRoutes);
router.use("/roles", Routes_1.RolesRoutes);
router.use("/productsCategories", Routes_1.ProductsCategoriesRoutes);
exports.default = router;
