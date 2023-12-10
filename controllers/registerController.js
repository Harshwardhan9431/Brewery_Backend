const userModel = require("./../models/userModel");

module.exports = register = async (req, res, next) => {
  try {
    console.log("Register: ", req.body);
    const { username, email, password } = req.body;
    const checkUser = await userModel.findOne({ username });
    if (checkUser) {
      return res.json({ message: "Username already exists", status: false });
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
