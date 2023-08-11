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
const getAllServices = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.services.findMany({
            include: {
                servicesPrices: true,
                servicesCategories: true,
            },
        });
        return result;
    }
    catch (e) {
        console.log(e, "error");
        if (e instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            throw e;
        }
        throw e;
    }
});
const getServicesByAgencyId = (agencyId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.services.findMany({
            include: {
                servicesPrices: {
                    where: {
                        agencyId: agencyId,
                    },
                },
                servicesCategories: true,
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
const createService = (data, categoriesIds) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(data, categoriesIds);
    console.log(categoriesIds, "categoriesIds");
    try {
        const result = yield prisma_1.default.services.create({
            data: Object.assign(Object.assign({}, data), { servicesCategories: {
                    connect: categoriesIds.map((id) => ({ id: id })),
                } }),
        });
        return result;
    }
    catch (e) {
        if (e instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            console.log(e, "error");
            throw e;
        }
        throw e;
    }
});
const updateService = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id, data, "updating");
    try {
        const result = yield prisma_1.default.services.update({
            where: {
                id: id,
            },
            data,
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
const deleteService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.services.delete({
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
});
module.exports = {
    getAllServices,
    getServicesByAgencyId,
    createService,
    updateService,
    deleteService,
};
