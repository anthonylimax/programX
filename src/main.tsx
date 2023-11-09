import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Dash from './Dashboard/Dash'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './homepage/Login'
import Marketplace from './Dashboard/MarketPlace'

const route = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: <Dash />
  },
  {
    path: '/marketplace',
    element: <Marketplace />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </React.StrictMode>,
)
