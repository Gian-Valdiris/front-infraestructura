
import {  RouterProvider } from 'react-router-dom';
import './App.css'
import { router } from './components/Routes';


function App() {

  return (
    <div className="main">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
