import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InspeccionesLista from './InspeccionesLista';
import ModificarInspeccion from './ModificarInspeccion';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/inspecciones/:inspeccionId" element={<ModificarInspeccion />} />
        <Route path="/inspecciones" element={<InspeccionesLista />} />
        {/* Otras rutas de tu aplicación */}
      </Routes>
    </Router>
  );
};

export default App;