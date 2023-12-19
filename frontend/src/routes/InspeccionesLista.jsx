import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getInspectionsByInspectorId } from '../services/inspector.service';
import './InspeccionesLista.css';


const InspeccionesLista = () => {
  const [inspecciones, setInspecciones] = useState([]);
  const { inspectorId } = useParams();

  useEffect(() => {
    // Creamos una variable de referencia para rastrear la solicitud actual
    let isCancelled = false;

    const fetchInspecciones = async () => {
      try {
        const response = await getInspectionsByInspectorId(inspectorId);

        // Verificamos si la solicitud fue cancelada antes de actualizar el estado
        if (!isCancelled) {
          if (Array.isArray(response.data)) {
            // Si la respuesta es un array, lo asignamos directamente a inspecciones
            setInspecciones(response.data);
            console.log('Inspecciones obtenidas:', response.data);
          } else {
            console.error('Error al obtener las inspecciones. Datos de la respuesta:', response);
          }
        }
      } catch (error) {
        // Verificamos si la solicitud fue cancelada antes de manejar el error
        if (!isCancelled) {
          console.error('Error al obtener las inspecciones', error);
        }
      }
    };

    // Realizamos la solicitud cuando el componente se monta
    fetchInspecciones();

    // Función de limpieza que se ejecuta cuando el componente se desmonta o cuando inspectorId cambia
    return () => {
      // Marcamos la solicitud actual como cancelada al limpiar
      isCancelled = true;
    };
  }, [inspectorId]);

  return (
    <div>
      <h1>Lista de Inspecciones para el Inspector ID: {inspectorId}</h1>
      <div className="container">
        <div className="column">
          <h2>Todas Las Inspecciones</h2>
          {/* Renderizar el array directamente en pantalla */}
          <pre>{JSON.stringify(inspecciones, null, 2)}</pre>
        </div>
        {inspecciones.length > 0 ? (
          <div className="column">
            <h2>Inspecciones Asignadas</h2>
            <ul>
              {inspecciones.map((inspeccion) => (
                <li key={inspeccion._id}>
                  <Link to={`/inspecciones/${inspeccion._id}`}>
                    {inspeccion.lugar} - {inspeccion.fecha}
                  </Link>
                  <Link to={`/modificarinspeccion/${inspeccion._id}`}>
                    <button>Modificar</button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No hay inspecciones disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default InspeccionesLista;