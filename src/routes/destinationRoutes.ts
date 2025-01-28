import express from "express";
import { getDestination, getAllDestinations } from "../controllers/destinationController";

const router = express.Router();

router.get("/destinations", getAllDestinations);
router.get("/destinations/search", getDestination);

export default router;
