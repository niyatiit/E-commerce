import userModel from "../models/user.model.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRATE_KEY);
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User is not exits" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = createToken(user._id);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Password does not match" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existUser = await userModel.findOne({ email });

    if (existUser) {
      return res.json({ success: false, message: "User is already exists" });
    }

    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Email is not valid please try again",
      });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password Length is must be greater than 8",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new userModel({ name, email, password: hashPassword });

    const user = await newUser.save();

    const token = createToken(user._id);

    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD)
    {
      const token = jwt.sign(email+password , process.env.JWT_SECRATE_KEY)

      res.json({success : true , token})
    }
    else{
      res.json({success :false , message : "Email end Password are invalid please try again "})
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { login, register, adminLogin };
