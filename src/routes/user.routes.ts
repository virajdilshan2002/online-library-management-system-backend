import {Router} from "express";
import {deleteUser, getAllUsers} from "../controllers/user.controller";
import {authorizeRoles} from "../middleware/auth.middleware";

const userRouter :Router = Router();

userRouter.get("/all", authorizeRoles('ADMIN'), getAllUsers)
userRouter.delete("/delete/:id", authorizeRoles('ADMIN'), deleteUser)

export default userRouter;