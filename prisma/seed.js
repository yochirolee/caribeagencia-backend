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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const country = yield prisma.countries.upsert({
            where: { id: 1 },
            update: {},
            create: {
                id: 1,
                name: "Cuba",
            },
        });
        const provincias = yield prisma.states.upsert({
            where: { id: 1 },
            update: {},
            create: {
                id: 1,
                name: "Pinar del Rio",
                countryId: 1,
                cities: {
                    create: [
                        { name: "Sandino", postalCode: 24150 },
                        { name: "Mantua", postalCode: 22200 },
                        { name: "Minas de Matahambre", postalCode: 22300 },
                        { name: "Viñales", postalCode: 22400 },
                        { name: "La Palma", postalCode: 22600 },
                        { name: "Bahia Honda", postalCode: 22600 },
                        { name: "Candelaria", postalCode: 22700 },
                        { name: "San Cristobal", postalCode: 22800 },
                        { name: "Los Palacios", postalCode: 22900 },
                        { name: "Consolacion del Sur", postalCode: 23000 },
                        { name: "Pinar del Rio", postalCode: 20100 },
                        { name: "San Luis", postalCode: 32100 },
                        { name: "San Juan y Martinez", postalCode: 23200 },
                        { name: "Guane", postalCode: 23300 },
                    ],
                },
            },
        });
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield prisma.$disconnect();
    process.exit(1);
}));
