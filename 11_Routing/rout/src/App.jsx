import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from './Components/home';
import About from './Components/About';
import Dashboard from './Components/dashboard';
import Navbar from './Components/Navbar';
import ParamComp from './Components/ParamComp';
import Courses from './Components/Courses';
import MockTest from './Components/MockTest';
import Reports from './Components/Reports';
import NotFound from './Components/NotFound';
const router=createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path:"/about",
      element:
      <div>
        <Navbar/>
        <About/>
      </div>
    },
    {
      path:"/dashboard",
      element:
      <div>
        <Navbar/>
        <Dashboard/>
      </div>,
      children:[
        {
          path:'courses',
          element:<Courses/>
        },
        {
          path:'mock-tests',
          element:<MockTest/>
        },
        {
          path:'reports',
          element:<Reports/>
        }
      ]
    },
    {
      path:"/students/:id",
      element:
          <div>
        <Navbar/>
        <ParamComp/>
      </div>
    },
    {
      path:"*",
      element:<NotFound/>
    }
  ]
)

function App() {
  return(
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
