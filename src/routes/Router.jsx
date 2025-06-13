import React from 'react';
import {
  createBrowserRouter
  
} from "react-router";
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/home/Home';
import Register from '../pages/Register/Register';
import Login from '../pages/Login';
import Rooms from '../pages/allRooms/Rooms';
import RoomDetails from '../pages/RoomDetails';
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
      },
      {
        path:"rooms",
        loader:()=>fetch('http://localhost:5000/hotels'),
        Component:Rooms
      },
      {
        path:"/hotels/:id",
        Component:RoomDetails,
        loader:({params})=>fetch(`http://localhost:5000/hotels/${params.id}`)
      }
    ]
  },
]);

export default router;