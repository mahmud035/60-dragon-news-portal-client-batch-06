import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Category from '../../Pages/Category/Category/Category';
import Home from '../../Pages/Home/Home.js/Home';
import Login from '../../Pages/Login/Login';
import News from '../../Pages/News/News/News';
import Register from '../../Pages/Register/Register';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: (
          <PrivateRoutes>
            <Home></Home>
          </PrivateRoutes>
        ),
        loader: () => fetch('http://localhost:5000/news'),
      },
      {
        path: '/category/:id',
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
        element: (
          <PrivateRoutes>
            <Category></Category>
          </PrivateRoutes>
        ),
      },
      {
        path: '/news/:id',
        element: <News></News>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
