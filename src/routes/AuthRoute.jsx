import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = () => {
  if (window.localStorage.getItem('token')) 
    return <Navigate to= '/beranda' />
    
    return <Outlet />
};

export default AuthRoute;
