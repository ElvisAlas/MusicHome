// En tu archivo de enrutador principal (por ejemplo, App.js)
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Componentes/login';
import Menu from './Componentes/Menu'
// import Menu from './Menu'; // Suponiendo que tengas un componente Menu

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu" element={<Menu />} /> {/* Agrega la ruta para el componente Menu */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
