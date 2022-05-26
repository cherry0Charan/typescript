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
const books_1 = __importDefault(require("../models/books"));
const express_1 = require("express");
class BooksApicalls {
    constructor() {
        this.addBook = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const info = {
                    name: req.body.name,
                    description: req.body.description,
                    rating: req.body.rating,
                    authorName: req.body.authorName
                };
                const book = new books_1.default(info);
                const savedBook = yield book.save();
                res.send(savedBook).status(200);
            }
            catch (err) {
                express_1.response.send(err).status(403);
            }
        });
        this.allBooks = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const books = yield books_1.default.find();
                res.send(books).status(200);
            }
            catch (err) {
                res.send(err).status(403);
            }
        });
        this.getBook = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const books = yield books_1.default.findById({ _id: req.params.id });
                res.send(books).status(200);
            }
            catch (err) {
                res.send(err).status(403);
            }
        });
        this.updateBook = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const info = {
                    name: req.body.name,
                    description: req.body.description,
                    rating: req.body.rating
                };
                const savedBook = yield books_1.default.findByIdAndUpdate({ _id: req.params.id }, info);
                res.send(savedBook).status(200);
            }
            catch (err) {
                express_1.response.send(err).status(403);
            }
        });
        this.deleteBook = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const deleteBook = yield books_1.default.findByIdAndDelete({ _id: req.params.id });
                res.send(deleteBook).status(200);
            }
            catch (err) {
                express_1.response.send(err).status(403);
            }
        });
    }
}
exports.default = new BooksApicalls;
