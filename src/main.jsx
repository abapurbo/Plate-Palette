import './index.css'
import './App.css';
import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from './Route/router'
import { RouterProvider } from 'react-router'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)