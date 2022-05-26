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
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const users_1 = __importDefault(require("../models/users"));
const mail_1 = __importDefault(require("../middleware/mail"));
require("dotenv").config();
class UserApicalls {
    constructor() {
        this.addUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const getUser = yield users_1.default.findOne({ mail: req.body.mail });
            if (getUser) {
                res.send("user Already Existed").status(404);
            }
            else {
                const { password } = req.body;
                const hashedPassword = yield bcrypt_1.default.hash(password, 10);
                const info = {
                    name: req.body.name,
                    mail: req.body.mail,
                    password: hashedPassword
                };
                const user = new users_1.default(info);
                const savedUser = yield user.save();
                res.send(`user created ${savedUser}`).status(200);
                (0, mail_1.default)(req.body.mail, "user created");
            }
        });
        this.login = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const getUser = yield users_1.default.findOne({ mail: req.body.mail });
            if (getUser === null) {
                res.send("mail is incorrect").status(400);
            }
            else {
                const isPasswordMatched = yield bcrypt_1.default.compare(req.body.password, getUser.password);
                if (isPasswordMatched) {
                    const payload = { mail: req.body.mail };
                    const jwtToken = jsonwebtoken_1.default.sign(payload, "kljfbbvafgvthbbjhfs");
                    res.send({ jwtToken }).status(200);
                }
                else {
                    res.send("passwor is not valid").status(400);
                }
            }
        });
        this.getAllusers = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const users = yield users_1.default.find();
            res.send(users).status(200);
        });
    }
}
exports.default = new UserApicalls;
