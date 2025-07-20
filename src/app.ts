import express, {Express} from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes";
import {authenticateToken} from "./middleware/auth.middleware";
import authRoutes from "./routes/auth.routes";


const app :Express = express();

app.use(express.json())
const allowedOrigins = ["http://localhost:3000", "http://localhost:5173"];

const corsOptions = {
    origin: (origin :string | undefined, callback :(err :Error | null, allow? :boolean) => void) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error("Not allowed by CORS"), false);
        }
    }
}
app.use(cors(corsOptions)) // Enable or allow cors

app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/users", authenticateToken, userRoutes)

export default app;