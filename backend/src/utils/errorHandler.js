"use strict";

/**
 * Manejador de errores fatales
 * @param {Object} error Objecto con las especificaciones del error
 * @param {String} msg Mensaje para dar contexto al error
 */
function handleFatalError(error, msg) {
  console.log("[FATAL ERROR] Apagando servidor \n", msg);
  console.error(error);
  process.exit(1);
}

/**
 * Manejador de errores
 * @param {Object} error Objecto con las especificaciones del error
 * @param {String} msg Mensaje para dar contexto al error
 */
function handleError(error, msg) {
  console.log(" ^}^l [ERROR] A ocurrido un error en: \n ^=^s^a", msg);
  console.error(" ^=^w   " + error.message);
}

module.exports = {
  handleFatalError,
  handleError,
};
