"use strict";

const Joi = require("joi");

/**
 * Esquema de validaci  n para el cuerpo de la solicitud de cita.
 * @constant {Object}
 */
const meetBodySchema = Joi.object({
   date: Joi.string()
   .required()
   .min(5)
   .max(10)
   .pattern(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/)
   .messages({
    "string.empty": "La fecha no puede estar vac  a.",
    "any.required": "La fecha es obligatoria.",
    "string.base": "La fecha debe ser de tipo string.",
    "string.min": "La fecha debe tener al menos 5 caracteres.",
    "string.max": "La fecha debe tener como m  ximo 10 caracteres.",
    "string.pattern.base": "La fecha proporcionada no es v  lida.",
  }),
  hour: Joi.string()
  .required()
  .min(5)
  .max(5)
  .pattern(/^([01]?[0-9]|2[0-3]):00$/)
  .messages({
    "string.empty": "La hora no puede estar vac  a.",
    "any.required": "La hora es obligatoria.",
    "string.base": "La hora debe ser de tipo string.",
    "string.min": "La hora debe tener al menos 5 caracteres.",
    "string.max": "La hora debe tener como m  ximo 5 caracteres.",
    "string.pattern.base": "La hora proporcionada no es v  lida.",
  }),
  motive: Joi.string().required().messages({
    "string.empty": "El motivo no puede estar vac  o.",
    "any.required": "El motivo es obligatorio.",
    "string.base": "El motivo debe ser de tipo string.",
  }),
  state: Joi.string().required().messages({
    "string.empty": "El estado no puede estar vac  o.",
    "any.required": "El estado es obligatorio.",
    "string.base": "El estado debe ser de tipo string.",
  }),
  user: Joi.string().messages({
    "string.empty": "El usuario no puede estar vac  o.",
    "string.base": "El usuario debe ser de tipo string.",
  }),
}).messages({
  "object.unknown": "No se permiten propiedades adicionales.",
});


module.exports = { meetBodySchema };
