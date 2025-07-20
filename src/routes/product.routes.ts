import {Router} from "express";
import {saveProduct} from "../controllers/product.controller";
import {authorizeRoles} from "../middleware/auth.middleware";
const productsRouter: Router = Router()

productsRouter.post("/save", authorizeRoles('ADMIN'), saveProduct)

export default productsRouter;
