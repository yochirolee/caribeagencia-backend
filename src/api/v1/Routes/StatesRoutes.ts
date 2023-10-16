import express from "express";
const statesController = require("../Controllers/StatesController");

const router = express.Router();
router.get("/", statesController.getAllStates);

export default router;
