import { Request, Response } from "express";
import { LuggageWeatherAgent } from "../agents/luggageWeatherAgent";
import dotenv from "dotenv";

// Cargar las variables de entorno
dotenv.config();

// Instanciar el agente
const agent = new LuggageWeatherAgent();

export const getWeatherAndPackingSuggestions = async (req: Request, res: Response): Promise<void> => {
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
    const weatherData = await agent.getWeatherByDestination(destination as string, apiKey);

    if (!weatherData) {
      res.status(404).json({ error: "No se pudo obtener el clima para el destino proporcionado." });
      return;
    }

    // Determinar clima (frío o calor) y sugerencias de equipaje
    const weather = weatherData.main.temp < 15 ? "cold" : "hot"; // Frío si la temperatura es menor a 15°C
    const suggestions = agent.getPackingSuggestions(parseInt(duration as string), weather);

    // Responder con los datos
    res.json({
      destination,
      weather: {
        temperature: weatherData.main.temp,
        description: weatherData.weather[0].description,
      },
      packingSuggestions: suggestions,
    });
  } catch (error) {
    // Manejar errores de forma segura
    if (error instanceof Error) {
      console.error("Error en el controlador:", error.message);
      res.status(500).json({ error: error.message });
    } else {
      console.error("Error desconocido:", error);
      res.status(500).json({ error: "Ocurrió un error desconocido." });
    }
  }
};
