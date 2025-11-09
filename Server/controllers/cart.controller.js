import userModel from "../models/user.model.js";

const addToCart = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;

    const userData = await userModel.findById(userId);
    const cartdata = await userData.cartdata;

    if (cartdata[itemId]) {
      if (cartdata[itemId][size]) {
        cartdata[itemId][size] += 1;
      } else {
        cartdata[itemId][size] = 1;
      }
    } else {
      cartdata[itemId] = {};
      cartdata[itemId][size] = 1;
    }
    await userModel.findByIdAndUpdate(userId, { cartdata });

    res.json({ success: true, message: "Added cart " });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const updateCart = async (req, res) => {
  try {
    const { userId, itemId, size, quantity } = req.body;

    const userData = await userModel.findById(userId);
    const cartdata = await userData.cartdata;

    cartdata[itemId][size] = quantity;

    await userModel.findByIdAndUpdate(userId, { cartdata });
    res.json({ success: true, message: "Updated Cart " });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const getUserCart = async (req, res) => {
    try{
        const {userId} = req.body;

        const userData = await userModel.findById(userId)
        const cartdata = await userData.cartdata

        res.json({success : true ,cartdata})
    }
    catch(error)
    {
        console.log(error)
        res.json({success : false , message : error.message})
    }
};

export { addToCart, updateCart, getUserCart };
