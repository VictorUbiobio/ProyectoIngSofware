"use strict";

const Joi = require("joi");
const ROLES = require("../constants/roles.constants");

/**
 * Esquema de validaci  n para el cuerpo de la solicitud de usuario.
 * @constant {Object}
 */
const userBodySchema = Joi.object({
  username: Joi.string().required().messages({
    "string.empty": "El nombre de usuario no puede estar vac  o.",
    "any.required": "El nombre de usuario es obligatorio.",
    "string.base": "El nombre de usuario debe ser de tipo string.",
  }),
  rut: Joi.string().required().allow("").messages({
    "string.empty": "El rut no puede estar vac  o",
    "any.required": "El rut es obligatorio",
    "string.base": "El rut debe ser tipo string",
    "string.min": "El rut no contiene 9 digitos",
  }),
  password: Joi.string().required().min(5).messages({
    "string.empty": "La contrase  a no puede estar vac  a.",
    "any.required": "La contrase  a es obligatoria.",
    "string.base": "La contrase  a debe ser de tipo string.",
    "string.min": "La contrase  a debe tener al menos 5 caracteres.",
  }),
  email: Joi.string().email().required().messages({
    "string.empty": "El email no puede estar vac  o.",
    "any.required": "El email es obligatorio.",
    "string.base": "El email debe ser de tipo string.",
    "string.email": "El email debe tener un formato v  lido.",
  }),
  roles: Joi.array()
    .items(Joi.string().valid(...ROLES))
    .required()
    .messages({
      "array.base": "El rol debe ser de tipo array.",
      "any.required": "El rol es obligatorio.",
      "string.base": "El rol debe ser de tipo string.",
      "any.only": "El rol proporcionado no es v  lido.",
    }),
  newPassword: Joi.string().min(5).messages({
    "string.empty": "La contrase  a no puede estar vac  a.",
    "string.base": "La contrase  a debe ser de tipo string.",
    "string.min": "La contrase  a debe tener al menos 5 caracteres.",
  }),
}).messages({
  "object.unknown": "No se permiten atributos adicionales.",
});

const FormBodySchema = Joi.object({
  Nombres: Joi.string().required().messages({
    "string.empty": "Los nombres no pueden estar vac  os.",
    "any.required": "Los nombres son obligatorios.",
    "string.base": "Los nombres deben ser de tipo string.",
  }),
  Apellidos: Joi.string().required().messages({
    "string.empty": "Los apellidos no pueden estar vac  os.",
    "any.required": "Los apellidos son obligatorios.",
    "string.base": "Los apellidos deben ser de tipo string.",
  }),
  fechaDeNacimiento: Joi.date().required().allow(null).messages({
    "string.empty": "Fecha de Nacimiento vaci  ",
    "any.required": "La Fecha de nacimiento es requerida",
    "date.base": "La fecha de Nacimiento debe ser tipo Fecha",
  }),
}).messages({
  "object.unknown": "No se permiten atributos adicionales.",
});

/**
 * Esquema de validaci  n para el id de usuario.
 * @constant {Object}
 */
const userIdSchema = Joi.object({
  id: Joi.string()
    .required()
    .pattern(/^(?:[0-9a-fA-F]{24}|[0-9a-fA-F]{12})$/)
    .messages({
      "string.empty": "El id no puede estar vac  o.",
      "any.required": "El id es obligatorio.",
      "string.base": "El id debe ser de tipo string.",
      "string.pattern.base": "El id proporcionado no es un ObjectId v  lido.",
    }),
});

module.exports = { userBodySchema, userIdSchema, FormBodySchema };
