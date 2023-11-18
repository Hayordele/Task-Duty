const express = require("express");
const {
  registerUser,
  loginUser,
  viewUser,

} = require("../controllers/authController");
const methodNotAllowed = require("../utils/methodNotAllowed");
const router = express.Router();

router.route("/register").post(registerUser).all(methodNotAllowed);

router.route("/login").post(loginUser).all(methodNotAllowed);

router.route("/user").post(viewUser).all(methodNotAllowed);


module.exports = router;
