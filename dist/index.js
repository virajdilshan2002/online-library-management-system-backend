"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const dotenv_1 = __importDefault(require("dotenv"));
const DBConnection_1 = __importDefault(require("./db/DBConnection"));
dotenv_1.default.config(); // Load the environment variables from the env file
//  1. Access the port
const port = process.env.PORT || 3000;
console.log(process.env.PORT);
// 2. Start the server
(0, DBConnection_1.default)().then(result => console.log(result));
app_1.default.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
