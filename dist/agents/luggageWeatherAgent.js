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
exports.LuggageWeatherAgent = void 0;
const axios_1 = __importDefault(require("axios"));
class LuggageWeatherAgent {
    // Obtener datos del clima para un destino específico
    getWeatherByDestination(destination, apiKey) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.get("https://api.openweathermap.org/data/2.5/weather", {
                    params: {
                        q: destination,
                        units: "metric",
                        appid: apiKey,
                    },
                });
                return response.data;
            }
            catch (error) {
                console.error("Error al obtener datos del clima:", error);
                return null;
            }
        });
    }
    // Obtener sugerencias de equipaje basadas en la duración del viaje y el clima
    getPackingSuggestions(duration, weather) {
        const commonItems = ["Pasaporte", "Cargador", "Ropa interior", "Artículos de aseo"];
        const weatherSpecificItems = weather === "cold"
            ? ["Abrigo", "Bufanda", "Guantes", "Botas"]
            : ["Protector solar", "Ropa ligera", "Gafas de sol", "Sandalias"];
        // Multiplicar los artículos según la duración
        const packedItems = [...commonItems, ...weatherSpecificItems].map((item) => `${item} x${duration}`);
        return packedItems;
    }
}
exports.LuggageWeatherAgent = LuggageWeatherAgent;
