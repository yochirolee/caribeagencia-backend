export interface IPackage {
	hbl: string;
	description: string;
	weight: number;
	price: number;
	location: number;
	updatedAt: Date;
	createdAt: Date;
	invoicesId: number;
	agencyId: number;
	customerId: number;
	recieverId: number;
	employeeId: string;
}
