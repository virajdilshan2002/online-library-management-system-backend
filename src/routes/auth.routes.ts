import {Router} from "express";
import {authenticateUser, register,} from "../controllers/auth.controller";

const authRouter: Router = Router()

authRouter.post("/register", register)
authRouter.post("/login", authenticateUser);


export default authRouter;
