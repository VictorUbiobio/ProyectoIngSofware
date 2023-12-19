import { useForm } from "react-hook-form";
import { createFormulario } from "../services/user.service";

export default function ReguForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            await createFormulario(data);
            console.log("Formulario enviado con éxito");
        } catch (error) {
            console.error("Error al enviar el formulario", error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 flex items-center justify-center">
            <label htmlFor="nombres" className="form-label">Nombres:</label>
            <input
                type="text"
                id="nombres"
                name="nombres"
                {...register("nombres", {
                    required: "Este campo es obligatorio",
                    maxLength: {
                        value: 50,
                        message: "El nombre no puede tener más de 50 caracteres",
                    },
                })}
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            />
            {errors.nombres && <p className="error-message">{errors.nombres.message}</p>}

            <label htmlFor="apellidos" className="form-label">Apellidos:</label>
            <input
                type="text"
                id="apellidos"
                name="apellidos"
                {...register("apellidos", {
                    required: "Este campo es obligatorio",
                    maxLength: {
                        value: 50,
                        message: "Los apellidos no pueden tener más de 50 caracteres",
                    },
                })}
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            />
            {errors.apellidos && <p className="error-message">{errors.apellidos.message}</p>}

            <label htmlFor="fechaNacimiento" className="form-label">Fecha de Nacimiento:</label>
            <input
                type="date"
                id="fechaNacimiento"
                name="fechaNacimiento"
                {...register("fechaNacimiento", {
                    required: "Este campo es obligatorio",
                })}
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 w-5"
            />
            {errors.fechaNacimiento && <p className="error-message">{errors.fechaNacimiento.message}</p>}

            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enviar</button>
        </form>
    );
}
