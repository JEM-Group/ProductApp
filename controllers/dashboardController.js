const db = require("../models");
const mongoose = require("mongoose");
var ObjectId = require('mongodb').ObjectID;

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Dash
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    db.Dash
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  


  // findById: function(req, res) {
  //   db.Dash
  //     .findById(req.params.id, console.log(req.params.id))
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },

  // findById: function(req, res) {
  //   db.Dash
  //     .findById(mongoose.Types.ObjectId(req.params.id), console.log(req.params.id))
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },

  // findById: function(req, res) {
  //   var myId = JSON.parse(req.body.id);
  //   db.Dash
  //     .findById({'_id': ObjectID(myId)}, console.log(myId))
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },

  // findByIdAndUpdate: function(req, res) {
  //   db.Dash
  //     .findByIdAndUpdate(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err), console.log(err));
  // },
  create: function(req, res) {
    db.Dash
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Dash
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Dash
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },



  // findById: function(req, res) {
  //   db.Book
  //     .findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // create: function(req, res) {
  //   db.Book
  //     .create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // update: function(req, res) {
  //   db.Book
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function(req, res) {
  //   db.Book
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};
