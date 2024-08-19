import { type Request, type Response } from "express";
import { User } from "../models/userModel";
import jwt from "jsonwebtoken";
import validator from "validator"
import { hashPassword, verifyHashedPassword } from "../utils/hash";
import { createToken } from "../utils/createToken";

// login user
export async function loginUser(req: Request, res: Response) {
  const {email, password} = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({success: false, message: 'User doesn´t exists'});

    const isMatch = await verifyHashedPassword(password, user.password);
    if (!isMatch) return res.status(401).json({success: false, message: 'Invalid credentials'});

    const token = createToken(String(user._id));
    return res.status(202).json({success:true, token});
  } catch(error) {
    console.log(error);
    return res.status(401).json({success:false, message: 'Error Unauthorized'});
  }
}

// register user
export async function registerUser(req: Request, res: Response) {
  const {name, password, email} = req.body;
  try {
    // checking is user already exists
    const exists = await User.findOne({email});
    if (exists) return res.status(406).json({success: false, message: 'User already exists'});

    // validating email format & strong password
    if (!validator.isEmail(email)) return res.status(406).json({success: false, message: 'Please enter a valid email'});
    else if (password.length < 8) return res.status(406).json({success: false, message: 'Please enter a strong password'});

    const newUser = new User({
      name: name,
      email: email,
      password: await hashPassword(password)
    });
    const userCreated = await newUser.save();
    const token = createToken(String(userCreated._id));
    return res.status(201).json({success: true, token});
  } catch(error) {
    console.log(error);
    return res.status(406).json({success: false, message: 'Failed, please try again'});
  }
}