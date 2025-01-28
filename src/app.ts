import express, { Application } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import destinationRoutes from "./routes/destinationRoutes";

dotenv.config();

const app: Application = express();

app.use(bodyParser.json());

// Rutas de la API
app.use("/api", destinationRoutes);

// Ruta de prueba
app.get("/", (_req, res) => {
  res.send("Travel Assistant API is running!");
});

export default app;
