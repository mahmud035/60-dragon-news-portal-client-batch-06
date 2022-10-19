import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Category from '../../Pages/Category/Category/Category';
import Home from '../../Pages/Home/Home.js/Home';
import News from '../../Pages/News/News/News';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/category/:id',
        element: <Category></Category>,
      },
      {
        path: '/news/:id',
        element: <News></News>,
      },
    ],
  },
]);

export default router;
