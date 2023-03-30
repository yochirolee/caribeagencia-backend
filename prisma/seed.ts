import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function main() {
	const alice = await prisma.countries.upsert({
		where: { id: 1 },
		update: {},
		create: {
			name: "Cuba",
			states: {
				create: [
					{
						name: "Pinar del Rio",
						cities: {
							create: [
								{
									name: "Pinar Del Rio",
									postalCode: 20100,
								},
								{
									name: "Mantua",
									postalCode: 22200,
								},
								{
									name: "Minas de Matahambre",
									postalCode: 22300,
								},
								{
									name: "Viñales",
									postalCode: 22400,
								},
								{
									name: "Bahia Honda",
									postalCode: 22600,
								},
								{
									name: "La Palma",
									postalCode: 22600,
								},
								{
									name: "Candelaria",
									postalCode: 22700,
								},
								{
									name: "San Cristobal",
									postalCode: 22800,
								},
								{
									name: "Los Palacios",
									postalCode: 22900,
								},
								{
									name: "Consolacion del Sur",
									postalCode: 23000,
								},
								{
									name: "San Luis",
									postalCode: 23100,
								},
								{
									name: "San Juan y Martinez",
									postalCode: 23200,
								},
								{
									name: "Guane",
									postalCode: 23300,
								},
								{
									name: "Sandino",
									postalCode: 24150,
								},
							],
						},
					},
					{
						name: "Artemisa",
						cities: {
							create: [
								{
									name: "Bahia Honda",
									postalCode: 22600,
								},
							],
						},
					},
				],
			},
		},
	});

	console.log({ alice });
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
