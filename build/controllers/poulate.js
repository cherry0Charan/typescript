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
class joinApiCalls {
    constructor() {
        //using populatc
        this.getAuthorsWithBooks = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const authors = yield author_1.default.find().populate("books", "name");
                res.send(authors).status(200);
            }
            catch (err) {
                res.send(err).status(400);
            }
        });
        //using lookup
        this.getAuthorsUsingLookup = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const authors = yield author_1.default.aggregate([{ $lookup: { from: "Book", localField: "name", foreignField: "authorName", as: "charan" } }]);
                res.send(authors).status(200);
            }
            catch (err) {
                res.send(err).status(400);
            }
        });
        ///aggreagates
        this.authorsAggre = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const authors = yield author_1.default.aggregate([{ $project: { name: 1 } }]);
                res.send(authors).status(200);
            }
            catch (err) {
                res.send(err).status(400);
            }
        });
    }
}
exports.default = new joinApiCalls;
