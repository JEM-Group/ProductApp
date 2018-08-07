const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dashSchema = new Schema({
  make_and_model: { type: String, required: true },
  vehicle_class: String,
  vehicle_drivetrain: String,
  trany: String,
  cylinders: Number,
  city_mpg: Number,
  highway_mpg: Number,
  fuel_cost: Number,
  greenhouse_gas_score: Number,
  date: { type: Date, default: Date.now }
});

const Dash = mongoose.model("Dash", dashSchema);

module.exports = Dash;