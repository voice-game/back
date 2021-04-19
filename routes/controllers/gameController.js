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

exports.getEnergyBattleList = async (req, res, next) => {};
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
      result: "success",
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
