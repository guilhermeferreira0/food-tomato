import { type Request, type Response } from "express";
import { ObjectId } from 'mongodb';
import { Food } from "../models/foodModel";
import { foodRoute } from "../routes/foodRoute";

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

// all food list
export async function getAllFoods(req: Request, res: Response) {
  try {
    const foods = await Food.find();
    return res.status(200).json({success: true, data: foods});
  } catch(error) {
    console.log(error);
    return res.status(204).json({success: false, message: 'Error'});
  }
}

// get food
export async function getFood(req: Request, res: Response) {
  try {
    const id = new ObjectId(req.params.id);
    const food = await Food.findById({_id: id});

    return res.status(200).json({success: true, data: food});
  } catch(error) {
    console.log(error);
    return res.status(404).json({success: false, message: 'Invalid'});
  }
}

export async function deleteFood(req: Request, res: Response) {
  try {
    const id = new ObjectId(req.params.id);
    await Food.findByIdAndDelete(id);
    return res.status(200).json({success: true, message: 'Food Removed'});
  } catch(error) {
    console.log(error);
    return res.status(404).json({success: false, message: 'Invalid'});
  }
}