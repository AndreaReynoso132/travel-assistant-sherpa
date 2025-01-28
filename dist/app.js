"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // Carga las variables de entorno desde el archivo .env
const app = (0, express_1.default)();
// Middleware
app.use(body_parser_1.default.json());
// Ruta base de prueba
app.get('/', (req, res) => {
    res.send('Travel Assistant API is running!');
});
exports.default = app;
