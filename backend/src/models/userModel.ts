import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
    productId: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      default: 1
    }
});

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  cartData: {
    type: [CartSchema],
    default: []
  }
}, {timestamps: true, minimize: false});

export const User = mongoose.model("user", UserSchema);