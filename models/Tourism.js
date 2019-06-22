const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tourismSchema = new Schema({
  title: String,
  activity: String,
  image: String,
  description: String
});
const Tourism = mongoose.model("Tourism", tourismSchema);
module.exports = Tourism;
