"use strict";
const { handleError } = require("../utils/errorHandler");
const Formulario = require("../models/form.model");
/**
 * @param {Object} formulario - Objeto de formulario a crear
 * @returns {Promise}
 */
async function createFormulario(Nombres, Apellidos, usuarioId) {
  try {
    const formulario = new Formulario({
      Nombres,
      Apellidos,
      Usuario: usuarioId,
    });

    await formulario.save();

    return formulario;
  } catch (error) {
    throw error;
  }
}
/**
 * Obtiene todos los formularios
 * @returns {Promise} Promesa con el objeto de los formularios
 */
async function getFormularios(formularioId) {
  try {
    // Busca todas las inspecciones que tienen el inspectorId proporcionado
    const formularios = await Formulario.find({ formulario: formularioId });

    return formularios;
  } catch (error) {
    throw error;
  }
}

async function updateForm(formularioId, Nombres, Apellidos) {
  try {
    const formulario = await Formulario.findOneAndUpdate(
      { _id: formularioId },
      { Nombres, Apellidos },
      { new: true }
    );

    if (!formulario) {
      throw new Error("Inspección no encontrada.");
    }

    return formulario;
  } catch (error) {
    throw error;
  }
}


/**
 * Obtiene un formulario por su ID y su formulario asociado de la base de datos
 * @param {string} id - ID del formulario
 * @returns {Promise} Promesa con el objeto de formulario
 */
async function getFormById(id) {
  try {
    const formulario = await Formulario.findById({ _id: id })
      .exec();
    if (!formulario) return [null, "El formulario no existe"];
    return [formulario, null];
  } catch (error) {
    handleError(error, "form.service -> getFormById");
  }
}
module.exports = {
  createFormulario,
  getFormularios,
  getFormById,
  updateForm
};

