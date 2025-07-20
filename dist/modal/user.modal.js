"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userModel = new mongoose_1.default.Schema({
    "username": {
        required: true,
        type: String,
    },
    "email": {
        required: true,
        type: String,
        unique: true,
        index: true // For better performance on queries
    },
    "password": {
        required: true,
        type: String
    },
    "image": {
        type: String
    },
    "role": {
        required: true,
        type: String
    }
});
const User = mongoose_1.default.model('user', userModel);
exports.default = User;
