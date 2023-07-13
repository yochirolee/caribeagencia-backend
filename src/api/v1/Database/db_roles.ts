import { Prisma } from "@prisma/client";
import prisma from "../../../lib/prisma";

const rolesDB = {
	getAllRoles: async () => {
		try {
			const result = await prisma.roles.findMany();
			return result;
		} catch (e) {
			if (e instanceof Prisma.PrismaClientKnownRequestError) {
			}
			throw e;
		}
	},
};

module.exports=rolesDB;
