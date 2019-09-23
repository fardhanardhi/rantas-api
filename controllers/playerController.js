const Player = require("../models/Player");

module.exports = {
  index: function(req, res) {
    Player.find().then(function(rows) {
      res.json(rows);
    });
  },
  store: function(req, res) {
    Player.create(req.body).then(function(row) {
      res.json(row);
    });
  },
  detail: function(req, res) {
    Player.findById(req.params.id, function(err, rows) {
      if (err) return console.error(err);
      res.json(rows);
    });
  }
};
