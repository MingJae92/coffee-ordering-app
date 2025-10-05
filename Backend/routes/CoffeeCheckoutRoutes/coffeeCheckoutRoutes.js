import express from "express"
import checkoutControllers from "../../controllers/CoffeeCheckoutControllers/coffeeCheckoutControllers.js"

const router = express.Router()

router.post("/checkout", checkoutControllers)

export default router