// src/controllers/destinationController.ts
import { Request, Response } from "express";
import { DestinationAgent } from "../agents/destinationAgent";

const destinationAgent = new DestinationAgent();

export const getDestination = (req: Request, res: Response): void => {
  const { name } = req.query;

  if (!name) {
    res.status(400).json({ error: "Por favor, proporciona un nombre de destino." });
    return;
  }

  const destination = destinationAgent.getDestinationByName(name as string);

  if (!destination) {
    res.status(404).json({ error: "Destino no encontrado." });
    return;
  }

  res.json(destination);
};

export const getAllDestinations = (_req: Request, res: Response): void => {
  const destinations = destinationAgent.getAllDestinations();
  res.json(destinations);
};
