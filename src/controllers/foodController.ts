import { type Request, type Response } from "express";
import { Food } from "../models/foodModel";

// add new food
export async function addFood(req: Request, res: Response) {
  let imageUrl = `URL IMAGE`;

  const food = new Food({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: imageUrl
  })
  try {
    await food.save();
    return res.status(200).json({success: true, message: 'Food Added'});
  } catch(error) {
    console.log('INSERT FOOD: ' + error);
    return res.status(404).json({succes: false, message: 'Error'});
  }
}