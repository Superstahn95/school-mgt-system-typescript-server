import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import { config } from "dotenv";
import connectDb from "./config/connectDb";
import api from "./api";

config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(cors());

// routes
app.use("/api/v1/", api);

app.listen(PORT, () => {
  console.log(`listening for port ${PORT}`);
  connectDb();
});
