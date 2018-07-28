const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/dashboardtestdata",
  {
    // useMongoClient: true
  }
);

const dashSeed = [
  {
    make: "Ford",
    model: "F150",
    synopsis:
      "This is the first vehicle in the DB.",
    date: new Date(Date.now())
  },
  {
    make: "Chevy",
    model: "Silverado",
    synopsis:
      "This is the second vehicle in the DB.",
    date: new Date(Date.now())
  },
  {
    make: "Dodge",
    model: "RAM",
    synopsis:
      "This is the third vehicle in the DB.",
    date: new Date(Date.now())
  },
  {
    make: "ghetto",
    model: "shitbox",
    synopsis:
      "This is the fourth vehicle in the DB.",
    date: new Date(Date.now())
  },
];

db.Dash
  .remove({})
  .then(() => db.Dash.collection.insertMany(dashSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
