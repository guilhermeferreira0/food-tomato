import {type Request, type Response} from "express";
import { User } from "../models/userModel";

export async function addToCart(req: Request, res: Response) {
  try {
    let userData = await User.findById(req.body.userId);
    let cartData = await userData?.cartData;
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    }
    else {
      cartData[req.body.itemId] += 1;
    }

    await User.findByIdAndUpdate(req.body.userId, {cartData});
    return res.json({success: true, message: 'Added to cart'});
  } catch(error) {
    console.log(error);
    return res.json({success: false, message: 'Failed added to cart'});
  }
}

export async function removeToCart(req: Request, res: Response) {
  try {
    let userData = await User.findById(req.body.userId);
    let cartData = await userData?.cartData;

    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }
    else {
      await User.findByIdAndUpdate(req.body.userId, {
        cartData[req.body.itemId]
      });
      return res.json({success: true, message: 'Item Cart is Empty'});
    }

    await User.findByIdAndUpdate(req.body.userId, {cartData});
    return res.json({success: true, message: 'Removed from cart'});
  } catch(error) {
    console.log(error);
    return res.json({success: false, message: 'Error'});
  }
}

export async function getAllCart(req: Request, res: Response) {}