// crearFormulario.jsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { createFormulario } from "../services/user.service"; // Asegúrate de proporcionar la ruta correcta

function CrearFormulario() {
    const { userId } = useParams();
    const [formData, setFormData] = useState({
        nombres: "",
        apellidos: "",
        fechaNacimiento: ""
    });

    useEffect(() => {
        // Puedes realizar alguna lógica de efecto si es necesario
    }, []);

  const handleFormSubmit = async () => {
    try {
      const response = await createFormulario({
        userId,
        ...formData,
      });

      if (response.state === 'success') {
        console.log('Formulario creado exitosamente', response.data);
        // Puedes realizar alguna acción adicional después de crear el formulario
      } else {
        console.error('Error al crear el formulario');
      }
    } catch (error) {
      console.error('Error al crear el formulario', error);
    }
  };

  // Puedes renderizar el formulario y manejar los cambios en los campos según necesites
  // Por ejemplo, puedes utilizar un formulario controlado con onChange para actualizar el estado formData

  
return (
    <div>
      <label htmlFor="nombres">Nombres:</label>
      <input
        type="text"
        id="nombres"
        name="nombres"
        value={formData.nombres}
        onChange={(e) => setFormData({ ...formData, nombres: e.target.value })}
      />
  
      <label htmlFor="apellidos">Apellidos:</label>
      <input
        type="text"
        id="apellidos"
        name="apellidos"
        value={formData.apellidos}
        onChange={(e) => setFormData({ ...formData, apellidos: e.target.value })}
      />
  
      <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
      <input
        type="date"
        id="fechaNacimiento"
        name="fechaNacimiento"
        value={formData.fechaNacimiento}
        onChange={(e) => setFormData({ ...formData, fechaNacimiento: e.target.value })}
      />
  
      <button onClick={handleFormSubmit}>Enviar Formulario</button>
    </div>
  );
}
export default CrearFormulario;
