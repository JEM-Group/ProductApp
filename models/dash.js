const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dashSchema = new Schema({
  Make: { type: String, required: true },
  Model: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Dash = mongoose.model("Dash", dashSchema);

module.exports = Dash;
