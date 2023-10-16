import { Prisma } from "@prisma/client";
import prisma from "../../../lib/prisma";

const getAllStates = async () => {
	try {
		const result = await prisma.states.findMany({
			include: {
				cities: true,
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
	getAllStates,
};
