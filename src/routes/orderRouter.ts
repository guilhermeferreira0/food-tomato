import { Router } from "express";
import { deleteOrder, getAllOrders, placeOrder } from "../controllers/orderController";

export const orderRouter = Router();

orderRouter.post('/place', placeOrder);
orderRouter.delete('/remove', deleteOrder);
orderRouter.get('/', getAllOrders);