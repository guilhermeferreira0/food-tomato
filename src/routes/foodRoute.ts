import { Router } from "express";
import { addFood } from "../controllers/foodController";
import multer from "multer";

export const foodRoute = Router();

foodRoute.post('/add-food', addFood);