import express from "express";
import { addToCart, getUserCart, updateCart } from "../controllers/cart.controller.js";
import authUser from "../middleware/auth.js";

const cartRoute = express.Router()

cartRoute.post('/add',authUser,addToCart)
cartRoute.post('/get',authUser,getUserCart)
cartRoute.post('/update',authUser,updateCart)

export default cartRoute