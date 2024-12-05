const mongoose = require("mongoose");

const detailSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    number: {
      type: Number,
    },
    email: {
      type: String,
    },
    age: {
      type: Number,
    }
  },
  { timestamps: true }
);

const detailModel = mongoose.model("Detail", detailSchema)

module.exports = detailModel