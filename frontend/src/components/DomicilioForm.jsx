import React from 'react';
import { useForm } from 'react-hook-form';
import { createDomicilio, uploadPDF } from '../services/domicilio.service';

const DomicilioForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            await createDomicilio(data);
            console.log('Domicilio creado con éxito');
        } catch (error) {
            console.error('Error al crear el domicilio', error);
        }
    };

    const handleUploadPDF = async () => {
        try {
            await uploadPDF();
            console.log('PDF subido con éxito');
        } catch (error) {
            console.error('Error al subir el PDF', error);
        }
    };

    return (
        <form className="p-6 flex flex-col items-center gap-4" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="ciudad" className="form-label">
                Ciudad:
            </label>
            <input
                type="text"
                id="ciudad"
                {...register('ciudad', {
                    required: 'Este campo es obligatorio',
                    maxLength: {
                        value: 50,
                        message: 'La ciudad no puede tener más de 50 caracteres',
                    },
                })}
                className="h-10 border rounded px-4 w-full bg-gray-50 focus:outline-none focus:border-blue-500"
            />
            {errors.ciudad && <p className="text-red-500 text-sm mt-1">{errors.ciudad.message}</p>}

            <label htmlFor="calle" className="form-label">
                Calle:
            </label>
            <input
                type="text"
                id="calle"
                {...register('calle', {
                    required: 'Este campo es obligatorio',
                    maxLength: {
                        value: 50,
                        message: 'La calle no puede tener más de 50 caracteres',
                    },
                })}
                className="h-10 border rounded px-4 w-full bg-gray-50 focus:outline-none focus:border-blue-500"
            />
            {errors.calle && <p className="text-red-500 text-sm mt-1">{errors.calle.message}</p>}

            <div className="flex gap-4">
                <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleUploadPDF}
                >
                    Subir PDF
                </button>

                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Registrar
                </button>
            </div>
        </form>
    );
};

export default DomicilioForm;