import express from "express";
import {
  allOrders,
  placeOrder,
  placeOrderRazorpay,
  placeOrderStripe,
  updateStatus,
  userOrders,
} from "../controllers/order.controller.js";
import authUser from "../middleware/auth.js";
import adminAuth from "../middleware/adminAuth.js";
const orderRouter = express.Router();

// Users Features
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/stripe", authUser, placeOrderStripe);
orderRouter.post("/razorpay", authUser, placeOrderRazorpay);

// Admin Features
orderRouter.get("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

// Users Features
orderRouter.post("/userorders", authUser, userOrders);

export default orderRouter;
