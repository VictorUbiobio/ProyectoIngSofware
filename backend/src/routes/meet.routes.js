"use strict";
// Importa el modulo 'express' para crear las rutas
const express = require("express");

/** Controlador de autenticación */
const meetController = require("../controllers/meet.controller.js");

/** Instancia del enrutador */
const router = express.Router();
const authorizationMiddleware = require("../middlewares/authorization.middleware.js");
const authenticationMiddleware = require("../middlewares/authentication.middleware.js");
router.use(authenticationMiddleware);

// Define las rutas para las citas
router.get("/", authorizationMiddleware.isInspectorOrAdmin, meetController.getMeet);
router.get("/:id", authorizationMiddleware.isInspectorOrAdmin, meetController.getMeetById);
router.get("/user/:id", authorizationMiddleware.isInspectorOrAdmin, meetController.getMeetByUser);
router.put("/:id", authorizationMiddleware.isInspectorOrAdmin, meetController.putMeet);
router.post("/", meetController.postMeet);
router.delete("/:id", authorizationMiddleware.isInspectorOrAdmin, meetController.deleteMeet);

// Exporta el enrutador
module.exports = router;
