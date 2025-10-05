import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "../routes/AuthRoutes/authRoutes.js";
import fetchData from "../service/service.js";
import coffeeRoutes from "../routes/CoffeeMenuRoutes/coffeeMenuRoutes.js"
import coffeeCheckoutRoutes from "../routes/CoffeeCheckoutRoutes/coffeeCheckoutRoutes.js"


dotenv.config({ path: "../config/.env" });

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.SERVER_PORT || 5000;

app.use("/api/auth", authRoutes);
app.use("/api", coffeeRoutes)
app.use("/api", coffeeCheckoutRoutes)

app.listen(PORT, async () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);

  // ✅ Fetch and log all coffee data to the terminal
  // const coffeeData = await fetchData();
  // console.log("☕ All Coffee Data:");
  // console.log(coffeeData); // This will print the full array
});
