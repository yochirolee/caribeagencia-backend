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
exports.deleteEmployee = exports.updateEmployee = exports.createManyEmployees = exports.createEmployee = exports.searchEmployees = exports.getEmployeeByEmail = exports.getEmployeeById = exports.getEmployeesByAgencyId = exports.getAllEmployees = void 0;
const db_employees = require("../Database/db_employees");
const clerk_sdk_node_1 = __importDefault(require("@clerk/clerk-sdk-node"));
const getAllEmployees = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield db_employees.getAllEmployees();
        res.status(200).json(result);
    }
    catch (e) {
        res.status(400).json(e);
    }
});
exports.getAllEmployees = getAllEmployees;
const getEmployeesByAgencyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id)
        res.status(400).json({ message: "Agency id is required" });
    try {
        const result = yield db_employees.getEmployeesByAgencyId(Number(id));
        const users = yield clerk_sdk_node_1.default.users.getUserList();
        const sessionList = yield clerk_sdk_node_1.default.sessions.getSessionList();
        const employees = result.map((employee) => {
            const user = users.find((user) => user.id === employee.id);
            const session = sessionList.find((session) => session.userId === employee.id);
            return Object.assign(Object.assign({}, employee), { imageUrl: user === null || user === void 0 ? void 0 : user.imageUrl, session: { status: session === null || session === void 0 ? void 0 : session.status, lastActiveAt: session === null || session === void 0 ? void 0 : session.lastActiveAt } });
        });
        res.status(200).json(employees);
    }
    catch (e) {
        res.status(400).json(e);
    }
});
exports.getEmployeesByAgencyId = getEmployeesByAgencyId;
const getEmployeeById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id)
        res.status(400).json({ message: "Employee id is required" });
    try {
        const result = yield db_employees.getEmployeeById(String(id));
        if (!result)
            res.status(404).json({ message: `Employee with id ${id} not found ` });
        else
            res.status(200).json(result);
    }
    catch (e) {
        res.status(400).json(e);
    }
});
exports.getEmployeeById = getEmployeeById;
const getEmployeeByEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.params;
    console.log(email);
    if (!email)
        res.status(400).json({ message: "Employee email is required" });
    try {
        const result = yield db_employees.getEmployeeByEmail(email);
        if (!result)
            res.status(404).json({ message: `Employee with email ${email} not found ` });
        else
            res.status(200).json(result);
    }
    catch (e) {
        res.status(400).json(e);
    }
});
exports.getEmployeeByEmail = getEmployeeByEmail;
const searchEmployees = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { search } = req.params;
    if (!search)
        res.status(400).json({ message: "Search Criteria is required" });
    try {
        const result = yield db_employees.searchEmployees(search);
        if (!result)
            res.status(404).json({ message: `Employees  ${search} not found ` });
        else
            res.status(200).json(result);
    }
    catch (e) {
        res.status(400).json(e);
    }
});
exports.searchEmployees = searchEmployees;
const createEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, password, email, address, mobile, agencyId, roleId } = req.body;
    if (!firstName || !lastName || !email || !address || !mobile || !agencyId || !roleId)
        res.status(400).json({ message: "All fields are required" });
    else
        try {
            const clerkUser = yield clerk_sdk_node_1.default.users.createUser({
                emailAddress: [email],
                password,
                firstName,
                lastName,
            });
            const result = yield db_employees.createEmployee({
                id: clerkUser.id,
                firstName,
                lastName,
                email,
                address,
                mobile,
                agencyId,
                roleId,
            });
            res.status(200).json(result);
        }
        catch (e) {
            res.status(400).json(e);
        }
});
exports.createEmployee = createEmployee;
const createManyEmployees = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Employees } = req.body;
    if (!Employees)
        res.status(400).json({ message: "Employees are required" });
    else
        try {
            const result = yield db_employees.createManyEmployees(Employees);
            res.status(200).json(result);
        }
        catch (e) {
            res.status(400).json(e);
        }
});
exports.createManyEmployees = createManyEmployees;
const updateEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { firstName, lastName, address, mobile, agencyId, roleId } = req.body;
    if (!firstName || !lastName || !address || !mobile || !agencyId)
        res.status(400).json({ message: "All fields are required" });
    else
        try {
            clerk_sdk_node_1.default.users.updateUser(String(id), {
                firstName,
                lastName,
            });
            const result = yield db_employees.updateEmployee(String(id), {
                firstName,
                lastName,
                address,
                mobile,
                agencyId,
                roleId,
            });
            if (!result)
                res.status(404).json({ message: `Employee with id ${id} not found ` });
            else
                res.status(200).json(result);
        }
        catch (e) {
            res.status(400).json(e);
        }
});
exports.updateEmployee = updateEmployee;
const deleteEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id)
        res.status(400).json({ message: "Employee id is required" });
    try {
        yield clerk_sdk_node_1.default.users.deleteUser(String(id));
        const result = yield db_employees.deleteEmployee(String(id));
        if (!result)
            res.status(404).json({ message: `Employee with id ${id} not found ` });
        else
            res.status(200).json(result);
    }
    catch (e) {
        res.status(400).json(e);
    }
});
exports.deleteEmployee = deleteEmployee;
