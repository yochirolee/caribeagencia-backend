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

	const pinar = await prisma.states.upsert({
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
	const artemisa = await prisma.states.upsert({
		where: { id: 2 },
		update: {},
		create: {
			id: 2,
			name: "Artemisa",
			countryId: 1,
			cities: {
				create: [
					{ name: "Alquizar", postalCode: 33700 },
					{ name: "Artemisa", postalCode: 33800 },
					{ name: "Bahia Honda", postalCode: 22600 },
					{ name: "Bauta", postalCode: 32400 },
					{ name: "Caimito", postalCode: 32300 },
					{ name: "Candelaria", postalCode: 22700 },
					{ name: "Guanajay", postalCode: 32200 },
					{ name: "Guira de Melena", postalCode: 33600 },
					{ name: "Mariel", postalCode: 32100 },
					{ name: "San Antonio de los Banos", postalCode: 32500 },
					{ name: "San Cristobal", postalCode: 22800 },
				],
			},
		},
	});

	const lahabana = await prisma.states.upsert({
		where: { id: 3 },
		update: {},
		create: {
			id: 3,
			name: "La Habana",
			countryId: 1,
			cities: {
				create: [
					{ name: "Playa", postalCode: 11300 },
					{ name: "Plaza de La Revolucion", postalCode: 10400 },
					{ name: "Centro Habana", postalCode: 10200 },
					{ name: "Habana Vieja", postalCode: 10100 },
					{ name: "Regla", postalCode: 11200 },
					{ name: "Habana del Este", postalCode: 10900 },
					{ name: "Guanabacoa", postalCode: 11100 },
					{ name: "San Miguel del Padron", postalCode: 11000 },
					{ name: "10 de Octubre", postalCode: 10700 },
					{ name: "Cerro", postalCode: 10600 },
					{ name: "Marianao", postalCode: 11500 },
					{ name: "La Lisa", postalCode: 17100 },
					{ name: "Boyeros", postalCode: 10800 },
					{ name: "Arroyo Naranjo", postalCode: 10900 },
					{ name: "Cotorro", postalCode: 14000 },
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
