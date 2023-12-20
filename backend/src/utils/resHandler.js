"use strict";
/**
 * Env  a una respuesta exitosa estandarizada.
 * @function respondSuccess
 * @param {Object} req - Objeto de petici  n
 * @param {Object} res - Objeto de respuesta
 * @param {Number} statusCode - C  digo de estado para la operaci  n
 * @param {Object} data - Objeto que contiene los datos a enviar
 * @returns {JSON} - Objeto de respuesta JSON con el estado "Success" y los datos proporcionados
 */
function respondSuccess(req, res, statusCode = 200, data = {}) {
  return res.status(statusCode).json({
    state: "Success",
    data,
  });
}

/**
 * Env  a una respuesta de error estandarizada.
 * @function respondError
 * @param {Object} req - El objeto de petici  n
 * @param {Object} res - El objeto de respuesta
 * @param {Number} statusCode - C  digo de estado para la operaci  n
 * @param {String} message - La descripci  n del motivo del error
 * @param {Object} details - Informaci  n adicional sobre el error
 * @returns {JSON} - El objeto de respuesta JSON con el estado "Error", el mensaje de error y los det> */
function respondError(
  req,
  res,
  statusCode = 500,
  message = "Couldnt process the request",
  details = {},
) {
  return res.status(statusCode).json({
    state: "Error",
    message,
    details,
  });
}

/**
 * Env  a una respuesta de error interno estandarizada.
 * @function respondInternalError
 * @param {Object} req - El objeto de petici  n
 * @param {Object} res - El objeto de respuesta
 * @param {Number} statusCode - El c  digo de estado para la operaci  n
 *  * @param {String} message - La descripci  n del motivo del error
 * @returns {JSON} - El objeto de respuesta JSON con el estado "Error" y el mensaje de error proporci> */
function respondInternalError(
  req,
  res,
  statusCode = 500,
  message = "Couldnt process the request",
) {
  return res.status(statusCode).json({
    state: "Error",
    message,
  });
}

module.exports = { respondSuccess, respondError, respondInternalError };
