import { type Request, type Response } from "express";
import { Order } from "../models/orderModel";
import { User } from "../models/userModel";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET as string);

// placing user order for frontend
export async function placeOrder(req: Request, res: Response) {
  try {
    const newOrder = new Order({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address
    });

    await newOrder.save();
    await User.findByIdAndUpdate(req.body.userId, {cartData: []});
    return res.status(201).json({success: true, message: 'Order created'});
  } catch(error) {
    console.log(error);
    return res.json({success: false, message: 'Order error'});
  }
}

// deleted user order
export async function deleteOrder(req: Request, res: Response) {
  try {
    await Order.findByIdAndDelete(req.body.orderId);
    return res.json({success: true, message: 'Order deleted'});
  } catch(error) {
    console.log(error);
    return res.json({success: false, message: 'Order error, please try again'});
  }
}

// get user order
export async function getAllOrders(req: Request, res: Response) {
  try {
    const orders = await Order.find({ userId: req.body.userId });
    return res.json({success: true, data: orders});
  } catch(error) {
    console.log(error);
    return res.json({success: false, message: 'Order error, please try again'});
  }
}