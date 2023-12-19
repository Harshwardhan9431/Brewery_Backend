const express = require("express");
const  {register, login}  = require("../controllers/authController");
const {brewery, randomBrewery, singleBrewery, searchBrewery} = require("./../controllers/breweryController");
const router = express.Router();


router.post("/register", register);
router.post("/login", login);
router.get("/", brewery);
router.get("/random", randomBrewery);
router.post("/singleBrewery", singleBrewery);
router.post("/search", searchBrewery);
module.exports = router;
