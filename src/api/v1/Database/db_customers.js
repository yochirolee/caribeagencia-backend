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
const getAllCustomers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.customers.findMany({
            include: {
                recievers: true,
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
const getCustomerById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.customers.findUnique({
            where: {
                id: id,
            },
            include: {
                recievers: true,
                invoices: true,
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
const searchCustomers = (search) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.customers.findMany({
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
                recievers: true,
                invoices: true,
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
const createCustomer = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.customers.create({ data });
        return result;
    }
    catch (e) {
        if (e instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            throw e;
        }
        throw e;
    }
});
//create customer with reciever
const createCustomerAndReciever = (customer, reciever) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!customer || !reciever)
            throw new Error("Customer or Reciever is not defined");
        const customerResult = yield prisma_1.default.customers.findUnique({
            where: { mobile: customer.mobile },
        });
        const recieverResult = yield prisma_1.default.recievers.findUnique({
            where: { mobile: reciever.mobile },
        });
        //create a method using prisma to connect or create reciever
        if (recieverResult && customerResult) {
            console.log("Customers And Recievers already exist");
            const result = yield prisma_1.default.recievers.update({
                where: {
                    id: recieverResult.id,
                },
                data: Object.assign(Object.assign({}, reciever), { customers: {
                        connect: {
                            id: customerResult.id,
                        },
                    } }),
            });
            return result;
        }
        if (customerResult && !recieverResult) {
            console.log("Customer already exist and not a reciever");
            const result = yield prisma_1.default.recievers.create({
                data: Object.assign(Object.assign({}, reciever), { customers: {
                        connect: {
                            id: customerResult.id,
                        },
                    } }),
            });
            return result;
        }
        if (recieverResult && !customerResult) {
            console.log("Reciever already exist and not a customer");
            const result = yield prisma_1.default.customers.create({
                data: Object.assign(Object.assign({}, customer), { recievers: {
                        connect: {
                            id: recieverResult.id,
                        },
                    } }),
            });
            return result;
        }
        else {
            console.log("Customer and Reciever does not exist");
            const result = yield prisma_1.default.customers.create({
                data: Object.assign(Object.assign({}, customer), { recievers: {
                        create: reciever,
                    } }),
            });
            return result;
        }
    }
    catch (e) {
        if (e instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            throw e;
        }
        throw e;
    }
});
const createManyCustomers = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.customers.createMany({ data });
        return result;
    }
    catch (e) {
        if (e instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            throw e;
        }
    }
});
const deleteCustomer = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.customers.delete({
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
    }
});
module.exports = {
    getAllCustomers,
    getCustomerById,
    searchCustomers,
    createCustomer,
    deleteCustomer,
    createManyCustomers,
    createCustomerAndReciever,
};
// Compare this snippet from src\api\v1\Services\CustomersServices.ts:
