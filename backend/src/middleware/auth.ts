import { NextFunction, type Request, type Response } from "express";
import { verifyToken } from "../utils/token";

export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const { token } = req.headers;
  if (!token) return res.status(407).json({success: false, message: 'Not Authorized Login Again'});

  try {
    const decoded = verifyToken(String(token));
    req.body.userId = decoded.id;
    next();
  } catch(error) {
    console.log(error);
    return res.status(407).json({success: false, message: 'Error login, please try again'});
  }
}