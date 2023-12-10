const express = require("express");
const  login  = require("./../controllers/loginController");
const  register  = require("./../controllers/registerController");
const brewery = require("./../controllers/breweryController");
const router = express.Router();


router.post("/register", register);
router.post("/login", login);
router.get("/", brewery);

module.exports = router;
