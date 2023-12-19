import axios from './root.service';

// Obtener inspecciones por ID de inspector
export const getInspectionsByInspectorId = async (inspectorId) => {
  try {
    const response = await axios.get(`inspections/rol/${inspectorId}`);
    return response.data;
  } catch (error) {
    console.error('Error en getInspectionsByInspectorId:', error);
    throw error;
  }
};

export const getInspectionsByInspectorIdFromLocalStorage = async () => {
  try {
    const userString = localStorage.getItem('user');
    const user = JSON.parse(userString);

    if (user && user.id) {
      const url = `inspections/rol/${user.id}`;
      console.log('URL:', url);

      const response = await axios.get(url);
      const inspections = response.data;

      // Ajusta esto según la estructura real de tu respuesta
      if (inspections) {
        console.log('Inspecciones obtenidas:', inspections);
      } else {
        console.error('No se obtuvieron inspecciones o la estructura de la respuesta no es la esperada.');
      }
    } else {
      console.error('No se pudo obtener el ID del usuario desde el local storage.');
    }
  } catch (error) {
    console.error('Error al obtener inspecciones:', error);
  }
};

export const getInspeccion = async () => {
  try {
    const response = await axios.get('/inspeccion');
    if (response.status === 200) {
      return response.data.data;
    }
    return [];
  } catch (error) {
    console.error(error);
  }
};

export const getInspeccionId = async (id) => {
  try {
    const response = await axios.get(`/inspeccion/${id}`);
    if (response.status === 200) {
      return response.data.data;
    }
    return {};
  } catch (error) {
    console.error(error);
  }
};
