import express from "express";
import {
	getAllRecievers,
	getRecieverById,
	searchRecievers,
	createReciever,
	deleteReciever,
	createManyRecievers,
} from "../Controllers/RecieversController";

const router = express.Router();
router.get("/", getAllRecievers);
router.get("/:id", getRecieverById);
router.get("/search/:search", searchRecievers);
router.get("/search/:search", searchRecievers)
router.post("/create", createReciever);
router.post("/createMany", createManyRecievers);
router.delete("/delete/:id", deleteReciever);
//router.get("/:id", deleteProduct);
export default router;
