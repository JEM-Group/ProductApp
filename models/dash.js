const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dashSchema = new Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Dash = mongoose.model("Dash", dashSchema);

module.exports = Dash;
