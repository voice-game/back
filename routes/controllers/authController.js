const Player = require("../../models/playerModel");

exports.postLogin = async (req, res, next) => {
  try {
    const { email, uid, displayName } = req.body;
    const player = await Player.findOne({ playerId: uid });

    if (!player) {
      const newPlayer = await Player.create({ playerId: uid, email });
      return res.status(201).json({
        result: "success",
        data: newPlayer,
      });
    }

    res.status(200).json({
      result: "success",
      data: player,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.getLogOut = async () => {};
exports.postLogOut = async () => {};
