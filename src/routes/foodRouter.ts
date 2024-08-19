import { Router } from "express";
import { addFood, deleteFood, getAllFoods, getFood } from "../controllers/foodController";

export const foodRouter = Router();

foodRouter.post('/add-food', addFood);
foodRouter.delete('/remove:id', deleteFood);
foodRouter.get('/:id', getFood);
foodRouter.get('/', getAllFoods);