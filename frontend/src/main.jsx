import ReactDOM from 'react-dom/client';
import App from './routes/App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import Login from './routes/Login.jsx';
import Meet from './routes/Meets/Meet.jsx';
import './index.css';
import CreateMeet from './routes/Meets/createMeet.jsx';
import DetailsMeet from './routes/Meets/DetailsMeet.jsx';
import DeleteMeet from './routes/Meets/DeleteMeet.jsx';


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
      {
        path: '/meets/delete/:meetId',
        element: <DeleteMeet />,
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
