// App.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Mi Aplicación</h1>
      <Outlet />
    </div>
  );
}

export default App;
