import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Register from './register';
import Login from "./login"
import Profile from './profile';
import Pokedex from './pokedex'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { ChakraProvider } from '@chakra-ui/react'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
    path:"/profile",
    element:<div><Profile/></div>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/pokedex",
    element:<Pokedex/>
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <ChakraProvider>
  <React.StrictMode>
  <RouterProvider router={router} />

  </React.StrictMode>
  </ChakraProvider>

);



