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
const joi_1 = __importDefault(require("joi"));
const joi_password_1 = require("joi-password");
class Validations {
    constructor() {
        //user validation
        this.createUserValidation = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const schemaValidations = joi_1.default.object({
                name: joi_1.default.string().required(),
                mail: joi_1.default.string().email().min(8).max(30).required().trim(),
                password: joi_password_1.joiPassword.string().required().alphanum()
            });
            try {
                yield schemaValidations.validateAsync(req.body);
                next();
            }
            catch (err) {
                console.log(err);
                res.send(err);
            }
        });
        ///book create validations
        this.createBookValidation = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const schemaValidations = joi_1.default.object({
                name: joi_1.default.string().required(),
                description: joi_1.default.string().required(),
                rating: joi_1.default.number().required(),
                authorName: joi_1.default.string().required()
            });
            try {
                yield schemaValidations.validateAsync(req.body);
                next();
            }
            catch (err) {
                res.send(err.message).status(400);
                console.log(err);
            }
        });
        //book update validation
        this.updateBookValidation = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const schemaValidations = joi_1.default.object({
                name: joi_1.default.string().optional(),
                description: joi_1.default.string().optional(),
                rating: joi_1.default.number().optional()
            });
            try {
                yield schemaValidations.validateAsync(req.body);
                next();
            }
            catch (err) {
                res.send(err.message).status(400);
                console.log(err);
            }
        });
        //author validations//
        this.createAuthorValidation = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const schemaValidations = joi_1.default.object({
                name: joi_1.default.string().required(),
                books: joi_1.default.array().required()
            });
            try {
                yield schemaValidations.validateAsync(req.body);
                next();
            }
            catch (err) {
                console.log(err);
                res.send(err);
            }
        });
        //update author
        this.updateAuthorValidation = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const schemaValidations = joi_1.default.object({
                name: joi_1.default.string().required(),
                books: joi_1.default.array().required()
            });
            try {
                yield schemaValidations.validateAsync(req.body);
                next();
            }
            catch (err) {
                console.log(err);
                res.send(err);
            }
        });
    }
}
exports.default = new Validations;
