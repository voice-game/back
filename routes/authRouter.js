const express = require("express");
const router = express.Router();
const authController = require("./controllers/authController");

router.route("/login").post(authController.postLogin);

router
  .route("/logout")
  .get(authController.getLogOut)
  .post(authController.postLogOut);

module.exports = router;
