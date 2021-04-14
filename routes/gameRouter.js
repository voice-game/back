const express = require("express");
const router = express.Router();
const gameController = require("./controllers/gameController");

router
  .routes("/")
  .get(gameController.getSelectGame)
  .post(gameController.postSelectedGame);

router
  .routes("/road-roller")
  .get(gameController.getRoadRoller)
  .post(gameController.postRoadRoller)
  .patch(gameController.patchRoadRoller)
  .delete(gameController.deleteRoadRoller);

router
  .routes("/flappy-bird")
  .get(gameController.getFlappyBird)
  .post(gameController.postFlappyBird)
  .patch(gameController.patchFlappyBird)
  .delete(gameController.deleteFlappyBird);

router
  .routes("/sound-battle")
  .get(gameController.getSoundBattleList)
  .post(gameController.enterSoundBattle);

router
  .routes("/games/sound-battle/:roomId")
  .get(gameController.getSoundBattle)
  .post(gameController.postSoundBattle)
  .patch(gameController.patchSoundBattle)
  .delete(gameController.deleteSoundBattle);

module.exports = router;
