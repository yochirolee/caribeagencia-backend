import prisma from "../../../lib/prisma";

const getAllPackagesCategories = async () => {
	try {
		console.log("getting packages on DB");
		const result = await prisma.packagesCategories.findMany({});
		return result;
	} catch (e) {
		console.log(e);
		throw e;
	}
};

export { getAllPackagesCategories };
