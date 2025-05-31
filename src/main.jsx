import './index.css'
import './App.css';
import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from './Route/router'
import { RouterProvider } from 'react-router'
import AuthContext from './Auth/AuthContext/AuthContext';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
      <RouterProvider router={router}></RouterProvider>
    </AuthContext>
  </StrictMode>,
)