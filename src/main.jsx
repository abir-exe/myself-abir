
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home.jsx';
import { Toaster } from 'react-hot-toast';
import Blogs from './Pages/Blogs/Blogs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/blogs",
    element: <Blogs></Blogs>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster
  position="bottom-left"
  reverseOrder={true}
/>
  </React.StrictMode>,
)
