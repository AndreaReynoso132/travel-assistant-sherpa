"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllDestinations = exports.getDestination = void 0;
const destinationAgent_1 = require("../agents/destinationAgent");
const destinationAgent = new destinationAgent_1.DestinationAgent();
const getDestination = (req, res) => {
    const { name } = req.query;
    if (!name) {
        res.status(400).json({ error: "Por favor, proporciona un nombre de destino." });
        return;
    }
    const destination = destinationAgent.getDestinationByName(name);
    if (!destination) {
        res.status(404).json({ error: "Destino no encontrado." });
        return;
    }
    res.json(destination);
};
exports.getDestination = getDestination;
const getAllDestinations = (_req, res) => {
    const destinations = destinationAgent.getAllDestinations();
    res.json(destinations);
};
exports.getAllDestinations = getAllDestinations;
