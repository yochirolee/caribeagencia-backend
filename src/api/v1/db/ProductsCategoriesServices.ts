import { Prisma } from "@prisma/client";
import prisma from "../../../lib/prisma";

const getAllProductsCategories = async () => {
	try {
		const result = await prisma.productsCategories.findMany();
		return result;
	} catch (e) {
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
			throw e;
		}
		throw e;
	}
};

const getByProductCategoryId = async (id: number) => {
	try {
		const result = await prisma.productsCategories.findUnique({
			where: {
				id: id,
			},
		});
		return result;
	} catch (e) {
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
			throw e;
		}
		throw e;
	}
};

/* const getProductsCategoriesByAgencyId = async (agencyId: number) => {
	try {
		const result = await prisma.productsCategories.findMany({
			where: {
				agencyId: agencyId,
			},
		});
		return result;
	} catch (e) {
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
			throw e;
		}
		throw e;
	}
}; */

const createProductCategory = async (data: any) => {
	try {
		const result = await prisma.productsCategories.create({ data });
		return result;
	} catch (e) {
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
			throw e;
		}
		throw e;
	}
};

const updateProductCategory = async (id: number, data: any) => {
	try {
		const result = await prisma.productsCategories.update({
			where: {
				id: id,
			},
			data: data,
		});
		return result;
	} catch (e) {
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
			throw e;
		}
		throw e;
	}
};

const deleteProductCategory = async (id: number) => {
	try {
		const result = await prisma.productsCategories.delete({
			where: {
				id: id,
			},
		});
		return result;
	} catch (e) {
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
			throw e;
		}
		throw e;
	}
};

module.exports = {
	getAllProductsCategories,
	getByProductCategoryId,
  //  getProductsCategoriesByAgencyId,
	createProductCategory,
	updateProductCategory,
	deleteProductCategory,
};
