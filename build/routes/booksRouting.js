"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookController_1 = __importDefault(require("../controllers/bookController"));
const validations_1 = __importDefault(require("../middleware/validations"));
const jwt_1 = __importDefault(require("../middleware/jwt"));
const router = express_1.default.Router();
//books//
router.post("/addBook", jwt_1.default, validations_1.default.createBookValidation, bookController_1.default.addBook);
router.get("/allBooks", jwt_1.default, bookController_1.default.allBooks);
router.get("/:id", jwt_1.default, bookController_1.default.getBook);
router.put("/:id", jwt_1.default, validations_1.default.updateBookValidation, bookController_1.default.updateBook);
router.delete("/:id", jwt_1.default, bookController_1.default.deleteBook);
exports.default = router;
