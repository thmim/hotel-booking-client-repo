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
import Payment from '../pages/payment/Payment';
import AboutUs from '../pages/AboutUs';
import ContactUs from '../pages/ContactUs';
import PaymentHistory from '../pages/PaymentHistory';
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
        path:"about",
        Component:AboutUs
      },
      {
        path:"contact",
        Component:ContactUs
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
        loader:()=>fetch('https://assignment-11-hotel-booking-server.vercel.app/hotels'),
        Component:Rooms
      },
      
      {
        path:"bookings",
       
        element:<PrivateRoute>
          <MyBookings></MyBookings>
        </PrivateRoute>
      },
      {
        path:"/hotels/:id",
        loader:({params})=>fetch(`https://assignment-11-hotel-booking-server.vercel.app/hotels/${params.id}`),
        element:<PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>
        
      },
      {
        path:"payment/:id",
        Component:Payment
      },
      {
        path:"/paymentHistory",
        element:<PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>
      }
    ]
  },
]);

export default router;