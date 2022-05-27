"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authorControllers_1 = __importDefault(require("../controllers/authorControllers"));
const validations_1 = __importDefault(require("../middleware/validations"));
const jwt_1 = __importDefault(require("../middleware/jwt"));
const router = express_1.default.Router();
//Author//
router.post("/addAuthor", validations_1.default.createAuthorValidation, jwt_1.default, authorControllers_1.default.addAuthors);
router.get("/allAuthors", jwt_1.default, authorControllers_1.default.allAuthors);
router.get("/:id", authorControllers_1.default.getAuthor);
router.put("/:id", validations_1.default.updateAuthorValidation, jwt_1.default, authorControllers_1.default.updateAuthor);
router.delete("/:id", jwt_1.default, authorControllers_1.default.deleteAuthor);
exports.default = router;
