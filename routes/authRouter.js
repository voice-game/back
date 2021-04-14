const express = require("express");
const router = express.Router();
const authController = require("./controllers/authController");

router.get("/", authController.getHome);

router
  .routes("/login")
  .get(authController.getLogIn)
  .post(authController.postLogIn);

router
  .routes("/logout")
  .get(authController.getLogOut)
  .post(authController.postLogOut);

module.exports = router;
