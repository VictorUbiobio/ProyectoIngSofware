import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  /**
   * Este mensaje de error, está pensado para los desarrolladores.
   * En un entorno de producción, no se debería mostrar este mensaje o almenos
   * no de esta forma.
   */
  console.error({
    status: error.status,
    statusText: error.statusText,
    message: error.message ? error.message : 'No message',
  });

  return (
    <div class="w-full px-16 md:px-0 h-screen flex items-center justify-center">
    <div class="bg-slate-200 border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
        <p class="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-slate-700">404</p>
        <p class="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-slate-500 mt-4">Pagina No Encontrada</p>
        <p class="text-slate-600 mt-4 pb-4 border-b-2 text-center">Lo sentimos, no se pudo encontrar la página que estás buscando.</p>
    </div>
  </div>
  );
};

export default ErrorPage;
