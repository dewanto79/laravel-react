import { Children } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import App from './App.jsx'
import DefaultLayout from "./components/DefaultLayout.jsx";
import GuestLayout from "./components/GuestLayout.jsx";
import Dashboard from "./views/Dashboard.jsx";
import Login from "./views/Login.jsx";
import Signup from "./views/Signup.jsx";
import Surveys from "./views/Surveys.jsx";
import SurveyView from "./views/SurveyView.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Surveys />
      },
      {
        path: '/dashboard',
        element: <Navigate to="/" />
      },
      {
        path: '/surveys',
        element: <Surveys />
      },
      {
        path: '/surveys/:id',
        element: <SurveyView />
      },
      {
        path: '/surveys/create',
        element: <SurveyView />
      }
    ]
  },
  
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      }
    ]
  }
])

export default router;