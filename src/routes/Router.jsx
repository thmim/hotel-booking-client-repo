import React from 'react';
import {
  createBrowserRouter
  
} from "react-router";
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/home/Home';
import Register from '../pages/Register/Register';
import Login from '../pages/Login';
const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
      {
        index:true,
        Component:Home
      },
      {
        path:"register",
        Component:Register
      },
      {
        path:"login",
        Component:Login
      }
    ]
  },
]);

export default router;