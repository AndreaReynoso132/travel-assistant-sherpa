// src/app.ts
import express, { Application } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import destinationRoutes from "./routes/destinationRoutes";
import luggageWeatherRoutes from "./routes/luggageWeatherRoutes";

dotenv.config();

const app: Application = express();

app.use(bodyParser.json());

// Rutas de la API
app.use("/api", destinationRoutes);
app.use("/api", luggageWeatherRoutes);

// Ruta de prueba
app.get("/", (_req, res) => {
  res.send("Travel Assistant API is running!");
});

export default app;
