"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const destinationRoutes_1 = __importDefault(require("./routes/destinationRoutes"));
const luggageWeatherRoutes_1 = __importDefault(require("./routes/luggageWeatherRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
// Rutas de la API
app.use("/api", destinationRoutes_1.default);
app.use("/api", luggageWeatherRoutes_1.default);
// Ruta de prueba
app.get("/", (_req, res) => {
    res.send("Travel Assistant API is running!");
});
exports.default = app;
