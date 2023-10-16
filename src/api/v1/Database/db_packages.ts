import prisma from "../../../lib/prisma";

const getAllPackages = async () => {
	try {
		console.log("getting packages on DB");
		const result = await prisma.packages.findMany({
			include: {
				invoice: true,
			},
		});
		return result;
	} catch (e) {
		console.log(e);
		throw e;
	}
};

const getPackageById = async (id: number) => {
	try {
		const result = await prisma.packages.findUnique({
			where: {
				id: id,
			},
			include: {
				invoice: true,
			},
		});
		return result;
	} catch (e) {
		throw e;
	}
};


/* const getRecieverById = async (id: number) => {
	try {
		const result = await prisma.recievers.findUnique({
			where: {
				id: id,
			},
			include: {
				customers: true,
				invoices: true,
				agency: true,
				state: true,
				city: true,
			},
		});
		return result;
	} catch (e) {
		throw e;
	}
};

const searchRecievers = async (search: string) => {
	try {
		const result = await prisma.recievers.findMany({
			where: {
				OR: [
					{
						firstName: {
							contains: search,
							mode: "insensitive",
						},
					},
					{
						ci: {
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
				state: true,
				city: true,
			},
		});
		return result;
	} catch (e) {
		throw e;
	}
};



const upsertReciever = async (data: IReciever) => {
	try {
		const result = await prisma.recievers.upsert({
			where: {
				ci: data.ci,
			},
			update: data,
			create: data,
			include: {
				state: true,
				city: true,
			},
		});
		return result;
	} catch (e) {
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
		}
		throw e;
	}
};




 */
module.exports = {
	getAllPackages,
	getPackageById
};

// Compare this snippet from src\api\v1\Services\RecieverssServices.ts:
