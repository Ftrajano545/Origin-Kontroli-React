import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './pages/Login/Login'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home'
import Admin from './pages/Admin/Admin'
import Relatorio from './pages/Relatorio/Relatorio'
import Vendas from './pages/Vendas/Vendas'
import Navbar from './pages/components/Navbar/Navbar'
let routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/admin",
    element: <Admin/>
  },
  {
    path: "/relatorio",
    element: <Relatorio/>
  },
  {
    path: "/vendas",
    element: <Vendas/>
  }
  
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
