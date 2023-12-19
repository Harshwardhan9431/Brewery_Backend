const userModel = require("../models/userModel");

module.exports.register = async (req, res, next) => {
  try {
    console.log("Register: ", req.body);
    const { username, email, password } = req.body;
    const checkUser = await userModel.findOne({ username });
    if (checkUser) {
      return res.status(409).json({ message: "Username already exists", status: false });
    }
    const checkEmail = await userModel.findOne({ email });
    if (checkEmail) {
      return res.status(409).json({ message: "Email already exists", status: false });
    }
    const newUser = await userModel.create({
      username,
      email,
      password,
    });
    return res.status(200).json({ message: "User created successfully" , status: true , newUser });
  } catch (err) {
    next(err);
  }
};

module.exports.login = async (req, res, next) => {
  try {
    console.log("Login: ",req.body);
    const { username, password } = req.body;
    const checkUser = await userModel.findOne({ username });
    if (!checkUser) {
      return res
        .status(404)
        .json({ message: "Incorrect email or password", status: false });
    }
    if (password !== checkUser.password) {
      return res
        .status(404)
        .json({ message: "Incorrect email or password", status: false });
    }
    return res
      .status(200)
      .json({ message: "Logged in successfully", status: true , checkUser });
  } catch (err) {
    next(err);
  }
};
