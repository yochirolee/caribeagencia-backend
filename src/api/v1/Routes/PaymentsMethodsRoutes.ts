import express from "express";
import { getPaymentsMethods, createPaymentsMethods } from "../Controllers/PaymentsMethodsController";

const router = express.Router();
router.get("/", getPaymentsMethods);
router.post("/", createPaymentsMethods);

export default router;
