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
      <div className="login-content"> {/* Contenedor para centrar el contenido */}
        <h1>Bienvenido a nuestra aplicación</h1>
        <p>Por favor, inicia sesión para continuar</p>
        <button onClick={handleLoginClick}>Login</button>
      </div>
    </div>
  );
}

export default Login;
