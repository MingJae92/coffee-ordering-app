import express from "express";
import dotenv from "dotenv";
import authRoutes from "../routes/AuthRoutes/authRoutes.js"
import cors from 'cors';
// Load env variables first
dotenv.config({ path: "../config/.env" });

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.SERVER_PORT | 5000 ; // fallback if env var missing

app.use("/api/auth", authRoutes)
app.listen(PORT, () => {
  console.log(`Listen on port: ${PORT}`);
});
