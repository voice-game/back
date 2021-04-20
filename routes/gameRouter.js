const express = require("express");
const router = express.Router();
const gameController = require("./controllers/gameController");

router
  .route("/")
  .get(gameController.getSelectGame)
  .post(gameController.postSelectedGame);

router
  .route("/roadRoller")
  .get(gameController.getRoadRoller)
  .post(gameController.postRoadRoller)
  .patch(gameController.patchRoadRoller)
  .delete(gameController.deleteRoadRoller);

router
  .route("/flappyBird")
  .get(gameController.getFighterAttack)
  .post(gameController.postFighterAttack)
  .patch(gameController.patchFighterAttack)
  .delete(gameController.deleteFighterAttack);

router
  .route("/energyBattle")
  .get(gameController.getEnergyBattleList)
  .post(gameController.createEnergyBattle)
  .patch(gameController.changeRoomStatus);

router
  .route("/energyBattle/:roomId")
  .get(gameController.getEnergyBattle)
  .post(gameController.postEnergyBattle)
  .patch(gameController.patchEnergyBattle)
  .delete(gameController.deleteEnergyBattle);

module.exports = router;
