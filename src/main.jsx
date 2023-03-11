import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import Home from './views/Home/Home';
import Pay from './views/Pay/Pay';
import { PRODUCTS_MOCK } from './mock/products.mock';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home data={PRODUCTS_MOCK} />,
  },
,
  {
    path: "/pay/:payId",
    element: <Pay data={PRODUCTS_MOCK} />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
