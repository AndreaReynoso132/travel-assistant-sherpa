import express from "express";
import { getWeatherAndPackingSuggestions } from "../controllers/luggageWeatherController";

const router = express.Router();

// Definir la ruta para obtener clima y sugerencias de equipaje
router.get("/luggage-weather", getWeatherAndPackingSuggestions);

export default router;
