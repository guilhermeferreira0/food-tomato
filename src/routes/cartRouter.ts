import { Router } from "express";
import { addToCart, getAllCart, removeToCart } from "../controllers/cartController";
import { authMiddleware } from "../middleware/auth";

export const cartRouter = Router();

cartRouter.post('/add', authMiddleware, addToCart);
cartRouter.post('/remove', authMiddleware, removeToCart);
cartRouter.post('/', authMiddleware, getAllCart);