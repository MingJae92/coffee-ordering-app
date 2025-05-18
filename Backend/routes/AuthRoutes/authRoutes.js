import express from "express"
import authController from "../../controllers/AuthControllers/authControllers.js"

const router = express.Router()

router.post("/api/auth/google", authController)

export default router