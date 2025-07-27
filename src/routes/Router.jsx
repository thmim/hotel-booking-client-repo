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
import MyBookings from '../pages/mybookings/MyBookings';
import Update from '../pages/Update';
import Table from '../pages/mybookings/Table';
import Error from '../pages/Error';
import PrivateRoute from '../context/PrivateRoute';
const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    errorElement:<Error></Error>,
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
      // {
      //   path:"/update/:id",
      //   loader:({params})=>fetch(`http://localhost:5000/visitors/${params.id}`),
      //   Component:Update
      // },
      {
        path:"bookings",
        // Component:MyBookings
        element:<PrivateRoute>
          <MyBookings></MyBookings>
        </PrivateRoute>
      },
      {
        path:"/hotels/:id",
        loader:({params})=>fetch(`http://localhost:5000/hotels/${params.id}`),
        element:<PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>
        
      }
    ]
  },
]);

export default router;