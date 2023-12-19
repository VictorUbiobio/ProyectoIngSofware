import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">TRAMITES MUNICIPALES</h1>
        <p className="text-l text-white">permisos de edificación, obras y regularización</p>
      <Link to="/inspector/6527498476058358e9d7b2b4">Ir a la interfaz del Inspector</Link>
      </div>
    </div>
  );
}

export default App;
