import express from "express";
import {
	getAllRecievers,
	getRecieverById,
	searchRecievers,
	createReciever,
	deleteReciever,
	createManyRecievers,
	upsertReciever,
	connectRecieverToCustomer,
} from "../Controllers/RecieversController";

const router = express.Router();
router.get("/", getAllRecievers);
router.get("/:id", getRecieverById);
router.get("/search/:search", searchRecievers);
router.post("/", upsertReciever);
router.post("/connectRecieverToCustomer", connectRecieverToCustomer);
router.post("/createMany", createManyRecievers);
router.delete("/:id", deleteReciever);
//router.get("/:id", deleteProduct);
export default router;
