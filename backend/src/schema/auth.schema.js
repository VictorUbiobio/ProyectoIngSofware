"use strict";

const Joi = require("joi");

/**
 * Esquema de validaci  n para el cuerpo de la solicitud de inicio de sesi  n.
 * @constant {Object}
 */
const authLoginBodySchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.empty": "El email no puede estar vac  o.",
    "any.required": "El email es obligatorio.",
    "string.base": "El email debe ser de tipo string.",
    "string.email": "El email debe tener un formato v  lido.",
  }),
  password: Joi.string().required().messages({
    "string.empty": "La contrase  a no puede estar vac  a.",
    "any.required": "La contrase  a es obligatoria.",
    "string.base": "La contrase  a debe ser de tipo string.",
  }),
}).messages({
  "object.unknown": "No se permiten propiedades adicionales.",
});

module.exports = { authLoginBodySchema };
