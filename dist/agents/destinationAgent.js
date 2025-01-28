"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestinationAgent = void 0;
// src/agents/destinationAgent.ts
class DestinationAgent {
    constructor() {
        this.destinations = [
            { name: "París", location: "Francia", description: "La ciudad del amor, famosa por la Torre Eiffel y su gastronomía." },
            { name: "Tokio", location: "Japón", description: "Una metrópolis futurista con cultura tradicional, templos y sushi." },
            { name: "Nueva York", location: "EE.UU.", description: "La ciudad que nunca duerme, hogar de Broadway y Times Square." },
            { name: "Roma", location: "Italia", description: "Capital del imperio romano, con el Coliseo y la Ciudad del Vaticano." },
            { name: "Sídney", location: "Australia", description: "Famosa por la Ópera de Sídney y sus playas impresionantes." }
        ];
    }
    getDestinationByName(name) {
        return this.destinations.find(dest => dest.name.toLowerCase() === name.toLowerCase()) || null;
    }
    getAllDestinations() {
        return this.destinations;
    }
}
exports.DestinationAgent = DestinationAgent;
