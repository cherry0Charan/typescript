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
const author_1 = __importDefault(require("../models/author"));
class AuthorApicalls {
    constructor() {
        this.addAuthors = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const info = {
                name: req.body.name,
                books: req.body.books
            };
            const author = new author_1.default(info);
            const savedAuthor = yield author.save();
            res.send(savedAuthor).status(200);
        });
        this.allAuthors = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const Authors = yield author_1.default.find().sort({ name: 1 }).limit(3);
                res.send(Authors).status(200);
            }
            catch (err) {
                res.send(err).status(403);
            }
        });
        this.getAuthor = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const Authors = yield author_1.default.findById(req.params.id);
                res.send(Authors).status(200);
            }
            catch (err) {
                res.send(err.stack).status(403);
            }
        });
        this.updateAuthor = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const info = {
                    name: req.body.name,
                    books: req.body.books
                };
                const savedAuthor = yield author_1.default.findByIdAndUpdate({ _id: req.params.id }, info);
                res.send(savedAuthor).status(200);
            }
            catch (err) {
                res.send(err).status(403);
            }
        });
        this.deleteAuthor = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const deleteAuthor = yield author_1.default.findByIdAndDelete({ _id: req.params.id });
                res.send(deleteAuthor).status(200);
            }
            catch (err) {
                res.send(err).status(403);
            }
        });
    }
}
exports.default = new AuthorApicalls;
