import ReactDOM from 'react-dom/client';
import App from './routes/App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import Login from './routes/Login.jsx';
import Meet from './routes/Meets/Meet.jsx';
import CreateMeet from './routes/Meets/createMeet.jsx';
import DetailsMeet from './routes/Meets/DetailsMeet.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/meets',
        element: <Meet />,        
      },
      {
        path: '/meets/:meetId',
        element: <DetailsMeet />,
      },
      {
        path: '/meets/create',
        element: <CreateMeet />,
      },
    ],
  },
  {
    path: '/auth',
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
