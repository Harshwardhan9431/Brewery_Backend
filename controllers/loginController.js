const userModel = require("./../models/userModel");

module.exports = login = async (req, res, next) => {
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
