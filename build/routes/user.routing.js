"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validations_1 = __importDefault(require("../middleware/validations"));
const userController_1 = __importDefault(require("../controllers/userController"));
const jwt_1 = __importDefault(require("../middleware/jwt"));
const router = express_1.default.Router();
router.post("/createUser", validations_1.default.createUserValidation, userController_1.default.addUser);
router.post("/login", userController_1.default.login);
router.get("/allUsers", jwt_1.default, userController_1.default.getAllusers);
exports.default = router;
