const jwt = require("jsonwebtoken");
const Player = require("../models/playerModel");

exports.createToken = (playerId) => {
  return jwt.sign({ playerId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.verifyToken = async (clientToken) => {
  if (!clientToken || clientToken === "undefined") {
    return null;
  }

  const decoded = await jwt.verify(clientToken, process.env.JWT_SECRET);
  const player = await Player.findOne({ playerId: decoded.playerId });
  const isExpired = decoded.exp * 1000 - Date.now() < 0;

  if (!player || isExpired) {
    return null;
  } else {
    return player;
  }
};
