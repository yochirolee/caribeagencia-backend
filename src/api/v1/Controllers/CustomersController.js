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
exports.deleteCustomer = exports.createManyCustomers = exports.createCustomerAndReciever = exports.createCustomer = exports.searchCustomers = exports.getCustomerById = exports.getAllCustomers = void 0;
const db_customers = require("../Database/db_customers");
const getAllCustomers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield db_customers.getAllCustomers();
        res.status(200).json(result);
    }
    catch (e) {
        res.status(400).json(e);
    }
});
exports.getAllCustomers = getAllCustomers;
const getCustomerById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id)
        res.status(400).json({ message: "Customer id is required" });
    try {
        const result = yield db_customers.getCustomerById(Number(id));
        if (!result)
            res.status(404).json({ message: `Customer with id ${id} not found ` });
        else
            res.status(200).json(result);
    }
    catch (e) {
        res.status(400).json(e);
    }
});
exports.getCustomerById = getCustomerById;
const searchCustomers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { search } = req.params;
    if (!search)
        res.status(400).json({ message: "Search Criteria is required" });
    try {
        const result = yield db_customers.searchCustomers(search);
        if (!result)
            res.status(404).json({ message: `Customer  ${search} not found ` });
        else
            res.status(200).json(result);
    }
    catch (e) {
        res.status(400).json(e);
    }
});
exports.searchCustomers = searchCustomers;
const createCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const { firstName, lastName, license, passport, email, address, countryId, stateId, cityId, phone, mobile, agencyId, } = req.body;
    if (!firstName ||
        !lastName ||
        !email ||
        !address ||
        !countryId ||
        !stateId ||
        !cityId ||
        !mobile ||
        !agencyId)
        res.status(400).json({ message: "All fields are required" });
    else
        try {
            const result = yield db_customers.createCustomer({
                firstName,
                lastName,
                license,
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
exports.createCustomer = createCustomer;
const createCustomerAndReciever = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const { customer, reciever } = req.body;
    if (!customer || !reciever)
        res.status(400).json({ message: "Customer and Reciever are required" });
    else
        try {
            const result = yield db_customers.createCustomerAndReciever(customer, reciever);
            res.status(200).json(result);
        }
        catch (e) {
            res.status(400).json(e);
        }
});
exports.createCustomerAndReciever = createCustomerAndReciever;
const createManyCustomers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { customers } = req.body;
    if (!customers)
        res.status(400).json({ message: "Customers are required" });
    else
        try {
            const result = yield db_customers.createManyCustomers(customers);
            res.status(200).json(result);
        }
        catch (e) {
            res.status(400).json(e);
        }
});
exports.createManyCustomers = createManyCustomers;
const deleteCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id)
        res.status(400).json({ message: "Customer id is required" });
    try {
        const result = yield db_customers.deleteCustomer(Number(id));
        if (!result)
            res.status(404).json({ message: `Customer with id ${id} not found ` });
        else
            res.status(200).json(result);
    }
    catch (e) {
        res.status(400).json(e);
    }
});
exports.deleteCustomer = deleteCustomer;
