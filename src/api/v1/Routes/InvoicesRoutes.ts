import express from "express";
import {
	getAllInvoices,
	createInvoice,
	getInvoiceById,
	getInvoiceByAgencyId,
	payInvoice,
} from "../Controllers/InvoicesController";

const router = express.Router();
router.get("/", getAllInvoices);
router.get("/:id", getInvoiceById);
router.get("/getByAgencyId/:id", getInvoiceByAgencyId);
router.post("/pay", payInvoice);
router.post("/", createInvoice);

export default router;
