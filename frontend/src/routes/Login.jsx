// Login.jsx

import LoginForm from '../components/LoginForm';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginForm.css';
import '../styles/Login.css';

function Login() {
  const navigate = useNavigate();

  if (localStorage.getItem('user')) {
    return (
      <div className="loggedInContainer">
        <h2>¡Ya estás logeado!</h2>
        <button onClick={() => navigate('/')} className="homeButton">Ir a home</button>
      </div>
    );
  }

  return (
    <div className="loginContainer">
      <div className="brandText">Municipalidad</div>
      <div className="loginContentContainer">
        <h2 className="loginHeader">Inicia sesión</h2>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
