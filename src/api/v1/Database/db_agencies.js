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
const client_1 = require("@prisma/client");
const prisma_1 = __importDefault(require("../../../lib/prisma"));
const db_agencies = {
    getAllAgencies: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield prisma_1.default.agencies.findMany();
            return result;
        }
        catch (e) {
            if (e instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            }
            throw e;
        }
    }),
    getAgenciesEmployees: (id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield prisma_1.default.agencies.findUnique({
                where: {
                    id: id,
                },
                include: {
                    employees: true,
                },
            });
            return result;
        }
        catch (e) {
            if (e instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            }
            throw e;
        }
    }),
    getByAgencyId: (id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield prisma_1.default.agencies.findUnique({
                where: {
                    id: id,
                },
                include: {
                    customers: true,
                    employees: true,
                    invoices: true,
                    recievers: true,
                },
            });
            return result;
        }
        catch (e) {
            if (e instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            }
            throw e;
        }
    }),
    searchAgency: (search) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield prisma_1.default.agencies.findMany({
                where: {
                    OR: [
                        {
                            name: {
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
    }),
    createAgency: (data) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield prisma_1.default.agencies.create({ data });
            return result;
        }
        catch (e) {
            if (e instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            }
            throw e;
        }
    }),
    updateAgency: (id, data) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(data, id, "updateting agency");
        try {
            const result = yield prisma_1.default.agencies.update({
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
    }),
    deleteAgency: (id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield prisma_1.default.agencies.delete({
                where: {
                    id: id,
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
    }),
};
module.exports = db_agencies;
