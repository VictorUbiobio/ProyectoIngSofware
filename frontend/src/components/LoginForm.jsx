import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { login } from '../services/auth.service';


function LoginForm() {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    login(data).then(() => {
      navigate('/');
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="formContainer">
      <div className="inputStyle">
        <label className="email" htmlFor="email">Correo Electrónico</label>
        <div>
          <input
            name="email"
            type="email"
            {...register('email', { required: true })}
            className='emailInput'
          />
        </div>
      </div>

      <div className="inputStyle">
        <label className='password' htmlFor="password">Contraseña</label>
        <div>
          <input
            type="password"
            name="password"
            {...register('password', { required: true })}
            className='passwordInput'
          />
        </div>
        <div className="submitButtonStyle">
          <input className='sumbitInput' type="submit" value="Confirmar" />
        </div>
      </div>

      {errors.exampleRequired && (
        <span className="inputStyle">This field is required</span>
      )}
    </form>
  );
}

export default LoginForm;