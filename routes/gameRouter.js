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
  .route("/monsterEscape")
  .get(gameController.fetchRoomsDB)
  .post(gameController.createRoomDB)
  .patch(gameController.changeRoomStatus);

router
  .route("/monsterEscape/:roomId")
  .get(gameController.getRoomData)
  .post(gameController.postRoomData)
  .patch(gameController.patchRoomData)
  .delete(gameController.deleteRoomDB);

router
  .route("/energyBattle")
  .get(gameController.fetchRoomsDB)
  .post(gameController.createRoomDB)
  .patch(gameController.changeRoomStatus);

router
  .route("/energyBattle/:roomId")
  .get(gameController.getRoomData)
  .post(gameController.postRoomData)
  .patch(gameController.patchRoomData)
  .delete(gameController.deleteRoomDB);

module.exports = router;
