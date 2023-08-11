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
exports.deleteReciever = exports.createManyRecievers = exports.createReciever = exports.searchRecievers = exports.getRecieverById = exports.getAllRecievers = void 0;
const db_recievers = require("../Database/db_recievers");
const getAllRecievers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield db_recievers.getAllRecievers();
        res.status(200).json(result);
    }
    catch (e) {
        res.status(400).json(e);
    }
});
exports.getAllRecievers = getAllRecievers;
const getRecieverById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id)
        res.status(400).json({ message: "Reciever id is required" });
    try {
        const result = yield db_recievers.getRecieverById(Number(id));
        if (!result)
            res.status(404).json({ message: `Reciever with id ${id} not found ` });
        else
            res.status(200).json(result);
    }
    catch (e) {
        res.status(400).json(e);
    }
});
exports.getRecieverById = getRecieverById;
const searchRecievers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { search } = req.params;
    if (!search)
        res.status(400).json({ message: "Search Criteria is required" });
    try {
        const result = yield db_recievers.searchRecievers(search);
        if (!result)
            res.status(404).json({ message: `Recievers  ${search} not found ` });
        else
            res.status(200).json(result);
    }
    catch (e) {
        res.status(400).json(e);
    }
});
exports.searchRecievers = searchRecievers;
const createReciever = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const { firstName, lastName, ci, passport, email, address, countryId, stateId, cityId, phone, mobile, agencyId, } = req.body;
    if (!firstName ||
        !lastName ||
        !email ||
        !ci ||
        !address ||
        !countryId ||
        !stateId ||
        !cityId ||
        !mobile ||
        !agencyId)
        res.status(400).json({ message: "All fields are required" });
    else
        try {
            const result = yield db_recievers.createReciever({
                firstName,
                lastName,
                ci,
                passport,
                email,
                address,
                countryId,
                stateId,
                cityId,
                phone,
                mobile,
                agencyId,
            });
            res.status(200).json(result);
        }
        catch (e) {
            res.status(400).json(e);
        }
});
exports.createReciever = createReciever;
const createManyRecievers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { recievers } = req.body;
    if (!recievers)
        res.status(400).json({ message: "Recievers are required" });
    else
        try {
            const result = yield db_recievers.createManyRecievers(recievers);
            res.status(200).json(result);
        }
        catch (e) {
            res.status(400).json(e);
        }
});
exports.createManyRecievers = createManyRecievers;
const deleteReciever = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id)
        res.status(400).json({ message: "Reciever id is required" });
    try {
        const result = yield db_recievers.deleteReciever(Number(id));
        if (!result)
            res.status(404).json({ message: `Reciever with id ${id} not found ` });
        else
            res.status(200).json(result);
    }
    catch (e) {
        res.status(400).json(e);
    }
});
exports.deleteReciever = deleteReciever;
