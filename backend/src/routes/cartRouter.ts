import { Router } from "express";
import { addToCart, getAllCart, removeToCart } from "../controllers/cartController";

export const cartRouter = Router();

cartRouter.post('/add', addToCart);
cartRouter.post('/remove', removeToCart);
cartRouter.get('/', getAllCart);