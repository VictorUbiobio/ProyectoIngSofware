"use strict";
const mongoose = require("mongoose");

const domicilioSchema = new mongoose.Schema(
  {
    Ciudad: {
      type: String,
    },
    Calle: {
      type: String,
    },
    PDF: {
        type: String,
    },
    Usuario: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    versionKey: false,
  },
);

const Domicilio = mongoose.model("Domicilio", domicilioSchema);

module.exports = Domicilio;