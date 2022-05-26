"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
const booksSchema = new mongoose_2.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    rating: {
        type: Number
    },
    authorName: {
        type: String
    }
});
exports.default = mongoose_1.default.model("Book", booksSchema);