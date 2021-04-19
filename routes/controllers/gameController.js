const Player = require("../../models/playerModel");
const Room = require("../../models/roomModel");

exports.getSelectGame = async (req, res, next) => {};
exports.postSelectedGame = async (req, res, next) => {};

exports.getRoadRoller = async (req, res, next) => {};
exports.postRoadRoller = async (req, res, next) => {};
exports.patchRoadRoller = async (req, res, next) => {};
exports.deleteRoadRoller = async (req, res, next) => {};

exports.getFighterAttack = async (req, res, next) => {};
exports.postFighterAttack = async (req, res, next) => {};
exports.patchFighterAttack = async (req, res, next) => {};
exports.deleteFighterAttack = async (req, res, next) => {};

exports.getEnergyBattleList = async (req, res, next) => {
  try {
    const gameTitle = req.url.slice(1);
    const rooms = await Room.find({ title: gameTitle })
      .populate("createdBy")
      .populate("players");

    res.status(200).json({
      message: "success",
      data: rooms,
    });
  } catch (err) {}
};

exports.createEnergyBattle = async (req, res, next) => {
  try {
    const { gameTitle, newRoomId, createdBy } = req.body;
    const newRoom = await Room.create({
      title: gameTitle,
      roomId: newRoomId,
      createdBy,
      players: [createdBy],
    });

    res.status(201).json({
      message: "success",
      data: newRoom,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.getEnergyBattle = async (req, res, next) => {};
exports.postEnergyBattle = async (req, res, next) => {};
exports.patchEnergyBattle = async (req, res, next) => {};
exports.deleteEnergyBattle = async (req, res, next) => {};
