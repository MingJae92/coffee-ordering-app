import express from "express"
import authController from "../../controllers/AuthControllers/authControllers.js"

const router = express.Router()

router.post("/", authController)

export default router