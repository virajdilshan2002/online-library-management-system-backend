"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const user_modal_1 = __importDefault(require("../modal/user.modal"));
const registerUser = (regData) => {
    const user = {
        email: regData.email,
        username: regData.username,
        password: regData.password,
        image: "usericon.png",
        role: "USER"
    };
    return user_modal_1.default.create(user);
};
exports.registerUser = registerUser;
