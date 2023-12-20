"use strict";
// Importa el modulo 'express' para crear las rutas
const express = require("express");

/** Controlador de usuarios */
const usuarioController = require("../controllers/user.controller.js");

/** Middlewares de autorizaci  n */
const authorizationMiddleware = require("../middlewares/authorization.middleware.js");

/** Middleware de autenticaci  n */
const authenticationMiddleware = require("../middlewares/authentication.middleware.js");

const domicilioRoutes = require("./domicilio.routes");
/** Instancia del enrutador */
const router = express.Router();

// Define el middleware de autenticaci  n para todas las rutas
router.use(authenticationMiddleware);

// Define las rutas para los usuarios
router.get("/", authorizationMiddleware.isAdmin, usuarioController.getUsers);
router.post("/", authorizationMiddleware.isAdmin, usuarioController.createUser);
router.post("/:id/form", usuarioController.createFormulario);
router.get("/:id", usuarioController.getUserById);
router.put(
  "/:id",
  authorizationMiddleware.isAdmin,
  usuarioController.updateUser,
);
router.delete(
  "/:id",
  authorizationMiddleware.isAdmin,
  usuarioController.deleteUser,
);

router.use("/:userID/domicilios", domicilioRoutes);
// Exporta el enrutador
module.exports = router;
