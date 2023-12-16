"use strict";

const express = require("express");

const domiciliocontroller = require("../controllers/domicilio.controller");
const router = express.Router();
const { getDomicilios, uploadPDF } = require("../controllers/domicilio.controller");
const upload = require("../middlewares/pdf.middleware");

router.post("/", (req, res) => {
    domiciliocontroller.createDomicilio(req, res);
  });
router.put("/:DomicilioId", domiciliocontroller.updateDomicilio);
router.route("/:DomicilioId/upload")
        .get(getDomicilios).post(upload.single("file"), uploadPDF);
module.exports = router;
