const express = require("express");
const router = express.Router();
const gameController = require("./controllers/gameController");

router
  .route("/roadRoller")
  .get(gameController.fetchRoomsDB)
  .post(gameController.createRoomDB)
  .patch(gameController.changeRoomStatus);

router
  .route("/roadRoller/:roomId")
  .get(gameController.getRoomData)
  .post(gameController.postRoomData)
  .patch(gameController.patchRoomData)
  .delete(gameController.deleteRoomDB);

router
  .route("/fighterAttack")
  .get(gameController.fetchRoomsDB)
  .post(gameController.createRoomDB)
  .patch(gameController.changeRoomStatus);

router
  .route("/fighterAttack/:roomId")
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
