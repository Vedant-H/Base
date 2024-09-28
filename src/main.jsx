import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Register from './pages/Register.jsx'
import Forum from './pages/Forum.jsx'
import Event from './pages/Event.jsx'
import Error from './pages/Error.jsx'

const router = createBrowserRouter(
  [
      {
          path:'/',
          element:<Home/>
      },
      {
          path:'/about',
          element:<About/>
      },
      {
          path:'/contact',
          element:<Contact/>
      },
      {
          path:'/register',
          element:<Register/>
      },
      {
          path:'/forums',
          element:<Forum/>
      },
      {
          path:'/events',
          element:<Event/>
      },
      {
        path:'*',
        element:<Error/>
    },

  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <RouterProvider router={router}/>
  </StrictMode>,
)
