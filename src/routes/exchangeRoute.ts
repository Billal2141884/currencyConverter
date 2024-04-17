import express from "express";
import { getExchangeRate} from "../controllers/currencyController.ts";
import { validateCurrencyName } from "../middleware/validators.ts";

// We will create a router object
const router = express.Router();

// We will create a route for the weather data based on the city name
router.get("/:currencyname", validateCurrencyName, getExchangeRate);

// We will export the router
export default router;
