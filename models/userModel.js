const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({});
const User = mongoose.model("User", UserSchema);

module.exports = User;
