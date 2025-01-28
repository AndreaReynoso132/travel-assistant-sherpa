"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeatherAndPackingSuggestions = void 0;
const luggageWeatherAgent_1 = require("../agents/luggageWeatherAgent");
const dotenv_1 = __importDefault(require("dotenv"));
// Cargar las variables de entorno
dotenv_1.default.config();
// Instanciar el agente
const agent = new luggageWeatherAgent_1.LuggageWeatherAgent();
const getWeatherAndPackingSuggestions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { destination, duration } = req.query;
        // Validar los parámetros
        if (!destination || !duration) {
            res.status(400).json({ error: "Por favor, proporciona un destino y la duración del viaje." });
            return;
        }
        // Validar la API Key
        const apiKey = process.env.OPENWEATHER_API_KEY;
        if (!apiKey) {
            res.status(500).json({ error: "No se encontró la API Key en las variables de entorno." });
            return;
        }
        // Obtener datos del clima a través del agente
        const weatherData = yield agent.getWeatherByDestination(destination, apiKey);
        if (!weatherData) {
            res.status(404).json({ error: "No se pudo obtener el clima para el destino proporcionado." });
            return;
        }
        // Determinar clima (frío o calor) y sugerencias de equipaje
        const weather = weatherData.main.temp < 15 ? "cold" : "hot"; // Frío si la temperatura es menor a 15°C
        const suggestions = agent.getPackingSuggestions(parseInt(duration), weather);
        // Responder con los datos
        res.json({
            destination,
            weather: {
                temperature: weatherData.main.temp,
                description: weatherData.weather[0].description,
            },
            packingSuggestions: suggestions,
        });
    }
    catch (error) {
        // Manejar errores de forma segura
        if (error instanceof Error) {
            console.error("Error en el controlador:", error.message);
            res.status(500).json({ error: error.message });
        }
        else {
            console.error("Error desconocido:", error);
            res.status(500).json({ error: "Ocurrió un error desconocido." });
        }
    }
});
exports.getWeatherAndPackingSuggestions = getWeatherAndPackingSuggestions;
