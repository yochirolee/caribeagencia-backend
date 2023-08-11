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
const prisma_1 = __importDefault(require("../../../lib/prisma"));
const client_1 = require("@prisma/client");
const getAllEmployees = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.employees.findMany({});
        return result;
    }
    catch (e) {
        if (e instanceof client_1.Prisma.PrismaClientKnownRequestError) {
        }
        throw e;
    }
});
const getEmployeesByAgencyId = (agencyId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.employees.findMany({
            where: {
                agencyId: agencyId,
            },
            include: {
                role: true,
                agency: true,
            },
        });
        return result;
    }
    catch (e) {
        if (e instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            throw e;
        }
        throw e;
    }
});
const getEmployeeById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.employees.findUnique({
            where: {
                id: id,
            },
            include: {
                agency: true,
                role: true,
            },
        });
        return result;
    }
    catch (e) {
        if (e instanceof client_1.Prisma.PrismaClientKnownRequestError) {
        }
        throw e;
    }
});
const searchEmployees = (search) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.employees.findMany({
            where: {
                OR: [
                    {
                        firstName: {
                            contains: search,
                            mode: "insensitive",
                        },
                    },
                    {
                        email: {
                            contains: search,
                            mode: "insensitive",
                        },
                    },
                    {
                        mobile: {
                            contains: search,
                            mode: "insensitive",
                        },
                    },
                ],
            },
        });
        return result;
    }
    catch (e) {
        if (e instanceof client_1.Prisma.PrismaClientKnownRequestError) {
        }
        throw e;
    }
});
const getEmployeeByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.employees.findUnique({
            where: {
                email: email,
            },
            include: {
                role: true,
            },
        });
        return result;
    }
    catch (e) {
        if (e instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            throw e;
        }
        throw e;
    }
});
const createEmployee = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.employees.create({ data });
        return result;
    }
    catch (e) {
        if (e instanceof client_1.Prisma.PrismaClientKnownRequestError) {
        }
        throw e;
    }
});
const updateEmployee = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.employees.update({
            where: {
                id: id,
            },
            data: data,
        });
        return result;
    }
    catch (e) {
        if (e instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            throw e;
        }
        throw e;
    }
});
const deleteEmployee = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.employees.delete({
            where: {
                id: id,
            },
        });
        return result;
    }
    catch (e) {
        if (e instanceof client_1.Prisma.PrismaClientKnownRequestError) {
        }
        throw e;
    }
});
module.exports = {
    getAllEmployees,
    getEmployeeById,
    searchEmployees,
    createEmployee,
    deleteEmployee,
    getEmployeesByAgencyId,
    updateEmployee,
    getEmployeeByEmail,
};
// Compare this snippet from src\api\v1\Services\EmployeessServices.ts:
