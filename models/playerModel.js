const mongoose = require("mongoose");
const { Schema } = mongoose;

const PlayerSchema = new Schema({
  playerId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  gameRecords: {
    roadRoller: {
      type: Number,
      default: 0,
      required: true,
    },
    fighterAttack: {
      type: Number,
      default: 0,
      required: true,
    },
    energyBattle: {
      type: Number,
      default: 0,
      required: true,
    },
  },
});

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;
