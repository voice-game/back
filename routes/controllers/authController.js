const Player = require("../../models/playerModel");
const { createToken, verifyToken } = require("../../utils/tokenHandler");

exports.checkAuthorization = async (req, res, next) => {
  try {
    const player = await verifyToken(req.body.token);

    if (!player) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    res.status(200).json({
      message: "Authorization Success",
      data: player,
    });
  } catch (err) {
    next(err);
  }
};

exports.postLogin = async (req, res, next) => {
  try {
    const { email, uid, displayName } = req.body;
    const player = await Player.findOne({ playerId: uid });

    if (!player) {
      const newPlayer = await Player.create({ playerId: uid, email });
      return res.status(201).json({
        message: "Sign In Success",
        data: newPlayer,
      });
    }

    const token = await createToken(uid);

    res.status(200).json({
      message: "Log In Success",
      data: player,
      token,
    });
  } catch (err) {
    next(err);
  }
};
