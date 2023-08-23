import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Somos from '../containers/Somos';
import Home from '../containers/Home';
import Contacto from '../containers/Contacto';

export default function App() {
  return (
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Home />} />
    <Route path='/somos' element={<Somos/>} />
    <Route path='/contacto' element={<Contacto/>} />
  </Routes>
  </BrowserRouter>
  );
}

// Una vez que por un lado tenemos en los containers las diferentes vistas (pusimos js pero si tienen contenido son .jsx) lo que hacemos dentro de las routes es pasarle el exact path del componente

