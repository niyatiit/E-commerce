import orderModel from "../models/order.model.js";
import userModel from "../models/user.model.js";

const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: "cod",
      status: "Order Placed",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartdata: {} });

    res.json({ success: true, message: "Placed the order successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const placeOrderStripe = async (req, res) => {};

const placeOrderRazorpay = async (req, res) => {};

const allOrders = async (req, res) => {
  try{
    
    const orders = await orderModel.find({})
    res.json({success : true, orders})
  }
  catch(error)
  {
    console.log(error)
    res.json({success : false , message : error.message})
  }
};

const userOrders = async (req, res) => {
  try {
    const {userId} = req.body;
    const orders = await orderModel.find({ userId })

    res.json({success : true , orders})
  } catch (error) {
    console.log(error);
    res.json({success : false , message : error.message})
  }
};

const updateStatus = async (req, res) => {};
export {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
};
