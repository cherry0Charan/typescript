"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import  { Request, Response } from "express"
const mongoose_1 = __importDefault(require("mongoose"));
const user_routing_1 = __importDefault(require("./routes/user.routing"));
const joinRouting_1 = __importDefault(require("./routes/joinRouting"));
const authorRouting_1 = __importDefault(require("./routes/authorRouting"));
const booksRouting_1 = __importDefault(require("./routes/booksRouting"));
require("dotenv").config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
var connection = mongoose_1.default.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)
    .then(() => {
    console.log("connected");
}).catch(() => {
    console.log("error");
});
app.use("/users", user_routing_1.default);
app.use("/authors", authorRouting_1.default);
app.use("/books", booksRouting_1.default);
app.use("/joins", joinRouting_1.default);
app.listen(process.env.PORT, () => {
    console.log(`server running`);
});
