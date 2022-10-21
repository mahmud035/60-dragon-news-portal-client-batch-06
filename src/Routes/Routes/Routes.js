import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import TermsAndCondition from '../../Others/TermsAndCondition/TermsAndCondition';
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
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/news'),
      },
      {
        path: '/category/:id',
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
        element: <Category></Category>,
      },
      {
        path: '/news/:id',
        element: (
          <PrivateRoutes>
            <News></News>
          </PrivateRoutes>
        ),
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
      {
        path: '/terms-and-condition',
        element: <TermsAndCondition></TermsAndCondition>,
      },
    ],
  },
]);

export default router;
