const express = require("express");
const router = express.Router();
const gameController = require("./controllers/gameController");

router
  .route("/")
  .get(gameController.getSelectGame)
  .post(gameController.postSelectedGame);

router
  .route("/road-roller")
  .get(gameController.getRoadRoller)
  .post(gameController.postRoadRoller)
  .patch(gameController.patchRoadRoller)
  .delete(gameController.deleteRoadRoller);

router
  .route("/flappy-bird")
  .get(gameController.getFlappyBird)
  .post(gameController.postFlappyBird)
  .patch(gameController.patchFlappyBird)
  .delete(gameController.deleteFlappyBird);

router
  .route("/energy-battle")
  .get(gameController.getEnergyBattleList)
  .post(gameController.enterEnergyBattle);

router
  .route("/games/energy-battle/:roomId")
  .get(gameController.getEnergyBattle)
  .post(gameController.postEnergyBattle)
  .patch(gameController.patchEnergyBattle)
  .delete(gameController.deleteEnergyBattle);

module.exports = router;
