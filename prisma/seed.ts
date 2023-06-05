import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function main() {
	const country = await prisma.countries.upsert({
		where: { id: 1 },
		update: {},
		create: {
			id: 1,
			name: "Cuba",
		},
	});


	const provincias = await prisma.states.upsert({
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
}
main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
