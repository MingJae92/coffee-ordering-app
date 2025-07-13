import express from "express"
import coffeeMenuControllers from "../../controllers/CoffeeMenuControllers/coffeeMenuControllers.js"

const router = express.Router()

router.get("/coffeemenu", coffeeMenuControllers)

export default router

