import express from "express";
import dotenv from "dotenv";

// Load env variables first
dotenv.config({ path: "../config/.env" });

const app = express();
const PORT = process.env.SERVER_PORT ; // fallback if env var missing

app.listen(PORT, () => {
  console.log(`Listen on port: ${PORT}`);
});
