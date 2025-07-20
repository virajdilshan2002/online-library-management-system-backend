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
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGO_DB_URL = process.env.MONGO_DB_URL;
const DBConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        console.log(MONGO_DB_URL);
        const connection = yield mongoose_1.default.connect(MONGO_DB_URL);
        return `Successfully connected to MongoDB: ${(_a = connection.connection) === null || _a === void 0 ? void 0 : _a.host}`;
    }
    catch (error) {
        return "Mongo DB Connection Error:" + error;
    }
});
exports.default = DBConnection;
