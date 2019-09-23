const mongoose = require("mongoose");
const playerSchema = mongoose.Schema(
  {
    nama: String,
    skor: Number
  },
  {
    timestamps: { createdAt: true, updatedAt: false }
  }
);

module.exports = mongoose.model("Player", playerSchema);
