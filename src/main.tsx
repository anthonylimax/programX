import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Dashboard from './Dashboard/dashboard'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './homepage/Login'

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
    element: <Dashboard />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </React.StrictMode>,
)
