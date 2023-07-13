import express from "express";
const RolesController = require("../Controllers/RolesController");

const router = express.Router();
router.get("/", RolesController.getAllRoles);


export default router;