const mongoose = require("mongoose");
const { Schema } = mongoose;

const RoomSchema = new Schema({});
const Room = mongoose.model("Room", RoomSchema);

module.exports = Room;
