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
const getAllRecievers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.recievers.findMany({});
        return result;
    }
    catch (e) {
        if (e instanceof client_1.Prisma.PrismaClientKnownRequestError) {
        }
        throw e;
    }
});
const getRecieverById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.recievers.findUnique({
            where: {
                id: id,
            },
            include: {
                customers: true,
                invoices: true,
                agency: true,
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
const searchRecievers = (search) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.recievers.findMany({
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
            include: {
                customers: true,
                invoices: true,
                agency: true,
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
const createReciever = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.recievers.create({ data });
        return result;
    }
    catch (e) {
        if (e instanceof client_1.Prisma.PrismaClientKnownRequestError) {
        }
        throw e;
    }
});
const createManyRecievers = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.recievers.createMany({ data });
        return result;
    }
    catch (e) {
        if (e instanceof client_1.Prisma.PrismaClientKnownRequestError) {
        }
        throw e;
    }
});
const deleteReciever = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.recievers.delete({
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
    getAllRecievers,
    getRecieverById,
    searchRecievers,
    createReciever,
    deleteReciever,
    createManyRecievers,
};
// Compare this snippet from src\api\v1\Services\RecieverssServices.ts:
