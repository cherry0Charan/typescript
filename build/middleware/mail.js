"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const mail = (gmail, mess) => {
    const transporter = nodemailer_1.default.createTransport({
        service: "gmail",
        auth: {
            user: "ck301878@gmail.com",
            pass: "mprtjgyspjmvpwub"
        }
    });
    const mailOptions = {
        from: "ck301878@gmail.com",
        to: gmail,
        subject: "sending mail",
        text: mess
    };
    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(data);
        }
    });
};
exports.default = mail;
