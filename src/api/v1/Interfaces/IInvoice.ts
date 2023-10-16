import { IPackage } from "./IPackage";

export interface IInvoice {
	invoiceNumber: string;
	createdAt: Date;
	updatedAt: Date;
	customerId: number;
	recieverId: number;
	employeeId: string;
	weight: number;
	status: string;
	amountToPay: number;
	discount: number;
	deliveryAmount: number;
	agencyId: number;
	serviceId: number;
}
