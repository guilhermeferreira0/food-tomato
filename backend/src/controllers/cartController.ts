import {type Request, type Response} from "express";
import { User } from "../models/userModel";

export async function addToCart(req: Request, res: Response) {
  try {
    let userData = await User.findById(req.body.userId);
    let userCartData = userData!.cartData;

    const existingItemIndex = userCartData.findIndex(item => {
      if (item.productId === req.body.itemId) return item
    }) as number;

    if(existingItemIndex != -1) {
      userCartData[existingItemIndex].quantity += 1;
      await userData?.save();
      return res.json({success: true, message: 'Added new quantity for item'});
    }
    else {
      userCartData?.push({
        productId: req.body.itemId,
        quantity: 1,
      });
      await userData?.save();
    }

    return res.json({success: true, message: 'Item added to cart'});
  } catch(error) {
    console.log(error);
    return res.json({success: false, message: 'Failed added to cart'});
  }
}

export async function removeToCart(req: Request, res: Response) {
  try {
    let userData = await User.findById(req.body.userId);
    let userCartData = userData!.cartData;

    const existingItemIndex = userCartData.findIndex(item => {
      if (item.productId === req.body.itemId) return item;
    }) as number;
    if(existingItemIndex == -1) return res.json({success: false, message: 'Item undefined'});

    if (userCartData[existingItemIndex].quantity == 1) {
      userCartData.splice(existingItemIndex, 1);
      await userData?.save();
      return res.json({success: true, message: 'Removed from cart'});
    }
    else {
      userCartData[existingItemIndex].quantity -= 1;
      await userData?.save();
    }

    return res.json({success: true, message: 'Removed quantity from cart'});
  } catch(error) {
    console.log(error);
    return res.json({success: false, message: 'Error'});
  }
}

export async function getAllCart(req: Request, res: Response) {
  try {
    const user = await User.findById(req.body.userId);
    return res.json({success: true, data: user?.cartData});
  } catch(error) {
    console.log(error);
    return res.json({succes: true, message: 'Error cart failed'});
  }
}