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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyJwtToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let jwtToken;
    const authHeader = req.headers.authorization;
    if (authHeader === undefined) {
        res.send("token is not existed");
    }
    else {
        const jwtToken = authHeader.split(" ")[1];
        console.log(jwtToken);
        const isJwtMatched = yield jsonwebtoken_1.default.verify(jwtToken, "kljfbbvafgvthbbjhfs", (err, payload) => __awaiter(void 0, void 0, void 0, function* () {
            if (err) {
                res.status(401);
                res.send("Invalid Jwt token");
            }
            else {
                req.body.jwtToken = jwtToken;
                console.log(jwtToken);
                next();
            }
        }));
        // if(isJwtMatched){
        //     next()
        // }else{
        //     res.send("jwt is not valid").status(400)
        // }
    }
});
exports.default = verifyJwtToken;
