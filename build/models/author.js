"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const books_1 = __importDefault(require("./books"));
const mongoose_2 = require("mongoose");
const authorSchema = new mongoose_2.Schema({
    name: {
        type: String,
        required: true
    },
    books: [{
            type: mongoose_1.default.Types.ObjectId,
            ref: books_1.default
        }]
});
exports.default = mongoose_1.default.model("Author", authorSchema);
