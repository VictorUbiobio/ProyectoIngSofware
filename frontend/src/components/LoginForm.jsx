import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { login } from '../services/auth.service';

function LoginForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    login(data).then(() => {
      navigate('/');
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex items-center justify-center h-screen">
        <div className="bg-gray-200 p-8 rounded-lg shadow-md text-center w-full max-w-md">
          <h1 className="text-gray-600 text-2xl font-bold mb-4">Iniciar sesión</h1>
          <div className="mb-4">
            <input
              name="email"
              type="email"
              {...register('email', { required: true })}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Correo electrónico"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              {...register('password', { required: true })}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Contraseña"
            />
          </div>
          {errors.exampleRequired && (
            <span className="text-red-500">Este campo es obligatorio</span>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Iniciar sesión
          </button>
        </div>
  </form>
  );
}

export default LoginForm;
