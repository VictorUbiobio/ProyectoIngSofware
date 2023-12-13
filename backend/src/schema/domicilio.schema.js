"use strict";

const Joi = require("joi");

/**
 * @constant {Object}
 */
const domicilioBodySchema = Joi.object({
  Ciudad: Joi.string().messages({
    "string.empty": "La ciudad no puede estar vacía.",
    "string.base": "La ciudad debe ser de tipo string.",
  }),
  Calle: Joi.string().messages({
    "string.empty": "La calle no puede estar vacía.",
    "string.base": "La calle debe ser de tipo string.",
  }),
  PDF: Joi.string().messages({
    "string.empty": "PDF no puede estar vacía.",
    "string.base": "PDF debe ser de tipo string.",
  }),
}).messages({
  "object.unknown": "No se permiten atributos adicionales.",
});

/**
 * @constant {Object}
 */
const domicilioIdSchema = Joi.object({
  id: Joi.string()
    .required()
    .pattern(/^(?:[0-9a-fA-F]{24}|[0-9a-fA-F]{12})$/)
    .messages({
      "string.empty": "El id no puede estar vacío.",
      "any.required": "El id es obligatorio.",
      "string.base": "El id debe ser de tipo string.",
      "string.pattern.base": "El id proporcionado no es un ObjectId válido.",
    }),
});

module.exports = { domicilioBodySchema, domicilioIdSchema };
