import orderModel from "../models/order.model.js";
import userModel from "../models/user.model";

const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      amount,
      PaymentMethod: "cod",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true, message: "Placed the order successfully" });
  } catch (error) {
    console.log(error);
    res.json({ suceess: false, message: error.message });
  }
};

export { placeOrder };
