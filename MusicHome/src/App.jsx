
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Componentes/login';
import Menu from './Componentes/Menu'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
