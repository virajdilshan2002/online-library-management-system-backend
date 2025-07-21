import {Router} from "express";
import {saveProduct, saveProductImage} from "../controllers/product.controller";
import {authorizeRoles} from "../middleware/auth.middleware";
import {upload} from "../middleware/multer.middleware";
const productsRouter: Router = Router()

productsRouter.post("/save", authorizeRoles('ADMIN'), saveProduct)
productsRouter.post("/upload_image", upload.single("coverImage"), saveProductImage);

export default productsRouter;
