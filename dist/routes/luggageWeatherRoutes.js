"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const luggageWeatherController_1 = require("../controllers/luggageWeatherController");
const router = express_1.default.Router();
// Definir la ruta para obtener clima y sugerencias de equipaje
router.get("/luggage-weather", luggageWeatherController_1.getWeatherAndPackingSuggestions);
exports.default = router;
