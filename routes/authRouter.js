const express = require("express");
const router = express.Router();
const authController = require("./controllers/authController");

router.route("/check_auth").post(authController.checkAuthorization);
router.route("/login").post(authController.postLogin);

module.exports = router;
