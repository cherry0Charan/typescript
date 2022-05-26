"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const poulate_1 = __importDefault(require("../controllers/poulate"));
const router = express_1.default.Router();
router.get("/authorspop", poulate_1.default.getAuthorsWithBooks);
router.get("/authorslook", poulate_1.default.getAuthorsUsingLookup);
router.get("/authorsaggre", poulate_1.default.authorsAggre);
exports.default = router;
