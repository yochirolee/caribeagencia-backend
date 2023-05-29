import express from "express";
import cors from "cors";
import routerV1 from "./api/v1/index";


const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001;

app.use("/api/v1", routerV1);

app.listen(port, () => console.log(`🚀 Server ready at:${port}`));
