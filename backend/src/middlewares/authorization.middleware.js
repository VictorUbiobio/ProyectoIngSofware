"use strict";
// Autorizacion - Comprobar el rol del usuario
const User = require("../models/user.model.js");
const Role = require("../models/role.model.js");
const { respondError } = require("../utils/resHandler.js");
const { handleError } = require("../utils/errorHandler.js");

/**
 * Comprueba si el usuario es administrador
 * @param {Object} req - Objeto de petici  n
 * @param {Object} res - Objeto de respuesta
 * @param {Function} next - Funci  n para continuar con la siguiente funci  n
 */
async function isAdmin(req, res, next) {
  try {
    const user = await User.findOne({ email: req.email });
    const roles = await Role.find({ _id: { $in: user.roles } });
    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "admin") {
        next();
        return;
      }
    }
    return respondError(
      req,
      res,
      401,
      "Se requiere un rol de administrador para realizar esta acci  n",
    );
  } catch (error) {
    handleError(error, "authorization.middleware -> isAdmin");
  }
}

/**
 * Comprueba si el usuario es inspector
 * @param {Object} req - Objeto de petici  n
 */
async function isInspector(req, res, next) {
  try {
    const user = await User.findOne({ email: req.email });
    const roles = await Role.find({ _id: { $in: user.roles } });
    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "inspector") {
        next();
        return;
      }
    }
    return respondError(
      req,
      res,
      401,
      "Se requiere un rol de inspector para realizar esta acci  n",
    );
  } catch (error) {
    handleError(error, "authorization.middleware -> isInspector");
  }
}

/**
 * Comprueba si el usuario es inspector o administrador
 * @param {Object} req - Objeto de petici  n
 */
async function isInspectorOrAdmin(req, res, next) {
  try {
    const user = await User.findOne({ email: req.email });
    const roles = await Role.find({ _id: { $in: user.roles } });
    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "inspector" || roles[i].name === "admin") {
        next();
        return;
      }
    }
    return respondError(
      req,
      res,
      401,
      "Se requiere un rol de inspector o administrador para realizar esta acci  n",
    );
  } catch (error) {
    handleError(error, "authorization.middleware -> isInspectorOrAdmin");
  }
}

module.exports = {
  isAdmin,
  isInspector,
  isInspectorOrAdmin,
};
