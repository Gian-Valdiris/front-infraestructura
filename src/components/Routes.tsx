import {   
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
   RedirectFunction,
  Navigate
} from 'react-router-dom';
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home';
const router = createBrowserRouter([

  {
    path:'login',
    element:<Login />,
    loader(){
      return 'Hola eli es la mejor de bogota'
    }
  },{
    path:'register',
    element:<Register />
  },
  {
    path:'home',
    element:<Home />
  },
  {
    path:'*',
    element:<Navigate to='/login' />

  }
]);
export  {router};

