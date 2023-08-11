import { Prisma } from "@prisma/client";
import prisma from "../../../lib/prisma";

const productsCategoriesDB = {
	getAllProductsCategories: async () => {
		try {
			const result = await prisma.productsCategories.findMany(
				
			);
			return result;
		} catch (e) {
			if (e instanceof Prisma.PrismaClientKnownRequestError) {
			}
			throw e;
		}
	},
};

module.exports = productsCategoriesDB;
