"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const destinationController_1 = require("../controllers/destinationController");
const router = express_1.default.Router();
router.get("/destinations", destinationController_1.getAllDestinations);
router.get("/destinations/search", destinationController_1.getDestination);
exports.default = router;
