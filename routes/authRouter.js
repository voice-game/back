const express = require("express");
const router = express.Router();
const authController = require("./controllers/authController");

router.get("/", authController.getHome);

router
  .route("/login")
  .get(authController.getLogin)
  .post(authController.postLogin);

router
  .route("/logout")
  .get(authController.getLogOut)
  .post(authController.postLogOut);

module.exports = router;
