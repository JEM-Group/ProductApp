const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roadSchema = new Schema({
  vehicle_make_model: { type: String, required: true },
  make: String,
  model: String,
  vehicle_class: String,
  vehicle_drivetrain: String,
  trany: String,
  city_mpg: Number,
  highway_mpg: Number,
  fuel_cost: Number,
  cylinders: Number,
  greenhouse_gas_score: Number,
  date: { type: Date, default: Date.now }
});

const Road = mongoose.model("Road", roadSchema);

module.exports = Road;