import { Router } from "express";
import { addFood, deleteFood, getAllFoods, getFood } from "../controllers/foodController";

export const foodRoute = Router();

foodRoute.post('/add-food', addFood);
foodRoute.delete('/remove:id', deleteFood);
foodRoute.get('/:id', getFood);
foodRoute.get('/', getAllFoods);