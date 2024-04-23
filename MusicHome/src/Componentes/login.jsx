import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/Login.css'; // Importa el archivo CSS para los estilos del componente

function Login() {
  const navigate = useNavigate();
  
  const handleLoginClick = () => {
    navigate('/menu');
  };

  return (
    <div className="login">
      <div className="login-content"> 
        <h1>Bienvenido a nuestra aplicación</h1>
        <h4>Por favor, inicia sesión para continuar</h4>
        <button onClick={handleLoginClick}>Login</button>
      </div>
    </div>
  );
}

export default Login;
