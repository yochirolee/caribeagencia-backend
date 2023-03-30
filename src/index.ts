import express from "express";
import cors from "cors";
import api from "./api";
import router from "./api/index";
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use("/api/v1", api);

app.listen(3001, () => console.log("🚀 Server ready at: http://localhost:3001"));
