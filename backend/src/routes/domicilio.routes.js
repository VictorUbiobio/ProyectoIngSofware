"use strict";

const express = require("express");

const domiciliocontroller = require("../controllers/domicilio.controller");
const router = express.Router();

router.post("/", (req, res) => {
    domiciliocontroller.createDomicilio(req, res);
  });
router.put("/:DomicilioId", domiciliocontroller.updateDomicilio);
router.post("/:DomicilioId/upload", domiciliocontroller.uploadPDF);

module.exports = router;
