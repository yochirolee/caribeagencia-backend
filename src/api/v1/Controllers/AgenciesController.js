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
const db_agencies = require("../Database/db_agencies");
const AgenciesController = {
    getAllAgencies: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield db_agencies.getAllAgencies();
            res.status(200).send(result);
        }
        catch (e) {
            res.status(400).send(e);
        }
    }),
    getAgencyById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        if (!id)
            res.status(400).send({ message: "Agency id is required" });
        try {
            const result = yield db_agencies.getByAgencyId(Number(id));
            if (!result)
                res.status(404).send({ message: `Agency with id ${id} not found ` });
            else
                res.status(200).send(result);
        }
        catch (e) {
            res.status(400).send(e);
        }
    }),
    getAgencyEmployees: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        if (!id)
            res.status(400).send({ message: "Agency id is required" });
        try {
            const result = yield db_agencies.getAgenciesEmployees(Number(id));
            if (!result)
                res.status(404).send({ message: `Agency with id ${id} not found ` });
            else
                res.status(200).send(result);
        }
        catch (e) {
            res.status(400).send(e);
        }
    }),
    createAgency: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { name, address, email, owner, phone, description } = req.body;
        if (!name || !address || !owner)
            res.status(400).json({ message: "All fields are required" });
        else
            try {
                const result = yield db_agencies.createAgency({
                    name,
                    address,
                    owner,
                    email,
                    phone,
                    description,
                });
                res.status(201).send(result);
            }
            catch (e) {
                res.status(400).send(e);
            }
    }),
    updateAgency: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        const { name, address, email, owner, phone, description } = req.body;
        console.log(id, req.body);
        if (!id)
            res.status(400).json({ message: "Agency id is required" });
        if (!name || !address || !owner)
            res.status(400).json({ message: "All fields are required" });
        else
            try {
                const result = yield db_agencies.updateAgency(Number(id), {
                    name,
                    address,
                    owner,
                    phone,
                    email,
                    description,
                });
                if (!result)
                    res.status(404).send({ message: `Agency with id ${id} not found ` });
                else
                    res.status(201).send(result);
            }
            catch (e) {
                res.status(400).send(e);
            }
    }),
    deleteAgency: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        if (!id)
            res.status(400).send({ message: "Agency id is required" });
        try {
            const result = yield db_agencies.deleteAgency(Number(id));
            if (!result)
                res.status(404).send({ message: `Agency with id ${id} not found ` });
            else
                res.status(201).send(result);
        }
        catch (e) {
            res.status(400).send(e);
        }
    }),
};
module.exports = AgenciesController;
