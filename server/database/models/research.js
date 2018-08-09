// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const researchSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const research = mongoose.model("research", researchSchema);

module.exports = research;
