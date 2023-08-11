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
exports.updateServiceProvider = exports.createServiceProvider = exports.getServicesProvidersByAgencyId = exports.getAllServicesProviders = void 0;
const db_services_providers = require("../Database/db_services_providers");
const getAllServicesProviders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield db_services_providers.getAllServicesProviders();
        res.status(200).json(result);
    }
    catch (e) {
        res.status(400).json(e);
    }
});
exports.getAllServicesProviders = getAllServicesProviders;
const getServicesProvidersByAgencyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id)
        res.status(400).json({ message: "Agency id is required" });
    try {
        const result = yield db_services_providers.getServicesProvidersByAgencyId(Number(id));
        if (!result)
            res.status(404).json({ message: `Agency with id ${id} not found ` });
        else
            res.status(200).json(result);
    }
    catch (e) {
        res.status(400).json(e);
    }
});
exports.getServicesProvidersByAgencyId = getServicesProvidersByAgencyId;
const createServiceProvider = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { providerName, providerPhone, providerEmail, providerAddress } = req.body;
    if (!providerName || !providerPhone || !providerEmail || !providerAddress)
        res.status(400).json({ message: "All fields are required" });
    else
        try {
            const result = yield db_services_providers.createServiceProvider({
                providerName,
                providerPhone,
                providerEmail,
                providerAddress,
            });
            res.status(200).json(result);
        }
        catch (e) {
            res.status(400).json(e);
        }
});
exports.createServiceProvider = createServiceProvider;
const updateServiceProvider = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { providerName, providerPhone, providerEmail, providerAddress } = req.body;
    console.log(id, req.body);
    if (!id)
        res.status(400).json({ message: "Agency id is required" });
    if (!providerName || !providerPhone || !providerEmail || !providerAddress)
        res.status(400).json({ message: "All fields are required" });
    else
        try {
            const result = yield db_services_providers.updateServiceProvider(Number(id), {
                providerName,
                providerPhone,
                providerEmail,
                providerAddress,
            });
            if (!result)
                res.status(404).json({ message: `Service Provider  with id ${id} not found ` });
            else
                res.status(200).json(result);
        }
        catch (e) {
            res.status(400).json(e);
        }
});
exports.updateServiceProvider = updateServiceProvider;
