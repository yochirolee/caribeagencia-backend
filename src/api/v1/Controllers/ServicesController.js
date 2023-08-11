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
const db_services = require("../Database/db_services");
const servicesController = {
    getAllServices: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield db_services.getAllServices();
            res.send(result);
        }
        catch (error) {
            res.status(400).send(error);
        }
    }),
    getServicesByAgencyId: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        if (!id)
            res.status(400).send({ status: "Failed", data: "Agency id is required" });
        try {
            const result = yield db_services.getServicesByAgencyId(Number(id));
            if (!result)
                res.status(404).json({ message: `Agency with id ${id} not found ` });
            else
                res.status(200).json(result);
        }
        catch (e) {
            res.status(400).json(e);
        }
    }),
    createService: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { name, description, serviceType, providerId, invoiceCode, categoriesIds } = req.body;
        if (!name || !description || !providerId || !invoiceCode || !serviceType)
            res.status(400).json({ message: "All fields are required" });
        else
            try {
                const result = yield db_services.createService({
                    name,
                    description,
                    serviceType,
                    providerId,
                    invoiceCode,
                }, categoriesIds);
                res.status(200).json(result);
            }
            catch (e) {
                console.log(e, "error");
                res.status(400).json(e);
            }
    }),
    updateService: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        const { name, description, serviceType, providerId, isActive, invoiceCode, categoriesIds } = req.body;
        if (!id)
            res.status(400).json({ message: "Service id is required" });
        if (!name || !description || !providerId || !invoiceCode || !serviceType)
            res.status(400).json({ message: "All fields are required" });
        else
            try {
                const result = yield db_services.updateService(Number(id), {
                    name,
                    description,
                    serviceType,
                    providerId,
                    isActive,
                    categoriesIds,
                    invoiceCode,
                });
                res.status(200).json(result);
            }
            catch (e) {
                res.status(400).json(e);
            }
    }),
    deleteService: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        console.log("delteting");
        if (!id)
            res.status(400).json({ message: "Service id is required" });
        else
            try {
                const result = yield db_services.deleteService(Number(id));
                res.status(200).json(result);
            }
            catch (e) {
                res.status(400).json(e);
            }
    }),
};
module.exports = servicesController;
