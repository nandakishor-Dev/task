import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from './Landing/Landing.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    // errorElement: <NotFoundPage />,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>,
)
