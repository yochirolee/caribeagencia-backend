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
Object.defineProperty(exports, "__esModule", { value: true });
const db_services_prices = require("../Database/db_services_prices");
const getAllServicesPrices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield db_services_prices.getAllServicesPrices();
        res.status(200).json(result);
    }
    catch (e) {
        res.status(400).json(e);
    }
});
const getServicesPricesByAgencyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id)
        res.status(400).json({ message: "Agency id is required" });
    try {
        const result = yield db_services_prices.getServicesPricesByAgencyId(Number(id));
        if (!result)
            res.status(404).json({ message: `Agency with id ${id} not found ` });
        else
            res.status(200).json(result);
    }
    catch (e) {
        res.status(400).json(e);
    }
});
const getServicePricesByParams = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.query, "params");
    const { agencyId, serviceId, productCategoryId } = req.query;
    const result = yield db_services_prices.getServicePricesByParams({
        agencyId: Number(agencyId),
        serviceId: Number(serviceId),
        productCategoryId: Number(productCategoryId),
    });
    if (!result)
        res.status(404).json({ message: `Service Price not found ` });
    else
        res.status(200).json(result);
});
const createServicePrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, costPrice, agencyPrice, publicPrice, isSellByPounds, serviceId, agencyId, productCategoryId, } = req.body;
    if (!name ||
        !description ||
        !costPrice ||
        !agencyPrice ||
        !serviceId ||
        !agencyId ||
        !productCategoryId)
        res.status(400).json({ message: "All fields are required" });
    else
        try {
            const servicePrice = {
                name,
                description,
                costPrice,
                agencyPrice,
                publicPrice,
                isSellByPounds,
                serviceId,
                agencyId,
                productCategoryId,
            };
            const result = yield db_services_prices.createServicePrices(servicePrice);
            res.status(200).json(result);
        }
        catch (e) {
            res.status(400).json(e);
        }
});
const updateServicePrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id)
        res.status(400).json({ message: "Agency id is required" });
    const { name, description, costPrice, agencyPrice, publicPrice, isSellByPounds, serviceId, agencyId, productCategoryId, } = req.body;
    if (!name ||
        !description ||
        !costPrice ||
        !agencyPrice ||
        !serviceId ||
        !agencyId ||
        !productCategoryId)
        res.status(400).json({ message: "All fields are required" });
    else
        try {
            const servicePrice = {
                name,
                description,
                costPrice,
                agencyPrice,
                publicPrice,
                isSellByPounds,
                serviceId,
                agencyId,
                productCategoryId,
            };
            const result = yield db_services_prices.updateServicePrice(Number(id), servicePrice);
            res.status(200).json(result);
        }
        catch (e) {
            res.status(400).json(e);
        }
});
const deleteServicePrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    console.log(id);
    if (!id)
        res.status(400).json({ message: " Id is required" });
    else
        try {
            const result = yield db_services_prices.deleteServicePrice(Number(id));
            res.status(200).json(result);
        }
        catch (e) {
            res.status(400).json(e);
        }
});
/* export const createServiceProvider = async (req: express.Request, res: express.Response) => {
    const { providerName, providerPhone, providerEmail, providerAddress } = req.body;
    if (!providerName || !providerPhone || !providerEmail || !providerAddress)
        res.status(400).json({ message: "All fields are required" });
    else
        try {
            const result = await db_services_providers.createServiceProvider({
                providerName,
                providerPhone,
                providerEmail,
                providerAddress,
            });
            res.status(200).json(result);
        } catch (e) {
            res.status(400).json(e);
        }
};

export const updateServiceProvider = async (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    const { providerName, providerPhone, providerEmail, providerAddress } = req.body;
    console.log(id, req.body);
    if (!id) res.status(400).json({ message: "Agency id is required" });
    if (!providerName || !providerPhone || !providerEmail || !providerAddress)
        res.status(400).json({ message: "All fields are required" });
    else
        try {
            const result = await db_services_providers.updateServiceProvider(Number(id), {
                providerName,
                providerPhone,
                providerEmail,
                providerAddress,
            });
            if (!result) res.status(404).json({ message: `Service Provider  with id ${id} not found ` });
            else res.status(200).json(result);
        } catch (e) {
            res.status(400).json(e);
        }
}; */
module.exports = {
    getAllServicesPrices,
    getServicesPricesByAgencyId,
    getServicePricesByParams,
    createServicePrice,
    updateServicePrice,
    deleteServicePrice,
};
